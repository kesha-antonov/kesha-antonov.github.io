// All site copy and verified facts, in English and Russian.
// Numbers that change daily come from stats.json; the ones here were checked by hand on 09.11.2026.

export type Lang = 'en' | 'ru'

export const links = {
  github: 'https://github.com/kesha-antonov',
  npm: 'https://www.npmjs.com/~kesha-antonov',
  sponsor: 'https://github.com/sponsors/kesha-antonov',
  email: 'mailto:innokenty.longway@gmail.com',
  youtube: 'https://www.youtube.com/@reactnative4749',
  telegram: 'https://t.me/kesha_antonov',
  linkedin: 'https://www.linkedin.com/in/kesha-antonov',
  instagram: 'https://instagram.com/bekindgoddamnit',
}

export const apps = {
  magisteria: {
    appStore: 'https://apps.apple.com/ru/app/id1543015350',
    googlePlay: 'https://play.google.com/store/apps/details?id=ru.magisteria.app',
    ruStore: 'https://www.rustore.ru/catalog/app/ru.magisteria.magisteria_app',
  },
  cryptoc: {
    appStore: '', // id1333169178 returns 404 in ru/us/de stores on 09.11.2026
    googlePlay: 'https://play.google.com/store/apps/details?id=co.ssoul.CryptoC',
    ruStore: 'https://www.rustore.ru/catalog/app/co.ssoul.CryptoC',
  },
}

export const contests = [
  { url: 'https://contest.com/telegram-fixes', place: 2, prize: 6000, key: 'fixes' },
  { url: 'https://contest.com/ton-consensus-challenge', place: 3, prize: 2000, key: 'ton' },
  { url: 'https://contest.com/chart-js', place: 4, prize: 1000, key: 'chart' },
] as const

// Each link lists Kesha's merged commits in that repo.
export const upstream = [
  { label: 'rails/rails', repo: 'rails/rails' },
  { label: 'tdlib/td', repo: 'tdlib/td' },
  { label: 'react-native', repo: 'react/react-native' },
  { label: 'expo', repo: 'expo/expo' },
  { label: 'expo/react-native-action-sheet', repo: 'expo/react-native-action-sheet' },
  { label: 'react-native-webview', repo: 'react-native-webview/react-native-webview' },
  { label: 'react-native-permissions', repo: 'zoontek/react-native-permissions' },
  { label: 'react-native-device-info', repo: 'react-native-device-info/react-native-device-info' },
  { label: 'react-native-edge-to-edge', repo: 'zoontek/react-native-edge-to-edge' },
  { label: 'react-native-community/directory', repo: 'react-native-community/directory' },
  { label: 'react-native-website', repo: 'react/react-native-website' },
]

