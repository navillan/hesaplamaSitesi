

function HesaplaTemizleButtons({ hesaplamaFunction }) {
  return (
    <div className="button-container">
      <div className="button-cluster">
        <button className="hesapla-button" onClick={hesaplamaFunction}>Hesapla</button>
        <button className="temizle-button">Temizle</button>
      </div>
      <p className="hesap-sonuc"></p>
    </div>
  );
}

export default HesaplaTemizleButtons;