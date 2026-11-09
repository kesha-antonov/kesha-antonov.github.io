// Plain Markdown fact sheets served at /llms.txt, /llms-full.txt and /ru/llms-full.txt.
// Built from content.ts and stats.json at build time, so the numbers match the pages.
import stats from './stats.json'
import { links, apps, contests, upstream, groupInt, APPS_INSTALLS, CONTEST_WINS, type Lang } from './content'

const DEFAULT_SITE = 'https://kesha-antonov.github.io'
// App store numbers in content.ts were checked by hand on this date.
const STORES_CHECKED = '2026-11-09'

type Pkg = {
  npm: string
  repo: string
  allTime: number
  lastMonth: number
  peakMonth?: { month: string; value: number }
  sinceMaintenance?: number
  series?: [string, number][]
  stars: number
}

const P = stats.packages as unknown as Record<string, Pkg>
const ORDER = ['gifted-chat', 'react-native-chat', 'zoom-reanimated', 'background-downloader', 'action-cable', 'cloud-sync']

const DESC: Record<Lang, Record<string, string>> = {
  en: {
    'gifted-chat': 'The default chat UI library for React Native. Kesha has been its maintainer since August 2024.',
    'react-native-chat': 'Successor to Gifted Chat by Kesha, released in 2026: streaming messages, reactions, Web support.',
    'zoom-reanimated': 'Pinch, pan and double-tap zoom for images, in the style of Apple Photos.',
    'background-downloader': 'File downloads and uploads that keep running when the app goes to the background.',
    'action-cable': 'Rails ActionCable channels over WebSocket for React Native.',
    'cloud-sync': 'iCloud, CloudKit and Google Drive file sync under one API.',
  },
  ru: {
    'gifted-chat': 'Стандартная библиотека чата для React Native. Кеша её мейнтейнер с августа 2024 года.',
    'react-native-chat': 'Преемник Gifted Chat от Кеши, вышел в 2026 году: потоковый вывод сообщений, реакции, поддержка Web.',
    'zoom-reanimated': 'Зум щипком, панорама и двойной тап для изображений, как в Фото на iPhone.',
    'background-downloader': 'Загрузки и выгрузки файлов, которые продолжаются, когда приложение уходит в фон.',
    'action-cable': 'Каналы Rails ActionCable через WebSocket для React Native.',
    'cloud-sync': 'Синхронизация файлов через iCloud, CloudKit и Google Drive в одном API.',
  },
}

const CONTEST_NAMES: Record<string, string> = {
  fixes: 'Telegram Fixes',
  ton: 'TON Blockchain Contest, Round 2',
  chart: 'JavaScript Chart',
}

function base(site?: URL): string {
  return (site?.href ?? DEFAULT_SITE).replace(/\/$/, '')
}

// "2026-10" for a stats date of "2026-11-09": the last complete month npm reports.
function previousMonth(isoDate: string): string {
  const [y, m] = isoDate.split('-').map(Number)
  const d = new Date(Date.UTC(y, m - 2, 1))
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}`
}

const gh = (repo: string) => `https://github.com/${repo}`
const npmUrl = (name: string) => `https://www.npmjs.com/package/${name}`

