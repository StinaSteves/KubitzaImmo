const recklinghausenImage = `${import.meta.env.BASE_URL}recklinghausen/Luftbild_Hinten_Web.jpg`
const recklinghausenLageplan = `${import.meta.env.BASE_URL}recklinghausen/recklinghausen_lageplan.png`
const recklinghausenFrontImage = `${import.meta.env.BASE_URL}recklinghausen/Luftbild_Vorne_Web.jpg`
const haus1StreetImage = `${import.meta.env.BASE_URL}recklinghausen/1_Strasse_Web.jpg`
const haus1GardenImage = `${import.meta.env.BASE_URL}recklinghausen/1_Garten_V2.jpg`
const haus2StreetImage = `${import.meta.env.BASE_URL}recklinghausen/2_Strasse_Web.jpg`
const haus2GardenImage = `${import.meta.env.BASE_URL}recklinghausen/2_Garten_V2.jpg`
const altenessenImage = `${import.meta.env.BASE_URL}altenessen/PerspektiveAltenessen.jpg`
const altenessenLageplan = `${import.meta.env.BASE_URL}altenessen/LageplanAltenessen.jpg`

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
    rooms: '2,5 Raum',
    area: '88,20 qm',
    price: 'Preis auf Anfrage',
  },
  {
    type: 'WOHNUNG',
    number: '10',
    location: 'Penthouse mit Dachterrasse',
    rooms: '3,5 Raum',
    area: '91,58 qm',
    price: 'Preis auf Anfrage',
  },
  {
    type: 'WOHNUNG',
    number: '11',
    location: 'Penthouse mit Dachterrasse',
    rooms: '2,5 Raum',
    area: '68,72 qm',
    price: 'Preis auf Anfrage',
  },
  {
    type: 'WOHNUNG',
    number: '12',
    location: 'Penthouse mit Dachterrasse',
    rooms: '2,5 Raum',
    area: '89,55 qm',
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
    apartments: apartmentRows.slice(0, 8).map((apartment) => ({
      ...apartment,
      exposeUrl: haus1StreetImage,
    })),
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
    introText: 'Exklusive Stadtvilla mit 8 Wohneinheiten',
    tableImage: haus2GardenImage,
    facts: [
      ['Wohnflaeche', 'ca. 128 m2'],
      ['Zimmer', '4'],
      ['Grundstueck', 'ca. 285 m2'],
      ['Status', 'verfuegbar'],
    ],
    apartments: apartmentRows.slice(0, 11).map((apartment) => ({
      ...apartment,
      exposeUrl: haus2StreetImage,
    })),
    closingText:
      '8 Exklusive Seniorengerechte Wohnungen mit Aufzug und Tiefgarage, an der Prof.- Schulte- Straße. Zufahrt Tiefgarage, vom Westerholter Weg. Das Projekt wird ein Klimafreundlicher Neubau und im KFW 40 Standard errichtet. Sichern Sie sich bis zu 100.000,- € zinsverbilligte Kredite von der KFW.',
    exposeUrl: haus2StreetImage,
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
    description: [
      'Quartiersentwicklung St. Markus mit einer Wohnbebauung und Intensivpflege an der Prof.- Schulte-Straße',
      '2 Demenz-WG am Westerholter weg sowie Kirche und Kita',
    ],
    houses: recklinghausenHouses,
  },
  {
    slug: 'EINGANGSTOR ZUM STADTKERN ALTENESSEN-MITTE',
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
