

function KacGunKaldi() {
  const currentDate = new Date();
  const targetDate = new Date('2024-01-01'); // Örnek hedef tarih
  const timeDifference = targetDate - currentDate;
  const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return (
    <div className="feature-main-div kac-gun-kaldi-container">
      <h1>Yeni Yıla Kalan Gün Sayısı</h1>
      <p>{daysRemaining} gün kaldı!</p>
    </div>
  );
}

export default KacGunKaldi;