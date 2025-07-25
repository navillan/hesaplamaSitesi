import HeaderMenu from "./headerDropMenu.js";
import MainPage from "./mainPage.js";


function App() {
  return (
    <div className="App">
      <div className="mainWrapper">
        <header className="app-header">
          <p className="header-title">Hesaplar</p>
          <HeaderMenu />
        </header>
          <MainPage />
      </div>
    </div>
  );
}

export default App;