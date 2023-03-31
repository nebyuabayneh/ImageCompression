import { useState } from "react";

type ResponseType = {
  results: any[];
  country_code?: string;
  nextPage: any;
};

const useApi = (apiFunc: any) => {
  const [data, setData] = useState<ResponseType>({ results: [], nextPage: "" });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args: any[]) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    setError(!response?.ok);
    setData(response?.data);

    console.log(response, "response request func");

    return response;
  };

  return { request, data, error, loading };
};

export default useApi;
