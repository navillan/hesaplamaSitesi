import { Link } from "react-router-dom";

function TicaretMenu () {
  return (
    <div className="kredi-menu">
      <Link to="/arsapayi">Arsa Payı Hesaplama</Link>
      <Link to="/indirim">İndirim Hesaplama</Link>
    </div>
  )
};

export default TicaretMenu;