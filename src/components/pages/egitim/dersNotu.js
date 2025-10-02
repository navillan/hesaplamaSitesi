import $ from "jquery";
import HesaplaTemizleButtons from "../../hesaplaTemizleButtons.js";

function DersNotu() {

  const dersNotuFunction = () => {
    const sonucElement = $(".hesap-sonuc");
    const yaziliSinav1 = parseFloat($("#yazili-sinav1").val());
    const yaziliSinav2 = parseFloat($("#yazili-sinav2").val());
    const yaziliSinav3 = parseFloat($("#yazili-sinav3").val());
    const yaziliSinav4 = parseFloat($("#yazili-sinav4").val());
    const projeGorevi1 = parseFloat($("#proje-gorevi1").val());
    const projeGorevi2 = parseFloat($("#proje-gorevi2").val());
    const dersEtkinlikKatılım1 = parseFloat($("#ders-etkinlik-katilim").val());
    const dersEtkinlikKatılım2 = parseFloat($("#ders-etkinlik-katilim2").val());
    const dersEtkinlikKatılım3 = parseFloat($("#ders-etkinlik-katilim3").val());
    const dersEtkinlikKatılım4 = parseFloat($("#ders-etkinlik-katilim4").val());
    const dersEtkinlikKatılım5 = parseFloat($("#ders-etkinlik-katilim5").val());
    let toplamPuan = 0;
    toplamPuan = ((yaziliSinav1 || 0) + (yaziliSinav2 || 0) + (yaziliSinav3 || 0) + (yaziliSinav4 || 0) + (projeGorevi1 || 0) + (projeGorevi2 || 0) + (dersEtkinlikKatılım1 || 0) + (dersEtkinlikKatılım2 || 0) + (dersEtkinlikKatılım3 || 0) + (dersEtkinlikKatılım4 || 0) + (dersEtkinlikKatılım5 || 0)) / 11;
    sonucElement.text(`Ders Notunuz: ${toplamPuan.toFixed(1)}`);
  }
  return (
    <div className="feature-main-div ders-notu">

      <h1 className="hesap-araci-header">Ders Notu Hesaplama</h1>
      <p className="hesap-araci-description">
        Bu sayfa ders notu hesaplama işlemleri için kullanılabilir.
        Puanını boş bıraktığınız kısımlar ortalama hesaplamalarına dahil edilmeyecektir.
      </p>

      <div className="input-info">
        <p>1. Yazılı Sınavı: </p>
        <input type="number" className="input-value" id="yazili-sinav1" />
      </div>
      <div className="input-info">
        <p>2. Yazılı Sınavı: </p>
        <input type="number" className="input-value" id="yazili-sinav2" />
      </div>
      <div className="input-info">
        <p>3. Yazılı Sınavı: </p>
        <input type="number" className="input-value" id="yazili-sinav3" />
      </div>
      <div className="input-info">
        <p>4. Yazılı Sınavı: </p>
        <input type="number" className="input-value" id="yazili-sinav4" />
      </div>

      <div className="input-info">
        <p>1. Proje Görevi: </p>
        <input type="number" className="input-value" id="proje-gorevi1" />
      </div>
      <div className="input-info">
        <p>2. Proje Görevi: </p>
        <input type="number" className="input-value" id="proje-gorevi2" />
      </div>
      
      <div className="input-info">
        <p>1. Ders Etkin. Katılım: </p>
        <input type="number" className="input-value" id="ders-etkinlik-katilim" />
      </div>
      <div className="input-info">
        <p>2. Ders Etkin. Katılım: </p>
        <input type="number" className="input-value" id="ders-etkinlik-katilim2" />
      </div>
      <div className="input-info">
        <p>3. Ders Etkin. Katılım: </p>
        <input type="number" className="input-value" id="ders-etkinlik-katilim3" />
      </div>
      <div className="input-info">
        <p>4. Ders Etkin. Katılım: </p>
        <input type="number" className="input-value" id="ders-etkinlik-katilim4" />
      </div>
      <div className="input-info">
        <p>5. Ders Etkin. Katılım: </p>
        <input type="number" className="input-value" id="ders-etkinlik-katilim5" />
      </div>

      <HesaplaTemizleButtons hesaplamaFunction={dersNotuFunction}/>
    </div>
  );
}

export default DersNotu;