import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

const api = axios.create({
  baseURL: "http://api.github.com"
})

export function useFetch<T = unknown >(url: string, option?: AxiosRequestConfig) {
  const [data, setData] = useState<T | null >(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<Error | null >(null);

  useEffect(() => {
    api.get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch(err => {

      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  return { data, error, isFetching };
}