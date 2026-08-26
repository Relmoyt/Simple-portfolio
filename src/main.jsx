import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import App from "./App.jsx";
import background from "./assets/Background.png";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="w-screen h-screen -z-10 absolute top-0 left-0 bg-cover bg-center"
    ></div>

    <div className="w-screen h-screen -z-1 backdrop-blur-xs absolute top-0 left-0"></div>

    <App />
    <Analytics />
  </StrictMode>,
);
