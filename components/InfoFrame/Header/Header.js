import { useState } from "react";
import Banner from "./Banner";
import Nav from "./Nav";

const Header = () => {
  const [bannerAndAvatar, setBannerAndAvatar] = useState({
    avatar: [],
    banner: [],
  });
  return (
    <>
      {/* <h1>Header</h1> */}
      <Nav />
      <Banner
        bannerAndAvatar={bannerAndAvatar}
        setBannerAndAvatar={setBannerAndAvatar}
      />
    </>
  );
};

export default Header;
