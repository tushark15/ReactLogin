import React from 'react'
import styled from "styled-components";

interface HeaderProps {
    children: React.ReactNode;
}

const Header = ({children} : HeaderProps) => {
    const Header = styled.h1`
    font-size: 28px;
    @media (max-width: 931px) {
      font-size: 24px;
      margin-bottom: 10px;
      margin-top: 10px;
    }
  `;
  return (
    <Header>{children}</Header>
  )
}

export default Header