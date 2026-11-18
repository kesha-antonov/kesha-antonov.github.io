// Search snippet and structured data for the hire page.
import stats from './stats.json'
import { compact, langPath, type Lang } from './langs'
import { hire, HIRE_PATH } from './hire'

export function hireMeta(lang: Lang) {
  const h = hire[lang]
  const fill = (s: string) => s.replace('{npm}', compact(stats.totals.allTime, lang))
  return {
    path: HIRE_PATH,
    title: h.meta.title,
    description: fill(h.meta.description),
    graph: ({ personId, websiteId, pageUrl }: { personId: string; websiteId: string; pageUrl: string }) => [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: h.meta.title,
        description: fill(h.meta.description),
        inLanguage: lang,
        isPartOf: { '@id': websiteId },
        about: { '@id': personId },
        dateModified: stats.updatedAt,
        breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
        mainEntity: { '@id': `${pageUrl}#service` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Kesha Antonov', item: new URL(langPath(lang), pageUrl).href },
          { '@type': 'ListItem', position: 2, name: h.crumb, item: pageUrl },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: h.hero.title,
        serviceType: 'React Native app development',
        description: h.hero.sub,
        url: pageUrl,
        provider: { '@id': personId },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: h.services.title,
          itemListElement: h.services.items.map((x) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: x.h, description: x.p },
          })),
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        inLanguage: lang,
        mainEntity: h.faq.items.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: fill(f.a) },
        })),
      },
    ],
  }
}
