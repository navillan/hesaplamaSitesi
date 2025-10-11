import { Link } from "react-router-dom";

function HukukMenu () {
  return (
    <div className="kredi-menu">
      <Link to="/arabuluculuk-ucreti">Arabuluculuk Ücreti Hesaplama</Link>
      <Link to="/icra-masrafi">İcra Masrafı Hesaplama</Link>
    </div>
  )
};

export default HukukMenu;