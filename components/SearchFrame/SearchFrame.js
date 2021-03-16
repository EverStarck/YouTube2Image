import { MainSearch } from "../../styles/stylesSearchFrame";
import SearchBarContainer from "../SearchBar/SearchBarContainer";
import Footer from "./Footer";
import Name from "./Name";

const SearchFrame = () => {
  return (
    <MainSearch>
      <Name />

      <section>
        <SearchBarContainer/>
      </section>

      <Footer />
    </MainSearch>
  );
};

export default SearchFrame;
