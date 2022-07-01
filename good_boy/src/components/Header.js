import React from 'react';
import styled from 'styled-components';


const Main = styled.h1`

    font-weight: 800;
    font-size: 46px;
    line-height: 56px;
    margin-top: -20px;

`

export default function Header(props) {
  return (
    <>
    
        <Main>{props.text}</Main>
    
    </>
  )
}
