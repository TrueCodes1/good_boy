import React from 'react';
import styled from 'styled-components';

// IMPORTING COMPONENTS
import Footer from '../components/Footer';
import Progress from '../components/Progress';
import Header from '../components/Header';
import Button from '../components/Button';

// IMPORING ASSETS
import dogSide from '../assets/dog_side.png';  

const MainParent = styled.div`

  width: 75%;
  height: 75%;
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

`

const ImageHalf = styled.div`

  width: 40%;
  display: flex;
  align-items: center;
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

            <Header text='Potrebujeme od Vás zopár informácií' />

            <ButtonsParent>

              <Button text='Späť' class='back' />

              <Button text='Pokračovať' class='forth' />

            </ButtonsParent>

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
