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

// IMPORTING COMPONENTS
import TextInput from './TextInput';
import PhoneNumberInput from './PhoneNumberInput';
import Button from './Button';

// IMPORTING JSONS
import Headers from '../jsons/headers.json';

// IMPORTING FUNCTIONS
import { move } from '../functions/transitions/move';

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

    // SECOND STAGE REDUX STATES
    const nameInputIsCorrect = useSelector(state => state.secondStage.nameInputIsCorrect);
    const surnameInputIsCorrect = useSelector(state => state.secondStage.surnameInputIsCorrect);
    const emailInputIsCorrect = useSelector(state => state.secondStage.emailInputIsCorrect);
    const numberInputIsCorrect = useSelector(state => state.secondStage.numberInputIsCorrect);

    // REDUX DISPATCH FUNCTION USED WHEN UPDATING ANY STATE OF THE APP
    const dispatch = useDispatch();

    const [value, setValue] = useState();
    
    // MOVING ON TO THE THIRD STAGE
    const moveOn = () => {
    
        const header = $(`#header`);

        const secondStage = $(`#second-stage`);
        const thirdStage = $(`#third-stage`);

        // SECOND VIEW COMPONENTS
        let topPart = $(`#top-part`);
        let nameParent = $(`#parent-name`);
        let surnameParent = $(`#parent-surname`);
        let emailParent = $(`#parent-email`);
        let parentPhoneInput = $(`#parent-phone-number`);
        let buttonsSecond = $(`#buttons-second-stage`);
        let secondViewComponents = [header, topPart, nameParent, surnameParent, emailParent, parentPhoneInput, buttonsSecond];

        // THIRD VIEW COMPONENTS
        let recap1 = $(`#recap-1`);
        let recap2 = $(`#recap-2`);
        let recap3 = $(`#recap-3`);
        let recap4 = $(`#recap-4`);
        let recap5 = $(`#recap-5`);
        let recap6 = $(`#recap-6`);
        let parentCheckbox = $(`#parent-checkbox`);
        let buttonsThird = $(`#buttons-third-stage`);
        let thirdViewComponents = [header, recap1, recap2, recap3, recap4, recap5, recap6, parentCheckbox, buttonsThird];
        
        if (nameInputIsCorrect === true && surnameInputIsCorrect === true && emailInputIsCorrect === true && numberInputIsCorrect === true) {

            move('forth', 'second', secondViewComponents, thirdViewComponents, secondStage, thirdStage);
            dispatch(setProgress(3));
        
        }
    
    }

    // MOVING BACK TO THE FIRST STAGE
    const moveBack = () => {

        const header = $(`#header`);

        const firstStage = $(`#first-stage`);
        const secondStage = $(`#second-stage`);

        // FIRST VIEW COMPONENTS        
        let doubleChoice = $(`#double-choice`);
        let formUpperPart = $(`#form-upper-part`);
        let formLowerPart = $(`#form-lower-part`);
        let buttonsFirst = $(`#buttons-first-stage`);
        let firstViewComponents = [header, doubleChoice, formUpperPart, formLowerPart, buttonsFirst];

        // SECOND VIEW COMPONENTS
        let topPart = $(`#top-part`);
        let nameParent = $(`#parent-name`);
        let surnameParent = $(`#parent-surname`);
        let emailParent = $(`#parent-email`);
        let parentPhoneInput = $(`#parent-phone-number`);
        let buttonsSecond = $(`#buttons-second-stage`);
        let secondViewComponents = [header, topPart, nameParent, surnameParent, emailParent, parentPhoneInput, buttonsSecond];
        
        move('back', 'second', secondViewComponents, firstViewComponents, secondStage, firstStage);
        dispatch(setProgress(1));

    }

  return (
    <>
    
        <MainParent id='second-stage' className={props.parentClass}>
        
            <TopPart id='top-part' className='invisible'>O Vás</TopPart>
            
            <TextInput 
                type="text" 
                minLenght={2}
                maxLenght={20} 
                defaultValue="Meno" 
                placeholder="Zadajte Vaše meno" 
                parentId="parent-name" 
                inputId="input-name" 
                placeholderId='input-name-placeholder' 
                className={`text-input ${nameInputIsCorrect === 'too-short' ? 'wrong' : ''}`} 
                parentClass="invisible" 
                name="name"
            />
            <TextInput 
                type="text"  
                defaultValue="Priezvisko" 
                placeholder="Zadajte Vaše priezvisko" 
                parentId="parent-surname" 
                inputId="input-surname" 
                placeholderId='input-surname-placeholder' 
                className={`text-input ${(surnameInputIsCorrect === 'too-short') || (surnameInputIsCorrect === 'empty') || (surnameInputIsCorrect === false) ? 'wrong' : ''}`}
                parentClass="invisible" 
                name="surname"
            />
            <TextInput 
                type="email"  
                defaultValue="Email" 
                placeholder="Zadajte Váš e-mail" 
                parentId="parent-email" 
                inputId="input-email" 
                placeholderId='input-email-placeholder' 
                className={`text-input ${emailInputIsCorrect === false ? 'wrong' : ''}`}
                parentClass="invisible" 
                name="email"
            />

            <PhoneNumberInput parentClass="invisible" />

            <ButtonsParent id='buttons-second-stage' className="invisible">

              <Button text='Späť' class='back' id='back-btn-second' onClick={ moveBack } />

              <Button text='Pokračovať' class={`forth ${nameInputIsCorrect === true && surnameInputIsCorrect === true && emailInputIsCorrect === true && numberInputIsCorrect === true ? 'active' : ''}`} id='forth-btn-second' onClick={ moveOn } />

            </ButtonsParent>

        </MainParent>

    </>
  )
}
