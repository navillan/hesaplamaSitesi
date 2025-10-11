import { Link } from "react-router-dom";

function SaglikMenu () {
  return (
    <div className="kredi-menu">
      <Link to="/adet-gunu">Adet Günü Hesaplama</Link>
      <Link to="/dogum-tarihi">Doğum Tarihi Hesaplama</Link>
      <Link to="/gunluk-kalori">Günlük Kalori İhtiyacı Hesaplama</Link>
      <Link to="/gunluk-karbonhidrat">Günlük Karbonhidrat İhtiyacı Hesaplama</Link>
      <Link to="/gunluk-su">Günlük Su İhtiyacı Hesaplama</Link>
      <Link to="/ideal-kilo">İdeal Kilo Hesaplama</Link>
      <Link to="/sigara-maliyeti">Sigara Maliyeti Hesaplama</Link>
    </div>
  )
};

export default SaglikMenu;