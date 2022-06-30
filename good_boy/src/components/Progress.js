import React from 'react';
import styled, { keyframes } from 'styled-components';
import $ from 'jquery';


const ParentDiv = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 6px;

`

const Child = styled.div`

    height: 100%;
    border-radius: 10px;
    width: 30px;
    background: #9F9F9F;
    opacity: .36;
    transition: all .25s linear;
    margin: 0 2px;

    &.active {

        width: 60px;
        transition: all .25s linear;
        background: linear-gradient(94.75deg, rgba(0, 0, 0, 0.24) 0%, rgba(0, 0, 0, 0) 100.7%), #CD8B65;
        opacity: 1;

    }
    
`

export default function Progress() {

  return (
    <>
    
        {/* THE WHOLE PROGRESS BAR PARENT DIV */}
        <ParentDiv>

            {/* THREE BARS THAT REPRESENT 3 STAGES, FIRST OF THEM WITH CLASS "ACTIVE" 
            WHICH MAKES IT EXPAND AND CHANGE THE BACKGORUND COLOR TO LINEAR GRADIENT.
            ALL THE TRANSITIONS HAPPEN LINEARLY AND SMOOTHLY DURING .25s. */}
            <Child className='active' />
            <Child />
            <Child />

        </ParentDiv>
    
    </>
  )
}
