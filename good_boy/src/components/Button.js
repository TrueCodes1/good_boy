import React from 'react';
import styled from 'styled-components';


const UniversalButton = styled.button`

    font-size: 14px;
    font-weight: 800;
    padding: 20px;
    border-radius: 100px;
    border: none;
    outline: none;
    cursor: pointer;

    &:hover,
    &:focus,
    &:active,
    &:visited {

        outline: none;
        border: none;

    }

    &.back {

        background: #F3E2D9;
        color: #2F2F2F;
    
    }

    &.forth {

        transition: .25s ease;
        color: #fff;
        background: #9F9F9F;
        box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07), 
                    0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 
                    0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 
                    0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 
                    0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 
                    0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);

        &.active {

            transition: all .25s ease;
            background: linear-gradient(115.41deg, #CD8A64 -1.77%, #C4794F 73.03%);
            box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07), 
                        0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 
                        0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 
                        0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 
                        0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 
                        0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);

        }
    }

`

export default function Button(props) {
  return (
    <>
    
        <UniversalButton className={props.class} id={props.id} onClick={props.onClick} >{props.text}</UniversalButton>
    
    </>
  )
}
