

function SigortaMenu () {
  return (
    <div className="kredi-menu" style={window.innerWidth >= 1024 ? {right: 1} : {}}>
      <a href="/dask">DASK Sigortası Hesaplama</a>
      <a href="/kasko-degeri">Kasko Değeri Hesaplama</a>
      <a href="/kasko">Kasko Hesaplama</a>
      <a href="/saglik-sigortasi">Sağlık Sigortası Hesaplama</a>
      <a href="/trafik-sigortasi">Trafik Sigortası Hesaplama</a>
    </div>
  )
};

export default SigortaMenu;