const en = {
  meta: {
    title: 'Kesha Antonov - lead engineer, product manager, founder',
    description:
      'I take stalled products and make them grow. Maintainer of react-native-gifted-chat, author of React Native libraries with 19M+ installs, builder of apps with 250K+ installs.',
  },
  nav: { work: 'Work', products: 'Products', oss: 'Open source', contact: 'Contact' },
  hero: {
    kicker: 'Lead software engineer, product manager, founder',
    name: 'Kesha Antonov',
    title: 'I take stalled products and make them grow.',
    sub: 'I revived react-native-gifted-chat after 14 months without a release, built a learning app to 200K+ installs as its only engineer, and ship my own products since 2015.',
    ctaHire: 'Hire me',
    ctaWork: 'See the work',
    score: 'The score so far',
    since: 'Shipping since 2013',
  },
  numbers: {
    npm: 'npm installs of libraries I maintain',
    month: 'installs last month',
    apps: 'installs of apps I built',
    contests: 'Telegram contest wins',
  },
  chat: {
    title: 'Ask me',
    online: 'online',
    intro: [
      "Hi, I'm Kesha.",
      'I build mobile products end to end: code, product decisions, launch.',
      'What would you like to see?',
    ],
    replies: [
      { label: 'Libraries', target: 'oss', answer: 'My React Native libraries were installed {npm} times. {month} installs last month alone.' },
      { label: 'Apps I built', target: 'work', answer: 'Apps I built have {apps} installs. Magisteria alone: 4.9 stars from 1269 App Store ratings.' },
      { label: 'My products', target: 'products', answer: 'Since 2015 I launch my own products: SportSoul, CryptoC, 1dbgym and more. 44K App Store downloads, and a farming game I built in Telegram reached 400K users at peak.' },
      { label: 'ASO', target: 'products', answer: 'I grow store downloads with ASO: keywords, listings and screenshots in 20+ languages for the App Store, Google Play and RuStore. I did all the ASO for Magisteria (112K App Store downloads) and CryptoC (31K, 4.4 from 639 ratings).' },
      { label: 'Hire me', target: 'contact', answer: 'Great. Write me on Telegram, @kesha_antonov, or by email. I reply within a day.' },
    ],
    placeholder: 'Pick a question above',
  },
  proof: { merged: 'Code merged into', clients: 'Shipped for', contests: 'Contest wins' },
  gifted: {
    eyebrow: 'Case study. Open source as a product',
    title: 'Gifted Chat: from abandoned to the fastest-growing chat UI',
    problem: 'The default chat UI of React Native went 14 months without a release. 150K developers a month installed it anyway, filing issues nobody answered.',
    steps: [
      { h: 'Took ownership', p: 'Became the maintainer in August 2024 without being asked. Triaged the backlog and set a release cadence.' },
      { h: 'Shipped', p: '400+ commits and 26 releases: TypeScript, Reanimated, new architecture, keyboard handling, Web.' },
      { h: 'Cut the backlog', p: 'Open issues went from 154 to 3.' },
      { h: 'Grew it', p: 'Monthly downloads went from 169K to a 525K peak. Then I moved on to my own drop-in successor, react-native-chat.' },
    ],
    successor: {
      title: 'react-native-chat: the next step',
      body: 'A drop-in replacement for Gifted Chat with the same message format and props, plus a codemod to migrate in one command. iOS, Android and Web, Expo-ready, TypeScript-first, New Architecture.',
      features: ['Chat list with search, archive and pinned chats', 'Streaming AI messages with a stop control', 'Emoji reactions and a full emoji keyboard', 'Photo, video and file attachments', 'Voice messages and round video notes', 'Photo viewer with swipe and zoom', 'Swipe to reply and threads', 'Long-press menu and multi-select', 'Link previews and smart links', 'Unread bar, typing indicator, read ticks', 'Location messages', 'Dark mode and full theming'],
      links: { repo: 'GitHub', docs: 'Documentation', snack: 'Try in the browser' },
    },
    chartTitle: 'Gifted Chat npm downloads per month',
    chartNote: 'Maintenance starts',
    chartFork: 'Moved to my fork',
    statSince: 'downloads under my maintenance, 08.2024 to 06.2026',
    statStars: 'GitHub stars',
  },
  work: {
    eyebrow: 'Client work',
    title: 'Products I engineered for others',
    magisteria: {
      name: 'Magisteria',
      tag: 'Lectures, courses and audiobooks. iOS, macOS, Android',
      body: 'The only engineer since 2018: 4823 commits. Audio player with offline downloads, in-app purchases, push notifications, deep links. The app runs on my own libraries, background-downloader and zoom-reanimated. I also did the product work: proposed features, set priorities and shipped them.',
      stats: [
        ['112K', 'App Store downloads'],
        ['90K+', 'Google Play installs'],
        ['4.9', 'from 1269 App Store ratings'],
        ['8 years', 'as sole engineer'],
      ],
      highlights: [
        { h: 'Library, my idea', p: 'I proposed and built the Library in place of bookmarks: one place for saved courses, lectures and books, with filters and a notification when a saved course gets a new lecture. Shipped in 2023.' },
        { h: 'Animations I invented', p: 'I designed many of the app animations myself, studying the best apps on the market like Spotify and Telegram, and built them pixel perfect.' },
        { h: 'All of the ASO', p: 'I did the ASO for Magisteria myself: keywords, store listings and screenshots for the App Store, Google Play and RuStore.' },
        { h: 'Design and product decisions', p: 'In reviews with the business owner and the designer I proposed solutions for screens and flows; many of them are in the app today.' },
      ],
      note: 'The original Android listing (90K+ installs, 4.5 from 670 reviews) was suspended by Google in 2026 and republished as a new listing.',
    },
    medical: {
      name: 'Patient app for medical networks',
      tag: 'White-label React Native app. iOS and Android. Under NDA',
      body: 'One codebase ships a branded app for each clinic network: booking visits, medical records and lab results, chat and video consultations with doctors, payments, family profiles, biometric login, three languages. My main client since 2019 and the project I have the most commits in. I am also its product manager: I propose features, we agree on priorities, and then we build them.',
      stats: [
        ['26', 'clinic brands from one codebase'],
        ['6+ years', 'my main client, since 2019'],
        ['5309', 'my commits, top contributor'],
        ['RU / EN / FR', 'languages'],
      ],
      highlights: [
        { h: 'Our own video-call service', p: 'I proposed replacing a paid proprietary video SDK, licensed per clinic, with our own self-hosted service on open LiveKit, wrote the plan, and built it alone: token server, shared call core, call screens for React Native and React. No license fees for clinics, the video module is 54% lighter on iOS and 80% lighter on Android, and one call screen serves both platforms.' },
        { h: 'Chat with doctors', p: 'Main author of the in-house chat package for patients and doctors: 410 of 994 commits since 2022.' },
        { h: 'Native video bridge', p: 'Built the open source React Native bridge for the video SDK the clinics used before: 294 commits since 2019.', link: { text: 'react-native-trueconf-sdk', href: 'https://github.com/kesha-antonov/react-native-trueconf-sdk' } },
        { h: 'Product work', p: 'I keep the feature list and screen priorities, read store reviews, propose features and turn them into releases for all 26 brands. I also did part of the ASO for the clinic apps.' },
      ],
      note: 'Client and clinic names are under NDA.',
    },
    progulki: {
      name: 'Progulka v temnote',
      tag: 'Museum in Moscow where blind guides lead tours in complete darkness',
      body: 'Website with ticket booking and online payment, plus a custom CRM for tours, orders and guides. 20000+ visitors in the first year.',
    },
    aviasales: {
      name: 'Aviasales',
      tag: 'Widgets for aviasales.ru',
      body: 'Built widgets for Aviasales, one of the largest flight search services in Russia.',
    },
    studio: {
      name: 'skill.surf',
      tag: 'Web studio, co-founder, 2018',
      body: 'Found clients, negotiated, led a designer and contract developers, and wrote code.',
    },
  },
  products: {
    eyebrow: 'Founder',
    title: 'Products I launched myself',
    items: {
      cryptoc: { name: 'CryptoC', tag: 'Crypto portfolio tracker', body: 'iOS, Android, Apple Watch, Wear OS and widgets. Relaunched in 2026 with subscriptions. I do its ASO myself: keyword research, competitor review analysis, and store listings in 21 App Store and 18 Google Play locales plus RuStore.', stats: [['31K', 'App Store downloads'], ['4.4', 'from 639 ratings']] },
      ssoul: { name: 'SportSoul', tag: 'Social network for people who do sport', body: 'Find trainings, trainers and partners nearby. I built the whole web version first: a social network on Rails with realtime chats, groups, games and trainings. Then the iOS and Android apps on the same backend. 1668 commits since 2015; led a designer and an ASO specialist. In 2018 got into the FRII startup accelerator (Internet Initiatives Development Fund, Moscow), the mentoring track without investment, and applied to Ingria.', stats: [['10K+', 'users'], ['9.8K', 'App Store downloads'], ['4.8 / 4.7', 'App Store / Google Play, 2018']] },
      tmafarm: { name: 'Farming game in Telegram', tag: 'Telegram Mini App on TON, 2024. Under NDA', body: 'A farming game inside Telegram with boosts, tasks, friends and referrals, a rating and a TON Connect wallet. At its peak it had 400K users. I built almost all of the backend and the Telegram bot, and co-built the frontend.', stats: [['400K', 'users at peak'], ['280 of 299', 'backend commits are mine'], ['120 of 259', 'frontend commits are mine']] },
      diary: { name: 'Achievement Diary', tag: 'Printed goal planner, 2017', body: 'A paper planner for setting goals and tracking progress. I designed the product and its pages, found printing houses and collected their quotes with a small script, printed it in six cover colors, and prepared a Boomstarter crowdfunding campaign with a promo video and a press release.', stats: [] },
      nanogym: { name: '1dbgym', tag: 'Fitness tracker as a Telegram Mini App', body: 'Workouts with game mechanics and referrals, built for Telegram users.', stats: [] },
      stickers: { name: 'iMessage stickers', tag: 'Falling in Fall, Sports Sticker Pack', body: 'Two sticker packs, still downloaded every month.', stats: [['3.2K', 'downloads']] },
    },
  },
  oss: {
    eyebrow: 'Open source',
    title: 'Libraries 32K+ projects on GitHub depend on',
    lead: 'Live numbers from npm and GitHub, updated daily.',
    cols: { lib: 'Library', month: 'Last month', total: 'All time', stars: 'Stars' },
    desc: {
      'gifted-chat': 'The default chat UI of React Native. Maintainer.',
      'react-native-chat': 'Drop-in Gifted Chat successor: chat list, streaming AI messages, reactions, emoji keyboard, voice and video notes, Web.',
      'zoom-reanimated': 'Apple Photos-style pinch, pan and double-tap zoom.',
      'background-downloader': 'Downloads and uploads that survive backgrounding.',
      'action-cable': 'Rails ActionCable channels over WebSocket.',
      'cloud-sync': 'iCloud, CloudKit and Google Drive under one API.',
    } as Record<string, string>,
    sponsor: 'Sponsor my open source work',
    updated: 'Updated',
  },
  contests: {
    eyebrow: 'Recognition',
    title: 'Telegram developer contests',
    place: (n: number) => `${n}${n === 2 ? 'nd' : n === 3 ? 'rd' : 'th'} place`,
    items: {
      fixes: { name: 'Telegram Fixes', body: "Fixed bugs, glitches and animations in Telegram's own apps." },
      ton: { name: 'TON Blockchain Contest, Round 2', body: "Searched TON's new consensus algorithm for vulnerabilities. Prize fund $100400." },
      chart: { name: 'JavaScript Chart', body: 'Fast interactive charts with no libraries, 2019.' },
    } as Record<string, { name: string; body: string }>,
    note: 'Entries are anonymous on contest.com. Mine was "Busy Unicorn"; the screenshots are from my logged-in account, where contest.com marks it as "your entry".',
  },
  path: {
    eyebrow: 'Path',
    title: 'How I got here',
    items: [
      ['2013', 'Programmer at ЦНИИ РТК: web interface of a firewall management system.'],
      ['2014', 'Master of technical cybernetics, Peter the Great St. Petersburg Polytechnic University.'],
      ['2015', 'Founded SportSoul and built its whole web version: a social network with realtime chats, groups, games and trainings. Apps for iOS and Android followed.'],
      ['2017', 'CryptoC launched. 31K downloads since.'],
      ['2018', 'Got SportSoul into the FRII startup accelerator, mentoring track. Co-founded skill.surf studio. Became the engineer of Magisteria.'],
      ['2019', 'Started the white-label patient app for medical networks, my main client since. First Telegram contest win.'],
      ['2024', 'Took over react-native-gifted-chat. Built a farming game as a Telegram Mini App on TON: 400K users at peak.'],
      ['2026', 'Launched react-native-chat and relaunched CryptoC.'],
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'To be continued',
    lead: "Let's build the next thing that grows.",
    body: 'Lead engineer or product engineer role, a fractional engagement, or a focused project: chat and streaming AI UIs, native modules, rescuing a stalled app, and ASO that grows downloads from the App Store, Google Play and RuStore.',
    email: 'Email me',
    github: 'GitHub',
    sponsor: 'Sponsor',
  },
  footer: 'Numbers checked against npm, GitHub, App Store Connect, Google Play and RuStore.',
}

type Dict = typeof en

const ru: Dict = {
  meta: {
    title: 'Кеша Антонов - ведущий разработчик, продакт-менеджер, основатель',
    description:
      'Беру буксующие продукты и делаю так, чтобы они росли. Мейнтейнер react-native-gifted-chat, автор библиотек React Native с 19 млн+ установок, разработчик приложений с 250 тыс.+ установок.',
  },
  nav: { work: 'Проекты', products: 'Продукты', oss: 'Open source', contact: 'Контакты' },
  hero: {
    kicker: 'Ведущий разработчик, продакт-менеджер, основатель',
    name: 'Кеша Антонов',
    title: 'Беру буксующие продукты и делаю так, чтобы они росли.',
    sub: 'Вернул к жизни react-native-gifted-chat после 14 месяцев без релизов, в одиночку довёл образовательное приложение до 200 тыс.+ установок и запускаю свои продукты с 2015 года.',
    ctaHire: 'Нанять меня',
    ctaWork: 'Смотреть проекты',
    score: 'Счёт на сегодня',
    since: 'В деле с 2013 года',
  },
  numbers: {
    npm: 'установок моих библиотек в npm',
    month: 'установок за прошлый месяц',
    apps: 'установок приложений, которые я сделал',
    contests: 'победы в конкурсах Telegram',
  },
  chat: {
    title: 'Спросите меня',
    online: 'в сети',
    intro: ['Привет, я Кеша.', 'Делаю мобильные продукты целиком: код, продуктовые решения, запуск.', 'Что показать?'],
    replies: [
      { label: 'Библиотеки', target: 'oss', answer: 'Мои библиотеки для React Native установили {npm} раз. Только за прошлый месяц {month}.' },
      { label: 'Приложения', target: 'work', answer: 'У приложений, которые я сделал, {apps} установок. У Магистерии 4.9 по 1269 оценкам в App Store.' },
      { label: 'Мои продукты', target: 'products', answer: 'С 2015 года запускаю свои продукты: SportSoul, CryptoC, 1dbgym и другие. У них 44 тыс. загрузок в App Store, а игра-ферма в Telegram, которую я делал, на пике набрала 400 тыс. пользователей.' },
      { label: 'ASO', target: 'products', answer: 'Увеличиваю загрузки в сторах через ASO: ключевые слова, страницы и скриншоты на 20+ языках для App Store, Google Play и RuStore. Делал всё ASO для Магистерии (112 тыс. загрузок в App Store) и CryptoC (31 тыс., 4.4 по 639 оценкам).' },
      { label: 'Нанять', target: 'contact', answer: 'Отлично. Напишите мне в Telegram, @kesha_antonov, или на почту. Отвечаю в течение дня.' },
    ],
    placeholder: 'Выберите вопрос выше',
  },
  proof: { merged: 'Мой код принят в', clients: 'Делал для', contests: 'Победы' },
  gifted: {
    eyebrow: 'Кейс. Open source как продукт',
    title: 'Gifted Chat: от заброшенной библиотеки до самого быстрорастущего чат-интерфейса для React Native',
    problem: 'Самая популярная библиотека чата для React Native 14 месяцев жила без релизов. Его всё равно ставили 150 тыс. раз в месяц, а на issues никто не отвечал.',
    steps: [
      { h: 'Взял проект на себя', p: 'Стал мейнтейнером в августе 2024 года по своей инициативе. Рассортировал задачи и задал ритм релизов.' },
      { h: 'Выпустил', p: '400+ коммитов и 26 релизов: TypeScript, Reanimated, новая архитектура, работа с клавиатурой, Web.' },
      { h: 'Разобрал бэклог', p: 'Открытых issues стало 3 вместо 154.' },
      { h: 'Вырастил', p: 'Загрузки в месяц выросли со 169 тыс. до пика в 525 тыс. Потом я перешёл на свою библиотеку-преемника с тем же API, react-native-chat.' },
    ],
    successor: {
      title: 'react-native-chat: следующий шаг',
      body: 'Замена Gifted Chat без переписывания: тот же формат сообщений и те же пропсы, плюс кодмод для миграции одной командой. iOS, Android и Web, работает с Expo, TypeScript, новая архитектура.',
      features: ['Список чатов с поиском, архивом и закреплёнными чатами', 'Стриминг AI-сообщений с кнопкой остановки', 'Реакции и полная эмодзи-клавиатура', 'Фото, видео и файлы во вложениях', 'Голосовые и видеокружки', 'Просмотр фото со свайпом и зумом', 'Ответ свайпом и треды', 'Меню по долгому нажатию и выбор нескольких сообщений', 'Превью ссылок и умные ссылки', 'Плашка непрочитанных, индикатор набора, галочки прочтения', 'Сообщения с геолокацией', 'Тёмная тема и полная настройка оформления'],
      links: { repo: 'GitHub', docs: 'Документация', snack: 'Попробовать в браузере' },
    },
    chartTitle: 'Загрузки Gifted Chat в npm по месяцам',
    chartNote: 'Начало поддержки',
    chartFork: 'Переход на мой форк',
    statSince: 'загрузок за время моей поддержки, 08.2024-06.2026',
    statStars: 'звёзд на GitHub',
  },
  work: {
    eyebrow: 'Клиентские проекты',
    title: 'Продукты, которые я сделал для других',
    magisteria: {
      name: 'Магистерия',
      tag: 'Лекции, курсы и аудиокниги. iOS, macOS, Android',
      body: 'Единственный разработчик с 2018 года: 4823 коммита. Аудиоплеер с офлайн-загрузками, встроенные покупки, пуши, диплинки. Приложение работает на моих же библиотеках background-downloader и zoom-reanimated. Продуктовую работу тоже вёл я: предлагал фичи, расставлял приоритеты и доводил фичи до релиза.',
      stats: [
        ['112 тыс.', 'загрузок в App Store'],
        ['90 тыс.+', 'установок в Google Play'],
        ['4.9', 'по 1269 оценкам в App Store'],
        ['8 лет', 'разработки в одиночку'],
      ],
      highlights: [
        { h: 'Библиотека, моя идея', p: 'Предложил и сделал Библиотеку вместо закладок: одно место для сохранённых курсов, лекций и книг, с фильтрами и уведомлением, когда в сохранённом курсе выходит новая лекция. Вышла в 2023 году.' },
        { h: 'Анимации, которые я придумал', p: 'Многие анимации в приложении придумал сам, изучая Spotify, Telegram и другие сильные приложения, и сделал их пиксель в пиксель.' },
        { h: 'Всё ASO', p: 'ASO Магистерии делал сам: ключевые слова, страницы и скриншоты в App Store, Google Play и RuStore.' },
        { h: 'Дизайн и продуктовые решения', p: 'На обсуждениях с владельцем бизнеса и дизайнером предлагал решения для экранов и сценариев; многие из них сейчас в приложении.' },
      ],
      note: 'Первую страницу приложения в Google Play (90 тыс.+ установок, 4.5 по 670 отзывам) Google заблокировал в 2026 году, и приложение опубликовали заново.',
    },
    medical: {
      name: 'Приложение для пациентов медицинских сетей',
      tag: 'White-label приложение на React Native. iOS и Android. Под NDA',
      body: 'Из одной кодовой базы для каждой сети клиник собирается своё брендированное приложение: запись на приём, медкарта и анализы, чат и видеоконсультации с врачом, оплата, семейные профили, вход по биометрии, три языка. Это мой главный клиент с 2019 года и проект, в котором у меня больше всего коммитов. Ещё я продакт-менеджер проекта: предлагаю фичи, согласую приоритеты с заказчиком и довожу фичи до релиза.',
      stats: [
        ['26', 'брендов клиник из одной кодовой базы'],
        ['6+ лет', 'мой главный клиент, с 2019 года'],
        ['5309', 'моих коммитов, больше всех в проекте'],
        ['RU / EN / FR', 'три языка'],
      ],
      highlights: [
        { h: 'Свой сервис видеозвонков', p: 'Предложил заменить платный закрытый видео-SDK с лицензией на каждую клинику своим сервисом на открытом LiveKit в контуре клиники. Написал план и сделал всё сам: сервис токенов, общее ядро звонка, экраны звонка для React Native и React. Клиникам не нужно платить за лицензию, видеомодуль весит на 54% меньше на iOS и на 80% меньше на Android, один экран звонка работает на обеих платформах.' },
        { h: 'Чат с врачом', p: 'Основной автор внутреннего пакета чата для пациентов и врачей: 410 из 994 коммитов с 2022 года.' },
        { h: 'Нативный видеомост', p: 'Сделал open source мост React Native для видео-SDK, на котором клиники работали раньше: 294 коммита с 2019 года.', link: { text: 'react-native-trueconf-sdk', href: 'https://github.com/kesha-antonov/react-native-trueconf-sdk' } },
        { h: 'Продуктовая работа', p: 'Веду список фич и приоритеты экранов, читаю отзывы в сторах, предлагаю фичи и довожу их до релиза во всех 26 брендах. Часть ASO для приложений клиник тоже делал я.' },
      ],
      note: 'Названия клиента и клиник под NDA.',
    },
    progulki: {
      name: 'Прогулка в темноте',
      tag: 'Музей в Москве, где незрячие гиды водят экскурсии в полной темноте',
      body: 'Сайт с бронированием и онлайн-оплатой билетов и своя CRM для экскурсий, заказов и гидов. 20 тыс.+ посетителей за первый год.',
    },
    aviasales: {
      name: 'Aviasales',
      tag: 'Виджеты для aviasales.ru',
      body: 'Делал виджеты для Aviasales, одного из крупнейших сервисов поиска авиабилетов в России.',
    },
    studio: {
      name: 'skill.surf',
      tag: 'Веб-студия, сооснователь, 2018',
      body: 'Искал клиентов, вёл переговоры, руководил дизайнером и наёмными разработчиками, писал код.',
    },
  },
  products: {
    eyebrow: 'Основатель',
    title: 'Продукты, которые я запустил сам',
    items: {
      cryptoc: { name: 'CryptoC', tag: 'Трекер криптопортфеля', body: 'iOS, Android, Apple Watch, Wear OS и виджеты. Перезапущен в 2026 году с подписками. ASO делаю сам: подбор ключевых слов, разбор отзывов конкурентов и страницы в сторах: 21 локализация в App Store, 18 в Google Play, плюс RuStore.', stats: [['31 тыс.', 'загрузок в App Store'], ['4.4', 'из 639 оценок']] },
      ssoul: { name: 'SportSoul', tag: 'Соцсеть для тех, кто занимается спортом', body: 'Поиск тренировок, тренеров и партнёров рядом. Сначала сделал всю веб-версию: соцсеть на Rails с чатами в реальном времени, группами, играми и тренировками. Потом приложения для iOS и Android на том же бэкенде. 1668 коммитов с 2015 года; руководил дизайнером и ASO-специалистом. В 2018 году попал в заочный акселератор ФРИИ (Фонд развития интернет-инициатив, Москва): менторская программа без инвестиций. Подавал заявку и в акселератор Ингрия.', stats: [['10 тыс.+', 'пользователей'], ['9.8 тыс.', 'загрузок в App Store'], ['4.8 / 4.7', 'App Store / Google Play, 2018']] },
      tmafarm: { name: 'Игра-ферма в Telegram', tag: 'Telegram Mini App на TON, 2024. Под NDA', body: 'Игра-ферма внутри Telegram: бусты, задания, друзья и рефералы, рейтинг и кошелёк через TON Connect. На пике было 400 тыс. пользователей. Почти весь бэкенд и Telegram-бота сделал я, фронтенд делали вдвоём.', stats: [['400 тыс.', 'пользователей на пике'], ['280 из 299', 'коммитов бэкенда мои'], ['120 из 259', 'коммитов фронтенда мои']] },
      diary: { name: 'Ежедневник достижений', tag: 'Бумажный планер для целей, 2017', body: 'Бумажный ежедневник, чтобы ставить цели и отслеживать прогресс. Придумал продукт и развороты, нашёл типографии и собрал их расценки небольшим скриптом, напечатал тираж с обложками шести цветов и подготовил краудфандинговую кампанию на Boomstarter с промо-видео и пресс-релизом.', stats: [] },
      nanogym: { name: '1dbgym', tag: 'Фитнес-трекер в виде Telegram Mini App', body: 'Тренировки с игровой механикой и рефералами для пользователей Telegram.', stats: [] },
      stickers: { name: 'Стикеры для iMessage', tag: 'Falling in Fall, Sports Sticker Pack', body: 'Два стикерпака, которые скачивают до сих пор.', stats: [['3.2 тыс.', 'загрузок']] },
    },
  },
  oss: {
    eyebrow: 'Open source',
    title: 'Библиотеки, от которых зависят 32 тыс.+ проектов на GitHub',
    lead: 'Живые цифры из npm и GitHub, обновляются каждый день.',
    cols: { lib: 'Библиотека', month: 'За месяц', total: 'Всего', stars: 'Звёзды' },
    desc: {
      'gifted-chat': 'Самая популярная библиотека чата для React Native. Мейнтейнер.',
      'react-native-chat': 'Преемник Gifted Chat с тем же API: список чатов, стриминг AI-сообщений, реакции, эмодзи-клавиатура, голосовые и видеокружки, Web.',
      'zoom-reanimated': 'Зум щипком и двойным тапом, перетаскивание, как в Фото на iPhone.',
      'background-downloader': 'Скачивание и отправка файлов, которые не прерываются, когда приложение уходит в фон.',
      'action-cable': 'Каналы Rails ActionCable через WebSocket.',
      'cloud-sync': 'iCloud, CloudKit и Google Drive через один API.',
    },
    sponsor: 'Поддержать мой open source',
    updated: 'Обновлено',
  },
  contests: {
    eyebrow: 'Признание',
    title: 'Конкурсы для разработчиков от Telegram',
    place: (n: number) => `${n}-е место`,
    items: {
      fixes: { name: 'Telegram Fixes', body: 'Исправлял баги, глитчи и анимации в приложениях самого Telegram.' },
      ton: { name: 'TON Blockchain Contest, Round 2', body: 'Искал уязвимости в новом алгоритме консенсуса TON. Призовой фонд $100400.' },
      chart: { name: 'JavaScript Chart', body: 'Быстрые интерактивные графики без библиотек, 2019 год.' },
    },
    note: 'Работы на contest.com анонимны. Моя подписана как "Busy Unicorn"; скриншоты сделаны из моего аккаунта, где contest.com помечает её как "your entry".',
  },
  path: {
    eyebrow: 'Путь',
    title: 'Как я сюда пришёл',
    items: [
      ['2013', 'Программист в ЦНИИ РТК: веб-интерфейс системы управления межсетевыми экранами.'],
      ['2014', 'Магистр технической кибернетики, СПбПУ Петра Великого.'],
      ['2015', 'Основал SportSoul и сделал всю веб-версию: соцсеть с чатами в реальном времени, группами, играми и тренировками. Потом вышли приложения для iOS и Android.'],
      ['2017', 'Запустил CryptoC. С тех пор 31 тыс. загрузок.'],
      ['2018', 'Попал с SportSoul в заочный акселератор ФРИИ. Стал сооснователем студии skill.surf и разработчиком Магистерии.'],
      ['2019', 'Начал делать white-label приложение для пациентов медицинских сетей, с тех пор это мой главный клиент. Первая победа в конкурсе Telegram.'],
      ['2024', 'Взял на поддержку react-native-gifted-chat. Сделал игру-ферму в Telegram Mini App на TON: 400 тыс. пользователей на пике.'],
      ['2026', 'Запустил react-native-chat и перезапустил CryptoC.'],
    ],
  },
  contact: {
    eyebrow: 'Контакты',
    title: 'Продолжение следует',
    lead: 'Давайте сделаем следующий продукт, который вырастет.',
    body: 'Роль ведущего разработчика или продуктового инженера, частичная занятость или отдельный проект: чаты и стриминговые AI-интерфейсы, нативные модули, спасение буксующего приложения и ASO, которое увеличивает загрузки из App Store, Google Play и RuStore.',
    email: 'Написать на почту',
    github: 'GitHub',
    sponsor: 'Поддержать',
  },
  footer: 'Цифры сверены с npm, GitHub, App Store Connect, Google Play и RuStore.',
}

// Thousands grouping for readability: 100,400 in English, 100 400 in Russian.
// Years (1900-2099), dates like 09.11.2026 and decimals like 4.9 are left alone.
export function groupInt(n: number, lang: Lang): string {
  const sep = lang === 'ru' ? ' ' : ','
  return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, sep)
}

