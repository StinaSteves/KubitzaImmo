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
const recklinghausenBaubeschreibungUrl = `${import.meta.env.BASE_URL}recklinghausen/BAUBESCHREIBUNG_P%20a.pdf`
const house1ExposeUrl = (number) =>
  `${import.meta.env.BASE_URL}recklinghausen/ExposeHaus1/Haus1Wohnung${number}.pdf`
const house2ExposeUrl = (number) =>
  `${import.meta.env.BASE_URL}recklinghausen/ExposeHaus2/Haus2Wohnung${number}.pdf`

const house1ApartmentRows = [
  {
    type: 'WOHNUNG',
    number: '1',
    location: 'EG Rechts mit Terrasse u. Garten',
    rooms: '3,5 Raum',
    area: '101,28 m²',
    price: 'KP 464.875,- €',
  },
  {
    type: 'WOHNUNG',
    number: '2',
    location: 'EG Mitte mit Terrasse u. Garten',
    rooms: '2,5 Raum',
    area: '71,03 m²',
    price: 'KP 326.027,- €',
  },
  {
    type: 'WOHNUNG',
    number: '3',
    location: 'EG Links mit Terrasse u. Garten',
    rooms: '3,5 Raum',
    area: '99,04 m²',
    price: 'KP 454.593,- €',
  },
  {
    type: 'WOHNUNG',
    number: '4',
    location: 'OG Rechts mit Balkon',
    rooms: '3,5 Raum',
    area: '101,91 m²',
    price: 'KP 458.493,- €',
  },
  {
    type: 'WOHNUNG',
    number: '5',
    location: 'OG Mitte mit Balkon',
    rooms: '2,5 Raum',
    area: '70,76 m²',
    price: 'KP 318.349,- €',
  },
  {
    type: 'WOHNUNG',
    number: '6',
    location: 'OG Links mit Balkon',
    rooms: '3,5 Raum',
    area: '99,15 m²',
    price: 'KP 446.075,- €',
  },
  {
    type: 'WOHNUNG',
    number: '7',
    location: 'Penthouse Rechts mit Dachterrasse',
    rooms: '3,5 Raum',
    area: '102,54 m²',
    price: 'KP 511.674,- €',
  },
  {
    type: 'WOHNUNG',
    number: '8',
    location: 'Penthouse Links mit Dachterrasse',
    rooms: '3,5 Raum',
    area: '108,74 m²',
    price: 'KP 552.612,- €',
  },
]

const apartmentRows = [
  {
    type: 'WOHNUNG',
    number: '1',
    location: 'EG Links mit Terrasse u. Garten',
    rooms: '3,5 Raum',
    area: '96,68 m²',
    price: 'KP 443.761,- €',
  },
  {
    type: 'WOHNUNG',
    number: '2',
    location: 'EG Mitte mit Terrasse u. Garten',
    rooms: '3,5 Raum',
    area: '94,36 m²',
    price: 'KP 433.112,- €',
  },
  {
    type: 'WOHNUNG',
    number: '3',
    location: 'EG Rechts mit Terrasse u. Garten',
    rooms: '3,5 Raum',
    area: '82,29 m²',
    price: 'KP 377.711,- €',
  },
  {
    type: 'WOHNUNG',
    number: '4',
    location: 'EG Hinten mit Terrasse u. Garten',
    rooms: '3,5 Raum',
    area: '106,60 m²',
    price: 'KP 489.294,- €',
  },
  {
    type: 'WOHNUNG',
    number: '5',
    location: 'OG Links mit Balkon',
    rooms: '3,5 Raum',
    area: '96,92 m²',
    price: 'KP 435.170,- €',
  },
  {
    type: 'WOHNUNG',
    number: '6',
    location: 'OG Mitte mit Balkon',
    rooms: '3,5 Raum',
    area: '94,54 m²',
    price: 'KP 424.484,- €',
  },
  {
    type: 'WOHNUNG',
    number: '7',
    location: 'OG Rechts mit Balkon',
    rooms: '3,5 Raum',
    area: '81,83 m²',
    price: 'KP 367.416,- €',
  },
  {
    type: 'WOHNUNG',
    number: '8',
    location: 'OG Hinten mit Balkon',
    rooms: '3,5 Raum',
    area: '106,26 m²',
    price: 'KP 477.107,- €',
  },
  {
    type: 'WOHNUNG',
    number: '9',
    location: 'Penthouse Links mit Dachterrasse',
    rooms: '3,5 Raum',
    area: '89,08 m²',
    price: 'KP 444.509,- €',
  },
  {
    type: 'WOHNUNG',
    number: '10',
    location: 'Penthouse Mitte mit Dachterrasse',
    rooms: '3,5 Raum',
    area: '95,15 m²',
    price: 'KP 474.798,- €',
  },
  {
    type: 'WOHNUNG',
    number: '11',
    location: 'Penthouse Rechts mit Dachterrasse',
    rooms: '3,5 Raum',
    area: '163,94 m²',
    price: 'KP 818.060,- €',
  },
]

