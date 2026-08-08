const recklinghausenImage = `${import.meta.env.BASE_URL}recklinghausen/260804_Luftbild_Hinten_Web.jpg`
const recklinghausenLageplan = `${import.meta.env.BASE_URL}recklinghausen/recklinghausen_lageplan.png`
const recklinghausenFrontImage = `${import.meta.env.BASE_URL}recklinghausen/260804_Luftbild_Vorne_Web.jpg`
const recklinghausenBauschildImage = `${import.meta.env.BASE_URL}recklinghausen/Bauschild_Web.jpg`
const haus1CameraFlightVideo = `${import.meta.env.BASE_URL}video/St.Markus_Kameraflug.mp4`
const haus2CameraFlightVideo = `${import.meta.env.BASE_URL}video/260804_Videorundflug_faststart.mp4`
const haus1StreetImage = `${import.meta.env.BASE_URL}recklinghausen/1_Strasse_Web.jpg`
const haus1GardenImage = `${import.meta.env.BASE_URL}recklinghausen/1_Garten_Web.jpg`
const haus2StreetImage = `${import.meta.env.BASE_URL}recklinghausen/260804_Straße_Web.jpg`
const haus2GardenImage = `${import.meta.env.BASE_URL}recklinghausen/260804_Garten_Web.jpg`
const haus4FrontImage = `${import.meta.env.BASE_URL}recklinghausen/Haus4_vorne.jpg`
const haus4BackImage = `${import.meta.env.BASE_URL}recklinghausen/Haus4_hinten.jpg`
const kircheAerialImage = `${import.meta.env.BASE_URL}recklinghausen/Kita_Luftbild.jpg`
const kircheSitePlanImage = `${import.meta.env.BASE_URL}recklinghausen/Kita_Lageplan.jpg`
const kitaFrontImage = `${import.meta.env.BASE_URL}recklinghausen/Kita_ohne_Mauer.jpg`
const kitaBackImage = `${import.meta.env.BASE_URL}recklinghausen/Kita_hinten.jpg`
const grossTagespflegeImage = `${import.meta.env.BASE_URL}recklinghausen/gross-tagespflege.jpeg`
const apartmentAerialImage = `${import.meta.env.BASE_URL}recklinghausen/Luft_Wohnung.jpg`
const apartmentChurchImage = `${import.meta.env.BASE_URL}recklinghausen/Mietwohnung_Kirche.jpg`
const altenessenImage = `${import.meta.env.BASE_URL}altenessen/PerspektiveAltenessen_Web.jpg`
const altenessenLageplan = `${import.meta.env.BASE_URL}altenessen/LageplanAltenessen.jpg`
const recklinghausenBaubeschreibungUrl = `${import.meta.env.BASE_URL}recklinghausen/BAUBESCHREIBUNG_P%20a-2.pdf`
const house1ExposeUrl = (number) =>
  `${import.meta.env.BASE_URL}recklinghausen/ExposeHaus1/Haus1Wohnung${number}.pdf`
const house2ExposeUrl = (number) =>
  `${import.meta.env.BASE_URL}recklinghausen/ExposeHaus2/Haus2Wohnung${number}.pdf`
const house3ExposeUrl = (number) =>
  `${import.meta.env.BASE_URL}recklinghausen/ExposeHaus3/Haus3Wohnung${number}.pdf`
const house4ExposeUrl = (number) =>
  `${import.meta.env.BASE_URL}recklinghausen/ExposeHaus4/Haus4Wohnung${number}.pdf`

const house1ApartmentRows = [
  {
    type: 'WOHNUNG',
    number: '1',
    location: 'EG Rechts mit Terrasse u. Garten',
    rooms: '3,5 Raum',
    area: '101,54 m²',
    price: 'KP 466.068,- €',
  },
  {
    type: 'WOHNUNG',
    number: '2',
    location: 'EG Mitte mit Terrasse u. Garten',
    rooms: '2,5 Raum',
    area: '70,57 m²',
    price: 'KP 323.916,- €',
  },
  {
    type: 'WOHNUNG',
    number: '3',
    location: 'EG Links mit Terrasse u. Garten',
    rooms: '3,5 Raum',
    area: '98,99 m²',
    price: 'KP 454.364,- €',
  },
  {
    type: 'WOHNUNG',
    number: '4',
    location: 'OG Rechts mit Balkon',
    rooms: '3,5 Raum',
    area: '101,12 m²',
    price: 'KP 454.028,- €',
  },
  {
    type: 'WOHNUNG',
    number: '5',
    location: 'OG Mitte mit Balkon',
    rooms: '2,5 Raum',
    area: '70,44 m²',
    price: 'KP 316.275,- €',
  },
  {
    type: 'WOHNUNG',
    number: '6',
    location: 'OG Links mit Balkon',
    rooms: '3,5 Raum',
    area: '98,74 m²',
    price: 'KP 443.342,- €',
  },
  {
    type: 'WOHNUNG',
    number: '7',
    location: 'Penthouse Rechts mit Dachterrasse',
    rooms: '3,5 Raum',
    area: '102,22 m²',
    price: 'KP 510.077,- €',
  },
  {
    type: 'WOHNUNG',
    number: '8',
    location: 'Penthouse Links mit Dachterrasse',
    rooms: '3,5 Raum',
    area: '109,62 m²',
    price: 'KP 547.003,- €',
  },
]

