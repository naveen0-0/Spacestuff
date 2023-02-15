import CloseApproachCard from "@/components/common/CloseApproachCard";
import MainContainer from "@/components/common/MainContainer";
import useQueryHandler from "@/hooks/useQueryHandler";
import { getSpecificAsteroid } from "@/services";
import { IError, ISpecificAsteroid } from "@/types";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BiLinkExternal } from "react-icons/bi";

export default function SpecificAsteroid() {
  const router = useRouter();
  const id = router.query.id;
  const [estimatedDiatanceUnit, setEstimatedDistanceUnit] = useState<string>();

  const { data: asteroid, isLoading } = useQueryHandler<
    ISpecificAsteroid | undefined,
    IError
  >(
    ["QUERY_KEY_SPECIFIC_ASTEROID_DATA"],
    () => getSpecificAsteroid(id as string),
    {
      enabled: !!id,
    }
  );

  const asteroidWebsite = asteroid?.nasa_jpl_url.replace("http", "https");
  const estimatedDistanceKeys = Object.keys(asteroid?.estimated_diameter || {});

  useEffect(() => {
    setEstimatedDistanceUnit(estimatedDistanceKeys[0]);
  }, [isLoading]);

  if (isLoading || !estimatedDiatanceUnit) return <>Loading...</>;
  const maxEstimatedDistance =
    asteroid?.estimated_diameter[
      estimatedDiatanceUnit
    ].estimated_diameter_max.toFixed(3);
  const minEstimatedDistance =
    asteroid?.estimated_diameter[
      estimatedDiatanceUnit
    ].estimated_diameter_min.toFixed(3);
  return (
    <>
      <Head>
        <title>Asteroid | {asteroid?.name}</title>
      </Head>
      <MainContainer>
        <div className="bg-slate-500 m-6 p-6 rounded-md flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="font-bold text-3xl">INFO</div>
            <Link
              title="Go To Asteroid"
              target="_blank"
              href={asteroidWebsite as string}
              className="p-2 rounded-full bg-slate-900 text-slate-400"
            >
              <BiLinkExternal />
            </Link>
          </div>
          {/* Name */}
          <div>
            <span className="font-bold">NAME : </span>
            <span>{asteroid?.name}</span>
          </div>
          {/* ID */}
          <div>
            <span className="font-bold">ID : </span>
            <span>{asteroid?.id}</span>
          </div>
          {/* NEO ID */}
          <div>
            <span className="font-bold">NEO REFERENCE ID : </span>
            <span>{asteroid?.neo_reference_id}</span>
          </div>
          {/* Absolute Magnitude */}
          <div className="flex items-center gap-1 flex-wrap">
            <p className="font-bold underline italic">ABSOLUTE MAGNITUDE (H)</p>
            <span className="text-xl font-bold">
              : {asteroid?.absolute_magnitude_h}
            </span>
          </div>

          {/* Hazardouds */}
          <div>
            <span className="font-bold">HAZARDOUS : </span>
            <span>
              {asteroid?.is_potentially_hazardous_asteroid ? "YES" : "NO"}
            </span>
          </div>
          {/* Estimated Diameter */}
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <div className="font-bold">ESTIMATED DIAMETER</div>
              <select
                onChange={(e) => setEstimatedDistanceUnit(e.target.value)}
                className="cursor-pointer outline-none border-none px-2 py-1 bg-slate-500 text-slate-900 font-semibold rounded-sm"
              >
                {estimatedDistanceKeys.map((obj, index) => (
                  <option key={index} value={obj}>
                    {obj}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex gap-2 my-4 flex-wrap">
              <div className="flex items-center gap-2 bg-slate-700 px-4 py-2 rounded-sm shadow-md text-slate-400">
                <div>max - {maxEstimatedDistance}</div>
                <div>{estimatedDiatanceUnit}</div>
              </div>
              <div className="flex items-center gap-2 bg-slate-700 px-4 py-2 rounded-sm shadow-md text-slate-400">
                <div>min - {minEstimatedDistance}</div>
                <div>{estimatedDiatanceUnit}</div>
              </div>
            </div>
          </div>
          {/* CLOSE APPROACH */}
          <div>
            <h1 className="font-bold text-3xl">CLOSE APPROACH</h1>
            <div className="grid grid-cols-closeApproach gap-4 mt-4">
              {asteroid?.close_approach_data.map((item, i) => (
                <CloseApproachCard key={i} item={item} />
              ))}
            </div>
          </div>
        </div>
      </MainContainer>
    </>
  );
}
