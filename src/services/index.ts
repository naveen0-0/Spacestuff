import axios from "axios";

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
