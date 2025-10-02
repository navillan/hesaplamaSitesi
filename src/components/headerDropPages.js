import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage.js";
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
import Altin from "./pages/finans/altin.js";
import Doviz from "./pages/finans/doviz.js";
import Enflasyon from "./pages/finans/enflasyon.js";
import Arabuluculuk from "./pages/hukuk/arabuluculuk.js";
import IcraMasrafi from "./pages/hukuk/icraMasrafi.js";
import Ihtiyac from "./pages/kredi/ihtiyac.js";
import Konut from "./pages/kredi/konut.js";
import Kredi from "./pages/kredi/kredi.js";
import Alan from "./pages/matematik/alan.js";
import Hacim from "./pages/matematik/hacim.js";
import Inc from "./pages/matematik/inc.js";
import Metrekare from "./pages/matematik/metrekare.js";
import Mil from "./pages/matematik/mil.js";
import Oran from "./pages/matematik/oran.js";
import Yuzde from "./pages/matematik/yuzde.js";
import BruttenNeteMaas from "./pages/muhasebe/bruttenNeteMaas.js";
import DogumIzni from "./pages/muhasebe/dogumIzni.js";
import Emeklilik from "./pages/muhasebe/emeklilik.js";
import YillikIzin from "./pages/muhasebe/yillikIzin.js";
import Adet from "./pages/saglik/adet.js";
import DogumTarihi from "./pages/saglik/dogumTarihi.js";
import GunlukKalori from "./pages/saglik/gunlukKalori.js";
import GunlukKarbonhidrat from "./pages/saglik/gunlukKarbonhidrat.js";
import GunlukSu from "./pages/saglik/gunlukSu.js";
import IdealKilo from "./pages/saglik/idealKilo.js";
import SigaraMaliyeti from "./pages/saglik/sigaraMaliyeti.js";
import ElektrikliAracSarj from "./pages/seyahat/elektrikliAracSarj.js";
import Koordinat from "./pages/seyahat/koordinat.js";
import Mesafe from "./pages/seyahat/mesafe.js";
import OtelFiyati from "./pages/seyahat/otelFiyati.js";
import Dask from "./pages/sigorta/dask.js";
import Kasko from "./pages/sigorta/kasko.js";
import KaskoDegeri from "./pages/sigorta/kaskoDegeri.js";
import SaglikSigortasi from "./pages/sigorta/saglikSigortasi.js";
import TrafikSigortasi from "./pages/sigorta/trafikSigortasi.js";
import Ales from "./pages/sinav/ales.js";
import Ayt from "./pages/sinav/ayt.js";
import Dgs from "./pages/sinav/dgs.js";
import Ehliyet from "./pages/sinav/ehliyet.js";
import Lgs from "./pages/sinav/lgs.js";
import ArsaPayi from "./pages/ticaret/arsaPayi.js";
import Indirim from "./pages/ticaret/indirim.js";
import DamgaVergisi from "./pages/vergi/damgaVergisi.js";
import EmlakVergisi from "./pages/vergi/emlakVergisi.js";
import GelirVergisi from "./pages/vergi/gelirVergisi.js";
import GumrukVergisi from "./pages/vergi/gumrukVergisi.js";
import Kdv from "./pages/vergi/kdv.js";
import Kira from "./pages/vergi/kira.js";
import Otv from "./pages/vergi/otv.js";
import GunBatimi from "./pages/zaman/gunBatimi.js";
import GunDogumu from "./pages/zaman/gunDogumu.js";
import KacGunKaldi from "./pages/zaman/kacGunKaldi.js";
import KacGunOldu from "./pages/zaman/kacGunOldu.js";
import SaatFarki from "./pages/zaman/saatFarki.js";
import SaatKac from "./pages/zaman/saatKac.js";
import Yas from "./pages/zaman/yas.js";

