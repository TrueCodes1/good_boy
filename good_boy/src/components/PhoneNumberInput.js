import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import $ from 'jquery';
// import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { useSelector, useDispatch } from 'react-redux';

// IMPORTING REDUX ACTIONS
import { updateSeconsStageHelper } from '../actions/SecondStage';

// IMPORTING STYLESHEETS
import '../styles/animations.sass'
import'../styles/phone_input.sass';

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

    const name = useSelector(state => state.secondStage.name);
    const surname = useSelector(state => state.secondStage.surname);
    const email = useSelector(state => state.secondStage.email);
    const number = useSelector(state => state.secondStage.number);

    const handleChange = (e) => {

        if (e !== undefined) {

            setValue()

            let isReady = false;

            if (name!=='' && surname!=='' && email!=='' && e!=='') {
                isReady = true;
            }

            dispatch(updateSeconsStageHelper(name, surname, email, e, isReady))

        }

    }

    const dispatch = useDispatch();

  return (
    <>
    
        <MainParent id='parent-phone-number' className={props.parentClass}>
            
            <PhoneInput
                        id="phone-input"
                        placeholder="Zadajte Vaše telefónne číslo"
                        defaultCountry="SK"
                        className='active'
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
