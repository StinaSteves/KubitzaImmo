const recklinghausenImage = `${import.meta.env.BASE_URL}recklinghausen/Luftbild_Hinten_Web.jpg`
const recklinghausenLageplan = `${import.meta.env.BASE_URL}recklinghausen/recklinghausen_lageplan.png`
const recklinghausenFrontImage = `${import.meta.env.BASE_URL}recklinghausen/Luftbild_Vorne_Web.jpg`
const haus1StreetImage = `${import.meta.env.BASE_URL}recklinghausen/1_Strasse_Web.jpg`
const haus1GardenImage = `${import.meta.env.BASE_URL}recklinghausen/1_Garten_Web.jpg`
const haus2StreetImage = `${import.meta.env.BASE_URL}recklinghausen/2_Strasse_Web.jpg`
const haus2GardenImage = `${import.meta.env.BASE_URL}recklinghausen/2_Garten_Web.jpg`
const haus4FrontImage = `${import.meta.env.BASE_URL}recklinghausen/Haus4_vorne.jpg`
const haus4BackImage = `${import.meta.env.BASE_URL}recklinghausen/Haus4_hinten.jpg`
const kircheAerialImage = `${import.meta.env.BASE_URL}recklinghausen/Kita_Luftbild.jpg`
const kircheSitePlanImage = `${import.meta.env.BASE_URL}recklinghausen/Kita_Lageplan.jpg`
const kitaFrontImage = `${import.meta.env.BASE_URL}recklinghausen/Kita_ohne_Mauer.jpg`
const kitaBackImage = `${import.meta.env.BASE_URL}recklinghausen/Kita_hinten.jpg`
const grossTagespflegeImage = `${import.meta.env.BASE_URL}recklinghausen/gross-tagespflege.jpeg`
const apartmentAerialImage = `${import.meta.env.BASE_URL}recklinghausen/Luft_Wohnung.jpg`
const apartmentFloorPlanImage = `${import.meta.env.BASE_URL}recklinghausen/Wohnung_grundriss.jpg`
const altenessenImage = `${import.meta.env.BASE_URL}altenessen/PerspektiveAltenessen_Web.jpg`
const altenessenLageplan = `${import.meta.env.BASE_URL}altenessen/LageplanAltenessen.jpg`

