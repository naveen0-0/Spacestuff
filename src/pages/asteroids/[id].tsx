import MainContainer from "@/components/common/MainContainer";
import useQueryHandler from "@/hooks/useQueryHandler";
import { getSpecificAsteroid } from "@/services";
import { IError, ISpecificAsteroid } from "@/types";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsArrowRightShort } from "react-icons/bs";

export default function SpecificAsteroid() {
  const router = useRouter();
  const id = router.query.id;

  const { data, isLoading } = useQueryHandler<
    ISpecificAsteroid | undefined,
    IError
  >(
    ["QUERY_KEY_SPECIFIC_ASTEROID_DATA"],
    () => getSpecificAsteroid(id as string),
    {
      enabled: !!id,
    }
  );
  const asteroidWebsite = data?.nasa_jpl_url.replace("http", "https");

  if (isLoading) return <>Loading...</>;
  return (
    <MainContainer>
      <div className="bg-slate-500 m-6 p-4 h-[400px] rounded-md relative">
        SpecificAsteroid - {id}
        <Link
          target="_blank"
          href={asteroidWebsite as string}
          className="absolute bottom-2 right-2 bg-gradient-to-r hover:bg-gradient-to-l from-slate-800 to-slate-900 py-2 font-medium px-4 rounded-sm flex gap-1 items-center text-slate-400"
        >
          Go to Asteroid
          <BsArrowRightShort size={22} />
        </Link>
      </div>
    </MainContainer>
  );
}
