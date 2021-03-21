import styled from "@emotion/styled";
import { useContext, useState } from "react";

import { ApiDataContext } from "../../../../context/ApiDataContext";
import DownloadButton from "./DownloadButton";

import H3 from "./H3";
import Hr from "./Hr";
import QualityButton from "./QualityButton";

const TitleFrameStyled = styled.div`
  width: 100%;
  .QualityDownText {
    width: 100%;
    display: flex;
    justify-content: space-between;
    p {
      margin: 8px 0;
      font-weight: 500;
      font-size: clamp(0.75rem, 3vw, 1.125rem);
    }
  }
`;

const TitleFrame = ({ urlSelected, setUrlSelected, h3, isBannerSelect }) => {
  return (
    <TitleFrameStyled>
      <H3 h3={h3} />
      <Hr />
      <div className="QualityDownText">
        <p>Quality</p>
        <p>Download</p>
      </div>
      <Hr />

      <QualityButton
        isBannerSelect={isBannerSelect}
        urlSelected={urlSelected}
        setUrlSelected={setUrlSelected}
      />
      <DownloadButton urlSelected={urlSelected}/>
    </TitleFrameStyled>
  );
};

export default TitleFrame;
