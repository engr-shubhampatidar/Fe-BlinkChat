import React from "react";
import logo from "../assets/images/logo-white.svg";
import dummyChat from "../assets/images/web-chat-demo.png";
import { NavLink } from "react-router-dom";
import { useRef } from "react";


const Home = () => {
  const ref = useRef(null);
  const handleClick = () => {
  ref.current?.scrollIntoView({behavior: 'smooth'});
  };
  return (
    <>
      <div className="bg-[#014efe] h-screen home-bg">
        <div className="mx-20">
          <div class="flex flex-row p-2">
            <div class="basis-1/4 flex gap-1 items-center">
              <img src={logo} alt="blinkchat-logo" className="h-5" />
              <p className="text-stone-50 text-lg">BlinkChat</p>
            </div>
            <div class="basis-1/3 flex items-center justify-between">
              <p className="text-stone-50 text-sm">Home</p>
              <p className="text-stone-50 text-sm">Feature</p>
              <p className="text-stone-50 text-sm">About Us</p>
              <p className="text-stone-50 text-sm">Get Started</p>
            </div>
          </div>
<<<<<<< HEAD
          <div class="basis-1/3 flex items-center justify-between">
            <p className="text-stone-50 text-sm cursor-pointer">Home</p>
            <p className="text-stone-50 text-sm cursor-pointer" onClick={handleClick}>
                Feature
              </p>
            <p className="text-stone-50 text-sm cursor-pointer">About Us</p>
            <p className="text-stone-50 text-sm"> 
            <NavLink to={'/register'}>Get Started</NavLink></p>
=======
          <div className="flex flex-row mt-20 mb-20 h-80">
            <div className="basis-3/4">
              <p className="text-stone-50 text-8xl text-left">
                Get the best <br />{" "}
                <span className="font-semibold">experience</span> when <br />{" "}
                sending messages.
              </p>
            </div>
            <div className="basis-1/4">
              <div className="flex flex-col items-start">
                <p className="text-stone-50 text-1xl text-left">
                  Start chatting now on BlinkChat
                </p>
                <button className="bg-stone-50  text-black-400 p-2 mt-4  h-12 w-40 w font-bold rounded-full hover:bg-[#212360e3] hover:text-stone-50">
                  Get Started
                </button>
              </div>
            </div>
>>>>>>> upstream/main
          </div>
        </div>
        <div className="flex justify-center mx-20 ">
          <img
            src={dummyChat}
            alt="dummy-chat"
            className="w-screen rounded-lg border-slate-200 border-4"
          />
        </div>
        {/* Feature section */}
        <div className="mx-20 my-20">
          <div>
            <button className="p-3 bg-slate-300 text-[#014efe] text-lg font-semibold rounded-3xl">
              Features
            </button>
            <p className="p-4 text-5xl">
              Reason why you should choose a{" "}
              <span className="text-[#014efe] text-5xl font-bold">
                BlinkChat
              </span>
            </p>
            <p className="text-3xl text-slate-900">
              BlinkChat has several features that make the reason <br />
              why you choose BlinkChat
            </p>
          </div>
          <div className="my-20">
            <div class="flex flex-row gap-6">
              <div class="basis-1/2 h-80 rounded-3xl bg-[#014dfecb] hover:bg-[#014dfefe] text-stone-50">
                <div className="p-7 h-full flex flex-col justify-center items-center">
                  <div className="h-16 text-5xl">01</div>
                  <div className="p-4">
                    <p className="text-4xl font-semibold text-stone-50">
                      Easy to use
                    </p>
                  </div>
                  <div className="p-2">
                    <p className="text-1xl  text-stone-50">
                      Easy to user for anyone, <br />
                      and simple.
                    </p>
                  </div>
                </div>
              </div>
              <div class="basis-1/2 h-80 rounded-3xl bg-[#eff1f4] hover:bg-[#014dfeb8] hover:text-stone-50 ">
                <div className="p-7 h-full flex flex-col justify-center items-center">
                  <div className="h-16 text-5xl">02</div>
                  <div className="p-4">
                    <p className="text-4xl font-semibold">Real Time</p>
                  </div>
                  <div className="p-2">
                    <p className="text-1xl">
                      Connect with friends <br />
                      in real time.
                    </p>
                  </div>
                </div>
              </div>
              <div class="basis-1/2 h-80 rounded-3xl bg-[#eff1f4] hover:bg-[#014dfeb8] hover:text-stone-50">
                <div className="p-7 h-full flex flex-col justify-center items-center">
                  <div className="h-16 text-5xl">03</div>
                  <div className="p-4">
                    <p className="text-4xl font-semibold">Safety & Private</p>
                  </div>
                  <div className="p-2">
                    <p className="text-1xl ">
                      Enjoy your comfort and safety, <br />
                      when talking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* chat view */}
        <div className="bg-[#014efe]  h-4/5 home-bg  overflow-hidden">
          <div className="mx-20 mt-20">
            <div className="flex justify-center">
              <img
                src={dummyChat}
                alt="dummy-chat"
                className="w-screen rounded-lg border-slate-200 border-4 "
              />
            </div>
          </div>
        </div>
        <div className="w-full h-auto px-20 pt-16 bg-gray-900 z-50">
          <div className=" basis-3/4 flex flex-row">
            <p className="text-stone-50 text-6xl text-left ">
              Want To Stay <br />
              Connected?
            </p>
            <button className=" h-16 w-44 font-bold rounded-full mt-9 ml-auto p-3 bg-[#014dfeb8] text-stone-50 ">
              Download Now
            </button>
          </div>
          <div className="pt-3 max-h-0.5 ">
            <hr className=""></hr>
          </div>
          <div className="grid w-full h-auto text-white grid-cols-4 pt-6">
            <div className="flex flex-col items-start">
              <h1 className=" font-bold text-2xl ">BlinkChat</h1>
              <p className="text-xs text-stone-50 pt-5 text-left">
                Platform use to send messages with a myriad of features. by
                prioritizing the user experience
              </p>
<<<<<<< HEAD
              <button className="bg-white p-2 mt-1 rounded-md">
                <NavLink to={'/register'}>Get Started</NavLink>
              </button>
=======
              <div className="">
                <p className="text-sm text-blue-400 pt-5">mail@blinkchat</p>
              </div>
>>>>>>> upstream/main
            </div>
            <div className="text-stone-50 flex ml-60 pl-24 flex-col">
              <h1 className="font-bold"></h1>
              <p className="text-xs mt-10"></p>
              <p className="text-xs  mt-10"></p>
              <p className="text-xs mt-10"></p>
            </div>
            <div className="text-stone-50 flex ml-36  flex-col">
              <h1 className="font-bold"></h1>
              <p className="text-xs mr-2 mt-10"></p>
              <p className="text-xs ml-2 mt-10"></p>
            </div>
            <div className="text-stone-50   flex flex-col items-end">
              <h1 className="font-bold">Socila Midea</h1>
              <p className="text-xs   pt-5">instagram</p>
              <p className="text-xs  pt-5">linkdin</p>
            </div>
          </div>
          <div className="text-xs pt-3 text-stone-50 pb-3">
            <h1>All right reserved by blinkchat </h1>
          </div>
        </div>
      </div>
<<<<<<< HEAD
      <div className="flex justify-center mx-20 ">
        <img
          src={dummyChat}
          alt="dummy-chat"
          className="w-screen rounded-lg border-slate-200 border-4"
        />
      </div>
      {/* Feature section */}
      <div className="mx-20 my-20" ref={ref}>
        <div>
          <button className="p-3 bg-slate-300 text-[#014efe] text-lg font-semibold rounded-3xl">
            Features
          </button>
          <p className="p-4 text-5xl">
            Reason why you should choose a{" "}
            <span className="text-[#014efe] text-5xl font-bold">BlinkChat</span>
          </p>
          <p className="text-3xl text-slate-900">
            BlinkChat has several features that make the reason <br />
            why you choose BlinkChat
          </p>
        </div>
        <div className="my-20">
          <div class="flex flex-row gap-6">
            <div class="basis-1/2 h-80 rounded-3xl bg-[#014efe]">
              <div className="p-7 h-full flex flex-col justify-center items-center">
                <div className="h-16 text-5xl">01</div>
                <div className="p-4">
                  <p className="text-4xl font-semibold text-stone-50">
                    Easy to use
                  </p>
                </div>
                <div className="p-2">
                  <p className="text-1xl text-stone-50">
                    Easy to user for anyone, <br />
                    and simple.
                  </p>
                </div>
              </div>
            </div>
            <div class="basis-1/2 h-80 rounded-3xl bg-[#eff1f4]">
              <div className="p-7 h-full flex flex-col justify-center items-center">
                <div className="h-16 text-5xl">02</div>
                <div className="p-4">
                  <p className="text-4xl font-semibold">Real Time</p>
                </div>
                <div className="p-2">
                  <p className="text-1xl text-slate-900">
                    Connect with friends <br />
                    in real time.
                  </p>
                </div>
              </div>
            </div>
            <div class="basis-1/2 h-80 rounded-3xl bg-[#eff1f4]">
              <div className="p-7 h-full flex flex-col justify-center items-center">
                <div className="h-16 text-5xl">03</div>
                <div className="p-4">
                  <p className="text-4xl font-semibold">Safety & Private</p>
                </div>
                <div className="p-2">
                  <p className="text-1xl text-slate-900">
                    Enjoy your comfort and safety, <br />
                    when talking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
=======
    </>
>>>>>>> upstream/main
  );
};

export default Home;