import React from "react";
import Image from "next/image";
function WelcomeBanner() {
  return (
    <div className="flex gap-5 items-center bg-white rounded-xl p-5">
      <Image src="/logo.png" width={100} height={100} alt="banner" />
      <div>
        <h2 className="font-bold text-[27px]">
          Welcome to <span className="text-cyan-600">FNF</span> Academy
        </h2>
        <h2 className="text-gray-500">Explore, Learn and Build Yourself </h2>
      </div>
    </div>
  );
}

export default WelcomeBanner;
