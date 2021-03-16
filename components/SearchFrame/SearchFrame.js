import { MainSearch } from "../../styles/stylesSearchFrame";
import SearchBarContainer from "../SearchBar/SearchBarContainer";
import Footer from "./Footer";
import Name from "./Name";

const SearchFrame = ({setData, data}) => {
  return (
    <MainSearch>
      <Name />

      <section>
        <SearchBarContainer setData={setData} data={data}/>
      </section>

      <Footer />
    </MainSearch>
  );
};

export default SearchFrame;
