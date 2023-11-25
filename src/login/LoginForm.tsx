import styled from "styled-components";
import InputField from "./components/InputField";
import ImageSection from "./components/ImageSection";
import FormButton from "./components/FormButton";
import SeperationLine from "./components/SeperationLine";
import Link from "./components/Link";
import Header from "./components/Header";
import Paragraph from "./components/Paragraph";
import CheckBoxInput from "./components/CheckBoxInput";

const LoginForm = () => {
  const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: full;
    height: 100vh;
  `;

  const SecondaryDiv = styled.div`
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
    width: 60%;
    display: flex;
    padding: 0px;
    @media (max-width: 768px) {
      width: 80%;
    }
  `;
  const FormDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    padding: 20px;
    @media (max-width: 768px) {
      width: 100%;
    }
  `;
  const CheckBoxDiv = styled.div`
    display: flex;
    align-items: center;
  `;

  return (
    <MainDiv>
      <SecondaryDiv>
        <ImageSection />
        <FormDiv>
          <Header>Login</Header>
          <Paragraph>Please Enter Your Details</Paragraph>
          <InputField type="text" placeholder="Username" />
          <InputField type="password" placeholder="Password" />
          <CheckBoxDiv>
            <CheckBoxInput type="checkbox" />
            <Paragraph>Remember Me</Paragraph>
          </CheckBoxDiv>
          <CheckBoxDiv>
            <CheckBoxInput type="checkbox" />
            <Paragraph>
              Agree to <Link>Terms and Conditions</Link>
            </Paragraph>
          </CheckBoxDiv>
          <Link href="#">Forgot Password?</Link>
          <FormButton colored={true}>Sign In</FormButton>
          <SeperationLine />
          <FormButton colored={false}>Register Now</FormButton>
        </FormDiv>
      </SecondaryDiv>
    </MainDiv>
  );
};

export default LoginForm;
