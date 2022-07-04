import React, { useEffect } from 'react';
import styled from 'styled-components';
import $ from 'jquery';
import { useDispatch } from 'react-redux';

// IMPORTING REDUX ACTIONS
import { moveForth, moveBackward } from '../actions/Progress';

// IMPORTING COMPONENTS
import Footer from '../components/Footer';
import Progress from '../components/Progress';
import Header from '../components/Header';
import Button from '../components/Button';

import FirstStage from '../components/FirstStage';
import SecondStage from '../components/SecondStage';
import ThirdStage from '../components/ThirdStage';

// IMPORING ASSETS
import dogSide from '../assets/dog_side.png';  

// IMPORTING JSONS
import Headers from '../jsons/headers.json';

// IMPORTNIG STYLESHEETS
import'../styles/classes.sass';

const MainParent = styled.div`

  width: 70%;
  height: 70%;
  left: 0;
  right: 0;
  margin: 0 auto;

`

const Body = styled.div`

  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: stretch;
  width: 100%;
  height: fit-content;
  padding: 100px 0 150px 0;

`

const ContentHalf = styled.div`

  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 800px;
  max-height: 800px;

`

const StagePart = styled.div`

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: 600px;
  max-height: 600px;
  box-sizing: border-box;  

`

const ImageHalf = styled.div`

  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

`

const DogImage = styled.img`

  background: url(brady-rogers-yMnB_WhMtY0-unsplash.jpg), url(20200824_170332000_iOS.jpg);

`

const ButtonsParent = styled.div`

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  &.single {

    justify-content: flex-end;

  }

`

export default function WelcomeView() {

  return (
    <>
    
      <MainParent>

        <Body>

          <ContentHalf>

            <Progress />

            <Header text={Headers.first}/>

            <StagePart>

              <FirstStage />

              <SecondStage parentClass='hidden' />

              <ThirdStage parentClass='hidden' />

            </StagePart>

          </ContentHalf>
          
          <ImageHalf>

            <DogImage src={ dogSide } /> 

          </ImageHalf>

        </Body>

        <Footer />

      </MainParent>
    
    </>
  )
}
