import MainContainer from "@/components/common/MainContainer";
import Head from "next/head";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import dayjs from "dayjs";
import { FiSearch } from "react-icons/fi";
import useQueryHandler from "@/hooks/useQueryHandler";
import { QUERY_KEY_ROVER_PHOTOS } from "@/utils/constants";
import { getRoverPhotos } from "@/services";
import { IError, IRoverPhotos } from "@/types";
import RoverImageCard from "@/components/common/RoverImageCard";

const RoverPhotos = () => {
  const [searchDate, setSearchDate] = useState<string>("");

  const { data, isLoading, refetch } = useQueryHandler<
    IRoverPhotos | undefined,
    IError
  >([QUERY_KEY_ROVER_PHOTOS], () => getRoverPhotos(searchDate), {
    enabled: !!searchDate,
  });

  console.log(data);

  useEffect(() => {
    // const date = dayjs().format("YYYY-MM-DD");
    setSearchDate("2019-05-09");
  }, []);

  const searchPhotos = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    refetch();
  };

  const updateDate = (e: ChangeEvent<HTMLInputElement>) => {
    const date = dayjs(new Date(e.target.value)).format("YYYY-MM-DD");
    setSearchDate(date);
  };

  return (
    <>
      <Head>
        <title>Rover Photos</title>
      </Head>
      <MainContainer>
        <div className="m-6 p-6 bg-slate-500 rounded-md">
          <form onSubmit={searchPhotos} className="flex bg-slate-600">
            <input
              type="date"
              value={searchDate}
              onChange={(e) => updateDate(e)}
              className="outline-none border-none flex-1 px-2 py-2 bg-slate-600 text-slate-300 font-semibold"
              required
            />
            <button
              type="submit"
              className="bg-slate-900 text-slate-400 rounded-sm px-3 cursor-pointer m-0.5 font-semibold"
            >
              <FiSearch />
            </button>
          </form>

          <div className="grid grid-cols-grid200 gap-4 mt-4">
            {data?.photos.map((photo, i) => (
              <RoverImageCard photo={photo} key={i} />
            ))}
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default RoverPhotos;
