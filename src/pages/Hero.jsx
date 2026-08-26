import Lefthero from "../components/Lefthero";
import RightHero from "../components/RightHero/Righthero";

function Hero() {
  return (
    <section className="w-screen h-screen mx-auto z-5 flex items-center justify-center">
      <Lefthero />
      <RightHero />
    </section>
  );
}

export default Hero;
