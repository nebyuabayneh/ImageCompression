import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://newsdata.io/api/1",
});

export default apiClient;
