const recklinghausenImage = `${import.meta.env.BASE_URL}recklinghausen/Luftbild_Hinten_Web.jpg`
const recklinghausenLageplan = `${import.meta.env.BASE_URL}recklinghausen/recklinghausen_lageplan.png`
const recklinghausenFrontImage = `${import.meta.env.BASE_URL}recklinghausen/Luftbild_Vorne_Web.jpg`
const haus1StreetImage = `${import.meta.env.BASE_URL}recklinghausen/1_Strasse_Web.jpg`
const haus1GardenImage = `${import.meta.env.BASE_URL}recklinghausen/1_Garten_Web.jpg`
const haus2StreetImage = `${import.meta.env.BASE_URL}recklinghausen/2_Strasse_Web.jpg`
const haus2GardenImage = `${import.meta.env.BASE_URL}recklinghausen/2_Garten_Web.jpg`
const altenessenImage = `${import.meta.env.BASE_URL}altenessen/PerspektiveAltenessen_Web.jpg`
const altenessenLageplan = `${import.meta.env.BASE_URL}altenessen/LageplanAltenessen.jpg`

const house1ApartmentRows = [
  {
    type: 'WOHNUNG',
    number: '1',
    location: 'EG mit Terrasse u. Garten',
    rooms: '3,5 Raum',
    area: '101,28 qm',
  },
  {
    type: 'WOHNUNG',
    number: '2',
    location: 'EG mit Terrasse u. Garten',
    rooms: '2,5 Raum',
    area: '71,03 qm',
  },
  {
    type: 'WOHNUNG',
    number: '3',
    location: 'EG mit Terrasse u. Garten',
    rooms: '3,5 Raum',
    area: '99,04 qm',
  },
  {
    type: 'WOHNUNG',
    number: '4',
    location: 'OG mit Balkon',
    rooms: '3,5 Raum',
    area: '101,91 qm',
  },
  {
    type: 'WOHNUNG',
    number: '5',
    location: 'OG mit Balkon',
    rooms: '2,5 Raum',
    area: '70,76 qm',
  },
  {
    type: 'WOHNUNG',
    number: '6',
    location: 'OG mit Balkon',
    rooms: '3,5 Raum',
    area: '99,15 qm',
  },
  {
    type: 'WOHNUNG',
    number: '7',
    location: 'Penthouse mit Dachterrasse',
    rooms: '3,5 Raum',
    area: '102,54 qm',
  },
  {
    type: 'WOHNUNG',
    number: '8',
    location: 'Penthouse mit Dachterrasse',
    rooms: '3,5 Raum',
    area: '108,74 qm',
  },
].map((apartment) => ({
  ...apartment,
  price: 'Preis auf Anfrage',
}))

const apartmentRows = [
  {
    type: 'WOHNUNG',
    number: '1',
    location: 'EG mit Terrasse u. Garten',
    rooms: '3,5 Raum',
    area: '96,68 qm',
    price: 'Preis auf Anfrage',
  },
  {
    type: 'WOHNUNG',
    number: '2',
    location: 'EG mit Terrasse u. Garten',
    rooms: '3,5 Raum',
    area: '94,36 qm',
    price: 'Preis auf Anfrage',
  },
  {
    type: 'WOHNUNG',
    number: '3',
    location: 'EG mit Terrasse u. Garten',
    rooms: '3,5 Raum',
    area: '82,29 qm',
    price: 'Preis auf Anfrage',
  },
  {
    type: 'WOHNUNG',
    number: '4',
    location: 'EG mit Terrasse u. Garten',
    rooms: '3,5 Raum',
    area: '106,60 qm',
    price: 'Preis auf Anfrage',
  },
  {
    type: 'WOHNUNG',
    number: '5',
    location: 'OG mit Balkon',
    rooms: '3,5 Raum',
    area: '96,92 qm',
    price: 'Preis auf Anfrage',
  },
  {
    type: 'WOHNUNG',
    number: '6',
    location: 'OG mit Balkon',
    rooms: '3,5 Raum',
    area: '94,54 qm',
    price: 'Preis auf Anfrage',
  },
  {
    type: 'WOHNUNG',
    number: '7',
    location: 'OG mit Balkon',
    rooms: '3,5 Raum',
    area: '81,83 qm',
    price: 'Preis auf Anfrage',
  },
  {
    type: 'WOHNUNG',
    number: '8',
    location: 'OG mit Balkon',
    rooms: '3,5 Raum',
    area: '106,26 qm',
    price: 'Preis auf Anfrage',
  },
  {
    type: 'WOHNUNG',
    number: '9',
    location: 'Penthouse mit Dachterrasse',
    rooms: '3,5 Raum',
    area: '89,08 qm',
    price: 'Preis auf Anfrage',
  },
  {
    type: 'WOHNUNG',
    number: '10',
    location: 'Penthouse mit Dachterrasse',
    rooms: '3,5 Raum',
    area: '95,15 qm',
    price: 'Preis auf Anfrage',
  },
  {
    type: 'WOHNUNG',
    number: '11',
    location: 'Penthouse mit Dachterrasse',
    rooms: '3,5 Raum',
    area: '163,94 qm',
    price: 'Preis auf Anfrage',
  },
]

