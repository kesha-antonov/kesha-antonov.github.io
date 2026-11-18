// Every language besides English and Russian: one file per language, each with the two
// dictionaries (the home page and the hire page) in the shape of the English ones.
import type { Dict } from '../content'
import type { Hire } from '../hire'
import type { Lang } from '../langs'
import * as es from './es'
import * as pt from './pt'
import * as de from './de'
import * as fr from './fr'
import * as it from './it'
import * as nl from './nl'
import * as da from './da'
import * as fi from './fi'
import * as tr from './tr'
import * as ja from './ja'
import * as ko from './ko'
import * as zhHant from './zh-Hant'
import * as zhHans from './zh-Hans'
import * as he from './he'
import * as ar from './ar'

type Other = Exclude<Lang, 'en' | 'ru'>

const files: Partial<Record<Other, { content: Dict; hire: Hire }>> = { es, pt, de, fr, it, nl, da, fi, tr, ja, ko, 'zh-Hant': zhHant, 'zh-Hans': zhHans, he, ar }

export const locales = {
  content: Object.fromEntries(Object.entries(files).map(([l, f]) => [l, f.content])) as Partial<Record<Other, Dict>>,
  hire: Object.fromEntries(Object.entries(files).map(([l, f]) => [l, f.hire])) as Partial<Record<Other, Hire>>,
}
