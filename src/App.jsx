import "./App.css";
import Hero from "./pages/Hero";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MouseTilt from "./components/MouseTilt";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <MouseTilt>
      <main className="h-screen w-screen">
        <Hero />
      </main>
    </MouseTilt>
  );
}

export default App;
