import { useState, useEffect } from "react";
import axios from "axios";

function useCountries(url) {
  const [countries, setCountries] = useState();
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchCountry = async () => {
      const data = await axios
        .get(url)
        .then((res) => res.json())
        .catch((err) => setError(err));
      setCountries(data);
      setIsPending(false);
    };
    fetchCountry();
  }, [url]);
  return {
    countries,
    isPending,
    error,
  };
}

export default useCountries;
