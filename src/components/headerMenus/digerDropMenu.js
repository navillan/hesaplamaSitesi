

function DigerMenu () {
  return (
    <div className="kredi-menu" style={window.innerWidth >= 1024 ? {right: 1} : {}}>
      <a href="/aidat-gecikme-tazminati">Aidat Gecikme Tazminatı Hesaplama</a>
      <a href="/arac-muayene-ücreti">Araç Muayene Ücreti Hesaplama</a>
      <a href="/burc">Burç Hesaplama</a>
      <a href="/kelime-sayisi">Kelime Sayısı Hesaplama</a>
    </div>
  )
};

export default DigerMenu;