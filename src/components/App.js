import { useState, useEffect } from "react";
import HeaderMenu from "./headerDropMenu.js";
import SmallHeaderDropMenu from "./smallHeaderDropMenu.js";
import HeaderDropPages from "./headerDropPages.js";



function App () {
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);

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
        <HeaderDropPages />
      </div>
    </div>
  );
}

export default App;