import React from "react";
import logo from "../assets/images/logo.png";

export const Home = () => {
  return (
    <div>
      <div className="bg-[#014efe] h-screen home-bg">
        <div class="flex flex-row p-2">
          <div class="basis-1/4 flex gap-1 items-center">
            <img src={logo} alt="blinkchat-logo" className="h-5" />
            <p className="text-stone-50 text-lg">BlinkChat</p>
          </div>
          <div class="basis-1/2 flex items-center justify-between">
            <p className="text-stone-50 text-sm">Home</p>
            <p className="text-stone-50 text-sm">Feature</p>
            <p className="text-stone-50 text-sm">About Us</p>
            <p className="text-stone-50 text-sm">Get Started</p>
          </div>
        </div>
      </div>
    </div>
  );
};