const house4ApartmentRows = [
  {
    type: 'WOHNUNG',
    number: '1',
    location: '2. OG mit Loggia',
    rooms: '2,5 Zimmer',
    area: '66,74 m²',
  },
  {
    type: 'WOHNUNG',
    number: '2',
    location: '2. OG mit Loggia',
    rooms: '2,5 Zimmer',
    area: '64,64 m²',
  },
  {
    type: 'WOHNUNG',
    number: '3',
    location: '2. OG mit Loggia',
    rooms: '2,5 Zimmer',
    area: '69,35 m²',
  },
  {
    type: 'WOHNUNG',
    number: '4',
    location: '2. OG mit Balkon',
    rooms: '2,5 Zimmer',
    area: '65,43 m²',
  },
  {
    type: 'WOHNUNG',
    number: '5',
    location: '2. OG mit Loggia',
    rooms: '2,5 Zimmer',
    area: '66,39 m²',
  },
  {
    type: 'WOHNUNG',
    number: '6',
    location: '2. OG mit Loggia',
    rooms: '3,5 Zimmer',
    area: '81,33 m²',
  },
  {
    type: 'WOHNUNG',
    number: '7',
    location: 'Penthouse mit Dachterrasse',
    rooms: '2,5 Zimmer',
    area: '62,57 m²',
  },
  {
    type: 'WOHNUNG',
    number: '8',
    location: 'Penthouse mit Dachterrasse',
    rooms: '3,5 Zimmer',
    area: '77,89 m²',
  },
  {
    type: 'WOHNUNG',
    number: '9',
    location: 'Penthouse mit Dachterrasse',
    rooms: '2,5 Zimmer',
    area: '63,79 m²',
  },
].map((apartment) => ({
  ...apartment,
  price: 'Preis auf Anfrage',
}))

