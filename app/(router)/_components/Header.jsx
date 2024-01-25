import React from "react";
import { Search, BellDot } from "lucide-react";
import { Button } from "@/components/ui/button";

function Header() {
  return (
    <div className="p-4 bg-white flex justify-between">
      {/* Search Bar */}
      <div className="flex gap-2 border p-2 rounded-md">
        <Search className="w-5 h-5" />
        <input type="text" placeholder="Search....." className="outline-none" />
      </div>
      {/* Get Started Button & Bell Icon */}
      <div className="flex items-center gap-4">
        <BellDot className="text-gray-700" />
        <Button>Get Started</Button>
      </div>
    </div>
  );
}

export default Header;
