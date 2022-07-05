import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import $ from 'jquery';
import { useSelector, useDispatch } from 'react-redux';

import PhoneInput from 'react-phone-number-input';

// IMPORTING REDUX ACTIONS
import { moveForth, moveBackward, setProgress } from '../actions/Progress';

// IMPORTING STYLESHEETS
import'../styles/phone_input.sass';
import'../styles/classes.sass';
import'../styles/animations.sass';

//********************************** */

// "VALIDATOR" IS WHAT WILL BE USED TO VALIDATE EMAIL ADDRESS
// import validator from 'validator';
// validator.isEmail('')

//********************************** */

// IMPORTING COMPONENTS
import TextInput from './TextInput';
import PhoneNumberInput from './PhoneNumberInput';
import Button from './Button';

// IMPORTING JSONS
import Headers from '../jsons/headers.json';

const MainParent = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    font-family: 'Public Sans';
    min-height: 500px;
    max-height: 500px;

    &.hidden {
        display: none;
    }

` 

const TopPart = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-weight: 800;
    font-size: 14px;
    color: #2F2F2F;
    padding: 0 0 20px 0;

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

const ButtonsParent = styled.div`

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  transform: translateY(60px);
  transition: .25s all ease;

  &.single {

    justify-content: flex-end;

  }

`

export default function SecondStage(props) {

    const progress = useSelector(state => state.progress);

    const secondStageState = useSelector(state => state.secondStage);

    const name = useSelector(state => state.secondStage.name);
    const surname = useSelector(state => state.secondStage.surname);
    const email = useSelector(state => state.secondStage.email);
    const number = useSelector(state => state.secondStage.number);
    const isReady = useSelector(state => state.secondStage.isReady);

    const handleChange = (e) => {

        let id = e.target.id;
        let value = e.target.value;

        console.log(id)
        console.log(value)

    }

    const dispatch = useDispatch();

    const [value, setValue] = useState();

    useEffect(() => {
        
        const firstStage = $(`#first-stage`);
        const secondStage = $(`#second-stage`);
        const thirdStage = $(`#third-stage`);
    
        const header = $(`#header`);
    
        const backBtn = $(`#back-btn-second`);
        const forthBtn = $(`#forth-btn-second`);
    
        let currentView = 'first';
    
        // FIRST VIEW COMPONENTS
        
        let firstViewComponents = [header];
    
        let doubleChoice = $(`#double-choice`);
        firstViewComponents.push(doubleChoice);
    
        let formUpperPart = $(`#form-upper-part`);
        firstViewComponents.push(formUpperPart);
        
        let formLowerPart = $(`#form-lower-part`);
        firstViewComponents.push(formLowerPart);

        let buttonsFirst = $(`#buttons-first-stage`);
        firstViewComponents.push(buttonsFirst);
    
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
        
        let buttonsSecond = $(`#buttons-second-stage`);
        secondViewComponents.push(buttonsSecond);

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
    
        let buttonsThird = $(`#buttons-third-stage`);
        thirdViewComponents.push(buttonsThird);

        /********************************* */
        //
        //           FUNCTIONS
        //
        /********************************* */
    
        const verifier = (value) => {

            let isCorrect = false;

            if (value.replaceAll(' ', '').length > 0) {

                isCorrect = true;

            }

            return isCorrect;

        }

        const moveOnSecond = () => {

            let nameValue = $(`#input-name`).val();
            let surnameValue = $(`#input-surname`).val();
            let emailValue = $(`#input-email`).val();
            let numberValue = $(`#phone-input`).attr('value');

            let checkList = [
                verifier(nameValue),
                verifier(surnameValue),
                verifier(emailValue),
                verifier(numberValue)
            ]

            if (!checkList.includes(false)) {

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
                dispatch(setProgress(3))
                
            }    

        }
      
        const moveBackSecond = () => {

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
            dispatch(setProgress(1))
    
        }
    
        /********************************** */
        //
        //         EVENT LISTENERS
        //
        /********************************** */
    
        $(backBtn).on('click', moveBackSecond);
    
        $(forthBtn).off('click', moveOnSecond).on('click', moveOnSecond);
    
    }, [secondStageState])

  return (
    <>
    
        <MainParent id='second-stage' className={props.parentClass}>
        
            <TopPart id='top-part' className='invisible'>O Vás</TopPart>
            
            <TextInput type="text" onChange={handleChange} defaultValue="Meno" placeholder="Zadajte Vaše meno" parentId="parent-name" inputId="input-name" placeholderId='input-name-placeholder' className="text-input" parentClass="invisible" name="name"/>
            <TextInput type="text" onChange={handleChange} defaultValue="Priezvisko" placeholder="Zadajte Vaše priezvisko" parentId="parent-surname" inputId="input-surname" placeholderId='input-surname-placeholder' className="text-input" parentClass="invisible" name="surname"/>
            <TextInput type="email" onChange={handleChange} defaultValue="Email" placeholder="Zadajte Váš e-mail" parentId="parent-email" inputId="input-email" placeholderId='input-email-placeholder' className="text-input" parentClass="invisible" name="email"/>

            <PhoneNumberInput parentClass="invisible" />

            <ButtonsParent id='buttons-second-stage' className="invisible">

              <Button text='Späť' class='back' id='back-btn-second' />

              <Button text='Pokračovať' class={`forth ${name !== '' && surname !== '' && email !== '' && number !== '' ? 'active' : ''}`} id='forth-btn-second' />

            </ButtonsParent>

        </MainParent>

    </>
  )
}
