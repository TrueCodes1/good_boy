import React from 'react';
import styled from 'styled-components';

// IMPORT STYLESHEETS
import '../styles/classes.sass';
import '../styles/animations.sass';

const MainParent = styled.div`

    width: 100%;

    &.show {
        animation: 1 .25s showAnimation;
        -webkit-animation: 1 .25s showAnimation; 
        opacity: 1
    }

    &.hide {
        animation: 1 .25s leaveAnimation;
        -webkit-animation: 1 .25s leaveAnimation;
        opacity: 0;
    }
    
`

const Input = styled.input`

    padding: 35px 15px 15px 25px;
    width: 100%;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    background: #FFFFFF;
    border: 1px solid #DFDFDF;
    border-radius: 8px;
    outline: none;
    transition: .25s ease-in-out;
    color: #9F9F9F;

    &:hover {
        border: 1px solid #DFDFDF;
        outline: none;
    }

    &:focus {
        border: 1px solid #CD8B65;
        outline: none;
        transition: .25s ease-in-out;
        color: #2F2F2F;
    }

    /* &.show {
        animation: 1 .25s showAnimation;
        -webkit-animation: 1 .25s showAnimation;
        opacity: 1
    } */

`

const Placeholder = styled.p`

    transform: translateY(-60px) translateX(25px);
    padding: 0;
    margin: 0;
    font-weight: 800;
    font-size: 16px;
    line-height: 21px;
    color: #2F2F2F;

    /* &.show {
        animation: 1 .25s showAnimationPlaceholder;
        -webkit-animation: 1 .25s showAnimationPlaceholder;
        opacity: 1
    } */

`

export default function TextInput(props) {
  return (
    <MainParent id={props.parentId} className={props.parentClass}>

        <Input type={props.type} id={props.inputId} name={props.name} className={props.className} placeholder={props.placeholder} />

        <Placeholder id={props.placeholderId} className={props.className}>{props.defaultValue}</Placeholder>

    </MainParent>
  )
}
