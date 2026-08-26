import Lefthero from "../components/Lefthero";
import RightHero from "../components/RightHero/Righthero";

function Hero() {
  return (
    <section className="w-screen h-screen mx-auto z-1">
      <RightHero />
      <Lefthero />
    </section>
  );
}

export default Hero;
