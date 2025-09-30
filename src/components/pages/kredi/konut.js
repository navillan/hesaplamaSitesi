import HesaplaTemizleButtons from "../../hesaplaTemizleButtons.js";

function Konut() {

  const konutKredisiFunction = () => {
    const krediTutari = parseFloat(document.getElementById("kredi-tutari").value);
    const vade = parseFloat(document.getElementById("vade").value);
    const faizOrani = parseFloat(document.getElementById("faiz-orani").value) / 100;
    if (isNaN(krediTutari) || isNaN(vade) || isNaN(faizOrani) || vade === 0) {
      alert("Lütfen geçerli sayılar giriniz.");
      return;
    }
    const aylikFaiz = faizOrani / 12;
    const aylikOdeme = (krediTutari * aylikFaiz) / (1 - Math.pow(1 + aylikFaiz, -vade));
    const toplamOdeme = aylikOdeme * vade;
    const toplamFaiz = toplamOdeme - krediTutari;
    const sonucElement = document.querySelector(".hesap-sonuc");
    sonucElement.textContent = `Aylık Ödeme: ${aylikOdeme.toFixed(2)} TL, Toplam Ödeme: ${toplamOdeme.toFixed(2)} TL, Toplam Faiz: ${toplamFaiz.toFixed(2)} TL`;
  };

  return (
    <div className="feature-main-div kredi-container">
      <h1 className="hesap-araci-header">Konut Kredisi Hesaplama</h1>
      <p>Bu araç, konut kredisi aylık ödemelerinizi, toplam ödemenizi ve toplam faiz tutarınızı hesaplamanıza yardımcı olur.</p>
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

      <HesaplaTemizleButtons hesaplamaFunction={konutKredisiFunction} />
    </div>
  );
}

export default Konut;