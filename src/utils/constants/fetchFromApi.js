import axios from "axios";
const baseURL = "http://localhost:3000/v1";
const axiosInstance = axios.create({
  baseURL,
});

const fetchFromAPI = async (options) => {
  const { data } = await axiosInstance(options);

  return data;
};

export default fetchFromAPI;
