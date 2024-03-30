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
      <div className="mx-20 mt-20">
        <button className="p-3 bg-slate-300 text-[#014efe] text-lg font-semibold rounded-3xl">
          Features
        </button>
        <p className="p-4 text-5xl">
          Reason why you should choose a{" "}
          <span className="text-[#014efe] text-5xl text-lg font-bold">
            BlinkChat
          </span>
        </p>
      </div>
    </div>
  );
};
