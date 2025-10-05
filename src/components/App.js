import { useState, useEffect } from "react";
import HeaderMenu from "./headerDropMenu.js";
import SmallHeaderDropMenu from "./smallHeaderDropMenu.js";
import HeaderDropPages from "./headerDropPages.js";
import useGetCurrencies from "../hooks/useGetCurrencies.js";



function App () {
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
  const { currenciesDate, currencies } = useGetCurrencies();

  useEffect(() => {
    const handleResize = () => setCurrentWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <div className="App">
      <div className="mainWrapper">
        <header className="app-header">
          <a className="header-title" href="/">Anasayfa</a>
          {currentWidth < 1024 ? <SmallHeaderDropMenu /> : <HeaderMenu />}
        </header>
        <HeaderDropPages currencies={currencies} currenciesDate={currenciesDate} />
      </div>
    </div>
  );
}

export default App;