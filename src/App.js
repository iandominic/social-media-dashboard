import logo from "./logo.svg";
import "./App.css";

import fb from "../src/img/icon-facebook.svg";
import twt from "../src/img/icon-twitter.svg";
import ig from "../src/img/icon-instagram.svg";
import yt from "../src/img/icon-youtube.svg";
import up from "../src/img/icon-up.svg";
import down from "../src/img/icon-down.svg";

const stats = [
  {
    icon: fb,
    name: "@nathanf",
    follower: "1987",
    gain: 12,
    effect: true,
    className: "facebook",
  },
  {
    icon: twt,
    name: "@nathanf",
    follower: "1044",
    gain: 99,
    effect: true,
    className: "twitter",
  },
  {
    icon: ig,
    name: "@realnathanf",
    follower: "11k",
    gain: 1099,
    effect: true,
    className: "instagram",
  },
  {
    icon: yt,
    name: "Nathan F.",
    follower: "8239",
    gain: 144,
    effect: false,
    className: "youtube",
  },
];

const overview = [
  {
    icon: fb,
    title: "Page Views",
    follower: "87",
    gain: "3%",
    effect: true,
  },
  {
    icon: fb,
    title: "Likes",
    follower: "52",
    gain: "2%",
    effect: false,
  },
  {
    icon: ig,
    title: "Likes",
    follower: "5462",
    gain: "2257%",
    effect: true,
  },
  {
    icon: ig,
    title: "Profile Views",
    follower: "52k",
    gain: "1375%",
    effect: false,
  },
  {
    icon: twt,
    title: "Retweets",
    follower: "117",
    gain: "303%",
    effect: true,
  },
  {
    icon: twt,
    title: "Likes",
    follower: "507",
    gain: "553%",
    effect: true,
  },
  {
    icon: yt,
    title: "Likes",
    follower: "107",
    gain: "19%",
    effect: false,
  },
  {
    icon: yt,
    title: "Total Views",
    follower: "1407",
    gain: "12%",
    effect: false,
  },
];

function App() {
  return (
    <div className="w-full items-center flex justify-center m-auto h-screen bg-dark overflow-y-scroll relative">
      <div className="absolute top-0 right-0 left-0 w-full h-[250px] top-bg-dark"></div>
      <div className="w-full mx-auto px-2 py-[40px]  h-full max-w-[1120px]">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col md:flex-row md:justify-between z-[50]">
            <div className="flex flex-col">
              <h1 className="text-white text-2xl font-[700]">
                Social Media Dashboard
              </h1>
              <p className="dark-text font-[700] text-sm mb-[7px]">
                Total Followers: 23,004
              </p>
            </div>
            <div className="h-[2px] w-full bg-slate-800 md:hidden my-4"></div>
            <div className="flex justify-between items-center md:gap-4">
              <h4 className="dark-text font-[700] text-sm">Dark Mode</h4>
              <div class="form-check form-switch">
                <input
                  class="form-check-input appearance-none w-12 -ml-10 rounded-full float-left h-6 align-top bg-gradients bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row mx-auto items-center gap-[25px] pt-[37px] pb-[37px]">
          {stats.map((obj, i) => {
            return (
              <div
                className={`${obj.className} card cursor-pointer transition-all duration-200 rounded-md justify-evenly p-[34px] gap-2 h-full w-full max-w-[340px] lg:max-w-full  max-h-[215px] bg-dark-card flex flex-col items-center `}
              >
                <div className="flex items-center gap-2 pt-[12px]">
                  <img src={obj.icon} alt="" />
                  <p className="dark-text text-[12px] font-[700]">{obj.name}</p>
                </div>
                <div className="flex flex-col items-center">
                  <h1 className="font-[700] text-[3.5rem] text-white">
                    {obj.follower}
                  </h1>
                  <p className="uppercase mt-[-9px] mb-[15px] tracking-[6px] dark-text text-[12px] font-[400]">
                    Followers
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <img src={obj.effect ? up : down} />
                  <p
                    className={
                      obj.effect
                        ? "text-[12px] font-[700] text-green"
                        : "text-[12px] font-[700] text-red"
                    }
                  >
                    {obj.gain}
                  </p>
                  <p
                    className={
                      obj.effect
                        ? "text-[12px] font-[700] text-green"
                        : "text-[12px] font-[700] text-red"
                    }
                  >
                    Today
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col">
          <h1 className="text-white text-2xl font-[700] mt-[9px] mb-[20px]">
            Overview - Today
          </h1>
          <div className="md:grid gap-[25px] w-full items-center lg:grid-cols-4 md:grid-cols-2 flex flex-col mx-auto justify-center mb-10">
            {overview.map((obj, i) => {
              return (
                <div className="rounded-md card cursor-pointer p-[25px] gap-2 h-full w-full max-w-[340px] max-h-[200px] bg-dark-card flex flex-col justify-center items-center">
                  <div className="w-full flex justify-between dark-text text-[14px] font-[700]">
                    <p>{obj.title}</p>
                    <img className="w-[20px] h-[20px]" src={obj.icon} alt="" />
                  </div>
                  <div className="w-full flex justify-between">
                    <h1 className="text-[2rem] font-[700] text-white">
                      {obj.follower}
                    </h1>
                    <div className="flex items-center gap-1">
                      <img src={obj.effect ? up : down} />
                      <p
                        className={
                          obj.effect
                            ? "text-[12px] font-[700] text-green"
                            : "text-[12px] font-[700] text-red"
                        }
                      >
                        {obj.gain}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