const house1ApartmentRows = [
  {
    type: 'WOHNUNG',
    number: '1',
    location: 'EG mit Terrasse u. Garten',
    rooms: '3,5 Raum',
    area: '101,54 qm',
  },
  {
    type: 'WOHNUNG',
    number: '2',
    location: 'EG mit Terrasse u. Garten',
    rooms: '2,5 Raum',
    area: '70,57 qm',
  },
  {
    type: 'WOHNUNG',
    number: '3',
    location: 'EG mit Terrasse u. Garten',
    rooms: '3,5 Raum',
    area: '98,99 qm',
  },
  {
    type: 'WOHNUNG',
    number: '4',
    location: 'OG mit Balkon',
    rooms: '3,5 Raum',
    area: '101,12 qm',
  },
  {
    type: 'WOHNUNG',
    number: '5',
    location: 'OG mit Balkon',
    rooms: '2,5 Raum',
    area: '70,44 qm',
  },
  {
    type: 'WOHNUNG',
    number: '6',
    location: 'OG mit Balkon',
    rooms: '3,5 Raum',
    area: '98,74 qm',
  },
  {
    type: 'WOHNUNG',
    number: '7',
    location: 'Penthouse mit Dachterrasse',
    rooms: '3,5 Raum',
    area: '102,22 qm',
  },
  {
    type: 'WOHNUNG',
    number: '8',
    location: 'Penthouse mit Dachterrasse',
    rooms: '3,5 Raum',
    area: '109,62 qm',
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
    area: '96,81 qm',
    price: 'Preis auf Anfrage',
  },
  {
    type: 'WOHNUNG',
    number: '2',
    location: 'EG mit Terrasse u. Garten',
    rooms: '3,5 Raum',
    area: '91,32 qm',
    price: 'Preis auf Anfrage',
  },
  {
    type: 'WOHNUNG',
    number: '3',
    location: 'EG mit Terrasse u. Garten',
    rooms: '3,5 Raum',
    area: '82,23 qm',
    price: 'Preis auf Anfrage',
  },
  {
    type: 'WOHNUNG',
    number: '4',
    location: 'EG mit Terrasse u. Garten',
    rooms: '3,5 Raum',
    area: '106,16 qm',
    price: 'Preis auf Anfrage',
  },
  {
    type: 'WOHNUNG',
    number: '5',
    location: 'OG mit Balkon',
    rooms: '3,5 Raum',
    area: '96,54 qm',
    price: 'Preis auf Anfrage',
  },
  {
    type: 'WOHNUNG',
    number: '6',
    location: 'OG mit Balkon',
    rooms: '3,5 Raum',
    area: '91,30 qm',
    price: 'Preis auf Anfrage',
  },
  {
    type: 'WOHNUNG',
    number: '7',
    location: 'OG mit Balkon',
    rooms: '3,5 Raum',
    area: '106,18 qm',
    price: 'Preis auf Anfrage',
  },
  {
    type: 'WOHNUNG',
    number: '8',
    location: 'OG mit Balkon',
    rooms: '3,5 Raum',
    area: '82,30 qm',
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

const house4ApartmentRows = [
  {
    type: 'WOHNUNG',
    number: '1',
    location: '2. OG mit Loggia',
    rooms: '2,5 Raum',
    area: '66,74 qm',
  },
  {
    type: 'WOHNUNG',
    number: '2',
    location: '2. OG mit Loggia',
    rooms: '2,5 Raum',
    area: '64,64 qm',
  },
  {
    type: 'WOHNUNG',
    number: '3',
    location: '2. OG mit Loggia',
    rooms: '2,5 Raum',
    area: '69,35 qm',
  },
  {
    type: 'WOHNUNG',
    number: '4',
    location: '2. OG mit Balkon',
    rooms: '2,5 Raum',
    area: '65,43 qm',
  },
  {
    type: 'WOHNUNG',
    number: '5',
    location: '2. OG mit Loggia',
    rooms: '2,5 Raum',
    area: '66,39 qm',
  },
  {
    type: 'WOHNUNG',
    number: '6',
    location: '2. OG mit Loggia',
    rooms: '3,5 Raum',
    area: '81,33 qm',
  },
  {
    type: 'WOHNUNG',
    number: '7',
    location: 'Penthouse mit Dachterrasse',
    rooms: '2,5 Raum',
    area: '62,57 qm',
  },
  {
    type: 'WOHNUNG',
    number: '8',
    location: 'Penthouse mit Dachterrasse',
    rooms: '3,5 Raum',
    area: '77,89 qm',
  },
  {
    type: 'WOHNUNG',
    number: '9',
    location: 'Penthouse mit Dachterrasse',
    rooms: '2,5 Raum',
    area: '63,79 qm',
  },
].map((apartment) => ({
  ...apartment,
  price: 'Preis auf Anfrage',
}))

const house3ApartmentRows = house1ApartmentRows.slice(6, 8).map(
  (apartment, index) => ({
    ...apartment,
    area: index === 0 ? '102,22 qm' : '109,62 qm',
  }),
)

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
    introText:
      'Intensivpflegeeinrichtung mit 12 Plätzen und zwei Wohneinheiten.',
    tableImage: haus1GardenImage,
    facts: [
      ['Wohnflaeche', 'ca. 142 m2'],
      ['Zimmer', '5'],
      ['Grundstueck', 'ca. 320 m2'],
      ['Status', 'in Planung'],
    ],
    apartments: house3ApartmentRows.map((apartment) => ({
      ...apartment,
      exposeUrl: haus1StreetImage,
    })),
    parkingPrice: 'Preis auf Anfrage',
    closingText:
      '12 Pflegeplätze und zwei Penthouse-Wohnungen an der Prof.-Schulte-Straße. Zufahrt zur Tiefgarage vom Westerholter Weg. Das Projekt wird als klimafreundlicher Neubau im KfW-40-Standard errichtet. Sichern Sie sich für die beiden Penthauswohnungen bis zu 100.000,- € zinsverbilligte Kredite von der KfW.',
    exposeUrl: haus1StreetImage,
    lageplanUrl: recklinghausenLageplan,
  },
  {
    id: 'haus-4',
    label: 'Haus 4',
    introImage: haus4FrontImage,
    introText: '24 Demenzwohnungen und 9 barrierefreie Mietwohnungen.',
    tableImage: haus4BackImage,
    tableImagePosition: 'center bottom',
    contentSections: [
      {
        text: [
          '24 Demenzwohnungen. Betreiber: Diakonisches Werk in Recklinghausen e. V.',
          '9 barrierefreie und rollstuhlgerechte Mietwohnungen.',
        ],
      },
    ],
    apartments: house4ApartmentRows.map((apartment) => ({
      ...apartment,
      exposeUrl: haus4FrontImage,
    })),
    exposeUrl: haus4FrontImage,
    lageplanUrl: recklinghausenLageplan,
  },
  {
    id: 'kirche',
    label: 'Kirche',
    introImage: kircheAerialImage,
    introText:
      'Katholische Filialkirche mit ca. 290 qm Nutzfläche und 80 Sitzplätzen.',
    tableImage: kircheSitePlanImage,
    exposeUrl: kircheAerialImage,
    lageplanUrl: kircheSitePlanImage,
  },
  {
    id: 'kita',
    label: 'Kita',
    introImage: kitaFrontImage,
    introText:
      '4-zügige Kita für 85 Kitaplätze mit ca. 900 qm Nutzfläche und ca. 1.500 qm Garten. Betreiber ist die Katholische Kirchengemeinde St. Markus Recklinghausen.',
    tableImage: kitaBackImage,
    facts: [
      ['Wohnflaeche', 'ca. 142 m2'],
      ['Zimmer', '5'],
      ['Grundstueck', 'ca. 320 m2'],
      ['Status', 'in Planung'],
    ],
    exposeUrl: kitaFrontImage,
    lageplanUrl: recklinghausenLageplan,
  },
  {
    id: 'gross-tagespflege',
    label: 'Großtagespflege',
    introImage: grossTagespflegeImage,
    introText: '9 Betreuungsplätze U3',
    tableImage: kitaBackImage,
    facts: [
      ['Wohnflaeche', 'ca. 142 m2'],
      ['Zimmer', '5'],
      ['Grundstueck', 'ca. 320 m2'],
      ['Status', 'in Planung'],
    ],
    exposeUrl: grossTagespflegeImage,
    lageplanUrl: recklinghausenLageplan,
  },
  {
    id: 'mietwohnung',
    label: 'Mietwohnung',
    introImage: apartmentAerialImage,
    introText:
      'Diese vollständig sanierte 4,5-Zimmer-Wohnung im 1. Obergeschoss bietet auf ca. 110 m² Wohnfläche ein modernes und komfortables Zuhause. Neben einer großzügigen Loggia überzeugt die Wohnung durch hochwertige Vinylböden sowie ein helles Tageslichtbad mit Fenster, Dusche und Badewanne. Zu der Wohnung gehören zwei kellerräume und eine Garage.',
    tableImage: apartmentFloorPlanImage,
    facts: [
      ['Wohnflaeche', 'ca. 142 m2'],
      ['Zimmer', '5'],
      ['Grundstueck', 'ca. 320 m2'],
      ['Status', 'in Planung'],
    ],
    closingText:
      'Mietpreis 13,00 € pro qm zzgl. Nebenkosten. DIe garage kann für 100 € pro Monat angemietet werden.',
    exposeUrl: apartmentAerialImage,
    lageplanUrl: recklinghausenLageplan,
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
