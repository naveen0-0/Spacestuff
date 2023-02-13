import { IAsteroidListItem } from "@/types";
import Link from "next/link";

interface Props {
  asteroid: IAsteroidListItem;
}

export default function Asteroid({ asteroid }: Props) {
  const { is_potentially_hazardous_asteroid: hazardous } = asteroid;
  return (
    <div className="bg-slate-800  rounded-sm p-2 shadow-md flex justify-between items-center">
      <Link
        className="text-slate-400 hover:underline"
        href={`/asteroids/${asteroid.id}`}
      >
        {asteroid.name}
      </Link>
      <div
        title={hazardous ? "Hazardous" : "Not Hazardous"}
        className={`w-8 h-8 text-[12px] font-bold flex justify-center items-center rounded-full ${
          hazardous ? "bg-red-700" : "bg-green-800"
        } ${hazardous ? "text-slate-300" : "text-green-200"}`}
      >
        {hazardous ? "H" : "NH"}
      </div>
    </div>
  );
}
