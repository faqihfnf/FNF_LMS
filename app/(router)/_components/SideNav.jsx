import { Gem, BookOpen, GraduationCap } from "lucide-react";
import React from "react";
import Image from "next/image";

function SideNav() {
  const menu = [
    {
      id: 1,
      name: "All Courses",
      icon: BookOpen,
    },
    {
      id: 2,
      name: "Membership",
      icon: Gem,
    },
    {
      id: 3,
      name: "Be Instructor",
      icon: GraduationCap,
    },
  ];
  return (
    <div className="p-5 bg-white shadow-sm border h-screen">
      <div className="flex items-center cursor-pointer">
        <Image src="/logo.png" width={100} height={80} alt="logo" />
        <h1 className="text-xl text-slate-950 font-bold cursor-pointer">FNF Academy</h1>
      </div>
      <hr className="mt-7"></hr>
      {/* Menu List */}
      <div className="mt-8">
        {menu.map((item, index) => (
          <div className="group flex gap-3 mt-2 p-3 text-[20px] items-center text-gray-700 cursor-pointer hover:bg-cyan-950 hover:text-white rounded-md transition-all ease-in-out duration-300">
            <item.icon className="group-hover:animate-bounce" />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
