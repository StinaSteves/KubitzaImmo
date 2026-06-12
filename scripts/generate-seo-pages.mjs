import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'

const distDirectory = resolve('dist')
const template = await readFile(resolve(distDirectory, 'index.html'), 'utf8')
const siteUrl = 'https://www.kubitza-immobilien.de'

const pages = [
  {
    route: 'aktuelle-projekte/recklinghausen',
    title: 'Eigentumswohnungen in Recklinghausen | Kubitza Immobilien',
    description:
      'Seniorengerechte Eigentumswohnungen in Recklinghausen kaufen: Quartiersentwicklung St. Markus mit Aufzug, Tiefgarage und KfW-40-Standard.',
    image: `${siteUrl}/recklinghausen/Luftbild_Hinten_Web.jpg`,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ApartmentComplex',
      name: 'Eigentumswohnungen in Recklinghausen – St. Markus',
      description:
        'Seniorengerechte Eigentumswohnungen mit Aufzug und Tiefgarage in Recklinghausen.',
      url: `${siteUrl}/aktuelle-projekte/recklinghausen`,
      image: `${siteUrl}/recklinghausen/Luftbild_Hinten_Web.jpg`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Prof.-Schulte-Straße',
        addressLocality: 'Recklinghausen',
        addressCountry: 'DE',
      },
    },
  },
  {
    route: 'aktuelle-projekte/altenessen-mitte',
    title: 'Wohnungen in Altenessen-Mitte | Kubitza Immobilien',
    description:
      'Neubauprojekt in Essen-Altenessen mit Edeka-Markt, Tiefgarage sowie sozial geförderten und frei finanzierten Wohnungen.',
    image: `${siteUrl}/altenessen/PerspektiveAltenessen_Web.jpg`,
  },
  {
    route: 'impressum',
    title: 'Impressum | Kubitza Immobilien',
    description:
      'Impressum und Anbieterinformationen der Kubitza Immobilien GmbH.',
  },
  {
    route: 'datenschutz',
    title: 'Datenschutz | Kubitza Immobilien',
    description: 'Datenschutzerklärung der Kubitza Immobilien GmbH.',
  },
]

function replaceMeta(html, selector, content) {
  const [attribute, value] = selector
  const pattern = new RegExp(
    `<meta\\s+${attribute}="${value}"[\\s\\S]*?\\/?>`,
    'i',
  )

  return html.replace(
    pattern,
    `<meta ${attribute}="${value}" content="${content}" />`,
  )
}

function createPage({
  route,
  title,
  description,
  image = `${siteUrl}/recklinghausen/Luftbild_Hinten_Web.jpg`,
  structuredData,
}) {
  const canonical = `${siteUrl}/${route}`
  let html = template.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`)

  html = replaceMeta(html, ['name', 'description'], description)
  html = replaceMeta(html, ['property', 'og:title'], title)
  html = replaceMeta(html, ['property', 'og:description'], description)
  html = replaceMeta(html, ['property', 'og:url'], canonical)
  html = replaceMeta(html, ['property', 'og:image'], image)
  html = replaceMeta(html, ['name', 'twitter:title'], title)
  html = replaceMeta(html, ['name', 'twitter:description'], description)
  html = replaceMeta(html, ['name', 'twitter:image'], image)
  html = html.replace(
    /<link\s+rel="canonical"[\s\S]*?\/?>/i,
    `<link rel="canonical" href="${canonical}" />`,
  )

  if (structuredData) {
    html = html.replace(
      '</head>',
      `    <script type="application/ld+json">${JSON.stringify(structuredData)}</script>\n  </head>`,
    )
  }

  return html
}

for (const page of pages) {
  const outputPath = resolve(distDirectory, page.route, 'index.html')
  await mkdir(dirname(outputPath), { recursive: true })
  await writeFile(outputPath, createPage(page))
}
