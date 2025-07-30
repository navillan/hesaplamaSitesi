

function SaatFarki() {
  const currentDate = new Date();
  const utcDate = new Date(currentDate.toISOString());
  const localOffset = currentDate.getTimezoneOffset() * 60000; // Offset in milliseconds
  const localDate = new Date(utcDate.getTime() - localOffset);

  return (
    <div className="feature-main-div saat-farki-container">
      <h1>Saat Farkı Hesaplama</h1>
      <p>UTC Tarihi: {utcDate.toISOString()}</p>
      <p>Yerel Tarih: {localDate.toISOString()}</p>
      <p>Saat Farkı: {localOffset / 3600000} saat</p>
    </div>
  );
}

export default SaatFarki;