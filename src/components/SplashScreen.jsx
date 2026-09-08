import { useEffect, useState } from "react";
import "./SplashScreen.css";

function SplashScreen() {
  const [hide, setHide] = useState(() => {
    return sessionStorage.getItem("certiportSplashShown") === "true";
  });

  useEffect(() => {
    if (hide) return;

    const timer = setTimeout(() => {
      sessionStorage.setItem("certiportSplashShown", "true");
      setHide(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, [hide]);

  if (hide) return null;

  return (
    <div className="splash-screen">
      <div className="splash-content">

        <img
  src="/logo/certiport-logo.png"
  alt="Certiport Academy"
  className="splash-logo"
/>

<div className="splash-message">
  <span>Welcome to</span>
  <strong>Certiport Academy</strong>
  <small>India's Leading IT Brand</small>
</div>

<div className="splash-loader">
  <span></span>
  <span></span>
  <span></span>
</div>

      </div>
    </div>
  );
}

export default SplashScreen;