const apartmentRows = [
  {
    type: 'WOHNUNG',
    number: '1',
    location: 'EG Links mit Terrasse u. Garten',
    rooms: '3,5 Raum',
    area: '96,63 m²',
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
    rooms: '2,5 Raum',
    area: '76,44 m²',
    price: 'KP 350.859,- €',
  },
  {
    type: 'WOHNUNG',
    number: '4',
    location: 'EG Hinten mit Terrasse u. Garten',
    rooms: '3,5 Raum',
    area: '101,08 m²',
    price: 'KP 463.957,- €',
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
    rooms: '2,5 Raum',
    area: '76,19 m²',
    price: 'KP 342.093,- €',
  },
  {
    type: 'WOHNUNG',
    number: '8',
    location: 'OG Hinten mit Balkon',
    rooms: '3,5 Raum',
    area: '100,62 m²',
    price: 'KP 451.783,- €',
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
    area: '95,16 m²',
    price: 'KP 474.848,- €',
  },
  {
    type: 'WOHNUNG',
    number: '11',
    location: 'Penthouse Rechts mit Dachterrasse',
    rooms: '3,5 Raum',
    area: '152,59 m²',
    price: 'KP 761.424,- €',
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
    detailVideo: haus1CameraFlightVideo,
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
    introImage: haus2GardenImage,
    introText: 'Exklusive Stadtvilla mit 11 Wohneinheiten',
    tableImage: haus2StreetImage,
    detailVideo: haus2CameraFlightVideo,
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
      exposeUrl: house3ExposeUrl(apartment.number),
      baubeschreibungUrl: recklinghausenBaubeschreibungUrl,
    })),
    parkingPrice: '24.900 €',
    closingText:
      '12 Pflegeplätze und zwei Penthouse-Wohnungen an der Prof.-Schulte-Straße. Die Zufahrt zur Tiefgarage erfolgt vom Westerholter Weg. Das Projekt wird als klimafreundlicher Neubau im KfW-40-Standard errichtet. Sichern Sie sich für die beiden Penthouse-Wohnungen bis zu 100.000,- € zinsverbilligte Kredite von der KfW.',
    exposeUrl: haus1StreetImage,
    lageplanUrl: recklinghausenLageplan,
  },
  {
    id: 'haus-4',
    label: 'Haus 4',
    introImage: haus4FrontImage,
    introText:
      '2 Wohngemeinschaften mit 24 Wohnplätzen und 9 barrierefreie Mietwohnungen. Öffentlich geförderter Wohnraum.',
    tableImage: haus4BackImage,
    tableImagePosition: 'center bottom',
    contentSections: [
      {
        text: [
          '24 Wohnplätze. Betreiber: Diakonisches Werk in Recklinghausen e. V.',
          '"Nur mit Wohnberechtigungsschein erhältlich"',
          '',
          '9 barrierefreie und rollstuhlgerechte Mietwohnungen.',
          '"Nur mit Wohnberechtigungsschein erhältlich"',
        ],
      },
    ],
    apartments: house4ApartmentRows.map((apartment) => ({
      ...apartment,
      exposeUrl: house4ExposeUrl(apartment.number),
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
      '4-zügige Kita für 80 Kita-Plätze mit ca. 900 m² Nutzfläche und ca. 1.500 m² Garten. Betreiber ist die Katholische Kirchengemeinde St. Markus Recklinghausen.',
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
      'Diese vollständig sanierte 4,5-Zimmer-Wohnung im 1. Obergeschoss bietet auf ca. 118 m² Wohnfläche ein modernes und komfortables Zuhause. Neben einer großzügigen Loggia überzeugt die Wohnung durch hochwertige Vinylböden sowie ein helles Tageslichtbad mit Fenster, Dusche und Badewanne. Zu der Wohnung gehören zwei Kellerräume und eine Garage.',
    tableImage: apartmentChurchImage,
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
        src: recklinghausenFrontImage,
        alt: 'Luftbild des Projekts Recklinghausen von vorne',
      },
      {
        src: recklinghausenBauschildImage,
        alt: 'Bauschild der Quartiersentwicklung St. Markus',
      },
    ],
    title: 'Recklinghausen',
    detailTitle: 'Eigentumswohnungen in Recklinghausen',
    seoTitle: 'Eigentumswohnungen in Recklinghausen | Kubitza Immobilien',
    seoDescription:
      'Seniorengerechte Eigentumswohnungen in Recklinghausen kaufen: Quartiersentwicklung St. Markus mit Aufzug, Tiefgarage und KfW-40-Standard.',
    seoImage: '/recklinghausen/260804_Luftbild_Hinten_Web.jpg',
    description: [
      'Seniorengerechte Eigentumswohnungen in Recklinghausen an der Prof.-Schulte-Straße',
      'Quartiersentwicklung St. Markus mit Kirche, Kita und Pflegeangeboten (2\u00A0Wohngemeinschaften sowie Intensivpflege) in unterschiedlichen Größen',
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
        detailVideo: null,
        closingText: '',
        apartments: [],
        priceNote: null,
        parkingPrice: null,
      },
    ],
  },
]

export default projectsData
