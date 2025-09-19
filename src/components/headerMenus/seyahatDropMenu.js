

function SeyahatMenu () {
  return (
    <div className="kredi-menu" style={window.innerWidth >= 1024 ? {right: 1} : {}}>
      <a href="/elektrikli-arac-sarj">Elektrikli Araç Şarj Hesaplama</a>
      <a href="/koordinat">Koordinat Hesaplama</a>
      <a href="/mesafe">Mesafe Hesaplama</a>
      <a href="/otel-fiyati">Otel Fiyatı Hesaplama</a>
    </div>
  )
};

export default SeyahatMenu;