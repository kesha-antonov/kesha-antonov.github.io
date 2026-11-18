// Copy for the hire page (/react-native-developer/ and /ru/react-native-developer/).
// Every fact here repeats one from content.ts; change them together.
// {npm} is replaced with the live npm total at build time.
import { LANGS, langPath, type Lang } from './langs'
import { locales } from './locales'

export const HIRE_PATH = '/react-native-developer/'
export const hirePath = (lang: Lang) => langPath(lang, HIRE_PATH)

const en = {
  meta: {
    title: 'Hire a React Native developer and lead engineer - Kesha Antonov',
    description:
      'React Native app development by Kesha Antonov: lead engineer, fractional or freelance. Maintainer of react-native-gifted-chat, {npm} npm installs.',
  },
  crumb: 'React Native developer for hire',
  hero: {
    kicker: 'React Native developer for hire',
    title: 'React Native lead engineer and freelancer',
    sub: 'I build React Native apps for iOS and Android end to end: code, releases and store listings. I maintain react-native-gifted-chat, and apps I built have 250K+ installs.',
    cta: 'Write on Telegram',
    work: 'See the work',
  },
  services: {
    title: 'React Native app development: what I take on',
    items: [
      { h: 'App from scratch', p: 'iOS and Android from one codebase, from the first screen to release in the App Store, Google Play and RuStore. I have been the only engineer of Magisteria for 8 years.' },
      { h: 'Chat and AI messages', p: 'Chats with streaming AI messages, reactions, attachments and threads. I maintain react-native-gifted-chat and wrote its successor, react-native-chat.' },
      { h: 'Native modules', p: 'Native iOS and Android code behind a React Native API: background downloads and uploads, video calls, cloud sync. My background-downloader supports the New Architecture, TypeScript and Expo.' },
      { h: 'Stalled app rescue', p: 'An app or a library that stopped shipping. I took over Gifted Chat after 14 months without a release: 26 releases, open issues from 154 down to 0.' },
      { h: 'White-label apps', p: 'One codebase, a branded app per client. I ship a patient app for 26 clinic brands and I am also its product manager.' },
      { h: 'ASO and store releases', p: 'Keywords, listings and screenshots for the App Store, Google Play and RuStore. Magisteria has 112K App Store downloads and 4.9 from 1269 ratings.' },
    ],
    more: 'The cases behind these numbers:',
    cases: [
      { text: 'Gifted Chat', hash: 'gifted' },
      { text: 'Client work', hash: 'work' },
      { text: 'My own products', hash: 'products' },
      { text: 'Open source libraries', hash: 'oss' },
    ],
  },
  ways: {
    title: 'Three ways to work with me',
    items: [
      { h: 'Lead engineer', p: 'I join as the lead or product engineer of your React Native app: architecture, code, releases and product decisions.' },
      { h: 'Fractional', p: 'Part of the week on your product, next to my other work. For a team that needs a React Native lead, but not full time.' },
      { h: 'Freelance project', p: 'A focused piece of work with a clear result: a chat, a native module, a migration to the New Architecture, a rescue.' },
    ],
    note: 'Terms depend on the case. Tell me what you need and I will say how I can help.',
  },
  faq: {
    title: 'Questions and answers',
    items: [
      { q: 'Are you available for hire?', a: 'Yes. I take React Native lead or product engineer roles, fractional work and freelance projects. Terms are discussed case by case.' },
      { q: 'What kind of React Native app development do you do?', a: 'Apps for iOS and Android from scratch, chats with streaming AI messages, native modules, white-label apps, rescue of stalled apps, and ASO.' },
      { q: 'What have you shipped?', a: 'Magisteria, a learning app where I have been the only engineer since 2018: 112K App Store downloads, 4.9 from 1269 ratings. A white-label patient app for 26 clinic brands. My own apps CryptoC and SportSoul. Together the apps I built have 250K+ installs.' },
      { q: 'Which open source libraries do you maintain?', a: 'react-native-gifted-chat, react-native-chat, react-native-zoom-reanimated, react-native-background-downloader, react-native-action-cable and react-native-cloud-sync. Together they have {npm} npm installs.' },
      { q: 'Do you take over existing code?', a: 'Yes. I picked up react-native-gifted-chat and react-native-background-downloader after their releases stopped, and both ship again.' },
      { q: 'How do I start?', a: 'Write me on Telegram, @kesha_antonov, or by email. Tell me what the app does and where it is stuck. I reply within a day.' },
    ],
  },
  contact: {
    title: 'Tell me about your app',
    lead: 'I reply within a day.',
    body: 'Write on Telegram or by email: what the app does, where it is now and what you need from a React Native engineer.',
    back: 'Back to the portfolio',
  },
  homeLink: 'React Native developer for hire',
  // Label under "8 years" in the first tier.
  sole: 'as the only engineer of Magisteria',
}

export type Hire = typeof en

