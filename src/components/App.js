import HeaderMenu from "./headerMenu.js";

function App() {
  return (
    <div className="App">
      <div className="mainWrapper">
        <header className="app-header">
          <p className="header-title">Hesaplar</p>
          <HeaderMenu />
        </header>
        <div className="main-page">
          <h1>Hesaplama Sitesi</h1>
          <p>Sitenin kullanım amacı; anlık gelişen merak veya ihtiyaç durumunda istenilen bütün hesaplama yöntemlerine ulaşılabilen bir hesaplama sitesi olması.</p>
        </div>
      </div>
    </div>
  );
}

export default App;