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
  min-height: 500px;
  max-height: 500px;
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

  const dispatch = useDispatch();

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
    
    // SECOND VIEW COMPONENTS

    let thirdViewComponents = [header];

    let recap1 = $(`#recap-1`);
    thirdViewComponents.push(recap1);

    let recap2 = $(`#recap-2`);
    thirdViewComponents.push(recap2);

    let recap3 = $(`#recap-3`);
    thirdViewComponents.push(recap3);
    
    let recap4 = $(`#recap-4`);
    thirdViewComponents.push(recap4);
    
    let recap5 = $(`#recap-5`);
    thirdViewComponents.push(recap5);
    
    let recap6 = $(`#recap-6`);
    thirdViewComponents.push(recap6);
  
    let parentCheckbox = $(`#parent-checkbox`);
    thirdViewComponents.push(parentCheckbox);

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

            setTimeout(() => {

              $(component).removeClass('show');
              $(component).addClass('hide');

            }, timeout)

            // FOR EACH OF THE COMPONENTS, THE TIME WHEN
            // THE CLASS WILL BE APPENDED IS PLUS 0.1 SEC. 
            timeout += 100;

          });

          // AFTER THE LAST COMPONENTS ENDS THE ANIMATION,
          // THE CLASS "HIDE" IS REMOVED AND THE WHOLE FIRST STAGE
          // IS APPENDED A CLASS "HIDDEN", THAT MAKES IT DISPLAY: NONE
          setTimeout(() => {

            $(firstStage).addClass('hidden');

            firstViewComponents.forEach(component => {

              $(component).removeClass('hide');
              $(component).addClass('invisible');

            })

          }, timeout + 250)

          setTimeout(() => {

            // THE TIMEOUT VARIABLE IS RESET TO 0
            timeout = 0;

            // CHANGING THE TEXT OF THE HEADER FOR THE SECOND STAGE
            $(header).html(`${Headers.second}`)
            
            $(secondStage).removeClass('hidden');

            secondViewComponents.forEach(component => {

              setTimeout(() => {

                $(component).addClass('show');
  
              }, timeout)
  
              // FOR EACH OF THE COMPONENTS, THE TIME WHEN
              // THE CLASS WILL BE APPENDED IS PLUS 0.1 SEC. 
              timeout += 100;
  
            })

          }, timeout + 200)

          currentView = 'second';
          dispatch(moveForth());

          break
        
        case 'second':
          // MOVING FROM THE FIRST VIEW TO THE SECOND VIEW

          let timeout2 = 0;

          // EACH OF THE COMPONENTS OF THE FIRST VIEW IS 
          // ASSIGNED A TIMEOUT WHEN THERE WILL BE CLASS "HIDE"
          // APPENDED TO IT. 
          secondViewComponents.forEach(component => {

            setTimeout(() => {

              $(component).removeClass('show');
              $(component).addClass('hide');

            }, timeout2)

            // FOR EACH OF THE COMPONENTS, THE TIME WHEN
            // THE CLASS WILL BE APPENDED IS PLUS 0.1 SEC. 
            timeout2 += 100;

          });

          // AFTER THE LAST COMPONENTS ENDS THE ANIMATION,
          // THE CLASS "HIDE" IS REMOVED AND THE WHOLE FIRST STAGE
          // IS APPENDED A CLASS "HIDDEN", THAT MAKES IT DISPLAY: NONE
          setTimeout(() => {

            $(secondStage).addClass('hidden');

            secondViewComponents.forEach(component => {

              $(component).removeClass('hide');
              $(component).addClass('invisible');

            })

          }, timeout2 + 250)

          setTimeout(() => {

            // THE TIMEOUT VARIABLE IS RESET TO 0
            timeout2 = 0;

            // CHANGING THE TEXT OF THE HEADER FOR THE SECOND STAGE
            $(header).html(`${Headers.third}`)
            
            $(thirdStage).removeClass('hidden');

            thirdViewComponents.forEach(component => {

              setTimeout(() => {

                $(component).addClass('show');

              }, timeout2)

              // FOR EACH OF THE COMPONENTS, THE TIME WHEN
              // THE CLASS WILL BE APPENDED IS PLUS 0.1 SEC. 
              timeout2 += 100;

            })

          }, timeout2 + 200)

          currentView = 'third';
          dispatch(moveForth());

          break

        case 'third':
          
          alert('Checking and sending')

          break
  
        default:
          alert('default')

      }

    }

    const moveBack = () => {

      switch (currentView) {

        case 'first':
          
          alert('There is nowhere else to move backward.')

          break
        
        case 'second':
          // MOVING FROM THE FIRST VIEW TO THE SECOND VIEW

          let timeout = 0;

          // EACH OF THE COMPONENTS OF THE FIRST VIEW IS 
          // ASSIGNED A TIMEOUT WHEN THERE WILL BE CLASS "HIDE"
          // APPENDED TO IT. 
          secondViewComponents.forEach(component => {

            setTimeout(() => {

              $(component).removeClass('show');
              $(component).addClass('hide');

            }, timeout)

            // FOR EACH OF THE COMPONENTS, THE TIME WHEN
            // THE CLASS WILL BE APPENDED IS PLUS 0.1 SEC. 
            timeout += 100;

          });

          // AFTER THE LAST COMPONENTS ENDS THE ANIMATION,
          // THE CLASS "HIDE" IS REMOVED AND THE WHOLE FIRST STAGE
          // IS APPENDED A CLASS "HIDDEN", THAT MAKES IT DISPLAY: NONE
          setTimeout(() => {

            secondViewComponents.forEach(component => {

              $(component).removeClass('hide');

            })

            $(secondStage).addClass('hidden');

          }, timeout + 250)

          setTimeout(() => {

            // THE TIMEOUT VARIABLE IS RESET TO 0
            timeout = 0;

            // CHANGING THE TEXT OF THE HEADER FOR THE SECOND STAGE
            $(header).html(`${Headers.first}`)
            
            $(firstStage).removeClass('hidden');

            firstViewComponents.forEach(component => {

              setTimeout(() => {

                $(component).addClass('show');

              }, timeout)

              // FOR EACH OF THE COMPONENTS, THE TIME WHEN
              // THE CLASS WILL BE APPENDED IS PLUS 0.1 SEC. 
              timeout += 100;

            })

          }, timeout + 200)

          currentView = 'first';
          dispatch(moveBackward());

          break

        case 'third':
          // MOVING FROM THE FIRST VIEW TO THE SECOND VIEW

          let timeout2 = 0;

          // EACH OF THE COMPONENTS OF THE FIRST VIEW IS 
          // ASSIGNED A TIMEOUT WHEN THERE WILL BE CLASS "HIDE"
          // APPENDED TO IT. 
          thirdViewComponents.forEach(component => {

            setTimeout(() => {

              $(component).removeClass('show');
              $(component).addClass('hide');

            }, timeout2)

            // FOR EACH OF THE COMPONENTS, THE TIME WHEN
            // THE CLASS WILL BE APPENDED IS PLUS 0.1 SEC. 
            timeout2 += 100;

          });

          // AFTER THE LAST COMPONENTS ENDS THE ANIMATION,
          // THE CLASS "HIDE" IS REMOVED AND THE WHOLE FIRST STAGE
          // IS APPENDED A CLASS "HIDDEN", THAT MAKES IT DISPLAY: NONE
          setTimeout(() => {

            thirdViewComponents.forEach(component => {

              $(component).removeClass('hide');

            })

            $(thirdStage).addClass('hidden');

          }, timeout2 + 250)

          setTimeout(() => {

            // THE TIMEOUT VARIABLE IS RESET TO 0
            timeout2 = 0;

            // CHANGING THE TEXT OF THE HEADER FOR THE SECOND STAGE
            $(header).html(`${Headers.second}`)
            
            $(secondStage).removeClass('hidden');

            secondViewComponents.forEach(component => {

              setTimeout(() => {

                $(component).addClass('show');

              }, timeout2)

              // FOR EACH OF THE COMPONENTS, THE TIME WHEN
              // THE CLASS WILL BE APPENDED IS PLUS 0.1 SEC. 
              timeout2 += 100;

            })

          }, timeout2 + 200)

          currentView = 'second';
          dispatch(moveBackward());

          break
  
        default:
          alert('default')

      }

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
