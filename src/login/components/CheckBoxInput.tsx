import styled from "styled-components";

interface CheckBoxInputProps {
    type?: string;
}

const CheckBoxInput = (props : CheckBoxInputProps) => {
  const CheckBoxInput = styled.input`
    width: 20px;
    accent-color: #885043;
  `;
  return <CheckBoxInput type={props.type}/>;
};

export default CheckBoxInput;
