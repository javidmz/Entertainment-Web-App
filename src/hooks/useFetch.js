import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmQ5NjNmODQ4M2M3MjkzZjUxMjI4YzIzYWJhYWE3ZSIsInN1YiI6IjY1MDJhNTg0NmEyMjI3MDBmZDIxNjUxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.95UOC3Nn2qxjZ4efwAsxdy0Me8Ztid1_iL-8nCtPX50",
        },
      };

      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("Please try again!");
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
