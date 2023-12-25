import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  // Fetch data frm TMDB API and update store
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
          Main Container
            - Video Background
            - Video Title
          Secondary Container
            - MovieList * n
              - cards * n;
      */}
    </div>
  );
};

export default Browse;
