import Asteroid from "@/components/common/Asteroid";
import Spinner from "@/components/common/Loading";
import MainContainer from "@/components/common/MainContainer";
import useQueryHandler from "@/hooks/useQueryHandler";
import { getAsteroidsList } from "@/services";
import { IAsteroidList, IError } from "@/types";
import { QUERY_KEY_ASTEROIDS_DATA } from "@/utils/constants";
import dayjs from "dayjs";
import Head from "next/head";

export default function Asteroids() {
  const { data, isLoading } = useQueryHandler<
    IAsteroidList | undefined,
    IError
  >([QUERY_KEY_ASTEROIDS_DATA], getAsteroidsList);

  if (isLoading || !data) return <Spinner />;
  const todayAsteroids =
    data?.near_earth_objects[Object.keys(data.near_earth_objects)[1]];
  const yesterdayAsteroids =
    data?.near_earth_objects[Object.keys(data.near_earth_objects)[0]];

  return (
    <MainContainer>
      <Head>
        <title>Asteroids</title>
      </Head>
      <div className="p-6">
        <h1 className="text-4xl font-semibold">ASTEROIDS</h1>
        {/* Today Asteroids */}
        <div className="bg-slate-500 p-4 rounded-md shadow-lg mt-4">
          <h1 className=" mb-4 text-2xl font-semibold text-slate-900">
            TODAY ( {dayjs().format("YYYY-MM-DD")} )
          </h1>
          <div className="grid gap-4 grid-cols-grid200">
            {todayAsteroids.map((asteroid) => (
              <Asteroid key={asteroid.id} asteroid={asteroid} />
            ))}
          </div>
        </div>
        {/* YESTERDAY Asteroids */}
        <div className="bg-slate-500 p-4 rounded-md shadow-lg mt-4">
          <h1 className="mb-4 text-2xl font-semibold">
            YESTERDAY ( {dayjs().subtract(1, "day").format("YYYY-MM-DD")} )
          </h1>
          <div className="grid gap-4 grid-cols-grid200">
            {yesterdayAsteroids.map((asteroid) => (
              <Asteroid key={asteroid.id} asteroid={asteroid} />
            ))}
          </div>
        </div>
      </div>
    </MainContainer>
  );
}