function HeaderDropPages() {
  return (
    <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/ihtiyac-kredisi" element={<Ihtiyac />} />
          <Route path="/konut-kredisi" element={<Konut />} />
          <Route path="/kredi" element={<Kredi />} />
          <Route path="/altin" element={<Altin />} />
          <Route path="/doviz" element={<Doviz />} />
          <Route path="/enflasyon" element={<Enflasyon />} />
          <Route path="/ales" element={<Ales />} />
          <Route path="/ayt" element={<Ayt />} />
          <Route path="/dgs" element={<Dgs />} />
          <Route path="/ehliyet" element={<Ehliyet />} />
          <Route path="/lgs" element={<Lgs />} />
          <Route path="/ders-notu" element={<DersNotu />} />
          <Route path="/eokul-not" element={<EokulNot />} />
          <Route path="/lise-mezuniyet-puani" element={<LiseMezuniyet />} />
          <Route path="/lise-ortalama" element={<LiseOrtalama />} />
          <Route path="/lise-sinif-gecme" element={<LiseSinifGecme />} />
          <Route path="/takdir-tesekkur" element={<TakdirTesekkur />} />
          <Route path="/universite-not-ortalama" element={<UniversiteNotOrtalama />} />
          <Route path="/vize-final-ortalama" element={<VizeFinalOrtalama />} />
          <Route path="/adet-gunu" element={<Adet />} />
          <Route path="/dogum-tarihi" element={<DogumTarihi />} />
          <Route path="/gunluk-kalori" element={<GunlukKalori />} />
          <Route path="/gunluk-karbonhidrat" element={<GunlukKarbonhidrat />} />
          <Route path="/gunluk-su" element={<GunlukSu />} />
          <Route path="/ideal-kilo" element={<IdealKilo />} />
          <Route path="/sigara-maliyeti" element={<SigaraMaliyeti />} />
          <Route path="/alan" element={<Alan />} />
          <Route path="/hacim" element={<Hacim />} />
          <Route path="/inc" element={<Inc />} />
          <Route path="/metrekare" element={<Metrekare />} />
          <Route path="/mil" element={<Mil />} />
          <Route path="/oran" element={<Oran />} />
          <Route path="/yuzde" element={<Yuzde />} />
          <Route path="/gun-batimi" element={<GunBatimi />} />
          <Route path="/gun-dogumu" element={<GunDogumu />} />
          <Route path="/kac-gun-kaldi" element={<KacGunKaldi />} />
          <Route path="/kac-gun-oldu" element={<KacGunOldu />} />
          <Route path="/saat-farki" element={<SaatFarki />} />
          <Route path="/saat-kac" element={<SaatKac />} />
          <Route path="/yas" element={<Yas />} />
          <Route path="/brutten-nete-maas" element={<BruttenNeteMaas />} />
          <Route path="/dogum-izni" element={<DogumIzni />} />
          <Route path="/emeklilik" element={<Emeklilik />} />
          <Route path="/yillik-izin" element={<YillikIzin />} />
          <Route path="/damga" element={<DamgaVergisi />} />
          <Route path="/emlak" element={<EmlakVergisi />} />
          <Route path="/gelir" element={<GelirVergisi />} />
          <Route path="/gumruk" element={<GumrukVergisi />} />
          <Route path="/kdv" element={<Kdv />} />
          <Route path="/kira" element={<Kira />} />
          <Route path="/otv" element={<Otv />} />
          <Route path="/arsapayi" element={<ArsaPayi />} />
          <Route path="/indirim" element={<Indirim />} />
          <Route path="/arabuluculuk-ucreti" element={<Arabuluculuk />} />
          <Route path="/icra-masrafi" element={<IcraMasrafi />} />
          <Route path="/dask" element={<Dask />} />
          <Route path="/kasko" element={<Kasko />} />
          <Route path="/kasko-degeri" element={<KaskoDegeri />} />
          <Route path="/saglik-sigortasi" element={<SaglikSigortasi />} />
          <Route path="/trafik-sigortasi" element={<TrafikSigortasi />} />
          <Route path="/elektrikliaracsarj" element={<ElektrikliAracSarj />} />
          <Route path="/koordinat" element={<Koordinat />} />
          <Route path="/mesafe" element={<Mesafe />} />
          <Route path="/otel-fiyati" element={<OtelFiyati />} />
          <Route path="/aidat-gecikme-tazminati" element={<AidatGecikme />} />
          <Route path="/arac-muayene-ücreti" element={<AracMuayene />} />
          <Route path="/burc" element={<Burc />} />
          <Route path="/kelime-sayisi" element={<KelimeSayisi />} />          
      </Routes>
  );
}

export default HeaderDropPages;