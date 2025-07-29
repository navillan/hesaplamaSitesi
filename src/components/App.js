import HeaderMenu from "./headerDropMenu.js";
import HeaderDropPages from "./headerDropPages.js";


function App () {
  return (
    <div className="App">
      <div className="mainWrapper">
        <header className="app-header">
          <p className="header-title">Hesaplar</p>
          <HeaderMenu />
        </header>
        <HeaderDropPages />
      </div>
    </div>
  );
}

export default App;