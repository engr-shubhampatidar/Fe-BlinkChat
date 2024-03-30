import React from "react";
import logo from "../assets/images/logo.png";
import dummyChat from "../assets/images/web-chat-demo.png";

export const Home = () => {
  return (
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
              <button className="bg-white p-2 mt-1 rounded-md">
                Get Started
              </button>
            </div>
          </div>
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
  );
};
