import useQueryHandler from "@/hooks/useQueryHandler";
import { getPictureOfTheDay } from "@/services";
import { IError, IPictureOfTheDay } from "@/types";
import { QUERY_KEY_PICTURE_OF_THE_DAY } from "@/utils/constants";

export default function PictureOfTheDay() {
  const { data, isLoading } = useQueryHandler<
    IPictureOfTheDay | undefined,
    IError
  >([QUERY_KEY_PICTURE_OF_THE_DAY], getPictureOfTheDay);

  return <div>Destination</div>;
}
