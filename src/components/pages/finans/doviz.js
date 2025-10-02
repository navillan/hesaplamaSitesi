import $ from "jquery";
import HesaplaTemizleButtons from "../../hesaplaTemizleButtons.js";

function Doviz() {

  const dolarValue = 23.50;
  const euroValue = 25.00;

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

    if (cevirilecekBirim === "usd") {
      if(cevirilecegiBirim === "eur") {
        sonucElement.text(`İstenilen miktarda ${cevirilecekBirim} alınabilmesi için, ${(cevirilecekMiktar * dolarValue) / euroValue} EUR gerekmektedir.`);
      } else if (cevirilecegiBirim === "tl") {
        sonucElement.text(`İstenilen miktarda ${cevirilecekBirim} alınabilmesi için, ${cevirilecekMiktar * dolarValue} TL gerekmektedir.`);
      }
    } else if (cevirilecekBirim === "eur") {
      if(cevirilecegiBirim === "usd") {
        sonucElement.text(`İstenilen miktarda ${cevirilecekBirim} alınabilmesi için, ${(cevirilecekMiktar * euroValue) / dolarValue} USD gerekmektedir.`);
      } else if (cevirilecegiBirim === "tl") {
        sonucElement.text(`İstenilen miktarda ${cevirilecekBirim} alınabilmesi için, ${cevirilecekMiktar * euroValue} TL gerekmektedir.`);
      }
    } else if (cevirilecekBirim === "tl") {
      if(cevirilecegiBirim === "usd") {
        sonucElement.text(`İstenilen miktarda ${cevirilecekBirim} alınabilmesi için, ${cevirilecekMiktar / dolarValue} USD gerekmektedir.`);
      } else if (cevirilecegiBirim === "eur") {
        sonucElement.text(`İstenilen miktarda ${cevirilecekBirim} alınabilmesi için, ${cevirilecekMiktar / euroValue} EUR gerekmektedir.`);
      }
    }
  };

  return (
    <div className="feature-main-div doviz-container">

      <h1 className="hesap-araci-header">Döviz Kurları</h1>
      <p className="hesap-araci-description">Güncel döviz kurlarını buradan takip edebilirsiniz.</p>

      <div className="input-info">
        <p>Çevirilecek Miktar: </p>
        <input type="number" className="input-value" id="cevirilecek-miktar" />
      </div>

      <div className="input-info">
        <p>Para Birimi: </p>
        <select className="input-value" id="cevirilecek-birim">
          <option value="euro">Euro (EUR)</option>
          <option value="usd">Amerikan Doları (USD)</option>
          <option value="tl">Türk Lirası (TL)</option>
        </select>
      </div>

      <div className="input-info">
        <p>Çevirileceği Birim: </p>
        <select className="input-value" id="cevirilecegi-birim">
          <option value="tl">Türk Lirası (TL)</option>
          <option value="usd">Amerikan Doları (USD)</option>
          <option value="eur">Euro (EUR)</option>
        </select>
      </div>

      <HesaplaTemizleButtons hesaplamaFunction={dovizFunction} />
    </div>
  );
}

export default Doviz;