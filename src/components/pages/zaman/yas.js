

function Yas() {
  const currentDate = new Date();
  const birthDate = new Date('1990-01-01'); // Örnek doğum tarihi
  const ageInMilliseconds = currentDate - birthDate;
  const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));

  return (
    <div className="feature-main-div yas-container">
      <h1>Yaşınız</h1>
      <p>{ageInYears} yaşındasınız!</p>
    </div>
  );
}

export default Yas;