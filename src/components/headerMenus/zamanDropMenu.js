import { Link } from "react-router-dom";

function ZamanMenu () {
  return (
    <div className="kredi-menu">
      <Link to="/gun-batimi">Gün Batımı Hesaplama</Link>
      <Link to="/gun-dogumu">Gün Doğumu Hesaplama</Link>
      <Link to="/kac-gun-kaldi">Kaç Gün Kaldı Hesaplama</Link>
      <Link to="/kac-gun-oldu">Kaç Gün Oldu Hesaplama</Link>
      <Link to="/saat-farki">Saat Farkı Hesaplama</Link>
      <Link to="/saat-kac">Saat Kaç Hesaplama</Link>
      <Link to="/yas">Yaş Hesaplama</Link>
    </div>
  )
};

export default ZamanMenu;