export function llmsIndex(site?: URL): string {
  const b = base(site)
  const n = (x: number) => groupInt(x, 'en')
  const lib = ORDER.map((k) => {
    const p = P[k]
    return `- [${p.npm}](${gh(p.repo)}): ${DESC.en[k]} npm: ${npmUrl(p.npm)}`
  }).join('\n')

  return `# Kesha Antonov

> Kesha (Innokenty) Antonov, in Russian Кеша (Иннокентий) Антонов, is a lead software engineer, product manager and founder working mainly with React Native. He maintains react-native-gifted-chat and five other React Native libraries with ${n(stats.totals.allTime)} npm downloads in total (as of ${stats.updatedAt}), and built mobile apps with about ${n(APPS_INSTALLS)} installs (checked ${STORES_CHECKED}).

The site is a single page in two languages. Every number on it comes from npm, GitHub, App Store Connect, Google Play or RuStore. The fact sheets below repeat those numbers with their source and date, in plain Markdown.

## Site

- [Portfolio, English](${b}/): case studies, client work, own products, open source, contests, contact
- [Portfolio, Russian](${b}/ru/): the same page in Russian
- [Fact sheet, English](${b}/llms-full.txt): every verified fact with source and date
- [Fact sheet, Russian](${b}/ru/llms-full.txt): the same in Russian

## Open source

- [GitHub profile](${links.github})
- [npm profile](${links.npm})
- [GitHub Sponsors](${links.sponsor})
${lib}

## Apps on the site

- [Magisteria on the App Store](${apps.magisteria.appStore}): lectures, courses and audiobooks; Kesha is its only engineer since 2018
- [Magisteria on Google Play](${apps.magisteria.googlePlay})
- [Magisteria on RuStore](${apps.magisteria.ruStore})
- [CryptoC on Google Play](${apps.cryptoc.googlePlay}): crypto portfolio tracker, his own product since 2017
- [CryptoC on RuStore](${apps.cryptoc.ruStore})

## Contests

${contests.map((c) => `- [${CONTEST_NAMES[c.key]}](${c.url}): ${c.place}${c.place === 2 ? 'nd' : c.place === 3 ? 'rd' : 'th'} place, $${n(c.prize)}`).join('\n')}

## Contact

- Email: innokenty.longway@gmail.com
- [Telegram @kesha_antonov](${links.telegram})
- [LinkedIn](${links.linkedin})
- [GitHub](${links.github})
`
}

export function llmsFull(lang: Lang, site?: URL): string {
  return lang === 'ru' ? fullRu(base(site)) : fullEn(base(site))
}

function libTable(lang: Lang): string {
  const n = (x: number) => groupInt(x, lang)
  const head = lang === 'ru'
    ? '| Пакет npm | Репозиторий | Загрузок всего | За последний месяц | Звёзд на GitHub |\n|---|---|---|---|---|'
    : '| npm package | Repository | All-time downloads | Last month | GitHub stars |\n|---|---|---|---|---|'
  const rows = ORDER.map((k) => {
    const p = P[k]
    return `| ${p.npm} | ${gh(p.repo)} | ${n(p.allTime)} | ${n(p.lastMonth)} | ${n(p.stars)} |`
  })
  return [head, ...rows].join('\n')
}

