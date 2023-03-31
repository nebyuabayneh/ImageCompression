import { create } from "apisauce";

// define the api
const api = create({
  baseURL: "https://ipapi.co/json",
});

const getGeoInfo = () => {
  return api.get("/");
};

export default {
  getGeoInfo,
};
