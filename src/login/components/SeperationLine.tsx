import styled from "styled-components";
import Paragraph from "./Paragraph";

const SeperationLine = () => {
  const SeperationLine = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    gap: 10px;
  `;
  const HorizontalLine = styled.hr`
    width: 100%;
  `;
  return (
    <SeperationLine>
      <HorizontalLine />
      <Paragraph>or</Paragraph>
      <HorizontalLine />
    </SeperationLine>
  );
};

export default SeperationLine;
