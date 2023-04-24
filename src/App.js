import Splash from "./components/SplashScreen";
import "./components-css/app.css";
import { useEffect, useState } from "react";
import MainNavigation from "./components/MainNavigation";

function App() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Oculta el componente después de 7 segundos
    const timer = setTimeout(() => {
      setShow(false);
    }, 2000);//7000
    return () => clearTimeout(timer);
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
