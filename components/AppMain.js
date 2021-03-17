import { useContext } from "react";

import { ApiDataContext } from "../context/ApiDataContext";
import InfoFrame from "./InfoFrame/InfoFrame";

import Loader from "./Loader";
import SearchFrame from "./SearchFrame/SearchFrame";

const AppMain = () => {
  // Context
  const { data } = useContext(ApiDataContext);
  return (
    <>
      {data.ready && data.ytData[0] !== "Error, youtube channel doesn't exist" ? (
        <InfoFrame />
      ) : (
        <>{data.loading ? <Loader /> : <SearchFrame />}</>
      )}
    </>
  );
};

export default AppMain;
