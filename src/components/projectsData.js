const recklinghausenImage = `${import.meta.env.BASE_URL}recklinghausen/recklinghausen_luftbild.jpg`
const recklinghausenLageplan = `${import.meta.env.BASE_URL}recklinghausen/recklinghausen_lageplan.png`
const testhaus1 = `${import.meta.env.BASE_URL}recklinghausen/testhaus1.jpg`
const testhaus2 = `${import.meta.env.BASE_URL}recklinghausen/testhaus2.jpg`
const hofImage = `${import.meta.env.BASE_URL}immoPictures/2_Hof_Web.jpg`

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
    introImage: testhaus1,
    introText:
      'Haus 1 verbindet klare Architektur mit durchdachten Grundrissen und hellen Wohnbereichen. Die Angaben dienen aktuell als Platzhalter und koennen spaeter projektgenau ersetzt werden.',
    tableImage: recklinghausenLageplan,
    facts: [
      ['Wohnflaeche', 'ca. 142 m2'],
      ['Zimmer', '5'],
      ['Grundstueck', 'ca. 320 m2'],
      ['Status', 'in Planung'],
    ],
    apartments: apartmentRows.map((apartment) => ({
      ...apartment,
      exposeUrl: testhaus1,
    })),
    closingText:
      'Weitere Informationen, Grundrisse und Ausstattungsdetails werden im Expose zusammengefasst.',
    exposeUrl: testhaus1,
    lageplanUrl: recklinghausenLageplan,
  },
  {
    id: 'haus-2',
    label: 'Haus 2',
    introImage: testhaus2,
    introText:
      'Haus 2 ist als eigenstaendiges Wohnhaus auf demselben Grundstueck geplant. Auch diese Inhalte sind Platzhalter und koennen spaeter individuell angepasst werden.',
    tableImage: hofImage,
    facts: [
      ['Wohnflaeche', 'ca. 128 m2'],
      ['Zimmer', '4'],
      ['Grundstueck', 'ca. 285 m2'],
      ['Status', 'verfuegbar'],
    ],
    apartments: apartmentRows.map((apartment) => ({
      ...apartment,
      exposeUrl: testhaus2,
    })),
    closingText:
      'Die Detailunterlagen stehen spaeter als separate Downloads fuer Haus 2 zur Verfuegung.',
    exposeUrl: testhaus2,
    lageplanUrl: recklinghausenLageplan,
  },
]

const projectsData = [
  {
    slug: 'recklinghausen',
    image: recklinghausenImage,
    hoverImage: recklinghausenLageplan,
    title: 'Recklinghausen',
    houses: recklinghausenHouses,
  },
  {
    slug: 'EINGANGSTOR ZUM STADTKERN ALTENESSEN-MITTE',
    image: testhaus1,
    hoverImage: testhaus2,
    title: 'EINGANGSTOR ZUM STADTKERN ALTENESSEN-MITTE',
    houses: [
      {
        ...recklinghausenHouses[0],
        id: 'altenessen-mitte',
        label: 'Altenessen-Mitte',
        apartments: [],
      },
    ],
  },
]

export default projectsData
