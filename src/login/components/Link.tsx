import React from 'react'
import styled from "styled-components";

interface LinkProps {
    children: React.ReactNode;
    href?: string;
}


const Link = (props : LinkProps) => {
    const Link = styled.a`
    text-decoration: none;
    color: #885043;
    font-size: 16px;
    margin-bottom: 20px;
    align-self: flex-end;
  `;
  return (
    <Link href={props.href}>{props.children}</Link>
  )
}

export default Link