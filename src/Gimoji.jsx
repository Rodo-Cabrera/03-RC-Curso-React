import { useEffect, useState } from "react";
import GifCard from "./components/GifCard";
import './styles/cardStyle.css'
import NavBar from "./components/header/NavBar";
import Banner from "./components/header/Banner";
import Search from "./components/ui/Search";
import { SelectData } from "./components/ui/SelectData";
import { useFetch } from "./hooks/useFetch";
import { Loading } from "./components/ui/Loading";
import { useFetchAxios } from "./hooks/useFetchAxios";


const apiKey = import.meta.env.VITE_GIPHY_CATEGORIES_API_KEY;
const giphySearchApi = import.meta.env.VITE_GIPHY_SEARCH_API;
const urlCategoriesApi = import.meta.env.VITE_GIPHY_BASE_URL;

// const giphyTrendingApi = import.meta.env.VITE_GIPHY_TRENDING;
// const giphyTrendingLimit = import.meta.env.VITE_GIPHY_LIMIT_15;


export const Gimoji = () => {

    const [gifsData, setGifsData] = useState([]);
    const [search, setSearch] = useState('animals');

   
  
  
    // const { data } = useFetch(`${urlCategoriesApi}/gifs/categories?${apiKey}`);
  
    const { data } = useFetchAxios(`/gifs/categories?${apiKey}`, 'get');
    const { data: searchData, isLoading } = useFetchAxios(`${giphySearchApi}${apiKey}&q=${search}&limit=25&offset=0`, 'get');
    
    const getCategories = async () => {
      setGifsData(data);
    };
   useEffect(() => {
      getCategories();
      setGifsData(searchData);
   }, [data, search]);
  
  //  useEffect(() => {
  //    getCategory();
  //  }, [])
   
  
  // useEffect(() => {
  //   searchGif();
  // }, [search]);


  // const getCategory = async () => {
  //   const resp = await giphyAxios.get(`gifs/categories?${apiKey}`);
  //   const { data } = resp.data;
  //   setCategories(data);
  // }
    
 

    // const getCategories = async () => {      
    //     const categData = await giphyAxios.get(`gifs/categories?${apiKey}`);
    //     const {data} = categData;     
    //     setCategories(data.data);
    // };

  
  // const searchGif = async () => {
  //   try {
  //     // const resp = await fetch(
  //     //   `${giphySearchApi}${apiKey}&q=${search}&limit=25&offset=0`
  //     // );

  //     const {data} = await giphyAxios(
  //       `gifs/search?${apiKey}&q=${search}&limit=25&offset=0`
  //     );
  //     console.log(data.data);
  //     setGifsData(data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

   const onCategorySearch = (e) => {
     setSearch(e.target.value);
  };
  
  // const onSearch = (e) => {
  //   const data = e.target.value;
  //   if (data.length >= 3) {
  //     setSearch(data)
  //   } else {
  //     setSearch('random')
  //   }
  // }

  const onClickSearch = (textSearch) => {
    if (textSearch.length >= 2) {
      setSearch(textSearch)
    } else {
      setSearch('random')
    }
    }
  
   
    
    return (
      <>
        <NavBar />
        <Banner />
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-sm-4">
              <SelectData
                categoriesData={data}
                onCategSelect={(e) => onCategorySearch(e)}
              />
            </div>
            <Search
            // onSearch={(e) => onSearch(e)}
              onClickSearch={(value) => onClickSearch(value)}
            />
          </div>
        </div>
        <div className="">
          {isLoading ? <Loading /> : <GifCard gifData={gifsData} />}
        </div>
      </>
);
    
}
