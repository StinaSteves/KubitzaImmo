import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HeroVideo from '../public/video/230719_Bottrop-KUB.mp4'
import Reverenzen from './components/Reverenzen.jsx'
import Projects from './components/Projects.jsx'
import Footer from './components/Footer.jsx'
import Navigation from './components/Navigation.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import AktuelleProjekte from './Pages/AktuelleProjekte.jsx'
import Datenschutz from './Pages/Datenschutz.jsx'
import Impressum from './Pages/Impressum.jsx'
import './App.css'

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, '')

function Home() {
  return (
    <div>
      <div className='landing'>
<div className='heroHeader'>
  <div>
    <div className='heroVideoWrapper'>
      <video className='heroVideo' src={HeroVideo} autoPlay loop muted />
    </div>
  </div>
</div>
</div>
<h1>Hey Papa, wenn du das hier ließt schlafe ich vermutlich noch weil ich die ganze nacht hierdran gearbeitet habe. <br />
Bitte bleib jetzt cool, aber ich muss dir was sagen... <br />
deine website wurde gelöscht. Unter der domain kubitza-immobilien.de ist keine website mehr verfügbar <br />
Das heißt das deine Firma gerade nicht online präsent ist. <br />
es ist mir gestern abend aufgefallen als ich die Seite aufrufen wollte um die Bilder und Texte zu kopieren, da stand dann nur noch "Diese Seite ist nicht erreichbar" da. <br />
Vermutlich ist das am Donnerstag passiert als miacheal deinen domain umzug veranlasst hat, die gute nachricht ist das es wohl funktioniert hat <br />
die schlechte nachricht ist das er kein buffering eingebaut hat und deshalb die seite jetzt offline ist <br />
aber keine panik wir kriegen das hin! Ich habe die ganze nacht an der website hier gearbeitet und eine kopie aus dem netz von deiner alten seite gesucht <br />
damit ich die bilder und texte übernehmen konnte. Das impressum, der footer und der datenschutz sind fertig, die navigation funktioniert <br />
und ich habe einige referenzprojekte bereits auf die seite implimentiert.
deine texte und bilder sind soweit eingebaut und sobald ich wach werde, rufe ich dich an und wir besprechen was noch gemacht werden muss damit wir die website morgen online nehmen können.
sie wird dann noch nicht perfekt fertig sein, aber auf jeden fall funktionieren und was noch fehlt können wir dann nachtragen <br />
also kein stress, wir schaffen das! alles wird gut
(dieser text ist nicht permanent und ich lösche ihn heute mittag wieder)</h1>
<Projects />
<Reverenzen />
<Footer />

</div>
  )
}

function App() {
  return (
    <BrowserRouter basename={routerBasename}>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aktuelle-projekte/:projectSlug' element={<AktuelleProjekte />} />
        <Route path='/datenschutz' element={<Datenschutz />} />
        <Route path='/impressum' element={<Impressum />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
