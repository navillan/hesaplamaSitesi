

function HesaplaTemizleButtons({ hesaplamaFunction }) {
  return (
    <div className="button-container">
      <button className="hesapla-button" onClick={hesaplamaFunction}>Hesapla</button>
      <button className="temizle-button">Temizle</button>
      <p className="hesap-sonuc">Hesaplama sonucu:</p>
    </div>
  );
}

export default HesaplaTemizleButtons;