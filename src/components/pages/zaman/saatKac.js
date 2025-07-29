

function SaatKac() {
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div>
      <h1>Şu an saat kaç?</h1>
      <p>{currentTime}</p>
    </div>
  );
}

export default SaatKac;