import { Link } from "react-router-dom";

function MatematikMenu () {
  return (
    <div className="kredi-menu">
      <Link to="/alan">Alan Hesaplama</Link>
      <Link to="/hacim">Hacim Hesaplama</Link>
      <Link to="/inc">İnç Hesaplama</Link>
      <Link to="/metrekare">Metrekare Hesaplama</Link>
      <Link to="/mil">Mil Hesaplama</Link>
      <Link to="/oran">Oran Hesaplama</Link>
      <Link to="/yuzde">Yüzde Hesaplama</Link>
    </div>
  )
};

export default MatematikMenu;