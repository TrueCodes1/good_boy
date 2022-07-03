import React, { useEffect } from 'react';
import styled from 'styled-components';
import $ from 'jquery';

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
  min-height: 500px;
  max-height: 500px;
  box-sizing: border-box;  
  overflow: hidden;

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

  useEffect(() => {

    const firstStage = $(`#first-stage`);
    const secondStage = $(`#second-stage`);
    const thirdStage = $(`#third-stage`);

    const header = $(`#header`);

    const backBtn = $(`#back-btn`);
    const forthBtn = $(`#forth-btn`);

    let currentView = 'first';

    // FIRST VIEW COMPONENTS
    
    let firstViewComponents = [header];

    let doubleChoice = $(`#double-choice`);
    firstViewComponents.push(doubleChoice);

    let formUpperPart = $(`#form-upper-part`);
    firstViewComponents.push(formUpperPart);
    
    let formLowerPart = $(`#form-lower-part`);
    firstViewComponents.push(formLowerPart);

    // SECOND VIEW COMPONENTS

    let secondViewComponents = [header];

    let topPart = $(`#top-part`);
    secondViewComponents.push(topPart);

    let nameParent = $(`#parent-name`);
    secondViewComponents.push(nameParent);

    let surnameParent = $(`#parent-surname`);
    secondViewComponents.push(surnameParent);
    
    let emailParent = $(`#parent-email`);
    secondViewComponents.push(emailParent);
    
    let parentPhoneInput = $(`#parent-phone-number`);
    secondViewComponents.push(parentPhoneInput);
    
    /********************************* */
    //
    //           FUNCTIONS
    //
    /********************************* */

    const moveOn = () => {

      switch (currentView) {

        case 'first':
          // MOVING FROM THE FIRST VIEW TO THE SECOND VIEW

          let timeout = 0;

          // EACH OF THE COMPONENTS OF THE FIRST VIEW IS 
          // ASSIGNED A TIMEOUT WHEN THERE WILL BE CLASS "HIDE"
          // APPENDED TO IT. 
          firstViewComponents.forEach(component => {

            console.log(component);

            setTimeout(() => {

              $(component).addClass('hide');

            }, timeout)

            // FOR EACH OF THE COMPONENTS, THE TIME WHEN
            // THE CLASS WILL BE APPENDED IS PLUS 0.1 SEC. 
            timeout+=100;

          });

          // AFTER THE LAST COMPONENTS ENDS THE ANIMATION,
          // THE CLASS "HIDE" IS REMOVED AND THE WHOLE FIRST STAGE
          // IS APPENDED A CLASS "HIDDEN", THAT MAKES IT DISPLAY: NONE
          setTimeout(() => {

            firstViewComponents.forEach(component => {

              $(component).removeClass('hide');

            })

            $(firstStage).addClass('hidden');

          }, timeout+250)

          // THE TIMEOUT VARIABLE IS RESET TO 0
          timeout = 0;

          setTimeout(() => {

            // CHANGING THE TEXT OF THE HEADER FOR THE SECOND STAGE
            $(header).html(`${Headers.second}`)
            
            $(secondStage).removeClass('hidden');

            console.log(secondViewComponents)

            secondViewComponents.forEach(component => {

              setTimeout(() => {

                $(component).addClass('show');
  
              }, timeout)
  
              // FOR EACH OF THE COMPONENTS, THE TIME WHEN
              // THE CLASS WILL BE APPENDED IS PLUS 0.1 SEC. 
              timeout+=100;
  
            })

          }, 500)

          break
        
        default:
          alert('default')

      }

    }

    const moveBack = () => {

      alert('moving back')

    }

    /********************************** */
    //
    //         EVENT LISTENERS
    //
    /********************************** */

    $(backBtn).on('click', moveBack);

    $(forthBtn).on('click', moveOn);

  })

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

            <ButtonsParent>

              <Button text='Späť' class='back' id='back-btn' />

              <Button text='Pokračovať' class='forth' id='forth-btn' />

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
