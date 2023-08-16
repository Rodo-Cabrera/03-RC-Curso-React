import { useEffect, useState } from "react";

export const useFetch = (url) => {
  

  const [dataFetch, setDataFetch] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getFetch();
  }, [url]);

  const getFetch = async () => {
    try {
    const resp = await fetch(url);
    const { data } = await resp.json();
    setDataFetch(data);
    setIsLoading(false);  
    } catch (error) {
      console.log(error);
    }
    
  };

  return {
    // puedo poner solo dataFetch, pero de esta manera lo exporto solo como data, o sea: data es el nombre de la variable y dataFetch los datos
    data: dataFetch,
    isLoading,
  }
}