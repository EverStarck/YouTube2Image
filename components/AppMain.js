import { useContext } from "react";

import { ApiDataContext } from "../context/ApiDataContext";

import Loader from "./Loader";
import SearchFrame from "./SearchFrame/SearchFrame";

const AppMain = () => {
  // Context
  const { data } = useContext(ApiDataContext);

  return <>{data.loading ? <Loader /> : <SearchFrame />};</>;
};

export default AppMain;
