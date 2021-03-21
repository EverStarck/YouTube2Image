import { useContext, useState } from "react";
import styled from "@emotion/styled";

import { ApiDataContext } from "../../../../context/ApiDataContext";

import TitleFrame from "./TitleFrame";

const DownloadFrameStyled = styled.main`
  display: flex;
  justify-content: center;
  margin: 65px 0;
  .items {
    display: flex;
    justify-content: space-between;
    column-gap: 32px;
    width: 60%;
  }

  @media only screen and (max-width: 1158px) {
    .items {
      width: 70%;
    }
  }

  /* Just one item */
  @media only screen and (max-width: 920px) {
  margin: 25px 0;
    .items {
      flex-direction: column;
      width: 90%;
      row-gap: 32px;
    }
  }
`;

const DownloadFrame = () => {
  // Context
  const { data } = useContext(ApiDataContext);

  const [urlSelected, setUrlSelected] = useState({
    banner: data.ytData[0].banner[0],
    avatar: data.ytData[0].avatar[0],
  });

  return (
    <DownloadFrameStyled>
      <div className="items">
        <TitleFrame
          h3="Banner"
          urlSelected={urlSelected}
          setUrlSelected={setUrlSelected}
        />
        <TitleFrame
          h3="Profile picture"
          isBannerSelect={false}
          urlSelected={urlSelected}
          setUrlSelected={setUrlSelected}
        />
      </div>
    </DownloadFrameStyled>
  );
};

export default DownloadFrame;
