import React from "react";

const Index = () => {
  return (
    <div className="w-full h-screen bg-black/[0.5] flex items-center justify-center flex-col md:gap-5 gap-3 relative">
      <h1 className="text-white md:text-6xl text-4xl font-semibold tracking-wider uppercase text-center">
        Nefrit Academy
      </h1>
      <h1 className="md:text-4xl text-3xl font-semibold tracking-wider text-green-500">
        In Bukhara
      </h1>
      <p className="text-gray-400 md:text-3xl text-2xl">coming soon...</p>
      <div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
    </div>
  );
};

export default Index;
