import { Link } from "react-router-dom";

function KrediMenu () {
  return (
    <div className="kredi-menu">
      <Link to="/ihtiyac-kredisi">İhtiyaç Kredisi Hesaplama</Link>
      <Link to="/konut-kredisi">Konut Kredisi Hesaplama</Link>
      <Link to="/kredi">Kredi Hesaplama</Link>
    </div>
  )
};

export default KrediMenu;