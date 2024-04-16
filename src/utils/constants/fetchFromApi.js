import axios from "axios";
const baseURL = "https://educational-platform-nestjs-api.onrender.com/v1";
const axiosInstance = axios.create({
  baseURL,
});

const fetchFromAPI = async (options) => {
  const { data } = await axiosInstance(options);

  return data;
};

export default fetchFromAPI;
