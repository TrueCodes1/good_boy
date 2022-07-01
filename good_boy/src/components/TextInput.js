import React from 'react';
import styled from 'styled-components';


const Input = styled.input`

    padding: 35px 15px 15px 25px;
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

`

const Placeholder = styled.p`

    transform: translateY(-60px) translateX(25px);
    padding: 0;
    margin: 0;
    font-weight: 800;
    font-size: 16px;
    line-height: 21px;
    color: #2F2F2F;

`

export default function TextInput(props) {
  return (
    <>
    
        <Input type={props.type} id={props.id} name={props.name} className={props.class} placeholder={props.placeholder} />

        <Placeholder>{props.defaultValue}</Placeholder>
    
    </>
  )
}
