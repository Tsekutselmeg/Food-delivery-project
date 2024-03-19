import React from "react";
import { HeaderRight } from "./HeaderRight";
import { HeaderLeft } from "./HeaderLeft";

const Header = () => {
  return (
    <div className="flex justify-center items-center gap-[400px] p-[16px]">
      <HeaderLeft />
      <HeaderRight />
    </div>
  );
};
export default Header;
