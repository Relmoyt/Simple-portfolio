import banner from "../assets/banner.png";
import avatar from "../assets/avatar.png";
const name = "Relmo";
const user = "relmoyt";
const pron = "He / Him";
const desc = ["Line1", "Line2", "Line3"];
const userlink = "https://discord.gg/123123123123123";
function Lefthero() {
  return (
    <div className="w-fit h-fit m-4 pb-6 bg-white rounded-2xl shadow-sm shadow-black">
      <img
        src={banner}
        alt="banner"
        className="h-28 w-96 rounded-2xl rounded-b-none bg-white"
      />
      <div className="-mt-14 ml-3 relative w-28 h-28">
        <img
          src={avatar}
          alt="Avatar"
          className="rounded-full w-28 min-w-28 absolute z-25 "
        />
        <div className="w-5 h-5 ring-4 ring-white bg-green-600 rounded-full absolute z-50 right-2 bottom-2"></div>
      </div>
      <div className="ml-3 mt-3">
        <h1 className="text-white font-extrabold text-shadow-md text-xl text-shadow-black">
          {name}
        </h1>
        <p className="text-black/80 text-sm">
          {user}
          <div className="inline-block mx-2 mb-1 w-1 h-1 rounded-full bg-black/80"></div>
          {pron}
        </p>
      </div>
      <div className="w-full flex flex-row items-center justify-center gap-2 mt-2">
        <a
          href={userlink}
          className="text-white text-sm font-light bg-black border-1 border-black rounded-lg py-1 px-14 hover:bg-white hover:text-black hover:border-black transition"
        >
          Message
        </a>
        <a
          href={userlink}
          className="text-white text-sm font-light bg-black border-1 border-black rounded-lg py-1 px-14 hover:bg-white hover:text-black hover:border-black transition"
        >
          Add Friend
        </a>
      </div>
      <div className="text-black flex flex-col justify-center items-center mt-3">
        <div className="flex h-fit">
          <p className="py-2 px-5 border-b-2 mx-2 text-sm hover:bg-black/5 hover:cursor-pointer transition">
            Main
          </p>
          <p className="py-2 px-5 border-b-2 mx-2 text-sm hover:bg-black/5 border-none transition hover:cursor-pointer">
            Board
          </p>
          <p className="py-2 px-5 border-b-2 mx-2 text-sm hover:bg-black/5 border-none transition hover:cursor-pointer">
            Wishlist
          </p>
        </div>
        <div className="w-92 h-0.5 bg-gray-500/50 rounded-2xl -mt-0.5"></div>
      </div>
      <div className="ml-3 mt-3">
        <p className="max-w-94 mb-3 overflow-hidden text-black text-sm font-md">
          Bio
        </p>
        {desc.map((line, i) => (
          <div key={i}>
            <p className="max-w-94 overflow-hidden text-black/95 text-sm font-extralight">
              {line}
            </p>{" "}
          </div>
        ))}
        <div>
          <p className="text-sm font-medium mt-5 text-black">Member Since</p>
          <p className="text-black/90 text-sm mt-0.5">19 Jun 2024</p>
        </div>
      </div>
    </div>
  );
}

export default Lefthero;
