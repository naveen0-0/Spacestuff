import { NAVBAR_LINKS } from "@/utils/constants";

const NavLinks = () => {
  return (
    <div className="z-30 absolute right-0 min-w-[200px] shadow-md shadow-slate-700 rounded-sm flex flex-col">
      {NAVBAR_LINKS.map((link) => {
        const isLast = link.id === NAVBAR_LINKS.length;
        return (
          <a
            href={link.link}
            key={link.id}
            className={`p-2 cursor-pointer ${
              isLast ? "border-none" : "border-b-2"
            } border-b-slate-500 hover bg-slate-400 hover:bg-slate-500 hover:text-slate-300 transition-all`}
          >
            {link.text}
          </a>
        );
      })}
    </div>
  );
};

export default NavLinks;
