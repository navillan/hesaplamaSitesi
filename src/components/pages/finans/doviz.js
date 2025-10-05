import $ from "jquery";
import HesaplaTemizleButtons from "../../hesaplaTemizleButtons.js";

function Doviz({ currencies, currenciesDate }) {

  const dateUpdate = new Date(currenciesDate);
  const formattedDate = dateUpdate.toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const dovizFunction = () => {
    const sonucElement = $(".hesap-sonuc");
    const cevirilecekMiktar = parseFloat($("#cevirilecek-miktar").val());
    const cevirilecekBirim = $("#cevirilecek-birim").val();
    const cevirilecegiBirim = $("#cevirilecegi-birim").val();

    if (isNaN(cevirilecekMiktar) || cevirilecekMiktar === 0) {
      alert("Lütfen tüm alanları uygun şekilde doldurunuz.");
      return;
    } else if (cevirilecekBirim === cevirilecegiBirim) {
      alert("Lütfen farklı para birimleri seçiniz.");
      return;
    }

    if (cevirilecekBirim === "USD") {
      if(cevirilecegiBirim === "EUR") {
        sonucElement.text(`İstenilen miktarda ${cevirilecekBirim} alınabilmesi için, ${(cevirilecekMiktar * (currencies.EUR / currencies.USD)).toFixed(2)} EUR gerekmektedir.`);
      } else if (cevirilecegiBirim === "TL") {
        sonucElement.text(`İstenilen miktarda ${cevirilecekBirim} alınabilmesi için, ${(cevirilecekMiktar / currencies.USD).toFixed(2)} TL gerekmektedir.`);
      }
    } else if (cevirilecekBirim === "EUR") {
      if(cevirilecegiBirim === "USD") {
        sonucElement.text(`İstenilen miktarda ${cevirilecekBirim} alınabilmesi için, ${(cevirilecekMiktar * (currencies.USD / currencies.EUR)).toFixed(2)} USD gerekmektedir.`);
      } else if (cevirilecegiBirim === "TL") {
        sonucElement.text(`İstenilen miktarda ${cevirilecekBirim} alınabilmesi için, ${(cevirilecekMiktar / currencies.EUR).toFixed(2)} TL gerekmektedir.`);
      }
    } else if (cevirilecekBirim === "TL") {
      if(cevirilecegiBirim === "USD") {
        sonucElement.text(`İstenilen miktarda ${cevirilecekBirim} alınabilmesi için, ${(cevirilecekMiktar * currencies.USD).toFixed(2)} USD gerekmektedir.`);
      } else if (cevirilecegiBirim === "EUR") {
        sonucElement.text(`İstenilen miktarda ${cevirilecekBirim} alınabilmesi için, ${(cevirilecekMiktar * currencies.EUR).toFixed(2)} EUR gerekmektedir.`);
      }
    }
  };

  return (
    <div className="feature-main-div doviz-container">

      <h1 className="hesap-araci-header">Döviz Kurları</h1>
      <p className="hesap-araci-description">Güncel döviz kurlarını buradan takip edebilirsiniz. Değerler en son {formattedDate} tarihinde güncellenmiştir.</p>

      <div className="input-info">
        <p>Çevirilecek Miktar: </p>
        <input type="number" className="input-value" id="cevirilecek-miktar" />
      </div>

      <div className="input-info">
        <p>Para Birimi: </p>
        <select className="input-value" id="cevirilecek-birim">
          <option value="EUR">Euro (EUR)</option>
          <option value="USD">Amerikan Doları (USD)</option>
          <option value="TL">Türk Lirası (TL)</option>
        </select>
      </div>

      <div className="input-info">
        <p>Çevirileceği Birim: </p>
        <select className="input-value" id="cevirilecegi-birim">
          <option value="TL">Türk Lirası (TL)</option>
          <option value="USD">Amerikan Doları (USD)</option>
          <option value="EUR">Euro (EUR)</option>
        </select>
      </div>

      <HesaplaTemizleButtons hesaplamaFunction={dovizFunction} />
    </div>
  );
}

export default Doviz;