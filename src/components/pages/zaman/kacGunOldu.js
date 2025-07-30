

function KacGunOldu() {
  const startDate = new Date('2023-01-01'); // Örnek başlangıç tarihi
  const currentDate = new Date();
  
  const timeDifference = currentDate - startDate;
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return (
    <div className="feature-main-div kac-gun-oldu-container">
      <h1>Kaç Gün Oldu?</h1>
      <p>Başlangıç tarihinden bu yana {daysDifference} gün geçti.</p>
    </div>
  );
}

export default KacGunOldu;