function fullEn(b: string): string {
  const n = (x: number) => groupInt(x, 'en')
  const g = P['gifted-chat']
  const asOf = stats.updatedAt
  const lastMonth = previousMonth(asOf)
  const peak = g.peakMonth!
  const start = g.series?.find(([m]) => m === '2024-08')?.[1] ?? 0
  const libs = ORDER.map((k) => `- ${P[k].npm}: ${DESC.en[k]} ${gh(P[k].repo)}`).join('\n')
  const sponsors = stats.sponsors.list.map((s) => `${s.name} (github.com/${s.login})`).join(', ')

  return `# Kesha Antonov: fact sheet

> Kesha (Innokenty) Antonov, Кеша (Иннокентий) Антонов. Lead software engineer, product manager and founder. Maintainer of react-native-gifted-chat. React Native libraries he maintains have ${n(stats.totals.allTime)} npm downloads in total; apps he built have about ${n(APPS_INSTALLS)} installs; ${CONTEST_WINS} prize places in Telegram developer contests.

Page: ${b}/ (Russian: ${b}/ru/). Russian version of this file: ${b}/ru/llms-full.txt

How to read this file:
- npm and GitHub numbers are fetched from the npm downloads API and the GitHub API at build time. As of ${asOf}.
- App store numbers come from App Store Connect, Google Play Console and RuStore, checked by hand on ${STORES_CHECKED}.
- Commit counts come from the git history of each project.
- Facts marked "reported" are stated by Kesha and have no public source.

## Who he is

- Full name: Innokenty Antonov. Goes by Kesha Antonov. Russian: Кеша Антонов, Иннокентий Антонов.
- Roles: lead software engineer, product manager, founder.
- Main stack: React Native (iOS, Android, Web), TypeScript, React, Ruby on Rails.
- Working since 2013. Launching his own products since 2015.
- Education: Master of technical cybernetics, Peter the Great St. Petersburg Polytechnic University, 2014.
- Positioning in his own words: "I take stalled products and make them grow."
- Languages of the site: English and Russian.

## Key numbers

- ${n(stats.totals.allTime)} all-time npm downloads across the 6 libraries he maintains. This includes Gifted Chat downloads from before his maintenance. Source: npm, as of ${asOf}.
- ${n(stats.totals.lastMonth)} npm downloads of those libraries in ${lastMonth}. Source: npm.
- ${n(g.sinceMaintenance ?? 0)} npm downloads of react-native-gifted-chat while he maintained it, 2024-08 to 2026-06. Source: npm.
- ${n(g.stars)} GitHub stars on react-native-gifted-chat. Source: GitHub, as of ${asOf}.
- About ${n(APPS_INSTALLS)} installs of apps he built, across Magisteria, CryptoC, SportSoul and sticker packs. Source: App Store Connect, Google Play, RuStore, checked ${STORES_CHECKED}.
- ${CONTEST_WINS} prize places in Telegram developer contests on contest.com.

## Open source

### react-native-gifted-chat (case study)

- Repository: ${gh(g.repo)}. npm: ${npmUrl(g.npm)}
- Before he took over, the library went 14 months without a release.
- He became its maintainer in August 2024 on his own initiative.
- Under his maintenance: 400+ commits and 26 releases (TypeScript, Reanimated, new architecture, keyboard handling, Web).
- Open issues went from 154 to 3.
- Monthly npm downloads went from ${n(start)} in 2024-08 to a peak of ${n(peak.value)} in ${peak.month}. Source: npm.
- In June 2026 he made the last feature release; development moved to his successor library @kesha-antonov/react-native-chat.

### Libraries

${libs}

npm downloads and stars, as of ${asOf} (last month = ${lastMonth}):

${libTable('en')}

### Code merged into other projects

Merged commits by GitHub user kesha-antonov in: ${upstream.map((u) => u.label).join(', ')}. Each list: https://github.com/OWNER/REPO/commits?author=kesha-antonov

### Sponsors

GitHub Sponsors: ${links.sponsor}. Paid sponsors as of ${asOf}: ${stats.sponsors.count} (${sponsors}).

## Client work

### Magisteria

- What: app with lectures, courses and audiobooks for iOS, macOS and Android.
- Role: the only engineer since 2018, ${n(4823)} commits. Also did product work: proposed features, set priorities, shipped them (reported).
- Built: audio player with offline downloads, in-app purchases, push notifications, deep links, the Library section (his idea, shipped in 2023). Runs on his libraries background-downloader and zoom-reanimated.
- 112K App Store downloads. Rating 4.9 from ${n(1269)} App Store ratings. Checked ${STORES_CHECKED}.
- The original Google Play listing had 90K+ installs (4.5 from 670 reviews); Google suspended it in 2026 and the app was republished as a new listing.
- Links: App Store ${apps.magisteria.appStore}, Google Play ${apps.magisteria.googlePlay}, RuStore ${apps.magisteria.ruStore}

### White-label patient app for medical networks (under NDA)

- What: one React Native codebase that ships a branded iOS and Android app for each clinic network: booking, medical records and lab results, chat and video consultations with doctors, payments, family profiles, biometric login, Russian, English and French.
- 26 clinic brands from one codebase.
- His main client since July 2019. ${n(5309)} of ${n(13488)} commits are his, the most of any contributor.
- He is also the product manager of the project: feature list, screen priorities, store reviews, releases for all 26 brands.
- Proposed and built alone a self-hosted video-call service on open source LiveKit to replace a paid video SDK licensed per clinic: no license fees, video module 54% lighter on iOS and 80% lighter on Android, one call screen for both platforms.
- Main author of the in-house chat package for patients and doctors: 410 of 994 commits since 2022.
- Built the open source React Native bridge for the video SDK used before: react-native-trueconf-sdk, 294 commits since 2019. ${gh('kesha-antonov/react-native-trueconf-sdk')}
- Client and clinic names are under NDA.

### Progulka v temnote

- Museum in Moscow where blind guides lead tours in complete darkness.
- Built the website with ticket booking and online payment, plus a custom CRM for tours, orders and guides.
- 20,000+ visitors in the first year.

### skill.surf

- Web studio he co-founded in 2018. Found clients, negotiated, led a designer and contract developers, wrote code.

## Own products (founder)

### CryptoC

- Crypto portfolio tracker for iOS, Android, Apple Watch, Wear OS, with widgets. Launched in 2017, relaunched in 2026 with subscriptions.
- He does its ASO himself: keyword research, competitor review analysis, store listings in 21 App Store and 18 Google Play locales plus RuStore.
- 31K App Store downloads (30.8K). Rating 4.4 from 639 ratings. Checked ${STORES_CHECKED}.
- Links: Google Play ${apps.cryptoc.googlePlay}, RuStore ${apps.cryptoc.ruStore}

### SportSoul

- Social network for people who do sport: find trainings, trainers and partners nearby. Founded in 2015.
- He built the whole web version on Rails (realtime chats, groups, games, trainings), then iOS and Android apps on the same backend. ${n(1668)} commits since 2015. Led a designer and an ASO specialist.
- 2018: got into the FRII startup accelerator (Internet Initiatives Development Fund, Moscow), mentoring track without investment; applied to the Ingria accelerator. Reported by Kesha.
- 9.8K App Store downloads. Ratings in 2018: 4.8 App Store, 4.7 Google Play.
- 10K+ users (reported).

### Farming game in Telegram (under NDA)

- Telegram Mini App on TON, 2024: boosts, tasks, friends and referrals, a rating, a TON Connect wallet.
- 400K users at peak (reported).
- His commits: backend 280 of 299, Telegram bot 19 of 19, frontend 120 of 259.

### Smaller products

- Achievement Diary (2017): printed goal planner. Designed the product and its pages, printed it in six cover colors, prepared a Boomstarter crowdfunding campaign.
- 1dbgym: fitness tracker as a Telegram Mini App with game mechanics and referrals.
- iMessage sticker packs Falling in Fall and Sports Sticker Pack: 3.2K downloads.

## Telegram developer contests

Entries on contest.com are anonymous; his entry name was "Busy Unicorn".

${contests.map((c) => `- ${CONTEST_NAMES[c.key]}: ${c.place}${c.place === 2 ? 'nd' : c.place === 3 ? 'rd' : 'th'} place, $${n(c.prize)} prize. ${c.url}`).join('\n')}

Telegram Fixes: fixed bugs, glitches and animations in Telegram's own apps. TON Blockchain Contest, Round 2: searched the new TON consensus algorithm for vulnerabilities (prize fund $100,400). JavaScript Chart (2019): fast interactive charts with no libraries.

## Timeline

- 2013-2015: Programmer at ЦНИИ РТК (TsNII RTK): web interface of a firewall management system.
- 2014: Master of technical cybernetics, Peter the Great St. Petersburg Polytechnic University.
- 2015: Founded SportSoul.
- 2017: Launched CryptoC. Achievement Diary.
- 2018: Co-founded skill.surf. Became the engineer of Magisteria.
- 2019: Started the white-label patient app for medical networks, his main client since. First Telegram contest win (JavaScript Chart).
- 2024: Took over react-native-gifted-chat (August). Built a farming game as a Telegram Mini App on TON.
- 2026: Launched react-native-chat. Relaunched CryptoC.

## How to hire him

- Open to: a lead engineer or product engineer role, a fractional engagement, or a focused project.
- Focus areas: chat and streaming message UIs, native modules for React Native, rescuing a stalled app, ASO for the App Store, Google Play and RuStore.
- Fastest contact: Telegram @kesha_antonov (${links.telegram}). He replies within a day.
- Email: innokenty.longway@gmail.com
- LinkedIn: ${links.linkedin}
- GitHub: ${links.github}
`
}

