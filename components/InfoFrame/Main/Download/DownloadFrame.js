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

  /* Just one item */
  @media only screen and (max-width: 800px) {
    .items {
      flex-direction: column;
    }
  }
`;

const DownloadFrame = () => {
  // Context
  const { data } = useContext(ApiDataContext);

  const [urlSelected, setUrlSelected] = useState({
    banner: data.ytData[0].banner[0].url,
    avatar: data.ytData[0].avatar[0].url,
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
