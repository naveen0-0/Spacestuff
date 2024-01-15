import { IAsteroidListItem } from "@/types";
import Link from "next/link";
import { FaBiohazard } from "react-icons/fa";
import { AiOutlineSafety } from "react-icons/ai";

interface Props {
  asteroid: IAsteroidListItem;
}

export default function Asteroid({ asteroid }: Props) {
  const { is_potentially_hazardous_asteroid: hazardous } = asteroid;

  return (
    <Link
      href={`/asteroids/${asteroid.id}`}
      className="active:scale-95 transition-all"
    >
      <div className="bg-slate-800  rounded-sm p-2 shadow-md flex justify-between items-center">
        <p className="text-slate-400">{asteroid.name}</p>
        <div
          title={hazardous ? "Hazardous" : "Not Hazardous"}
          className="w-8 h-8 text-[12px] font-bold flex justify-center items-center rounded-ful"
        >
          {hazardous ? (
            <FaBiohazard color="#FF5376" size="1.25rem" />
          ) : (
            <AiOutlineSafety color="#6CBEED" size="1.25rem" />
          )}
        </div>
      </div>
    </Link>
  );
}
