import React from 'react';
import styled from 'styled-components';

// IMPORTING COMPONENTS
import Footer from '../components/Footer';
import Progress from '../components/Progress';
import Header from '../components/Header';

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

`

const ImageHalf = styled.div`

  width: 40%;

`

const DogImage = styled.img`

  background: url(brady-rogers-yMnB_WhMtY0-unsplash.jpg), url(20200824_170332000_iOS.jpg);

`

export default function WelcomeView() {
  return (
    <>
    
      <MainParent>

        <Body>

          <ContentHalf>

            <Progress />

            <Header text='Potrebujeme od Vás zopár informácií' />

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
