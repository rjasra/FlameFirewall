import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center gap-3">
        <img src="./assets/flame.png" alt="logo" className="size-10" />
        <span className="text-xl font-serif text-slate-200"><b>Flame Firewall</b></span>
      </div>
      <div>
      <AiOutlineMenu className="size-10 color-white"/>
      </div>
    </div>
  );
};

export default Header;