export function groupNumbers(text: string, lang: Lang): string {
  return text.replace(/(?<![\d.,])\d{4,}(?![\d]|[.,]\d)/g, (m) => {
    const n = Number(m)
    if (m.length === 4 && n >= 1900 && n <= 2099) return m
    return groupInt(n, lang)
  })
}

// Apply grouping to every string in the dictionary, keeping functions as they are.
function deepGroup<T>(value: T, lang: Lang): T {
  if (typeof value === 'string') return groupNumbers(value, lang) as T
  if (Array.isArray(value)) return value.map((v) => deepGroup(v, lang)) as T
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, deepGroup(v, lang)])) as T
  }
  return value
}

export const dict: Record<Lang, Dict> = { en: deepGroup(en, 'en'), ru: deepGroup(ru, 'ru') }

// Verified by hand on 09.11.2026: App Store, Google Play and RuStore across Magisteria, CryptoC, SportSoul and sticker packs.
export const APPS_INSTALLS = 250000
export const CONTEST_WINS = 3

export function compact(n: number, lang: Lang): string {
  if (lang === 'ru') {
    if (n >= 1e6) return `${(n / 1e6).toFixed(n >= 1e7 ? 1 : 2).replace(/\.0+$/, '')} млн`
    if (n >= 1e3) return `${Math.round(n / 1e3)} тыс.`
    return String(n)
  }
  if (n >= 1e6) return `${(n / 1e6).toFixed(n >= 1e7 ? 1 : 2).replace(/\.0+$/, '')}M`
  if (n >= 1e3) return `${Math.round(n / 1e3)}K`
  return String(n)
}
