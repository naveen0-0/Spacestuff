import { IAsteroidCloseApproachData } from "@/types";
import { ASTEROIDS_ORBITING_BODY_NAME } from "@/utils/constants";

interface Props {
  item: IAsteroidCloseApproachData;
}

const CloseApproachCard = ({ item }: Props) => {
  const {
    orbiting_body,
    close_approach_date_full,
    relative_velocity,
    miss_distance,
  } = item;
  return (
    <div className="rounded-sm shadow-md bg-slate-500 border-4 border-slate-600">
      <div className="p-2">
        <div className="font-semibold">{close_approach_date_full}</div>
        <div className="font-semibold">
          {ASTEROIDS_ORBITING_BODY_NAME[orbiting_body]?.toUpperCase()}
        </div>

        <div>
          <div className="bg-slate-700 shadow-md text-center rounded-full text-slate-400 p-1 my-2 font-semibold uppercase">
            Relative Velocity
          </div>
          <div>
            <div>
              {Number(relative_velocity.kilometers_per_hour).toFixed(2)} km/s
            </div>
            <div>
              {Number(relative_velocity.kilometers_per_second).toFixed(2)} kph
            </div>
            <div>{Number(relative_velocity.miles_per_hour).toFixed(2)} m/s</div>
          </div>
        </div>

        <div>
          <div className="bg-slate-700 shadow-md text-center rounded-full text-slate-400 p-1 my-2 font-semibold uppercase">
            Miss Distance
          </div>
          <div>{Number(miss_distance.astronomical).toFixed(2)} au</div>
          <div>{Number(miss_distance.lunar).toFixed(2)} ld</div>
          <div>{Number(miss_distance.miles).toFixed(2)} miles</div>
          <div>{Number(miss_distance.kilometers).toFixed(2)} km</div>
        </div>
      </div>
    </div>
  );
};

export default CloseApproachCard;
