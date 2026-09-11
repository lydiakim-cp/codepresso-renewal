import { parse } from 'parse5'
import insightLinks from '../../data/insight-links.json'

type HtmlNode = {
  attrs?: Array<{ name: string; value: string }>
  childNodes?: HtmlNode[]
  nodeName?: string
  tagName?: string
  value?: string
}

type Insight = {
  url: string
  title: string
  image: string
  date: string
  category: string
}

const PLACEHOLDER_IMAGE = '/images/insight-placeholder.svg'

function walk(node: HtmlNode, visit: (node: HtmlNode) => void) {
  visit(node)
  node.childNodes?.forEach(child => walk(child, visit))
}

function attributes(node: HtmlNode) {
  return Object.fromEntries((node.attrs ?? []).map(({ name, value }) => [name.toLowerCase(), value]))
}

function textContent(node: HtmlNode): string {
  return node.nodeName === '#text'
    ? node.value ?? ''
    : (node.childNodes ?? []).map(textContent).join('')
}

function normalizeDate(value = '') {
  const timestamp = Date.parse(value)
  return Number.isNaN(timestamp) ? '' : new Date(timestamp).toISOString().slice(0, 10)
}

function dateFromUrl(url: string) {
  const match = url.match(/(?:19|20)\d{6}/)
  if (!match) return ''
  const value = match[0]
  return normalizeDate(`${value.slice(0, 4)}-${value.slice(4, 6)}-${value.slice(6, 8)}`)
}

function findStructuredArticle(value: unknown): Record<string, unknown> | undefined {
  if (Array.isArray(value)) {
    return value.map(findStructuredArticle).find(Boolean)
  }
  if (!value || typeof value !== 'object') return undefined

  const record = value as Record<string, unknown>
  const type = Array.isArray(record['@type']) ? record['@type'] : [record['@type']]
  if (type.some(item => typeof item === 'string' && /article|news/i.test(item))) return record

  return Object.values(record).map(findStructuredArticle).find(Boolean)
}

function structuredImage(value: unknown) {
  const candidate = Array.isArray(value) ? value[0] : value
  if (typeof candidate === 'string') return candidate
  if (candidate && typeof candidate === 'object') {
    const url = (candidate as Record<string, unknown>).url
    if (typeof url === 'string') return url
  }
  return ''
}

function readMetadata(html: string, url: string): Insight {
  const document = parse(html) as HtmlNode
  const metadata = new Map<string, string>()
  let documentTitle = ''
  let structuredArticle: Record<string, unknown> | undefined

  walk(document, (node) => {
    if (node.tagName === 'meta') {
      const attrs = attributes(node)
      const key = (attrs.property || attrs.name || attrs.itemprop || '').toLowerCase()
      if (key && attrs.content && !metadata.has(key)) metadata.set(key, attrs.content.trim())
    }
    if (node.tagName === 'title' && !documentTitle) documentTitle = textContent(node).trim()
    if (node.tagName === 'script' && attributes(node).type?.toLowerCase() === 'application/ld+json') {
      try {
        structuredArticle ||= findStructuredArticle(JSON.parse(textContent(node)))
      } catch {
        // 일부 언론사의 유효하지 않은 JSON-LD는 다른 메타데이터로 보완한다.
      }
    }
  })

  const published = [
    'article:published_time',
    'datepublished',
    'date',
    'pubdate',
    'datecreated',
  ].map(key => metadata.get(key)).find(Boolean)
  const structuredTitle = structuredArticle?.headline
  const structuredDate = structuredArticle?.datePublished
  const structuredSection = structuredArticle?.articleSection
  const rawImage = metadata.get('og:image') || metadata.get('twitter:image') || structuredImage(structuredArticle?.image)

  return {
    url,
    title: metadata.get('og:title') || metadata.get('twitter:title') || (typeof structuredTitle === 'string' ? structuredTitle : '') || documentTitle || new URL(url).hostname,
    image: rawImage ? new URL(rawImage, url).href : PLACEHOLDER_IMAGE,
    date: normalizeDate(published || (typeof structuredDate === 'string' ? structuredDate : '')) || dateFromUrl(url),
    category: metadata.get('article:section') || (typeof structuredSection === 'string' ? structuredSection : '') || '뉴스',
  }
}

async function fetchInsight(url: string): Promise<Insight> {
  try {
    const html = await $fetch<string>(url, {
      responseType: 'text',
      timeout: 8000,
      headers: { 'user-agent': 'Mozilla/5.0 (compatible; CodepressoInsightBot/1.0)' },
    })
    return readMetadata(html, url)
  } catch {
    return {
      url,
      title: new URL(url).hostname,
      image: PLACEHOLDER_IMAGE,
      date: dateFromUrl(url),
      category: '뉴스',
    }
  }
}

export default cachedEventHandler(async () => {
  const insights = await Promise.all(insightLinks.map(fetchInsight))
  return insights.sort((a, b) => b.date.localeCompare(a.date))
}, {
  maxAge: 60 * 60,
  name: 'home-insights',
})
