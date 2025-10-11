import { Link } from "react-router-dom";

function SigortaMenu () {
  return (
    <div className="kredi-menu" style={window.innerWidth >= 1024 ? {right: 1} : {}}>
      <Link to="/dask">DASK Sigortası Hesaplama</Link>
      <Link to="/kasko-degeri">Kasko Değeri Hesaplama</Link>
      <Link to="/kasko">Kasko Hesaplama</Link>
      <Link to="/saglik-sigortasi">Sağlık Sigortası Hesaplama</Link>
      <Link to="/trafik-sigortasi">Trafik Sigortası Hesaplama</Link>
    </div>
  )
};

export default SigortaMenu;