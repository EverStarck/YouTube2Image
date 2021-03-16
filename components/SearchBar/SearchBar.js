// Styles
import { FormSearch } from "../../styles/stylesSearchFrame";
// Components
import Button from "./Button";
import Input from "./Input";

const SearchBar = ({ searchValue, setSearchValue, searchSubmit }) => {
  return (
    <FormSearch onSubmit={searchSubmit}>
      <Input
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <Button />
    </FormSearch>
  );
};

export default SearchBar;
