import { useState } from "react";


export const useLike = () => {

    const [like, setLike] = useState([]);

  
    const onLikeClick = (gifId) => {
    const gifExist = like.find((item) => item.id == gifId);

    if (!gifExist) {
      const likedGif = {
        id: gifId,
        likes: 1,
      };
      setLike([
        ...like,
        likedGif
      ]);
    } else {
      const updateLikes = like.map((gif) => {
        if (gif.id === gifId) {
          return {
            ...gif,
            likes: gif.likes + 1,
          }
        }
        return gif
      });
      setLike(updateLikes);
    }
  };

   const totalLikes = (gifId) => {
     const dataLike = like.find((item) => item.id === gifId);
     return dataLike ? dataLike.likes : 0;
   };

  return {
    onLikeClick: (value) => onLikeClick(value),
    totalLikes: (value) => totalLikes(value),
    like
  };
  
}
