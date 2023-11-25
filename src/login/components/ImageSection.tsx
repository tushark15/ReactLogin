import styled from "styled-components";
import loginImage from "../../assets/Picture.svg";

const ImageSection = () => {
  const ImageSection = styled.div`
    background-image: url(${loginImage});
    background-size: cover;
    width: 50%;
    height: 100%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    @media (max-width: 768px) {
      display: none;
    }
  `;
  return <ImageSection />;
};

export default ImageSection;
