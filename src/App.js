import { useEffect, useState } from "react";
import Splash from "./components/SplashScreen";
import MainNavigation from "./components/MainNavigation";
import "./components-css/app.css";

function App() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleClick = () => {
      setShow(false);
    };

    // Agrega el event listener para detectar clics
    document.addEventListener("click", handleClick);

    // Oculta el componente después de 7 segundos
    const timer = setTimeout(() => {
      setShow(false);
    }, 7000);

    // Elimina el event listener y limpia el timeout cuando sea necesario
    return () => {
      document.removeEventListener("click", handleClick);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="App">
      {
        show ? (<Splash></Splash>)
          :
          (
            <>
            <MainNavigation></MainNavigation>
            </>
          )
      }
    </div>
  );
}

export default App;
