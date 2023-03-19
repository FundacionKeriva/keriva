import Splash from "./components/SplashScreen";
import "./components-css/app.css";
import { useEffect, useState } from "react";

function App() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Oculta el componente después de 7 segundos
    const timer = setTimeout(() => {
      setShow(false);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {show ?(<Splash></Splash>):(<h1>Landing</h1>)}
    </div>
  );
}

export default App;
