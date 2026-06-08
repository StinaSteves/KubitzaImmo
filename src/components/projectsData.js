const recklinghausenImage = `${import.meta.env.BASE_URL}recklinghausen/recklinghausen_luftbild.jpg`
const recklinghausenLageplan = `${import.meta.env.BASE_URL}recklinghausen/recklinghausen_lageplan.png`
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
    price: 'KP 443.761,- €',
  },
  {
    type: 'WOHNUNG',
    number: '2',
    location: 'EG mit Terrasse u. Garten',
    rooms: '3,5 Raum',
    area: '94,36 qm',
    price: 'KP 433.112,- €',
    status: 'reserviert',
  },
  {
    type: 'WOHNUNG',
    number: '3',
    location: 'EG mit Terrasse u. Garten',
    rooms: '3,5 Raum',
    area: '82,29 qm',
    price: 'KP 377.711,- €',
  },
  {
    type: 'WOHNUNG',
    number: '4',
    location: 'EG mit Terrasse u. Garten',
    rooms: '3,5 Raum',
    area: '106,60 qm',
    price: 'KP 489.294,- €',
  },
  {
    type: 'WOHNUNG',
    number: '5',
    location: 'OG mit Balkon',
    rooms: '3,5 Raum',
    area: '96,92 qm',
    price: 'KP 484.503,- €',
    status: 'verkauft',
  },
  {
    type: 'WOHNUNG',
    number: '6',
    location: 'OG mit Balkon',
    rooms: '3,5 Raum',
    area: '94,54 qm',
    price: 'KP 472.605,- €',
  },
  {
    type: 'WOHNUNG',
    number: '7',
    location: 'OG mit Balkon',
    rooms: '3,5 Raum',
    area: '81,83 qm',
    price: 'KP 409.068,- €',
  },
  {
    type: 'WOHNUNG',
    number: '8',
    location: 'OG mit Balkon',
    rooms: '3,5 Raum',
    area: '106,26 qm',
    price: 'KP 478.063,- €',
  },
  {
    type: 'WOHNUNG',
    number: '9',
    location: 'Penthouse mit Dachterrasse',
    rooms: '2,5 Raum',
    area: '88,20 qm',
    price: 'KP 449.820,- €',
    status: 'reserviert',
  },
  {
    type: 'WOHNUNG',
    number: '10',
    location: 'Penthouse mit Dachterrasse',
    rooms: '3,5 Raum',
    area: '91,58 qm',
    price: 'KP 467.058,- €',
  },
  {
    type: 'WOHNUNG',
    number: '11',
    location: 'Penthouse mit Dachterrasse',
    rooms: '2,5 Raum',
    area: '68,72 qm',
    price: 'KP 350.472,- €',
  },
  {
    type: 'WOHNUNG',
    number: '12',
    location: 'Penthouse mit Dachterrasse',
    rooms: '2,5 Raum',
    area: '89,55 qm',
    price: 'KP 456.705,- €',
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
    apartments: apartmentRows.map((apartment) => ({
      ...apartment,
      exposeUrl: haus1StreetImage,
    })),
    closingText:
      '8 Seniorengerechte Wohnungen mit Aufzug und Tiefgarage, an der Prof.- Schulte- Straße. Zufahrt Tiefgarage, vom Westerholter Weg. Das Projekt wird ein Klimafreundlicher Neubau und im KFW 40 Standard errichtet. Sichern Sie sich bis zu 150.000,- € zinsverbilligte Kredite von der KFW.',
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
    apartments: apartmentRows.map((apartment) => ({
      ...apartment,
      exposeUrl: haus2StreetImage,
    })),
    closingText:
      '8 Exklusive Seniorengerechte Wohnungen mit Aufzug und Tiefgarage, an der Prof.- Schulte- Straße. Zufahrt Tiefgarage, vom Westerholter Weg. Das Projekt wird ein Klimafreundlicher Neubau und im KFW 40 Standard errichtet. Sichern Sie sich bis zu 150.000,- € zinsverbilligte Kredite von der KFW.',
    exposeUrl: haus2StreetImage,
    lageplanUrl: recklinghausenLageplan,
  },
]

const projectsData = [
  {
    slug: 'recklinghausen',
    image: recklinghausenImage,
    hoverImage: recklinghausenLageplan,
    title: 'Recklinghausen',
    description: [
      'Quartiersentwicklung St. Markus mit einer Wohnbebauung an der Prof.- Schulte-Straße',
      '2 Demenz-WG und eine Intensivpflege am Westerholter-Weg Kirche/Kita',
    ],
    houses: recklinghausenHouses,
  },
  {
    slug: 'EINGANGSTOR ZUM STADTKERN ALTENESSEN-MITTE',
    image: altenessenImage,
    hoverImage: altenessenLageplan,
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
