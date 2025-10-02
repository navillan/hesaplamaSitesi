import HesaplaTemizleButtons from "../../hesaplaTemizleButtons.js";
import $ from "jquery";

function Ihtiyac() {
  const ihtiyacKredisiFunction = () => {
    const krediTutari = parseFloat($("#kredi-tutari").val());
    const vade = parseFloat($("#vade").val());
    const faizOrani = parseFloat($("#faiz-orani").val()) / 100;
    if (isNaN(krediTutari) || isNaN(vade) || isNaN(faizOrani) || vade === 0) {
      alert("Lütfen geçerli sayılar giriniz.");
      return;
    }
    const aylikFaiz = faizOrani / 12;
    const aylikOdeme = (krediTutari * aylikFaiz) / (1 - Math.pow(1 + aylikFaiz, -vade));
    const toplamOdeme = aylikOdeme * vade;
    const toplamFaiz = toplamOdeme - krediTutari;
    const sonucElement = $(".hesap-sonuc");
    sonucElement.text(`Aylık Ödeme: ${aylikOdeme.toFixed(2)} TL, Toplam Ödeme: ${toplamOdeme.toFixed(2)} TL, Toplam Faiz: ${toplamFaiz.toFixed(2)} TL`);
  };

  return (
    <div className="feature-main-div ihtiyac-container">

      <h1 className="hesap-araci-header">İhtiyaç Kredisi Hesaplama</h1>
      <p className="hesap-araci-description">
        İhtiyaç kredisi, acil nakit ihtiyaçlarınızı karşılamak için kullanabileceğiniz bir kredi türüdür. 
        Bu hesaplama aracı ile aylık taksitlerinizi ve toplam geri ödeme tutarınızı hesaplayabilirsiniz.
      </p>

      <div className="input-info">
        <p>Kredi Tutarı: </p>
        <input className="input-value" id="kredi-tutari" type="text" placeholder="Kredi Tutarı" />
      </div>

      <div className="input-info">
        <p>Vade (Ay): </p>
        <input className="input-value" id="vade" type="text" placeholder="Vade (Ay)" />
      </div>

      <div className="input-info">
        <p>Faiz Oranı (%): </p>
        <input className="input-value" id="faiz-orani" type="text" placeholder="Faiz Oranı (%)" />
      </div>

      <HesaplaTemizleButtons hesaplamaFunction={ihtiyacKredisiFunction} />      
    </div>
  );
}

export default Ihtiyac;