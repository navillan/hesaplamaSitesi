import { Link } from "react-router-dom";

function FinansMenu () {
  return (
    <div className="kredi-menu">
      <Link to="/altin">Altın Hesaplama</Link>
      <Link to="/doviz">Döviz Hesaplama</Link>
      <Link to="/enflasyon">Enflasyon Hesaplama</Link>
    </div>
  )
};

export default FinansMenu;