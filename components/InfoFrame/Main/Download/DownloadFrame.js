import styled from "@emotion/styled";
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
  return (
    <DownloadFrameStyled>
      <div className="items">
        <TitleFrame h3="Banner" />
        <TitleFrame h3="Profile picture" />
      </div>
    </DownloadFrameStyled>
  );
};

export default DownloadFrame;
