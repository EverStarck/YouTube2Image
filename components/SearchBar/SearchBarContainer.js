import { useState } from "react";
import { fetcher } from "../../services/fetchData";

// Components
import Error from "../Error";
import SearchBar from "./SearchBar";

const SearchBarContainer = ({ setData, data }) => {
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState(false);

  const searchSubmit = (e) => {
    e.preventDefault();
    // Reset the state
    setError(false);

    // Remove spaces
    let newSearchValue = searchValue.replace(/\s/g, "");
    // Change http by https
    if (!searchValue.includes("https"))
      newSearchValue = newSearchValue.toLowerCase().replace(/http/, "https");
    // Check if the link is a channel
    if (newSearchValue.includes(".com/watch")) {
      setError(true);
      // Check if the link is a youtube link
    } else if (!newSearchValue.includes("https://www.youtube.com/")) {
      setError(true);
    } else if (!error) {
      setData({
        ...data,
        ready: false,
        loading: true,
      });

      fetcher(newSearchValue).then((dataTest) => {
        setData({
          // ...data,
          ytData: [dataTest],
          ready: true,
          loading: false,
        });
      });
    }

    // Fixed link
    setSearchValue(newSearchValue);
  };

  return (
    <>
      {/* Errors */}
      {data.ytData[0] === "Error, youtube channel doesn't exist" ? <Error errorText="Youtube channel doesn't exist"/> : null}
      {error ? <Error errorText="Incorrect link, please, check it" /> : null}

      {/* Form */}
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} searchSubmit={searchSubmit} data={data}/>
    </>
  );
};

export default SearchBarContainer;