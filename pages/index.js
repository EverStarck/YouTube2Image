import ApiDataProvider from "../context/ApiDataContext";

import AppMain from "../components/AppMain";
import HeadComponent from "../components/HeadComponent";

export default function Home() {
  return (
    <>
      <HeadComponent />

      <ApiDataProvider>
        <AppMain />
      </ApiDataProvider>
    </>
  );
}
