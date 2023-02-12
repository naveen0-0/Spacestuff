import { NAVBAR_LINKS } from "@/utils/constants";

const NavLinks = () => {
  return (
    <div className="z-30 absolute bg-slate-400 right-0 min-w-[200px] shadow-md shadow-slate-700 p-1 rounded-sm flex flex-col gap-1">
      {NAVBAR_LINKS.map((link) => (
        <a
          href={link.link}
          key={link.id}
          className="bg-slate-500 hover:bg-slate-600 p-1 cursor-pointer"
        >
          {link.text}
        </a>
      ))}
    </div>
  );
};

export default NavLinks;
