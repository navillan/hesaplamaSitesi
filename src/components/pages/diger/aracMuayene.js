

function AracMuayene() {
  return (
    <div className="feature-main-div arac-muayene">
      <h1>Arac Muayene Hesaplama</h1>
      <p>Bu sayfa arac muayene tarihini hesaplamak için kullanılır.</p>
      <form>
        <label htmlFor="muayeneTarihi">Muayene Tarihi:</label>
        <input type="date" id="muayeneTarihi" name="muayeneTarihi" />
        <button type="submit">Hesapla</button>
      </form>
    </div>
  );
}

export default AracMuayene;