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
      'I take stalled products and make them grow. Maintainer of react-native-gifted-chat. My React Native libraries have 19M+ installs, my apps 250K+.',
  },
  nav: { work: 'Work', products: 'Products', oss: 'Open source', contact: 'Contact' },
  hero: {
    kicker: 'Lead software engineer, product manager, founder',
    name: 'Kesha Antonov',
    title: 'I take stalled products and make them grow.',
    sub: 'I revived react-native-gifted-chat after 14 months without a release. I took a learning app to 200K+ installs as its only engineer. I have launched my own products since 2015.',
    ctaHire: 'Hire me',
    ctaWork: 'See the work',
    score: 'The score so far',
    since: 'Shipping since 2013',
  },
  numbers: {
    npm: 'npm installs of my libraries',
    month: 'installs last month',
    apps: 'installs of apps I built',
    contests: 'Telegram contest wins',
  },
  chat: {
    title: 'Ask me',
    online: 'online',
    intro: [
      "Hi, I'm Kesha.",
      'I build mobile products end to end.',
      'What should I show you?',
    ],
    replies: [
      { label: 'Libraries', target: 'oss', answer: 'My React Native libraries: {npm} installs, {month} of them last month.' },
      { label: 'Apps I built', target: 'work', answer: 'Apps I built have {apps} installs. Magisteria holds 4.9 stars from 1269 App Store ratings.' },
      { label: 'My products', target: 'products', answer: 'Since 2015 I launch my own products: SportSoul, CryptoC, 1dbgym and more. 44K App Store downloads, and my Telegram farming game peaked at 400K users.' },
      { label: 'ASO', target: 'products', answer: 'I grow store downloads with ASO in 20+ languages. I did it for Magisteria (112K App Store downloads) and CryptoC (31K, 4.4 from 639 ratings).' },
      { label: 'Hire me', target: 'contact', answer: 'Write me on Telegram, @kesha_antonov, or by email. I reply within a day.' },
    ],
    placeholder: 'Pick a question above',
  },
  proof: { merged: 'Code merged into', clients: 'Shipped for', contests: 'Contest wins', handwritten: 'I used no AI tools before autumn 2025. Written by hand: my merges into rails (2016), react-native and tdlib (2019), expo (2023), Gifted Chat 08.2024 to 08.2025 (156 commits, 14 releases), my libraries, SportSoul, Magisteria.' },
  gifted: {
    eyebrow: 'Case study. Open source as a product',
    title: 'Gifted Chat: from abandoned to the fastest-growing chat UI',
    problem: "React Native's default chat UI went 14 months without a release. 150K developers a month still installed it, and issues went unanswered.",
    steps: [
      { h: 'Took ownership', p: 'Became the maintainer in August 2024 on my own initiative and set a release cadence.' },
      { h: 'Shipped', p: '400+ commits, 26 releases: TypeScript, Reanimated, new architecture, keyboard, Web.' },
      { h: 'Cut the backlog', p: 'Open issues: from 154 down to 3.' },
      { h: 'Grew it', p: 'Monthly downloads went from 169K to a 525K peak. Then I moved on to my drop-in successor, react-native-chat.' },
    ],
    successor: {
      title: 'react-native-chat: the next step',
      body: 'A drop-in Gifted Chat replacement: same messages and props, migration in one command. iOS, Android, Web, Expo, TypeScript, New Architecture.',
      features: ['Chat list with search, archive, pins', 'Streaming AI messages with stop', 'Reactions and emoji keyboard', 'Photo, video and file attachments', 'Voice and round video notes', 'Photo viewer with zoom', 'Swipe to reply, threads', 'Long-press menu, multi-select', 'Link previews', 'Unread bar, typing, read ticks', 'Location messages', 'Dark mode and theming'],
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
      body: 'The only engineer since 2018, 4823 commits. Offline audio, purchases, push and deep links, built on my own libraries.',
      stats: [
        ['112K', 'App Store downloads'],
        ['90K+', 'Google Play installs'],
        ['4.9', 'from 1269 App Store ratings'],
        ['8 years', 'as sole engineer'],
      ],
      highlights: [
        { h: 'Library, my idea', p: 'In 2023 I proposed and built the Library: saved courses, lectures and books with filters and new-lecture alerts.' },
        { h: 'Animations I invented', p: 'I designed many app animations myself, looking at Spotify and Telegram, and built them pixel perfect.' },
        { h: 'All of the ASO', p: 'Keywords, listings and screenshots for the App Store, Google Play and RuStore are all mine.' },
        { h: 'Design and product decisions', p: 'Many screens and flows in the app today started as my proposals.' },
      ],
      note: 'Google suspended the original Android listing (90K+ installs, 4.5 from 670 reviews) in 2026, so the app was republished.',
    },
    medical: {
      name: 'Patient app for medical networks',
      tag: 'White-label React Native app. iOS and Android. Under NDA',
      body: 'One codebase, a branded app per clinic network: booking, records, lab results, doctor chat and video, payments. I am also its product manager.',
      stats: [
        ['26', 'clinic brands from one codebase'],
        ['6+ years', 'my main client, since 2019'],
        ['5309', 'my commits, top contributor'],
        ['RU / EN / FR', 'languages'],
      ],
      highlights: [
        { h: 'Our own video-call service', p: 'I replaced a paid per-clinic video SDK with our own LiveKit service, built alone. No license fees, and the module is 54% lighter on iOS, 80% on Android.' },
        { h: 'Chat with doctors', p: 'Main author of the patient-doctor chat package: 410 of 994 commits since 2022.' },
        { h: 'Native video bridge', p: "Open source React Native bridge for the clinics' previous video SDK: 294 commits since 2019.", link: { text: 'react-native-trueconf-sdk', href: 'https://github.com/kesha-antonov/react-native-trueconf-sdk' } },
        { h: 'Product work', p: 'I own the feature list, read store reviews and ship features to all 26 brands, plus part of the ASO.' },
      ],
      note: 'Client and clinic names are under NDA.',
    },
    progulki: {
      name: 'Progulka v temnote',
      tag: 'Moscow museum where blind guides lead tours in total darkness',
      body: 'Ticket booking site with online payment and a custom CRM. 20000+ visitors in the first year.',
    },
    aviasales: {
      name: 'Aviasales',
      tag: 'Widgets for the Aviasales partner program',
      body: 'Flight search widgets that partner sites embed to sell aviasales.ru tickets through Travelpayouts.',
    },
    studio: {
      name: 'skill.surf',
      tag: 'Web studio, co-founder, 2018',
      body: 'Found clients, negotiated, led a designer and contractors, wrote code.',
    },
  },
  products: {
    eyebrow: 'Founder',
    title: 'Products I launched myself',
    items: {
      cryptoc: { name: 'CryptoC', tag: 'Crypto portfolio tracker', body: 'iOS, Android, Apple Watch and Wear OS, relaunched in 2026 with subscriptions. I run its ASO in 21 App Store and 18 Google Play locales plus RuStore.', stats: [['31K', 'App Store downloads'], ['4.4', 'from 639 ratings']] },
      ssoul: { name: 'SportSoul', tag: 'Social network for people who do sport', body: 'A Rails social network for finding sport partners, then iOS and Android apps: 1668 commits since 2015. In 2018 it got into the FRII accelerator mentoring track.', stats: [['10K+', 'users'], ['9.8K', 'App Store downloads'], ['4.8 / 4.7', 'App Store / Google Play, 2018']] },
      tmafarm: { name: 'Farming game in Telegram', tag: 'Telegram Mini App on TON, 2024. Under NDA', body: 'A Telegram farming game with boosts, referrals and a TON Connect wallet. I built almost all of the backend and bot, and co-built the frontend.', stats: [['400K', 'users at peak'], ['280 of 299', 'backend commits are mine'], ['120 of 259', 'frontend commits are mine']] },
      diary: { name: 'Achievement Diary', tag: 'Printed goal planner, 2017', body: 'I designed it, printed it in six cover colors and prepared a Boomstarter campaign.', stats: [] },
      nanogym: { name: '1dbgym', tag: 'Fitness tracker as a Telegram Mini App', body: 'Gamified workouts with referrals for Telegram users.', stats: [] },
      stickers: { name: 'iMessage stickers', tag: 'Falling in Fall, Sports Sticker Pack', body: 'Two sticker packs, still downloaded every month.', stats: [['3.2K', 'downloads']] },
    },
  },
  oss: {
    eyebrow: 'Open source',
    title: 'Libraries 32K+ projects on GitHub depend on',
    lead: 'Live npm and GitHub numbers, updated daily.',
    cols: { lib: 'Library', month: 'Last month', total: 'All time', stars: 'Stars' },
    desc: {
      'gifted-chat': 'The default chat UI of React Native. Maintainer.',
      'react-native-chat': 'Drop-in Gifted Chat successor: chat list, streaming AI messages, reactions, Web.',
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
      fixes: { name: 'Telegram Fixes', body: "Fixed bugs and animations in Telegram's own apps." },
      ton: { name: 'TON Blockchain Contest, Round 2', body: "Hunted for flaws in TON's new consensus algorithm. Prize fund $100400." },
      chart: { name: 'JavaScript Chart', body: 'Fast interactive charts with no libraries, 2019.' },
    } as Record<string, { name: string; body: string }>,
    note: 'Entries on contest.com are anonymous. Mine was "Busy Unicorn", marked "your entry" in these screenshots from my account.',
  },
  path: {
    eyebrow: 'Path',
    title: 'How I got here',
    items: [
      ['2013', 'Programmer at ЦНИИ РТК, web UI for firewall management.'],
      ['2014', 'Master of technical cybernetics, Peter the Great St. Petersburg Polytechnic University.'],
      ['2015', 'Founded SportSoul and built its web version, then iOS and Android apps.'],
      ['2017', 'Launched CryptoC: 31K downloads since.'],
      ['2018', 'SportSoul got into the FRII accelerator. Co-founded skill.surf. Became the engineer of Magisteria.'],
      ['2019', 'Started the patient app, my main client since. First Telegram contest win.'],
      ['2024', 'Took over react-native-gifted-chat. Built a Telegram farming game: 400K users at peak.'],
      ['2026', 'Launched react-native-chat and relaunched CryptoC.'],
    ],
  },
  contact: {
    income: 'of IT salaries by monthly income (Habr Career, 2026)',
    eyebrow: 'Contact',
    title: 'To be continued',
    lead: "Let's build the next thing that grows.",
    body: 'Lead or product engineer, fractional or project work: chats with streaming AI messages, native modules, stalled app rescue, ASO.',
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
      'Беру буксующие продукты и делаю так, чтобы они росли. Мейнтейнер react-native-gifted-chat. У моих библиотек React Native 19 млн+ установок, у приложений 250 тыс.+.',
  },
  nav: { work: 'Проекты', products: 'Продукты', oss: 'Open source', contact: 'Контакты' },
  hero: {
    kicker: 'Ведущий разработчик, продакт-менеджер, основатель',
    name: 'Кеша Антонов',
    title: 'Беру буксующие продукты и делаю так, чтобы они росли.',
    sub: 'Вернул к жизни react-native-gifted-chat после 14 месяцев без релизов. В одиночку довёл образовательное приложение до 200 тыс.+ установок. Свои продукты запускаю с 2015 года.',
    ctaHire: 'Нанять меня',
    ctaWork: 'Смотреть проекты',
    score: 'Счёт на сегодня',
    since: 'В деле с 2013 года',
  },
  numbers: {
    npm: 'установок моих библиотек в npm',
    month: 'установок за прошлый месяц',
    apps: 'установок моих приложений',
    contests: 'победы в конкурсах Telegram',
  },
  chat: {
    title: 'Спросите меня',
    online: 'в сети',
    intro: ['Привет, я Кеша.', 'Делаю мобильные продукты целиком.', 'Что показать?'],
    replies: [
      { label: 'Библиотеки', target: 'oss', answer: 'Мои библиотеки для React Native: {npm} установок, из них {month} за прошлый месяц.' },
      { label: 'Приложения', target: 'work', answer: 'У моих приложений {apps} установок. У Магистерии 4.9 по 1269 оценкам в App Store.' },
      { label: 'Мои продукты', target: 'products', answer: 'С 2015 года запускаю свои продукты: SportSoul, CryptoC, 1dbgym и другие. У них 44 тыс. загрузок в App Store, а моя игра-ферма в Telegram на пике собрала 400 тыс. пользователей.' },
      { label: 'ASO', target: 'products', answer: 'Поднимаю загрузки через ASO на 20+ языках. Делал его для Магистерии (112 тыс. загрузок в App Store) и CryptoC (31 тыс., 4.4 по 639 оценкам).' },
      { label: 'Нанять', target: 'contact', answer: 'Пишите в Telegram, @kesha_antonov, или на почту. Отвечаю в течение дня.' },
    ],
    placeholder: 'Выберите вопрос выше',
  },
  proof: { merged: 'Мой код принят в', clients: 'Делал для', contests: 'Победы', handwritten: 'До осени 2025 года я не пользовался AI-инструментами. Руками написаны: мой код в rails (2016), react-native и tdlib (2019), expo (2023), Gifted Chat с 08.2024 по 08.2025 (156 коммитов, 14 релизов), мои библиотеки, SportSoul и Магистерия.' },
  gifted: {
    eyebrow: 'Кейс. Open source как продукт',
    title: 'Gifted Chat: от заброшенной библиотеки до самого быстрорастущего чата',
    problem: 'Главная чат-библиотека React Native 14 месяцев жила без релизов. Её всё равно ставили 150 тыс. раз в месяц, а issues висели без ответа.',
    steps: [
      { h: 'Взял проект на себя', p: 'Стал мейнтейнером в августе 2024 года по своей инициативе и наладил регулярные релизы.' },
      { h: 'Выпустил', p: '400+ коммитов и 26 релизов: TypeScript, Reanimated, новая архитектура, клавиатура, Web.' },
      { h: 'Разобрал бэклог', p: 'Открытых issues было 154, стало 3.' },
      { h: 'Вырастил', p: 'Загрузки в месяц выросли со 169 тыс. до пика в 525 тыс. Потом я перешёл на свою замену с тем же API, react-native-chat.' },
    ],
    successor: {
      title: 'react-native-chat: следующий шаг',
      body: 'Замена Gifted Chat без переписывания: те же сообщения и пропсы, переезд одной командой. iOS, Android, Web, Expo, TypeScript, новая архитектура.',
      features: ['Список чатов с поиском, архивом и закреплением', 'Стриминг AI-сообщений с остановкой', 'Реакции и эмодзи-клавиатура', 'Фото, видео и файлы', 'Голосовые и видеокружки', 'Просмотр фото с зумом', 'Ответ свайпом и треды', 'Меню по долгому нажатию, выбор сообщений', 'Превью ссылок', 'Непрочитанные, набор текста, галочки', 'Геолокация', 'Тёмная тема и свои стили'],
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
      body: 'Единственный разработчик с 2018 года, 4823 коммита. Офлайн-аудио, покупки, пуши и диплинки на моих же библиотеках.',
      stats: [
        ['112 тыс.', 'загрузок в App Store'],
        ['90 тыс.+', 'установок в Google Play'],
        ['4.9', 'по 1269 оценкам в App Store'],
        ['8 лет', 'разработки в одиночку'],
      ],
      highlights: [
        { h: 'Библиотека, моя идея', p: 'В 2023 году предложил и сделал Библиотеку: сохранённые курсы, лекции и книги с фильтрами и уведомлениями о новых лекциях.' },
        { h: 'Анимации, которые я придумал', p: 'Многие анимации придумал сам, глядя на Spotify и Telegram, и сделал их пиксель в пиксель.' },
        { h: 'Всё ASO', p: 'Ключевые слова, страницы и скриншоты в App Store, Google Play и RuStore делал сам.' },
        { h: 'Дизайн и продуктовые решения', p: 'Многие экраны и сценарии в приложении появились по моим предложениям.' },
      ],
      note: 'Первую страницу в Google Play (90 тыс.+ установок, 4.5 по 670 отзывам) Google заблокировал в 2026 году, приложение опубликовали заново.',
    },
    medical: {
      name: 'Приложение для пациентов медицинских сетей',
      tag: 'White-label приложение на React Native. iOS и Android. Под NDA',
      body: 'Одна кодовая база, своё приложение для каждой сети клиник: запись, медкарта, анализы, чат и видео с врачом, оплата. Ещё я продакт-менеджер проекта.',
      stats: [
        ['26', 'брендов клиник из одной кодовой базы'],
        ['6+ лет', 'мой главный клиент, с 2019 года'],
        ['5309', 'моих коммитов, больше всех в проекте'],
        ['RU / EN / FR', 'три языка'],
      ],
      highlights: [
        { h: 'Свой сервис видеозвонков', p: 'Заменил платный видео-SDK с лицензией на каждую клинику своим сервисом на LiveKit и сделал его в одиночку. Лицензии больше не нужны, а модуль легче на 54% на iOS и на 80% на Android.' },
        { h: 'Чат с врачом', p: 'Основной автор пакета чата для пациентов и врачей: 410 из 994 коммитов с 2022 года.' },
        { h: 'Нативный видеомост', p: 'Open source мост React Native для прежнего видео-SDK клиник: 294 коммита с 2019 года.', link: { text: 'react-native-trueconf-sdk', href: 'https://github.com/kesha-antonov/react-native-trueconf-sdk' } },
        { h: 'Продуктовая работа', p: 'Веду список фич, читаю отзывы и довожу фичи до релиза во всех 26 брендах, делал и часть ASO.' },
      ],
      note: 'Названия клиента и клиник под NDA.',
    },
    progulki: {
      name: 'Прогулка в темноте',
      tag: 'Московский музей, где незрячие гиды водят экскурсии в полной темноте',
      body: 'Сайт с бронированием и онлайн-оплатой билетов и своя CRM. 20 тыс.+ посетителей за первый год.',
    },
    aviasales: {
      name: 'Aviasales',
      tag: 'Виджеты для партнёрской программы Aviasales',
      body: 'Виджеты поиска, через которые партнёрские сайты продают авиабилеты aviasales.ru на Travelpayouts.',
    },
    studio: {
      name: 'skill.surf',
      tag: 'Веб-студия, сооснователь, 2018',
      body: 'Искал клиентов, вёл переговоры, руководил дизайнером и подрядчиками, писал код.',
    },
  },
  products: {
    eyebrow: 'Основатель',
    title: 'Продукты, которые я запустил сам',
    items: {
      cryptoc: { name: 'CryptoC', tag: 'Трекер криптопортфеля', body: 'iOS, Android, Apple Watch и Wear OS, в 2026 году перезапущен с подписками. ASO веду сам: 21 локализация в App Store, 18 в Google Play, плюс RuStore.', stats: [['31 тыс.', 'загрузок в App Store'], ['4.4', 'из 639 оценок']] },
      ssoul: { name: 'SportSoul', tag: 'Соцсеть для тех, кто занимается спортом', body: 'Соцсеть на Rails для поиска партнёров по спорту, потом приложения для iOS и Android: 1668 коммитов с 2015 года. В 2018 году попал в менторскую программу акселератора ФРИИ.', stats: [['10 тыс.+', 'пользователей'], ['9.8 тыс.', 'загрузок в App Store'], ['4.8 / 4.7', 'App Store / Google Play, 2018']] },
      tmafarm: { name: 'Игра-ферма в Telegram', tag: 'Telegram Mini App на TON, 2024. Под NDA', body: 'Игра-ферма в Telegram с бустами, рефералами и кошельком TON Connect. Почти весь бэкенд и бота сделал я, фронтенд делали вдвоём.', stats: [['400 тыс.', 'пользователей на пике'], ['280 из 299', 'коммитов бэкенда мои'], ['120 из 259', 'коммитов фронтенда мои']] },
      diary: { name: 'Ежедневник достижений', tag: 'Бумажный планер для целей, 2017', body: 'Придумал его, напечатал с обложками шести цветов и подготовил кампанию на Boomstarter.', stats: [] },
      nanogym: { name: '1dbgym', tag: 'Фитнес-трекер в виде Telegram Mini App', body: 'Тренировки с игровой механикой и рефералами для пользователей Telegram.', stats: [] },
      stickers: { name: 'Стикеры для iMessage', tag: 'Falling in Fall, Sports Sticker Pack', body: 'Два стикерпака, их скачивают до сих пор.', stats: [['3.2 тыс.', 'загрузок']] },
    },
  },
  oss: {
    eyebrow: 'Open source',
    title: 'Библиотеки, от которых зависят 32 тыс.+ проектов на GitHub',
    lead: 'Живые цифры из npm и GitHub, обновляются ежедневно.',
    cols: { lib: 'Библиотека', month: 'За месяц', total: 'Всего', stars: 'Звёзды' },
    desc: {
      'gifted-chat': 'Главная чат-библиотека React Native. Мейнтейнер.',
      'react-native-chat': 'Преемник Gifted Chat с тем же API: список чатов, стриминг AI-сообщений, реакции, Web.',
      'zoom-reanimated': 'Зум щипком и двойным тапом, как в Фото на iPhone.',
      'background-downloader': 'Загрузки, которые не обрываются, когда приложение в фоне.',
      'action-cable': 'Каналы Rails ActionCable через WebSocket.',
      'cloud-sync': 'iCloud, CloudKit и Google Drive через один API.',
    },
    sponsor: 'Поддержать мой open source',
    updated: 'Обновлено',
  },
  contests: {
    eyebrow: 'Признание',
    title: 'Конкурсы Telegram для разработчиков',
    place: (n: number) => `${n}-е место`,
    items: {
      fixes: { name: 'Telegram Fixes', body: 'Исправлял баги и анимации в приложениях самого Telegram.' },
      ton: { name: 'TON Blockchain Contest, Round 2', body: 'Искал уязвимости в новом алгоритме консенсуса TON. Призовой фонд $100400.' },
      chart: { name: 'JavaScript Chart', body: 'Быстрые интерактивные графики без библиотек, 2019 год.' },
    },
    note: 'Работы на contest.com анонимны. Моя называлась "Busy Unicorn", на скриншотах из моего аккаунта она помечена как "your entry".',
  },
  path: {
    eyebrow: 'Путь',
    title: 'Как я сюда пришёл',
    items: [
      ['2013', 'Программист в ЦНИИ РТК, веб-интерфейс управления межсетевыми экранами.'],
      ['2014', 'Магистр технической кибернетики, СПбПУ Петра Великого.'],
      ['2015', 'Основал SportSoul и сделал веб-версию, потом приложения для iOS и Android.'],
      ['2017', 'Запустил CryptoC: с тех пор 31 тыс. загрузок.'],
      ['2018', 'Попал с SportSoul в акселератор ФРИИ. Стал сооснователем студии skill.surf и разработчиком Магистерии.'],
      ['2019', 'Начал делать приложение для пациентов, с тех пор это мой главный клиент. Первая победа в конкурсе Telegram.'],
      ['2024', 'Взял на поддержку react-native-gifted-chat. Сделал игру-ферму в Telegram: 400 тыс. пользователей на пике.'],
      ['2026', 'Запустил react-native-chat и перезапустил CryptoC.'],
    ],
  },
  contact: {
    income: 'IT-зарплат по моему доходу в месяц (Хабр Карьера, 2026)',
    eyebrow: 'Контакты',
    title: 'Продолжение следует',
    lead: 'Давайте сделаем следующий продукт, который вырастет.',
    body: 'Ведущий или продуктовый инженер, частичная занятость или проект: чаты со стримингом AI-сообщений, нативные модули, спасение буксующих приложений, ASO.',
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
