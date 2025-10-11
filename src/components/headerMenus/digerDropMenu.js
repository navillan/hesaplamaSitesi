import { Link } from "react-router-dom";

function DigerMenu () {
  return (
    <div className="kredi-menu" style={window.innerWidth >= 1024 ? {right: 1} : {}}>
      <Link to="/aidat-gecikme-tazminati">Aidat Gecikme Tazminatı Hesaplama</Link>
      <Link to="/arac-muayene-ücreti">Araç Muayene Ücreti Hesaplama</Link>
      <Link to="/burc">Burç Hesaplama</Link>
      <Link to="/kelime-sayisi">Kelime Sayısı Hesaplama</Link>
    </div>
  )
};

export default DigerMenu;