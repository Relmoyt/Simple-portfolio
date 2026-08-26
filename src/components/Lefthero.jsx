import PortfolioImage from "../assets/PortfolioImage.jpg";

function Lefthero() {
  return (
    <div className="w-fit h-fit m-4">
      <img
        src={PortfolioImage}
        alt="Portfolio Image"
        className="h-135 w-96 rounded-2xl ring-3 ring-neutral-950"
      />
    </div>
  );
}

export default Lefthero;
