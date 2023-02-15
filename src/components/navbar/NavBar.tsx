import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import MainContainer from "../common/MainContainer";
import NavLinks from "./NavLinks";
import Link from "next/link";

export default function NavBar() {
  let [areNavLinksVisible, setAreNavLinksVisible] = useState(false);
  return (
    <div className="bg-slate-900 fixed w-full top-0 z-50">
      <MainContainer>
        <div className="flex items-center justify-between p-6">
          <Link
            className="font-bold text-3xl italic underline shadow-sm uppercase  text-slate-400"
            href="/"
          >
            SpaceStuff
          </Link>
          <div className="relative">
            <button
              className="cursor-pointer hover:bg-slate-800 rounded-sm px-[0.8px]"
              onClick={() => setAreNavLinksVisible((prev) => !prev)}
            >
              <IoMdMenu size={32} color="rgb(148 163 184)" />
            </button>
            {areNavLinksVisible && <NavLinks />}
          </div>
        </div>
      </MainContainer>
    </div>
  );
}
