// Styles
import { FormSearch, error } from "../../styles/stylesSearchFrame";
// Components
import Button from "./Button";
import Input from "./Input";

const SearchBar = ({ searchValue, setSearchValue, searchSubmit, data }) => {
  return (
    <FormSearch onSubmit={searchSubmit}>
      <Input
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        data={data}
      />
      <Button />
    </FormSearch>
  );
};

export default SearchBar;