const ru: Hire = {
  meta: {
    title: 'Разработчик React Native в проект или команду - Кеша Антонов',
    description:
      'Разработка приложений на React Native: Кеша Антонов, частичная занятость или фриланс. Мейнтейнер react-native-gifted-chat, {npm} установок в npm.',
  },
  crumb: 'Разработчик React Native',
  hero: {
    kicker: 'Разработчик React Native, открыт к работе',
    title: 'Ведущий разработчик React Native и фрилансер',
    sub: 'Делаю приложения на React Native для iOS и Android целиком: код, релизы и страницы в сторах. Поддерживаю react-native-gifted-chat, у моих приложений 250 тыс.+ установок.',
    cta: 'Написать в Telegram',
    work: 'Смотреть проекты',
  },
  services: {
    title: 'Разработка приложений на React Native: за что берусь',
    items: [
      { h: 'Приложение с нуля', p: 'iOS и Android из одной кодовой базы, от первого экрана до релиза в App Store, Google Play и RuStore. Магистерию я 8 лет разрабатываю в одиночку.' },
      { h: 'Чаты и AI-сообщения', p: 'Чаты со стримингом AI-сообщений, реакциями, вложениями и тредами. Поддерживаю react-native-gifted-chat и написал его преемника, react-native-chat.' },
      { h: 'Нативные модули', p: 'Нативный код для iOS и Android с API на React Native: фоновые загрузки и выгрузки, видеозвонки, синхронизация с облаком. Моя библиотека background-downloader поддерживает New Architecture, TypeScript и Expo.' },
      { h: 'Спасение буксующих приложений', p: 'Приложение или библиотека, где остановились релизы. Gifted Chat я взял после 14 месяцев без релизов: выпустил 26 релизов, открытых issues было 154, стало 0.' },
      { h: 'White-label приложения', p: 'Одна кодовая база и своё приложение для каждого клиента. Выпускаю приложение пациента для 26 брендов клиник, и я же его продакт-менеджер.' },
      { h: 'ASO и релизы в сторах', p: 'Ключевые слова, страницы и скриншоты для App Store, Google Play и RuStore. У Магистерии 112 тыс. загрузок в App Store и 4.9 по 1269 оценкам.' },
    ],
    more: 'Кейсы, из которых эти цифры:',
    cases: [
      { text: 'Gifted Chat', hash: 'gifted' },
      { text: 'Клиентские проекты', hash: 'work' },
      { text: 'Свои продукты', hash: 'products' },
      { text: 'Библиотеки open source', hash: 'oss' },
    ],
  },
  ways: {
    title: 'Три формата работы',
    items: [
      { h: 'Ведущий разработчик', p: 'Прихожу ведущим или продуктовым инженером в ваше приложение на React Native: архитектура, код, релизы и продуктовые решения.' },
      { h: 'Частичная занятость', p: 'Часть недели на вашем продукте, параллельно с другими моими задачами. Для команды, которой нужен ведущий разработчик React Native, но не на полный день.' },
      { h: 'Проект на фрилансе', p: 'Отдельная задача с понятным результатом: чат, нативный модуль, переход на New Architecture, спасение приложения.' },
    ],
    note: 'Условия обсуждаются под задачу. Расскажите, что нужно, и я отвечу, чем могу помочь.',
  },
  faq: {
    title: 'Вопросы и ответы',
    items: [
      { q: 'Вас можно нанять?', a: 'Да. Беру роль ведущего или продуктового инженера React Native, частичную занятость и проекты на фрилансе. Условия обсуждаются под задачу.' },
      { q: 'Какой разработкой на React Native вы занимаетесь?', a: 'Приложения для iOS и Android с нуля, чаты со стримингом AI-сообщений, нативные модули, white-label приложения, спасение буксующих приложений и ASO.' },
      { q: 'Что вы уже выпустили?', a: 'Магистерию, образовательное приложение, где я единственный инженер с 2018 года: 112 тыс. загрузок в App Store, 4.9 по 1269 оценкам. White-label приложение пациента для 26 брендов клиник. Свои приложения CryptoC и SportSoul. Всего у приложений, которые я сделал, 250 тыс.+ установок.' },
      { q: 'Какие библиотеки open source вы поддерживаете?', a: 'react-native-gifted-chat, react-native-chat, react-native-zoom-reanimated, react-native-background-downloader, react-native-action-cable и react-native-cloud-sync. Всего у них {npm} установок в npm.' },
      { q: 'Берёте ли вы чужой код?', a: 'Да. react-native-gifted-chat и react-native-background-downloader я подхватил, когда у них остановились релизы, и обе библиотеки снова выходят.' },
      { q: 'С чего начать?', a: 'Напишите мне в Telegram, @kesha_antonov, или на почту. Расскажите, что делает приложение и где оно застряло. Отвечаю в течение дня.' },
    ],
  },
  contact: {
    title: 'Расскажите о своём приложении',
    lead: 'Отвечаю в течение дня.',
    body: 'Напишите в Telegram или на почту: что делает приложение, в каком оно состоянии и что нужно от разработчика React Native.',
    back: 'Назад к портфолио',
  },
  homeLink: 'Разработчик React Native: как меня нанять',
  sole: 'разработки Магистерии в одиночку',
}

const written: Partial<Record<Lang, Hire>> = { en, ru, ...locales.hire }
export const hire = Object.fromEntries(LANGS.map((l) => [l, written[l] ?? en])) as Record<Lang, Hire>