function fullRu(b: string): string {
  const n = (x: number) => groupInt(x, 'ru')
  const g = P['gifted-chat']
  const asOf = stats.updatedAt
  const lastMonth = previousMonth(asOf)
  const peak = g.peakMonth!
  const start = g.series?.find(([m]) => m === '2024-08')?.[1] ?? 0
  const libs = ORDER.map((k) => `- ${P[k].npm}: ${DESC.ru[k]} ${gh(P[k].repo)}`).join('\n')
  const sponsors = stats.sponsors.list.map((s) => `${s.name} (github.com/${s.login})`).join(', ')

  return `# Кеша Антонов: факты

> Кеша (Иннокентий) Антонов, Kesha (Innokenty) Antonov. Ведущий разработчик, продакт-менеджер, основатель. Мейнтейнер react-native-gifted-chat. Библиотеки React Native, которые он поддерживает, скачали из npm ${n(stats.totals.allTime)} раз; приложения, которые он сделал, установили около ${n(APPS_INSTALLS)} раз; ${CONTEST_WINS} призовых места в конкурсах Telegram для разработчиков.

Страница: ${b}/ru/ (английская версия: ${b}/). Английская версия этого файла: ${b}/llms-full.txt

Как читать этот файл:
- Цифры npm и GitHub берутся из API загрузок npm и API GitHub при сборке сайта. Данные на ${asOf}.
- Цифры сторов взяты из App Store Connect, Google Play Console и RuStore, проверены вручную ${STORES_CHECKED}.
- Число коммитов посчитано по истории git каждого проекта.
- Факты с пометкой "со слов автора" сообщил сам Кеша, публичного источника у них нет.

## Кто он

- Полное имя: Иннокентий Антонов. Обычно Кеша Антонов. По-английски: Kesha Antonov, Innokenty Antonov.
- Роли: ведущий разработчик, продакт-менеджер, основатель.
- Основной стек: React Native (iOS, Android, Web), TypeScript, React, Ruby on Rails.
- Работает с 2013 года. Запускает свои продукты с 2015 года.
- Образование: магистр технической кибернетики, СПбПУ Петра Великого, 2014.
- Позиционирование его словами: "Беру буксующие продукты и делаю так, чтобы они росли."

## Главные цифры

- ${n(stats.totals.allTime)} загрузок из npm за всё время у 6 библиотек, которые он поддерживает. Сюда входят загрузки Gifted Chat до начала его поддержки. Источник: npm, на ${asOf}.
- ${n(stats.totals.lastMonth)} загрузок этих библиотек из npm за ${lastMonth}. Источник: npm.
- ${n(g.sinceMaintenance ?? 0)} загрузок react-native-gifted-chat из npm за время его поддержки, 2024-08 - 2026-06. Источник: npm.
- ${n(g.stars)} звёзд у react-native-gifted-chat на GitHub. Источник: GitHub, на ${asOf}.
- Около ${n(APPS_INSTALLS)} установок приложений, которые он сделал: Магистерия, CryptoC, SportSoul и стикерпаки. Источник: App Store Connect, Google Play, RuStore, проверено ${STORES_CHECKED}.
- ${CONTEST_WINS} призовых места в конкурсах Telegram для разработчиков на contest.com.

## Open source

### react-native-gifted-chat (кейс)

- Репозиторий: ${gh(g.repo)}. npm: ${npmUrl(g.npm)}
- До него библиотека 14 месяцев жила без релизов.
- Стал мейнтейнером в августе 2024 года по своей инициативе.
- За время его поддержки: 400+ коммитов и 26 релизов (TypeScript, Reanimated, новая архитектура, клавиатура, Web).
- Открытых issues стало 3 вместо 154.
- Загрузки из npm в месяц выросли с ${n(start)} в 2024-08 до пика ${n(peak.value)} в ${peak.month}. Источник: npm.
- В июне 2026 года вышел последний релиз с новыми функциями; разработка перешла в его библиотеку-преемника @kesha-antonov/react-native-chat.

### Библиотеки

${libs}

Загрузки из npm и звёзды на GitHub на ${asOf} (последний месяц = ${lastMonth}):

${libTable('ru')}

### Код в других проектах

Принятые коммиты пользователя GitHub kesha-antonov в: ${upstream.map((u) => u.label).join(', ')}. Список для каждого: https://github.com/OWNER/REPO/commits?author=kesha-antonov

### Спонсоры

GitHub Sponsors: ${links.sponsor}. Платных спонсоров на ${asOf}: ${stats.sponsors.count} (${sponsors}).

## Клиентские проекты

### Магистерия

- Что это: приложение с лекциями, курсами и аудиокнигами для iOS, macOS и Android.
- Роль: единственный разработчик с 2018 года, ${n(4823)} коммита. Вёл и продуктовую работу: предлагал фичи, расставлял приоритеты, выпускал их (со слов автора).
- Сделал: аудиоплеер с офлайн-загрузками, встроенные покупки, пуши, диплинки, раздел Библиотека (его идея, вышел в 2023 году). Приложение работает на его библиотеках background-downloader и zoom-reanimated.
- 112 тыс. загрузок в App Store. Оценка 4.9 из ${n(1269)} оценок в App Store. Проверено ${STORES_CHECKED}.
- Первая версия в Google Play набрала 90 тыс.+ установок (4.5 из 670 отзывов); Google заблокировал её в 2026 году, приложение опубликовано заново.
- Ссылки: App Store ${apps.magisteria.appStore}, Google Play ${apps.magisteria.googlePlay}, RuStore ${apps.magisteria.ruStore}

### White-label приложение для пациентов медицинских сетей (под NDA)

- Что это: одна кодовая база на React Native, из которой для каждой сети клиник собирается своё приложение для iOS и Android: запись на приём, медкарта и анализы, чат и видеоконсультации с врачом, оплата, семейные профили, вход по биометрии, русский, английский и французский языки.
- 26 брендов клиник из одной кодовой базы.
- Его главный клиент с июля 2019 года. ${n(5309)} из ${n(13488)} коммитов его, больше, чем у любого другого участника.
- Он же продакт-менеджер проекта: список фич, приоритеты экранов, отзывы в сторах, релизы для всех 26 брендов.
- Предложил и в одиночку сделал свой сервис видеозвонков на открытом LiveKit вместо платного видео-SDK с лицензией на каждую клинику: без лицензионных платежей, видеочасть легче на 54% на iOS и на 80% на Android, один экран звонка на обе платформы.
- Основной автор собственного пакета чата для пациентов и врачей: 410 из 994 коммитов с 2022 года.
- Сделал open source мост React Native для видео-SDK, который использовался раньше: react-native-trueconf-sdk, 294 коммита с 2019 года. ${gh('kesha-antonov/react-native-trueconf-sdk')}
- Названия клиента и клиник под NDA.

### Прогулка в темноте

- Музей в Москве, где незрячие гиды водят экскурсии в полной темноте.
- Сделал сайт с бронированием и онлайн-оплатой билетов и свою CRM для экскурсий, заказов и гидов.
- 20 тыс.+ посетителей за первый год.

### skill.surf

- Веб-студия, сооснователь, 2018 год. Искал клиентов, вёл переговоры, руководил дизайнером и наёмными разработчиками, писал код.

## Свои продукты (основатель)

### CryptoC

- Трекер криптопортфеля для iOS, Android, Apple Watch, Wear OS, с виджетами. Запущен в 2017 году, перезапущен в 2026 году с подписками.
- ASO делает сам: подбор ключевых слов, разбор отзывов конкурентов, страницы в сторах на 21 языке в App Store, 18 в Google Play и в RuStore.
- 31 тыс. загрузок в App Store (30.8 тыс.). Оценка 4.4 из 639 оценок. Проверено ${STORES_CHECKED}.
- Ссылки: Google Play ${apps.cryptoc.googlePlay}, RuStore ${apps.cryptoc.ruStore}

### SportSoul

- Соцсеть для тех, кто занимается спортом: поиск тренировок, тренеров и партнёров рядом. Основана в 2015 году.
- Сделал всю веб-версию на Rails (чаты в реальном времени, группы, игры, тренировки), потом приложения для iOS и Android на том же бэкенде. ${n(1668)} коммитов с 2015 года. Руководил дизайнером и ASO-специалистом.
- 2018: попал в заочный акселератор ФРИИ (Фонд развития интернет-инициатив, Москва), менторская программа без инвестиций, подавал заявку в акселератор Ингрия. Со слов автора.
- 9.8 тыс. загрузок в App Store. Оценки в 2018 году: 4.8 в App Store, 4.7 в Google Play.
- 10 тыс.+ пользователей (со слов автора).

### Игра-ферма в Telegram (под NDA)

- Telegram Mini App на TON, 2024 год: бусты, задания, друзья и рефералы, рейтинг, кошелёк через TON Connect.
- 400 тыс. пользователей на пике (со слов автора).
- Его коммиты: бэкенд 280 из 299, Telegram-бот 19 из 19, фронтенд 120 из 259.

### Небольшие продукты

- Ежедневник достижений (2017): бумажный планер для целей. Придумал продукт и развороты, напечатал в шести цветах обложки, подготовил краудфандинг на Boomstarter.
- 1dbgym: фитнес-трекер в Telegram Mini App с игровой механикой и рефералами.
- Стикерпаки для iMessage Falling in Fall и Sports Sticker Pack: 3.2 тыс. загрузок.

## Конкурсы Telegram для разработчиков

Работы на contest.com анонимны; его работа называлась "Busy Unicorn".

${contests.map((c) => `- ${CONTEST_NAMES[c.key]}: ${c.place} место, приз ${n(c.prize)} USD. ${c.url}`).join('\n')}

Telegram Fixes: исправлял баги, глитчи и анимации в приложениях самого Telegram. TON Blockchain Contest, Round 2: искал уязвимости в новом алгоритме консенсуса TON (призовой фонд ${n(100400)} USD). JavaScript Chart (2019): быстрые интерактивные графики без библиотек.

## Хронология

- 2013-2015: программист в ЦНИИ РТК: веб-интерфейс системы управления межсетевыми экранами.
- 2014: магистр технической кибернетики, СПбПУ Петра Великого.
- 2015: основал SportSoul.
- 2017: запустил CryptoC. Ежедневник достижений.
- 2018: сооснователь студии skill.surf. Стал разработчиком Магистерии.
- 2019: начал white-label приложение для пациентов медицинских сетей, с тех пор это главный клиент. Первая победа в конкурсе Telegram (JavaScript Chart).
- 2024: взял на поддержку react-native-gifted-chat (август). Сделал игру-ферму в Telegram Mini App на TON.
- 2026: запустил react-native-chat. Перезапустил CryptoC.

## Как нанять

- Открыт для: роли ведущего разработчика или продуктового инженера, частичной занятости или отдельного проекта.
- Направления: чаты и интерфейсы с потоковым выводом сообщений, нативные модули для React Native, спасение буксующего приложения, ASO для App Store, Google Play и RuStore.
- Быстрее всего: Telegram @kesha_antonov (${links.telegram}). Отвечает в течение дня.
- Почта: innokenty.longway@gmail.com
- LinkedIn: ${links.linkedin}
- GitHub: ${links.github}
`
}
