import { Link } from "react-router-dom";

function EgitimMenu () {
  return (
    <div className="kredi-menu">
      <Link to="/ders-notu">Ders Notu Hesaplama</Link>
      <Link to="/eokul-not">E-Okul Not Hesaplama</Link>
      <Link to="/lise-mezuniyet-puani">Lise Mezuniyet Puanı Hesaplama</Link>
      <Link to="/lise-ortalama">Lise Ortalama Hesaplama</Link>
      <Link to="/lise-sinif-gecme">Lise Sınıf Geçme Hesaplama</Link>
      <Link to="/takdir-tesekkur">Takdir Teşekkür Hesaplama</Link>
      <Link to="/universite-not-ortalama">Üniversite Not Ortalaması Hesaplama</Link>
      <Link to="/vize-final-ortalama">Vize Final Ortalama Hesaplama</Link>
    </div>
  )
};

export default EgitimMenu;