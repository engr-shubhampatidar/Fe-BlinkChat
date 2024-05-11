import React from "react";
import logo from "../assets/images/logo-white.svg";
import dummyChat from "../assets/images/web-chat-demo.png";
import { NavLink } from "react-router-dom";
import { useRef } from "react";
import { isCompositeComponent } from "react-dom/test-utils";


const Home = () => {
  const ref = useRef(null);
  const handleClick = () => {
  ref.current?.scrollIntoView({behavior: 'smooth'});
  };
  return (
    <>
      <div className="bg-[#014efe] h-screen home-bg max-sm:h-72">
        <div className="mx-20 max-sm:mx-0">
          <div class="flex flex-row p-2">
            <div class="basis-1/4 flex gap-1 items-center max-sm:pl-5">
              <img src={logo} alt="blinkchat-logo" className="h-5 cursor-pointer" />
              <p className="text-stone-50 text-lg cursor-pointer">BlinkChat</p>
            </div>
            <div class="basis-1/3 flex items-center justify-between max-sm:hidden">
              <p className="text-stone-50 text-sm cursor-pointer">Home</p>
              <p className="text-stone-50 text-sm cursor-pointer" onClick={handleClick}>Feature</p>
              <p className="text-stone-50 text-sm cursor-pointer">About Us</p>
              <p className="text-stone-50 text-sm cursor-pointer">
              <NavLink to={"/register"}>Get Started</NavLink>
              </p>
            </div>
            {/* <div className="hidden text-white font-bold text-right max-sm:block max-sm:ml-80"><h1>01</h1></div> */}
          </div>
          <div className="flex flex-row mt-20 mb-20 h-80 max-sm:h-full    max-sm:mb-12">
            <div className="basis-3/4 max-sm:h-full max-sm:pl-5">
              <p className="text-stone-50 text-8xl text-left max-sm:text-xl">
                Get the best <br />{" "}
                <span className="font-semibold">experience</span> when <br />{" "}
                sending messages.
              </p>
            </div>
            <div className="basis-1/4 max-sm:h-full max-sm:pr-5">
              <div className="flex flex-col items-start">
                <p className="text-stone-50 text-1xl text-left">
                  Start chatting now on BlinkChat
                </p>
                <button className="bg-stone-50  text-black-400 p-2 mt-4  h-12 w-40 w font-bold rounded-full hover:bg-[#212360e3] hover:text-stone-50">
                <NavLink to={"/register"}>Get Started</NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center mx-20 max-sm:mx-4">
          <img
            src={dummyChat}
            alt="dummy-chat"
            className="w-full rounded-lg border-4 max-sm:px-0"
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
              <span className="text-[#014efe] text-5xl font-bold ">
                BlinkChat
              </span>
            </p>
            <p className="text-3xl text-slate-900">
              BlinkChat has several features that make the reason <br />
              why you choose BlinkChat
            </p>
          </div>
          <div className="my-20">
            <div class="grid grid-cols-3 gap-6 max-sm:grid-cols-1">
              <div class="basis-1/2 h-80 rounded-3xl bg-[#014dfecb] hover:bg-[#014dfefe] text-stone-50 ">
                <div className="p-7 h-full flex flex-col justify-center items-center">
                  <div className="h-16 text-5xl  ">01</div>
                  <div className="p-4 max-sm:px-4">
                    <p className="text-4xl font-semibold text-stone-50">
                      Easy to use
                    </p>
                  </div>
                  <div className="p-2">
                    <p className="text-1xl  text-stone-50 ">
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
          <div className="mx-20 mt-20 max-sm:mx-4">
            <div className="flex justify-center">
              <img
                src={dummyChat}
                alt="dummy-chat"
                className="w-full rounded-lg border-slate-200 border-4 "
              />
            </div>
          </div>
        </div>
        {/* Footer Bhai */}
        <div className=" h-auto px-20 pt-16 bg-gray-900 z-50 max-sm:px-5 max-sm:pt-8">
          <div className=" basis-3/4 flex flex-row">
            <p className="text-stone-50 text-6xl text-left max-sm:text-xl">
              Want To Stay <br />
              Connected?
            </p>
            <button className=" h-16 w-44 font-bold rounded-full mt-9 ml-auto p-3 bg-[#014dfeb8] text-stone-50 max-sm:mt-0 max-sm:text-xs max-sm:h-10 max-sm:w-auto">
              Download Now
            </button>
          </div>
          <div className="pt-3 max-h-0.5 ">
            <hr className=""></hr>
          </div>
          <div className="grid w-full h-auto text-white grid-cols-2 pt-6">
            <div className="flex flex-col items-start">
              <h1 className=" font-bold text-2xl max-sm:text-xl">BlinkChat</h1>
              <p className="text-xs text-stone-50 pt-5 pb-5 text-left">
                Platform use to send messages with a myriad of features. by
                prioritizing the user experience
              </p>
              <button className="text-white bg-[#014efe]  p-2 mt-1 rounded-3xl">
                <NavLink to={"/register"}>Get Started</NavLink>
              </button>
              <div className="">
                <p className="text-sm text-blue-400 pt-5">mail@blinkchat</p>
              </div>
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
    </>
  );
};

export default Home;