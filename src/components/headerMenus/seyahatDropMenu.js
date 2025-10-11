import { Link } from "react-router-dom";

function SeyahatMenu () {
  return (
    <div className="kredi-menu" style={window.innerWidth >= 1024 ? {right: 1} : {}}>
      <Link to="/elektrikliaracsarj">Elektrikli Araç Şarj Hesaplama</Link>
      <Link to="/koordinat">Koordinat Hesaplama</Link>
      <Link to="/mesafe">Mesafe Hesaplama</Link>
      <Link to="/otel-fiyati">Otel Fiyatı Hesaplama</Link>
    </div>
  )
};

export default SeyahatMenu;