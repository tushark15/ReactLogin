import React from 'react'
import styled from "styled-components";

interface ParagraphProps {
    children: React.ReactNode;  
}

const Paragraph = ({children} : ParagraphProps) => {
    
  const Paragraph = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  color: #616161;
  @media (max-width: 768px) {
    margin-bottom: 15 px;
  }
`;
  return (
    <Paragraph>{children}</Paragraph>
  )
}

export default Paragraph