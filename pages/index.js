import Head from "next/head";

import ApiDataProvider from "../context/ApiDataContext";

import AppMain from "../components/AppMain";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ApiDataProvider>
        <AppMain />
      </ApiDataProvider>
    </>
  );
}
