import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import Banner from './components/Banner';
import Pilares from './components/Pilares';
import HistoryInst from './components/HistoryInst';
import Help from './components/Help';
import Footer from './components/Footer';
import Doacao from './components/Doacao';

function App() {
  return (
    <>
    <div className="min-h-screen rounded-2xl bg-white text-[#222222]">
      {/* HEADER */}
        <Header />
      {/* HERO */}
        <Hero />
      {/* IMAGEM */}
        <Banner />
      {/* PILARES */}
        <Pilares />
      {/* HISTÓRIA */}
        <HistoryInst />
      {/* COMO AJUDAR */}
        <Help />
      {/* DOAÇÂO */}
        <Doacao />
      {/* FOOTER */}
        <Footer />
    </div>
    </>
  )
}

export default App
