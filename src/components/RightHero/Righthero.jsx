import About from "./components/About";
import Bottomsect from "./components/BottomSect";
import Discordrpc from "./components/Discordrpc";

function RightHero() {
  return (
    <div className="w-fit h-fit m-4" data-aos="fade-left">
      <About />
      <Discordrpc />
      <Bottomsect />
    </div>
  );
}

export default RightHero;
