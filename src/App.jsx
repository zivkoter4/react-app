import Header from "./components/Header";
import FavoriteSong from "./components/FavoriteSong";
import Story from "./components/Story";
import MovieCard from "./components/MovieCard";

function App (){
  return(
      <>
        <Header/>
        <FavoriteSong/>
        <h3>Stories</h3>
        <Story/>
        <Story/>
        <Story/>
        <Story/>


        <h3>Movies</h3>
        <MovieCard title = "Inside Out 2" year = {2024} genre = "Animation" rating = {7.6}/>
        <MovieCard title = "Spider-Man: Across the Spider-Verse" year = {2023} genre = "Animation" rating = {8.5}/>
        <MovieCard title = "Dune: Part Two" year = {2024} genre = "Sci-Fi" rating = {8.5}/>
      </>
    );
}

export default App;