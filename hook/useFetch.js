import { useState, useEffect } from "react";
import axios from "axios";
// import { RAPID_API_KEY } from "@env";

// const RapidAPIKey = RAPID_API_KEY;
const RapidAPIKey = "81c96cbfb2mshd16beba225cd3f8p1f3d7ajsnbf85d3917b64";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    // url: `https://jsearch.p.rapidapi.com/search`,
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": RapidAPIKey,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    // params: {
    //   query: "Python developer in Texas, USA",
    //   page: "1",
    //   num_pages: "1",
    // },
    params: {
      ...query,
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("There is an error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
