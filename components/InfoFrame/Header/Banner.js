import Image from "next/image";
import { useContext, useEffect } from "react";
import styled from "@emotion/styled";
import { ApiDataContext } from "../../../context/ApiDataContext";

const BannerDiv = styled.div`
  height: 300px;
  img {
    height: 300px;
    width: 100%;
    object-fit: cover;
  }
`;

const Banner = ({ bannerAndAvatar, setBannerAndAvatar }) => {
  // Context
  const { data } = useContext(ApiDataContext);

  let arrayWithBanner = data.ytData[0].banner;

  useEffect(() => {
    setBannerAndAvatar({
      ...bannerAndAvatar,
      banner: [arrayWithBanner[arrayWithBanner.length - 1]],
    });
  }, []);

  return (
    <>
      {bannerAndAvatar.banner.length && (
        <BannerDiv>
          <Image
            src={bannerAndAvatar.banner[0].url}
            alt={`Banner of the youtuber called ${data.ytData[0].channelInfo.title}`}
            width={1920}
            height={300}
          />
        </BannerDiv>
      )}
    </>
  );
};

export default Banner;
