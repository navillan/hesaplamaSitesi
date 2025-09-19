import KrediMenu from "./headerMenus/krediDropMenu.js";
import FinansMenu from "./headerMenus/finansDropMenu.js";
import SinavMenu from "./headerMenus/sinavDropMenu.js";
import EgitimMenu from "./headerMenus/egitimDropMenu.js";
import SaglikMenu from "./headerMenus/saglikDropMenu.js";
import MatematikMenu from "./headerMenus/matematikDropMenu.js";
import ZamanMenu from "./headerMenus/zamanDropMenu.js";
import MuhasebeMenu from "./headerMenus/muhasebeDropMenu.js";
import VergiMenu from "./headerMenus/vergiDropMenu.js";
import TicaretMenu from "./headerMenus/ticaretDropMenu.js";
import HukukMenu from "./headerMenus/hukukDropMenu.js";
import SigortaMenu from "./headerMenus/sigortaDropMenu.js";
import SeyahatMenu from "./headerMenus/seyahatDropMenu.js";
import DigerMenu from "./headerMenus/digerDropMenu.js";


function HeaderMenu () {
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
    </ul>
  );
};


export default HeaderMenu;