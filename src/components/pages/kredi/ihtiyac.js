import React, { useState } from "react";

function Ihtiyac() {
  const [tutar, setTutar] = useState("");
  const [vade, setVade] = useState("");
  const [faiz, setFaiz] = useState("");
  const [aylikTaksit, setAylikTaksit] = useState(null);
  const [toplamGeriOdeme, setToplamGeriOdeme] = useState(null);

  const hesapla = (e) => {
    e.preventDefault();
    const krediTutari = Number(tutar);
    const aylikFaizOrani = Number(faiz) / 100 / 12;
    const aySayisi = Number(vade);

    if (krediTutari > 0 && aylikFaizOrani > 0 && aySayisi > 0) {
      const taksit =
        (krediTutari * aylikFaizOrani) /
        (1 - Math.pow(1 + aylikFaizOrani, -aySayisi));
      setAylikTaksit(taksit.toFixed(2));
      setToplamGeriOdeme((taksit * aySayisi).toFixed(2));
    } else {
      setAylikTaksit(null);
      setToplamGeriOdeme(null);
    }
  };

  return (
    <div className="feature-main-div ihtiyac-container">
      <h1 className="ihtiyac-title">İhtiyaç Kredisi Hesaplama</h1>
      <p className="ihtiyac-description">
        İhtiyaç kredisi, acil nakit ihtiyaçlarınızı karşılamak için kullanabileceğiniz bir kredi türüdür. 
        Bu hesaplama aracı ile aylık taksitlerinizi ve toplam geri ödeme tutarınızı hesaplayabilirsiniz.
      </p>
      <form onSubmit={hesapla} className="ihtiyac-form">
        <label>
          Kredi Tutarı (₺):
          <input
            type="number"
            value={tutar}
            onChange={(e) => setTutar(e.target.value)}
            required
            min="1"
          />
        </label>
        <label>
          Vade (Ay):
          <input
            type="number"
            value={vade}
            onChange={(e) => setVade(e.target.value)}
            required
            min="1"
          />
        </label>
        <label>
          Yıllık Faiz Oranı (%):
          <input
            type="number"
            value={faiz}
            onChange={(e) => setFaiz(e.target.value)}
            required
            min="0.01"
            step="0.01"
          />
        </label>
        <button type="submit">Hesapla</button>
      </form>
      {aylikTaksit && (
        <div className="ihtiyac-sonuc">
          <p>Aylık Taksit: <strong>{aylikTaksit} ₺</strong></p>
          <p>Toplam Geri Ödeme: <strong>{toplamGeriOdeme} ₺</strong></p>
        </div>
      )}
    </div>
  );
}

export default Ihtiyac;