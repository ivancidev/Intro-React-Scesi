import { useEffect, useState } from "react";
import { fetchGet } from "../../services/fetch-serviceGet";
const URL = import.meta.env.VITE_URL_USERS;

export default function useFetch() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getFetch = async () => {
    try {
      const response = await fetchGet(URL);
      setData(response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFetch();
  }, []);

  return {
    data,
    isLoading,
  };
}
