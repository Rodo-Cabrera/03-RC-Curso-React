import { useEffect, useState } from "react";
import GifCard from "./components/GifCard";
import './styles/cardStyle.css'
import NavBar from "./components/header/NavBar";
import Banner from "./components/header/Banner";
import Search from "./components/ui/Search";
import { SelectData } from "./components/ui/SelectData";


const apiKey = import.meta.env.VITE_GIPHY_CATEGORIES_API_KEY;
const urlCategoriesApi = import.meta.env.VITE_GIPHY_CATEGORIES_URL;
const giphySearchApi = import.meta.env.VITE_GIPHY_SEARCH_API;
// const giphyTrendingApi = import.meta.env.VITE_GIPHY_TRENDING;
// const giphyTrendingLimit = import.meta.env.VITE_GIPHY_LIMIT_15;


export const Gimoji = () => {

    const [categories, setCategories] = useState([]);
    const [gifsData, setGifsData] = useState([]);
    const [search, setSearch] = useState('animals');



    useEffect(() => {
      getCategories();
    }, []);
  
  useEffect(() => {
    searchGif();
    }, [search]) 
    

    const getCategories = async () => {
        const resp = await fetch(`${urlCategoriesApi}${apiKey}`);
        const { data } = await resp.json();
        
        setCategories(data);
    };

  
  const searchGif = async () => {
    try {
      const resp = await fetch(
        `${giphySearchApi}${apiKey}&q=${search}&limit=25&offset=0`
      );
       const { data } = await resp.json();
       await setGifsData(data);
    } catch (error) {
      console.log(error);
    }
  };

   const onCategorySearch = (e) => {
     setSearch(e.target.value);
  };
  
  const onSearch = (e) => {
    const data = e.target.value;
    if (data.length >= 3) {
      setSearch(data)
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
            <SelectData categoriesData={categories} onCategSelect={(e) => onCategorySearch(e)} />
            </div>
            <Search onSearch={(e) => onSearch(e)} />
          </div>
        </div>
        <div className="">
          <GifCard gifData={gifsData} />
        </div>
      </>
    );
}
