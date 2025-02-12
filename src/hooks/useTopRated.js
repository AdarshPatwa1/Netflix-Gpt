import { useDispatch, useSelector } from "react-redux";
import { addTopRated } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";


const useTopRated = () => {
    const dispatch = useDispatch();

    const TopRated = useSelector(store => store.movies.TopRated);
  
  const getTopRated = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", API_OPTIONS);

    const json = await data.json();
    dispatch(addTopRated(json.results));
  };

  useEffect(() => {
    !TopRated && getTopRated();
  }, []);
};

export default useTopRated;