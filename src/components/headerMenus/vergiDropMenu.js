import { Link } from "react-router-dom";

function VergiMenu () {
  return (
    <div className="kredi-menu">
      <Link to="/damga">Damga Vergisi Hesaplama</Link>
      <Link to="/emlak">Emlak Vergisi Hesaplama</Link>
      <Link to="/gelir">Gelir Vergisi Hesaplama</Link>
      <Link to="/gumruk">Gümrük Vergisi Hesaplama</Link>
      <Link to="/kdv">KDV Hesaplama</Link>
      <Link to="/kira">Kira Vergisi Hesaplama</Link>
      <Link to="/otv">ÖTV Hesaplama</Link>
    </div>
  )
};

export default VergiMenu;