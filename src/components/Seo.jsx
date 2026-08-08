import { useEffect } from 'react'
import siteUrl from './seoConfig'

const defaultImage = `${siteUrl}/recklinghausen/260804_Luftbild_Hinten_Web.jpg`

function setMeta(selector, attributes) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([attribute, value]) => {
    element.setAttribute(attribute, value)
  })
}

function Seo({
  title,
  description,
  path = '/',
  image = defaultImage,
  robots = 'index, follow',
  structuredData,
}) {
  useEffect(() => {
    const canonicalUrl = new URL(path, siteUrl).toString()
    const imageUrl = image.startsWith('http')
      ? image
      : new URL(image, siteUrl).toString()

    document.title = title

    setMeta('meta[name="description"]', {
      name: 'description',
      content: description,
    })
    setMeta('meta[name="robots"]', { name: 'robots', content: robots })
    setMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: title,
    })
    setMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    })
    setMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website',
    })
    setMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: canonicalUrl,
    })
    setMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: imageUrl,
    })
    setMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    })
    setMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: title,
    })
    setMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description,
    })
    setMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: imageUrl,
    })

    let canonical = document.head.querySelector('link[rel="canonical"]')

    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }

    canonical.setAttribute('href', canonicalUrl)

    const previousStructuredData = document.getElementById(
      'page-structured-data',
    )
    previousStructuredData?.remove()

    if (structuredData) {
      const script = document.createElement('script')
      script.id = 'page-structured-data'
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(structuredData)
      document.head.appendChild(script)
    }
  }, [description, image, path, robots, structuredData, title])

  return null
}

export default Seo
