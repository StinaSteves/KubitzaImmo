const recklinghausenImage = `${import.meta.env.BASE_URL}recklinghausen/recklinghausen_luftbild.jpg`
const recklinghausenLageplan = `${import.meta.env.BASE_URL}recklinghausen/recklinghausen_lageplan.png`
const testhaus1 = `${import.meta.env.BASE_URL}recklinghausen/testhaus1.jpg`
const testhaus2 = `${import.meta.env.BASE_URL}recklinghausen/testhaus2.jpg`
const hofImage = `${import.meta.env.BASE_URL}immoPictures/2_Hof_Web.jpg`

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
    slug: 'testi',
    image: testhaus1,
    hoverImage: testhaus2,
    title: 'test',
    houses: recklinghausenHouses,
  },
]

export default projectsData
