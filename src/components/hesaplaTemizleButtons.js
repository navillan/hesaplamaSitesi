import $ from "jquery";

function HesaplaTemizleButtons({ hesaplamaFunction }) {

  const handleTemizle = () => {
    $(".input-value").val("");
    $(".hesap-sonuc").text("");
  }

  return (
    <div className="button-container">
      <div className="button-cluster">
        <button className="hesapla-button" onClick={hesaplamaFunction}>Hesapla</button>
        <button className="temizle-button" onClick={handleTemizle}>Temizle</button>
      </div>
      <p className="hesap-sonuc"></p>
    </div>
  );
}

export default HesaplaTemizleButtons;