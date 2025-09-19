import { useState } from "react";
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




function SmallHeaderDropMenu() {
  const [isClicked, setIsClicked] = useState(false);


    return (
      <div className="small-menu-drop-container">
        <div className="small-menu-drop-header" onClick={() => setIsClicked(!isClicked)}>
            <h4 style={{marginRight:"0.5rem"}}>Tüm Hesaplamalar</h4>
            <p>{isClicked?"🠉":"🠋"}</p>
        </div>
        <ul className="small-menu-drop-wrapper" style={{display:isClicked?"flex":"none"}}>
          <li className="small-menu-drop">
            ►
            Kredi
            <KrediMenu />
          </li>
          <li className="small-menu-drop">
            ►
            Finans
            <FinansMenu />
          </li>
          <li className="small-menu-drop">
            ►
            Sınav
            <SinavMenu />
          </li>
          <li className="small-menu-drop">
            ►
            Eğitim
            <EgitimMenu />
          </li>
          <li className="small-menu-drop">
            ►
            Sağlık
            <SaglikMenu />
          </li>
          <li className="small-menu-drop">
            ►
            Matematik
            <MatematikMenu />
          </li>
          <li className="small-menu-drop">
            ►
            Zaman
            <ZamanMenu />
          </li>
          <li className="small-menu-drop">
            ►
            Muhasebe
            <MuhasebeMenu />
          </li>
          <li className="small-menu-drop">
            ►
            Vergi
            <VergiMenu />
          </li>
          <li className="small-menu-drop">
            ►
            Ticaret
            <TicaretMenu />
          </li>
          <li className="small-menu-drop">
            ►
            Hukuk
            <HukukMenu />
          </li>
          <li className="small-menu-drop">
            ►
            Sigorta
            <SigortaMenu />
          </li>
          <li className="small-menu-drop">
            ►
            Seyahat
            <SeyahatMenu />
          </li>
          <li className="small-menu-drop">
            ►
            Diğer
            <DigerMenu />
          </li>
        </ul>
      </div>
    );
  };

  export default SmallHeaderDropMenu;
