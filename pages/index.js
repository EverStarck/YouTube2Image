import Head from "next/head";
import { useState } from "react";

import SearchFrame from "../components/SearchFrame/SearchFrame";
import Loader from "../components/Loader";

export default function Home() {
  const [data, setData] = useState({
    ytData: [],
    ready: false,
    loading: false,
  });

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {data.loading ? (
        <Loader />
      ) : (
        <SearchFrame data={data} setData={setData} />
      )}
    </>
  );
}
