// The languages of the site: the same list and order as vcbox (packages/protocol/src/languages.ts).
// English lives at the root, every other language under its prefix.
export const LANG_INFO = {
  en: { name: 'English', prefix: '', og: 'en_US', dir: 'ltr' },
  ru: { name: 'Русский', prefix: 'ru', og: 'ru_RU', dir: 'ltr' },
  es: { name: 'Español', prefix: 'es', og: 'es_ES', dir: 'ltr' },
  pt: { name: 'Português', prefix: 'pt', og: 'pt_BR', dir: 'ltr' },
  de: { name: 'Deutsch', prefix: 'de', og: 'de_DE', dir: 'ltr' },
  fr: { name: 'Français', prefix: 'fr', og: 'fr_FR', dir: 'ltr' },
  it: { name: 'Italiano', prefix: 'it', og: 'it_IT', dir: 'ltr' },
  nl: { name: 'Nederlands', prefix: 'nl', og: 'nl_NL', dir: 'ltr' },
  da: { name: 'Dansk', prefix: 'da', og: 'da_DK', dir: 'ltr' },
  fi: { name: 'Suomi', prefix: 'fi', og: 'fi_FI', dir: 'ltr' },
  tr: { name: 'Türkçe', prefix: 'tr', og: 'tr_TR', dir: 'ltr' },
  ja: { name: '日本語', prefix: 'ja', og: 'ja_JP', dir: 'ltr' },
  ko: { name: '한국어', prefix: 'ko', og: 'ko_KR', dir: 'ltr' },
  'zh-Hant': { name: '繁體中文', prefix: 'zh-hant', og: 'zh_TW', dir: 'ltr' },
  'zh-Hans': { name: '简体中文', prefix: 'zh-hans', og: 'zh_CN', dir: 'ltr' },
  he: { name: 'עברית', prefix: 'he', og: 'he_IL', dir: 'rtl' },
  ar: { name: 'العربية', prefix: 'ar', og: 'ar_AR', dir: 'rtl' },
} as const

export type Lang = keyof typeof LANG_INFO
export const LANGS = Object.keys(LANG_INFO) as Lang[]
export const DEFAULT_LANG: Lang = 'en'

// The fact sheets (llms-full.txt, index.md) and the share images exist in English and Russian only.
export type FullLang = 'en' | 'ru'
export const fullLang = (l: Lang): FullLang => (l === 'ru' ? 'ru' : 'en')

// "/" for English, "/de" for German; with a page path: "/de/react-native-developer". No trailing slash.
export const langPath = (lang: Lang, path = '/') =>
  lang === DEFAULT_LANG ? path : `/${LANG_INFO[lang].prefix}${path === '/' ? '' : path}`
// The short code shown on the language button.
export const langLabel = (lang: Lang) => (lang === 'zh-Hant' ? '繁' : lang === 'zh-Hans' ? '简' : lang.toUpperCase())
// Languages for getStaticPaths of the pages under /[lang]/.
export const prefixedLangs = () => LANGS.filter((l) => l !== DEFAULT_LANG).map((l) => ({ params: { lang: LANG_INFO[l].prefix }, props: { lang: l } }))

// Short number units. "west": thousands and millions with a suffix. "myriad": units of ten thousand.
type Units = { k: string; m: string } | { myriad: string }
const UNITS: Record<Lang, Units> = {
  en: { k: 'K', m: 'M' },
  ru: { k: ' тыс.', m: ' млн' },
  es: { k: ' mil', m: ' M' },
  pt: { k: ' mil', m: ' mi' },
  de: { k: ' Tsd.', m: ' Mio.' },
  fr: { k: ' k', m: ' M' },
  it: { k: ' mila', m: ' mln' },
  nl: { k: 'K', m: ' mln' },
  da: { k: ' t.', m: ' mio.' },
  fi: { k: ' t.', m: ' milj.' },
  tr: { k: ' B', m: ' Mn' },
  ja: { myriad: '万' },
  ko: { myriad: '만' },
  'zh-Hant': { myriad: '萬' },
  'zh-Hans': { myriad: '万' },
  he: { k: 'K', m: 'M' },
  ar: { k: ' ألف', m: ' مليون' },
}

const trim = (s: string) => (s.includes('.') ? s.replace(/\.?0+$/, '') : s)

// 20234567 gives 20.2M, 8153232 gives 8.15M, 408486 gives 408K; in Japanese 2023万, 815万, 40.8万.
// The decimal separator is a dot in every language.
export function compact(n: number, lang: Lang): string {
  const u = UNITS[lang]
  if ('myriad' in u) {
    if (n >= 1e4) return `${trim((n / 1e4).toFixed(n >= 1e6 ? 0 : 1))}${u.myriad}`
    return String(n)
  }
  if (n >= 1e6) return `${trim((n / 1e6).toFixed(n >= 1e7 ? 1 : 2))}${u.m}`
  if (n >= 1e3) return `${Math.round(n / 1e3)}${u.k}`
  return String(n)
}