const recklinghausenHouses = [
  {
    id: 'haus-1',
    label: 'Haus 1',
    introImage: haus1StreetImage,
    introText: 'Exklusive Stadtvilla mit 8 Wohneinheiten',
    tableImage: haus1GardenImage,
    facts: [
      ['Wohnflaeche', 'ca. 142 m2'],
      ['Zimmer', '5'],
      ['Grundstueck', 'ca. 320 m2'],
      ['Status', 'in Planung'],
    ],
    apartments: house1ApartmentRows.map((apartment) => ({
      ...apartment,
      exposeUrl: haus1StreetImage,
    })),
    parkingPrice: 'Preis auf Anfrage',
    closingText:
      '8 Seniorengerechte Wohnungen mit Aufzug und Tiefgarage, an der Prof.- Schulte- Straße. Zufahrt Tiefgarage, vom Westerholter Weg. Das Projekt wird ein Klimafreundlicher Neubau und im KFW 40 Standard errichtet. Sichern Sie sich bis zu 100.000,- € zinsverbilligte Kredite von der KFW.',
    priceNote: 'Kaufpreise ab 4.490 € pro qm',
    exposeUrl: haus1StreetImage,
    lageplanUrl: recklinghausenLageplan,
  },
  {
    id: 'haus-2',
    label: 'Haus 2',
    introImage: haus2StreetImage,
    introText: 'Exklusive Stadtvilla mit 11 Wohneinheiten',
    tableImage: haus2GardenImage,
    facts: [
      ['Wohnflaeche', 'ca. 128 m2'],
      ['Zimmer', '4'],
      ['Grundstueck', 'ca. 285 m2'],
      ['Status', 'verfuegbar'],
    ],
    apartments: apartmentRows.map((apartment) => ({
      ...apartment,
      exposeUrl: haus2StreetImage,
    })),
    parkingPrice: 'Preis auf Anfrage',
    closingText:
      '11 exklusive seniorengerechte Wohnungen mit Aufzug und Tiefgarage, an der Prof.- Schulte- Straße. Zufahrt Tiefgarage, vom Westerholter Weg. Das Projekt wird ein Klimafreundlicher Neubau und im KFW 40 Standard errichtet. Sichern Sie sich bis zu 100.000,- € zinsverbilligte Kredite von der KFW.',
    priceNote: 'Kaufpreise ab 4.490 € pro qm',
    exposeUrl: haus2StreetImage,
    lageplanUrl: recklinghausenLageplan,
  },
  {
    id: 'haus-3',
    label: 'Haus 3',
    introImage: haus1StreetImage,
    introText: 'Exklusive Stadtvilla mit 8 Wohneinheiten',
    tableImage: haus1GardenImage,
    facts: [
      ['Wohnflaeche', 'ca. 142 m2'],
      ['Zimmer', '5'],
      ['Grundstueck', 'ca. 320 m2'],
      ['Status', 'in Planung'],
    ],
    apartments: house1ApartmentRows.map((apartment) => ({
      ...apartment,
      exposeUrl: haus1StreetImage,
    })),
    parkingPrice: 'Preis auf Anfrage',
    closingText:
      '8 Seniorengerechte Wohnungen mit Aufzug und Tiefgarage, an der Prof.- Schulte- Straße. Zufahrt Tiefgarage, vom Westerholter Weg. Das Projekt wird ein Klimafreundlicher Neubau und im KFW 40 Standard errichtet. Sichern Sie sich bis zu 100.000,- € zinsverbilligte Kredite von der KFW.',
    priceNote: 'Kaufpreise ab 4.490 € pro qm',
    exposeUrl: haus1StreetImage,
    lageplanUrl: recklinghausenLageplan,
  },
  {
    id: 'haus-4',
    label: 'Haus 4',
    introImage: haus2StreetImage,
    tableImage: haus2GardenImage,
    contentSections: [
      {
        text: [
          '2 Demenz-WGs mit 24 Wohn- bzw. Pflegeplätzen. Betreiber: Diakonisches Werk in Recklinghausen e. V.',
          '1 Intensivpflege mit 8 Pflegeplätzen. Betreiber: 360 Grad.',
        ],
      },
      {
        heading: 'Kirche/Kita',
        text: [
          'In die Kirche St. Markus bauen wir eine 4-zügige Kita für 85 Kinder.',
          'Eine 115 qm große 3,5-Raum-Wohnung mit separatem Eingang inklusive Balkon. Komplett neu saniert mit Oberböden und Tapezierarbeiten. Vermietung: 13 € pro qm, Garage: 90 €.',
        ],
      },
      {
        text: ['Wir bauen eine neue Tagespflege mit 9 Betreuungsplätzen.'],
      },
    ],
    apartments: [],
  },
]

