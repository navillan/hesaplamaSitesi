import HeaderMenu from "./headerDropMenu.js";
import MainPage from "./mainPage.js";
import { Routes, Route } from "react-router-dom";
import AidatGecikme from "./pages/diger/aidatGecikme.js";
import AracMuayene from "./pages/diger/aracMuayene.js";
import Burc from "./pages/diger/burc.js";
import KelimeSayisi from "./pages/diger/kelimeSayisi.js";
import DersNotu from "./pages/egitim/dersNotu.js";
import EokulNot from "./pages/egitim/eokulNot.js";
import LiseMezuniyet from "./pages/egitim/liseMezuniyet.js";
import LiseOrtalama from "./pages/egitim/liseOrtalama.js";
import LiseSinifGecme from "./pages/egitim/liseSinifGecme.js";
import TakdirTesekkur from "./pages/egitim/takdirTesekkur.js";
import UniversiteNotOrtalama from "./pages/egitim/universiteNotOrtalama.js";
import VizeFinalOrtalama from "./pages/egitim/vizeFinalOrtalama.js";


function App () {
  return (
    <div className="App">
      <div className="mainWrapper">
        <header className="app-header">
          <p className="header-title">Hesaplar</p>
          <HeaderMenu />
        </header>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/aidatGecikme" element={<AidatGecikme />} />
          <Route path="/aracmuayene" element={<AracMuayene />} />
          <Route path="/burc" element={<Burc />} />
          <Route path="/kelimesayisi" element={<KelimeSayisi />} />
          <Route path="/dersnotu" element={<DersNotu />} />
          <Route path="/eokulnot" element={<EokulNot />} />
          <Route path="/lisemezuniyet" element={<LiseMezuniyet />} />
          <Route path="/liseortalama" element={<LiseOrtalama />} />
          <Route path="/lisesinifgecme" element={<LiseSinifGecme />} />
          <Route path="/takdirtesekkur" element={<TakdirTesekkur />} />
          <Route path="/universitenotortalama" element={<UniversiteNotOrtalama />} />
          <Route path="/vizefinalortalama" element={<VizeFinalOrtalama />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;