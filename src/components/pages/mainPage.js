import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="feature-main-div main-page">
          <h1>Hesaplama Sitesi</h1>
          <p>Aktif Olan Hesaplamalar</p>
          <ul>
            <p>Kredi</p>
            <li><Link to="/ihtiyac-kredisi">İhtiyaç Kredisi Hesaplama</Link></li>
            <li><Link to="/konut-kredisi">Konut Kredisi Hesaplama</Link></li>
            <p>Finans</p>
            <li><Link to="/altin">Altın Hesaplama</Link></li>
            <li><Link to="/doviz">Döviz Hesaplama</Link></li>
            <p>Eğitim</p>
            <li><Link to="/ders-notu">Ders Notu Hesaplama</Link></li>
          </ul>
          <p>* Sitede bulunan hesaplama araçları örnek olarak eklenmiştir. Beklenenden yanlış sonuçlar verebilir.</p>
    </div>
  )
}

export default MainPage;