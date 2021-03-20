import styled from "@emotion/styled";
import H3 from "./H3";
import Hr from "./Hr";

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

const TitleFrame = ({ h3 }) => {
  return (
    <TitleFrameStyled>
      <H3 h3={h3} />
      <Hr />
      <div className="QualityDownText">
        <p>Quality</p>
        <p>Download</p>
      </div>
      <Hr />
    </TitleFrameStyled>
  );
};

export default TitleFrame;
