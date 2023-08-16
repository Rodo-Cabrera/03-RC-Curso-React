import { useState, useEffect } from "react";
import { giphyAxios } from "../config/axiosGiphy";


export const useFetchAxios = ( url, method, params ) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getFetch();
  }, [url]);

  const getFetch = async () => {
    try {
      const resp = await giphyAxios({
        url: url,
        method: method,
        params: { params },
      });
      const { data } = resp.data;
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    data,
    isLoading
  }
};
 //Para setear el valor en null en caso de que no se aporte el valor al usar el hook. Sin esto, ocasionaría un error al no mandar la información "params"
useFetchAxios.defaultProps = {
  params: null,
}