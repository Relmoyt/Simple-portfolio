import avatar from "../../../assets/avatar.png";
import TimezoneWidget from "./Timezone";
const name = "Relmo";
const user = "relmoyt";
const pron = "He / Him";
function Discordrpc() {
  return (
    <div className="max-w-2xl h-fit flex">
      <div className="w-1/2 mr-2 h-25 border-2 flex border-white rounded-2xl p-2 bg-white backdrop-blur-xl text-black mt-2 shadow-sm shadow-black relative">
        <div className="w-20 h-20">
          <img
            src={avatar}
            alt="Avatar"
            className="rounded-full w-20 absolute z-25 "
          />
          <div className="w-5 h-5 ring-4 ring-white bg-green-600 rounded-full absolute z-50 left-18 bottom-2"></div>
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
      </div>
      <div className="w-1/2 h-25 border-2 border-white rounded-2xl p-4 bg-white backdrop-blur-xl text-black mt-2 shadow-sm shadow-black">
        <TimezoneWidget />
      </div>
    </div>
  );
}

export default Discordrpc;
