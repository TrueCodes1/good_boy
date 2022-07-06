import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import $ from 'jquery';
// import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { useSelector, useDispatch } from 'react-redux';

// IMPORTING REDUX ACTIONS
import { updateSeconsStageHelper } from '../actions/SecondStage';
import { updateGeneralStateHelper } from '../actions/AllIsReady';

// IMPORTING STYLESHEETS
import '../styles/animations.sass'
import'../styles/phone_input.sass';

// IMPORTING FUNCTIONS
import { realtimeValidate } from '../functions/realtimeValidation/inputIsCorrect';

const MainParent = styled.div`

    width: 100%;

    &.show {
        animation: 1 .25s showAnimation;
        -webkit-animation: 1 .25s showAnimation;
        opacity: 1;
    }

    &.hide {
        animation: 1 .25s leaveAnimation;
        -webkit-animation: 1 .25s leaveAnimation;
        opacity: 0;
    }

`

const PhoneNumberTopText = styled.p`

    margin: 0;
    padding: 0;
    font-weight: 800;
    font-size: 16px;
    line-height: 21px;
    color: #2F2F2F;
    transform: translateY(-65px) translateX(25px);

`

export default function PhoneNumberInput(props) {

    const [value, setValue] = useState();

    // SECOND STAGE REDUX STATES
    const name = useSelector(state => state.secondStage.name);
    const nameInputIsCorrect = useSelector(state => state.secondStage.nameInputIsCorrect);
    const surname = useSelector(state => state.secondStage.surname);
    const surnameInputIsCorrect = useSelector(state => state.secondStage.surnameInputIsCorrect);
    const email = useSelector(state => state.secondStage.email);
    const emailInputIsCorrect = useSelector(state => state.secondStage.emailInputIsCorrect);
    const numberInputIsCorrect = useSelector(state => state.secondStage.numberInputIsCorrect);

    // REDUX STATES TELLING ABOUT EACH OF THE STAGES IF IT IS READY
    const firstStageIsReady = useSelector(state => state.firstStage.isReady);
    const secondStageIsReady = useSelector(state => state.secondStage.isReady);
    const thirdStageIsReady = useSelector(state => state.thirdStage.isReady);

    const handleChange = (e) => {

        if (e !== undefined) {

            setValue()

            let isCorrect = realtimeValidate('phone-input', e);

            let isReady = false;

            (nameInputIsCorrect===true && surnameInputIsCorrect===true && emailInputIsCorrect===true && isCorrect===true) ? isReady = true : isReady = false;

            dispatch(updateSeconsStageHelper(name, nameInputIsCorrect, surname, surnameInputIsCorrect, email, emailInputIsCorrect, e, isCorrect, isReady))

        } else {

            dispatch(updateSeconsStageHelper(name, nameInputIsCorrect, surname, surnameInputIsCorrect, email, emailInputIsCorrect, '', false, false))

        }

        let isReady = false;

        (firstStageIsReady === true && secondStageIsReady === true && thirdStageIsReady === true) ? isReady = true : isReady = false;

        dispatch(updateGeneralStateHelper(isReady));

    }

    // REDUX DISPATCH FUNCTION USED TO UPDATE ANY STATE OF THE APP
    const dispatch = useDispatch();

  return (
    <>
    
        <MainParent id='parent-phone-number' className={props.parentClass}>
            
            <PhoneInput
                        id="phone-input"
                        placeholder="Zadajte Vaše telefónne číslo"
                        defaultCountry='SK'
                        className={`active ${ numberInputIsCorrect === false  ? 'wrong' : ''}`}
                        international
                        countrySelectProps={{ unicodeFlags: true }}
                        value={ value }
                        onChange={ handleChange }
                    />

            <PhoneNumberTopText id='phone-number-top-text'>Telefónne číslo</PhoneNumberTopText>
                    
        </MainParent>
    
    </>
  )
}
