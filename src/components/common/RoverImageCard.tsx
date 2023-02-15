import { IRoverPhoto } from "@/types";
import { BiLinkExternal } from "react-icons/bi";

interface Props {
  photo: IRoverPhoto;
}

const RoverImageCard = ({ photo }: Props) => {
  return (
    <div className="bg-slate-600 rounded-sm shadow-md">
      <div className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo.img_src}
          alt="Rover"
          className="rounded-sm w-full object-cover"
        />
        <a
          target="_blank"
          rel="noreferrer"
          href={photo.img_src}
          className="absolute top-2 right-2 bg-slate-200 rounded-full p-1 cursor-pointer shadow-2xl"
        >
          <BiLinkExternal size={20} />
        </a>
      </div>

      <div className="p-2">
        <div>
          <span className="underline italic">Camera Name</span>
          <span> : {photo.camera.full_name}</span>
        </div>
        <div>
          <span className="underline italic">Rover Name</span>
          <span> : {photo.rover.name}</span>
        </div>
        <div>
          <span className="underline italic">Launch Date</span>
          <span> : {photo.rover.launch_date}</span>
        </div>
        <div>
          <span className="underline italic">Landing Date</span>
          <span> : {photo.rover.landing_date}</span>
        </div>

        <div>
          <span className="underline italic">Landing Date</span>
          <span> : {photo.rover.landing_date}</span>
        </div>

        <div>
          <span className="underline italic">Status</span>
          <span> : {photo.rover.status}</span>
        </div>
        <div>
          <span className="underline italic">Sol</span>
          <span> : {photo.sol}</span>
        </div>
      </div>
    </div>
  );
};

export default RoverImageCard;
