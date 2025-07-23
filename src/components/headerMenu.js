import KrediMenu from "./krediDropMenu.js";
import FinansMenu from "./finansDropMenu.js";
import SinavMenu from "./sinavDropMenu.js";
import EgitimMenu from "./egitimDropMenu.js";
import SaglikMenu from "./saglikDropMenu.js";
import MatematikMenu from "./matematikDropMenu.js";
import ZamanMenu from "./zamanDropMenu.js";
import MuhasebeMenu from "./muhasebeDropMenu.js";
import VergiMenu from "./vergiDropMenu.js";
import TicaretMenu from "./ticaretDropMenu.js";
import HukukMenu from "./hukukDropMenu.js";
import SigortaMenu from "./sigortaDropMenu.js";
import SeyahatMenu from "./seyahatDropMenu.js";
import DigerMenu from "./digerDropMenu.js";


const HeaderMenu = () => {
  return (
    <ul className="menu-drop-wrapper">
      <li className="menu-drop">
        Kredi
        <KrediMenu />
      </li>
      <li className="menu-drop">
        Finans
        <FinansMenu />
      </li>
      <li className="menu-drop">
        Sınav
        <SinavMenu />
      </li>
      <li className="menu-drop">
        Eğitim
        <EgitimMenu />
      </li>
      <li className="menu-drop">
        Sağlık
        <SaglikMenu />
      </li>
      <li className="menu-drop">
        Matematik
        <MatematikMenu />
      </li>
      <li className="menu-drop">
        Zaman
        <ZamanMenu />
      </li>
      <li className="menu-drop">
        Muhasebe
        <MuhasebeMenu />
      </li>
      <li className="menu-drop">
        Vergi
        <VergiMenu />
      </li>
      <li className="menu-drop">
        Ticaret
        <TicaretMenu />
      </li>
      <li className="menu-drop">
        Hukuk
        <HukukMenu />
      </li>
      <li className="menu-drop">
        Sigorta
        <SigortaMenu />
      </li>
      <li className="menu-drop">
        Seyahat
        <SeyahatMenu />
      </li>
      <li className="menu-drop">
        Diğer
        <DigerMenu />
      </li>
      <li className="menu-drop">Arama</li>
    </ul>
  );
};


export default HeaderMenu;