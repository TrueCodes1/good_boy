import React from 'react';
import styled from 'styled-components';

// IMPORTING STYLESHEETS
import '../styles/classes.sass';
import '../styles/animations.sass';

const Main = styled.h1`

    font-weight: 800;
    font-size: 46px;
    line-height: 56px;
    margin-top: -20px;

    &.hide {
        animation: 1 .25s leaveAnimation;
        -webkit-animation: 1 .25s leaveAnimation;
        opacity: 0;
    }

    &.show {
        animation: 1 .25s showAnimation;
        -webkit-animation: 1 .25s showAnimation;
        opacity: 1
    }

`

export default function Header(props) {
  return (
    <>
    
        <Main id='header'>{props.text}</Main>
    
    </>
  )
}
