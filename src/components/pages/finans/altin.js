import $ from "jquery";
import HesaplaTemizleButtons from "../../hesaplaTemizleButtons.js";

function Altin() {

  const altinGramValue = 5200;
  const altinCumhuriyetValue = 34580;
  const altinTamValue = 34000;
  const altinYarimValue = 17343;
  const altinCeyrekValue = 8673;

  const altinFunction = () => {
    const sonucElement = $(".hesap-sonuc");
    const altinTuru = $("#altin-turu").val();
    const altinMiktar = parseFloat($("#altin-miktar").val());

    if (isNaN(altinMiktar) || altinMiktar === 0) {
      alert("Lütfen tüm alanları doldurunuz.");
      return;
    }

    if (altinTuru === "gram") {
      sonucElement.text(`İstenilen miktarda ${altinTuru} alınabilmesi için, ${altinMiktar * altinGramValue} TL gerekmektedir.`);
    } else if (altinTuru === "cumhuriyet") {
      sonucElement.text(`İstenilen miktarda ${altinTuru} alınabilmesi için, ${altinMiktar * altinCumhuriyetValue} TL gerekmektedir.`);
    } else if (altinTuru === "tam") {
      sonucElement.text(`İstenilen miktarda ${altinTuru} alınabilmesi için, ${altinMiktar * altinTamValue} TL gerekmektedir.`);
    } else if (altinTuru === "yarim") {
      sonucElement.text(`İstenilen miktarda ${altinTuru} alınabilmesi için, ${altinMiktar * altinYarimValue} TL gerekmektedir.`);
    } else if (altinTuru === "ceyrek") {
      sonucElement.text(`İstenilen miktarda ${altinTuru} alınabilmesi için, ${altinMiktar * altinCeyrekValue} TL gerekmektedir.`);
    }
  };

  return (
    <div className="feature-main-div altin-container">
      <h1 className="hesap-araci-header">Altın Hesaplama</h1>
      <p className="hesap-araci-description">Altın fiyatlarını ve hesaplamalarını buradan yapabilirsiniz.</p>

      <div className="input-info">
        <p>Altın Türü: </p>
        <select className="input-value" id="altin-turu">
          <option value="gram">Gram Altın</option>
          <option value="cumhuriyet">Cumhuriyet Altını</option>
          <option value="tam">Tam Altın</option>
          <option value="yarim">Yarım Altın</option>
          <option value="ceyrek">Çeyrek Altın</option>
        </select>
      </div>
      <div className="input-info">
        <p>Çevirilecek Miktar: </p>
        <input type="number" className="input-value" id="altin-miktar" />
      </div>        
      
      <HesaplaTemizleButtons hesaplamaFunction={altinFunction} />
    </div>
  );
}

export default Altin;