import axios from "axios";
import dayjs from "dayjs";

export const getPictureOfTheDay = async () => {
  try {
    let { data } = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const getAsteroidsList = async () => {
  const today = dayjs().format("YYYY-MM-DD");
  const yesterday = dayjs().subtract(1, "day").format("YYYY-MM-DD");
  try {
    let { data } = await axios.get(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${yesterday}&end_date=${today}&api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const getSpecificAsteroid = async (id: string) => {
  try {
    let { data } = await axios.get(
      `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};
