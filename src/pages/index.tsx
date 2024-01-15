import useQueryHandler from "@/hooks/useQueryHandler";
import { getPictureOfTheDay } from "@/services";
import { IError, IPictureOfTheDay } from "@/types";
import { QUERY_KEY_PICTURE_OF_THE_DAY } from "@/utils/constants";
import MainContainer from "@/components/common/MainContainer";
import NavBar from "@/components/navbar/NavBar";
import Head from "next/head";
import Spinner from "@/components/common/Loading";

export default function PictureOfTheDay() {
  const { data, isLoading } = useQueryHandler<
    IPictureOfTheDay | undefined,
    IError
  >([QUERY_KEY_PICTURE_OF_THE_DAY], getPictureOfTheDay);

  if (isLoading) return <Spinner />;

  return (
    <MainContainer>
      <Head>
        <title>Picture Of The Day</title>
      </Head>
      <div className="p-6 min-h-screen">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={data?.hdurl}
          alt="Picture Of The Day"
          className="w-full h-[700px] object-cover shadow-sm rounded-lg bg-slate-400"
        />
        <div className="text-3xl py-2 font-bold">
          {data?.title.toUpperCase()}
        </div>
        <div className="text-xl py-2">{data?.explanation}</div>
        <div className="text-xl py-2 text-slate-900 font-bold">
          {data?.date}
        </div>
      </div>
    </MainContainer>
  );
}
