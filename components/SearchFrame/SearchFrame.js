import { MainSearch } from "../../styles/stylesSearchFrame";
import SearchBarContainer from "../SearchBar/SearchBarContainer";
import Footer from "./Footer";
import Name from "./Name";

const SearchFrame = () => {
  return (
    <MainSearch>
      <Name h1='YoutubeApiStarck' h2='The Tony Starck of the Youtube channel APIs'/>

      <section>
        <SearchBarContainer/>
      </section>

      <Footer />
    </MainSearch>
  );
};

export default SearchFrame;
