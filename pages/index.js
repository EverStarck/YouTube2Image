import Head from "next/head";

import ApiDataProvider from "../context/ApiDataContext";

import AppMain from "../components/AppMain";

export default function Home() {
  return (
    <>
      <Head>
        <title>Donwload your YouTube Banner and Avatar!</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <ApiDataProvider>
        <AppMain />
      </ApiDataProvider>
    </>
  );
}
