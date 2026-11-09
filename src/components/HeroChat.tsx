import { useEffect, useRef, useState } from 'react'
import './HeroChat.css'
import { NUMBER_RE } from '../utils/keepNumbersTogether.mjs'

type Reply = { label: string; target: string; answer: string }
type Msg = { id: number; from: 'me' | 'you'; text: string; done: boolean; target?: string }

interface Props {
  title: string
  online: string
  intro: string[]
  replies: Reply[]
  placeholder: string
  showLabel: string
}

const TOKEN_MS = 28

export default function HeroChat({ title, online, intro, replies, placeholder, showLabel }: Props) {
  const [messages, setMessages] = useState<Msg[]>([])
  const [typing, setTyping] = useState(false)
  const [used, setUsed] = useState<string[]>([])
  const queue = useRef(Promise.resolve())
  const idRef = useRef(0)
  const listRef = useRef<HTMLDivElement>(null)
  const reduced = useRef(false)

  // Stream a message word by word, like a token stream from an LLM.
  const stream = (text: string, target?: string) => {
    queue.current = queue.current.then(async () => {
      const id = ++idRef.current
      if (reduced.current) {
        setMessages((m) => [...m, { id, from: 'me', text, done: true, target }])
        return
      }
      setTyping(true)
      await wait(500)
      setTyping(false)
      setMessages((m) => [...m, { id, from: 'me', text: '', done: false, target }])
      const tokens = text.split(/(\s+)/)
      let acc = ''
      for (const tok of tokens) {
        acc += tok
        const snapshot = acc
        setMessages((m) => m.map((x) => (x.id === id ? { ...x, text: snapshot } : x)))
        await wait(TOKEN_MS)
      }
      setMessages((m) => m.map((x) => (x.id === id ? { ...x, done: true } : x)))
      await wait(250)
    })
  }

  useEffect(() => {
    reduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    intro.forEach((line) => stream(line))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const el = listRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages, typing])

  const ask = (r: Reply) => {
    setUsed((u) => [...u, r.label])
    setMessages((m) => [...m, { id: ++idRef.current, from: 'you', text: r.label, done: true }])
    stream(r.answer, r.target)
  }

  const left = replies.filter((r) => !used.includes(r.label))

  return (
    <div className="phone" aria-label={title}>
      <div className="phone-screen">
        <div className="phone-bar">
          <img className="phone-avatar" src="/avatar.webp" alt="" width="36" height="36" />
          <div>
            <div className="phone-name">Kesha</div>
            <div className="phone-status">{online}</div>
          </div>
        </div>
        <div className="balloons" ref={listRef} aria-live="polite">
          {messages.map((m) => (
            <div key={m.id} className={`balloon ${m.from}`}>
              {keepNumbers(m.text)}
              {m.done && m.target && (
                <><br /><a className="balloon-link" href={`#${m.target}`}>{showLabel}</a></>
              )}
            </div>
          ))}
          {typing && (
            <div className="balloon typing" aria-label="typing">
              <span /><span /><span />
            </div>
          )}
        </div>
        <div className="replies">
          {left.length > 0 ? (
            left.map((r) => (
              <button key={r.label} type="button" className="reply" onClick={() => ask(r)}>
                {r.label}
              </button>
            ))
          ) : (
            <span className="replies-done">{placeholder}</span>
          )}
        </div>
      </div>
    </div>
  )
}

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms))

// Keep numbers like "250 тыс.+" or "1 269" on one line (same rule as the static HTML).
function keepNumbers(text: string) {
  const parts: (string | JSX.Element)[] = []
  let last = 0
  for (const m of text.matchAll(NUMBER_RE)) {
    const i = m.index ?? 0
    if (i > last) parts.push(text.slice(last, i))
    parts.push(<span key={i} className="nw">{m[0]}</span>)
    last = i + m[0].length
  }
  if (last < text.length) parts.push(text.slice(last))
  return parts
}
