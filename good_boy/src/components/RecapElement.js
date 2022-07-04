import React from 'react';
import styled from 'styled-components';

// IMPORTING STYLESHEETS
import '../styles/classes.sass';
import '../styles/animations.sass';

const MainParent = styled.div`

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    margin: 0 0 23px 0;
    padding: 0;

`

const InfoHeading = styled.p`

    font-family: 'Public Sans';
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 19px;
    color: #2F2F2F;
    margin: 0 0 10px 0;
    padding: 0;

`

const InfoInfo = styled.p`

    font-family: 'Public Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #2F2F2F;
    margin: 0;
    padding: 0;

`

export default function RecapElement(props) {
  return (
    <>
    
        <MainParent id={props.parentId} className={props.parentClass}>

            <InfoHeading>{props.heading}</InfoHeading>

            <InfoInfo>{props.info}</InfoInfo>

        </MainParent>
    
    </>
  )
}