const projectsData = [
  {
    slug: 'recklinghausen',
    image: recklinghausenImage,
    galleryImages: [
      {
        src: recklinghausenImage,
        alt: 'Luftbild des Projekts Recklinghausen von hinten',
        cropEdges: true,
      },
      {
        src: recklinghausenLageplan,
        alt: 'Lageplan der Quartiersentwicklung St. Markus',
      },
      {
        src: recklinghausenFrontImage,
        alt: 'Luftbild des Projekts Recklinghausen von vorne',
      },
    ],
    title: 'Recklinghausen',
    detailTitle: 'Eigentumswohnungen in Recklinghausen',
    seoTitle: 'Eigentumswohnungen in Recklinghausen | Kubitza Immobilien',
    seoDescription:
      'Seniorengerechte Eigentumswohnungen in Recklinghausen kaufen: Quartiersentwicklung St. Markus mit Aufzug, Tiefgarage und KfW-40-Standard.',
    seoImage: '/recklinghausen/Luftbild_Hinten_Web.jpg',
    description: [
      'Seniorengerechte Eigentumswohnungen in Recklinghausen an der Prof.-Schulte-Straße',
      'Quartiersentwicklung St. Markus mit Aufzug, Tiefgarage, Kirche, Kita und Pflegeangeboten',
    ],
    houses: recklinghausenHouses,
  },
  {
    slug: 'altenessen-mitte',
    aliases: ['EINGANGSTOR ZUM STADTKERN ALTENESSEN-MITTE'],
    image: altenessenImage,
    galleryImages: [
      {
        src: altenessenImage,
        alt: 'Perspektivansicht des Projekts Altenessen-Mitte',
      },
      {
        src: altenessenLageplan,
        alt: 'Lageplan des Projekts Altenessen-Mitte',
      },
    ],
    title: 'EINGANGSTOR ZUM STADTKERN ALTENESSEN-MITTE',
    detailTitle: 'Neubauprojekt Altenessen-Mitte',
    seoTitle: 'Wohnungen in Altenessen-Mitte | Kubitza Immobilien',
    seoDescription:
      'Neubauprojekt in Essen-Altenessen mit Edeka-Markt, Tiefgarage sowie sozial geförderten und frei finanzierten Wohnungen.',
    seoImage: '/altenessen/PerspektiveAltenessen_Web.jpg',
    description: [
      'Edeka-Markt mit 90 Stellplätzen und 38 sozialgeförderte sowie 10 freifinanzierte Wohnungen inkl. Tiefgarage',
      'Neubauprojekt an der Wilhelm-Nieswandt-Allee',
    ],
    houses: [
      {
        ...recklinghausenHouses[0],
        id: 'altenessen-mitte',
        label: 'Altenessen-Mitte',
        introImage: altenessenImage,
        introText:
          'In Abstimmung mit der Stadt Essen erstellen wir aktuell einen Bebauungsplan für dieses Projekt.',
        tableImage: altenessenLageplan,
        closingText: '',
        apartments: [],
      },
    ],
  },
]

export default projectsData