const house3ApartmentRows = house1ApartmentRows.slice(6, 8).map(
  (apartment, index) => ({
    ...apartment,
    area: index === 0 ? '102,22 m²' : '109,62 m²',
    location: index === 0 ? 'Penthouse rechts' : 'Penthouse links',
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
      ['Wohnfläche', 'ca. 142 m²'],
      ['Zimmer', '5'],
      ['Grundstück', 'ca. 320 m²'],
      ['Status', 'in Planung'],
    ],
    apartments: house1ApartmentRows.map((apartment) => ({
      ...apartment,
      exposeUrl: house1ExposeUrl(apartment.number),
      baubeschreibungUrl: recklinghausenBaubeschreibungUrl,
    })),
    parkingPrice: '24.900 €',
    closingText:
      '8 exklusive Seniorengerechte Wohnungen mit Aufzug und Tiefgarage an der Prof.-Schulte-Straße. Die Zufahrt zur Tiefgarage erfolgt vom Westerholter Weg. Das Projekt wird als klimafreundlicher Neubau im KfW-40-Standard errichtet. Sichern Sie sich bis zu 100.000,- € zinsverbilligte Kredite von der KfW.',
    priceNote: 'Baubeginn voraussichtlich 2027, Kaufpreise ab 4.490 € pro m²',
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
      ['Wohnfläche', 'ca. 128 m²'],
      ['Zimmer', '4'],
      ['Grundstück', 'ca. 285 m²'],
      ['Status', 'verfügbar'],
    ],
    apartments: apartmentRows.map((apartment) => ({
      ...apartment,
      exposeUrl: house2ExposeUrl(apartment.number),
      baubeschreibungUrl: recklinghausenBaubeschreibungUrl,
    })),
    parkingPrice: '24.900 €',
    closingText:
      '11 exklusive Seniorengerechte Wohnungen mit Aufzug und Tiefgarage an der Prof.-Schulte-Straße. Die Zufahrt zur Tiefgarage erfolgt vom Westerholter Weg. Das Projekt wird als klimafreundlicher Neubau im KfW-40-Standard errichtet. Sichern Sie sich bis zu 100.000,- € zinsverbilligte Kredite von der KfW.',
    priceNote: 'Baubeginn voraussichtlich 2027, Kaufpreise ab 4.490 € pro m²',
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
      ['Wohnfläche', 'ca. 142 m²'],
      ['Zimmer', '5'],
      ['Grundstück', 'ca. 320 m²'],
      ['Status', 'in Planung'],
    ],
    apartments: house3ApartmentRows.map((apartment) => ({
      ...apartment,
      exposeUrl: haus1StreetImage,
      baubeschreibungUrl: recklinghausenBaubeschreibungUrl,
    })),
    parkingPrice: 'Preis auf Anfrage',
    closingText:
      '12 Pflegeplätze und zwei Penthouse-Wohnungen an der Prof.-Schulte-Straße. Die Zufahrt zur Tiefgarage erfolgt vom Westerholter Weg. Das Projekt wird als klimafreundlicher Neubau im KfW-40-Standard errichtet. Sichern Sie sich für die beiden Penthouse-Wohnungen bis zu 100.000,- € zinsverbilligte Kredite von der KfW.',
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
      'Katholische Filialkirche mit ca. 290 m² Nutzfläche und 80 Sitzplätzen.',
    tableImage: kircheSitePlanImage,
    exposeUrl: kircheAerialImage,
    lageplanUrl: kircheSitePlanImage,
  },
  {
    id: 'kita',
    label: 'Kita',
    introImage: kitaFrontImage,
    introText:
      '4-zügige Kita für 85 Kita-Plätze mit ca. 900 m² Nutzfläche und ca. 1.500 m² Garten. Betreiber ist die Katholische Kirchengemeinde St. Markus Recklinghausen.',
    tableImage: kitaBackImage,
    facts: [
      ['Wohnfläche', 'ca. 142 m²'],
      ['Zimmer', '5'],
      ['Grundstück', 'ca. 320 m²'],
      ['Status', 'in Planung'],
    ],
    exposeUrl: kitaFrontImage,
    lageplanUrl: recklinghausenLageplan,
  },
  {
    id: 'gross-tagespflege',
    label: 'Großtagespflege',
    introImage: grossTagespflegeImage,
    introText: '9 U3-Betreuungsplätze',
    tableImage: kitaBackImage,
    facts: [
      ['Wohnfläche', 'ca. 142 m²'],
      ['Zimmer', '5'],
      ['Grundstück', 'ca. 320 m²'],
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
      'Diese vollständig sanierte 4,5-Zimmer-Wohnung im 1. Obergeschoss bietet auf ca. 110 m² Wohnfläche ein modernes und komfortables Zuhause. Neben einer großzügigen Loggia überzeugt die Wohnung durch hochwertige Vinylböden sowie ein helles Tageslichtbad mit Fenster, Dusche und Badewanne. Zu der Wohnung gehören zwei Kellerräume und eine Garage.',
    tableImage: apartmentFloorPlanImage,
    facts: [
      ['Wohnfläche', 'ca. 142 m²'],
      ['Zimmer', '5'],
      ['Grundstück', 'ca. 320 m²'],
      ['Status', 'in Planung'],
    ],
    closingText:
      'Mietpreis 13,00 € pro m² zzgl. Nebenkosten. Die Garage kann für 100 € pro Monat angemietet werden.',
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
      'Quartiersentwicklung St. Markus mit Kirche, Kita und Pflegeangeboten (Demenz-WGs sowie Intensivpflege) in unterschiedlichen Größen',
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
      'Edeka-Markt mit 90 Stellplätzen und 38 sozial geförderten sowie 10 frei finanzierten Wohnungen inklusive Tiefgarage',
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
        priceNote: null,
        parkingPrice: null,
      },
    ],
  },
]

export default projectsData
