import React, { useState } from 'react';
import styled from 'styled-components';
// import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

// IMPORTING STYLESHEETS
import '../styles/animations.sass'

const MainParent = styled.div`

    width: 100%;

    &.show {
        animation: 1 .25s showAnimation;
        -webkit-animation: 1 .25s showAnimation;
        opacity: 1;
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

    &.show {
        animation: 1 .25s showAnimation;
        -webkit-animation: 1 .25s showAnimation;
        opacity: 1;
    }

`

export default function PhoneNumberInput(props) {

    const [value, setValue] = useState();

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
                        value={value}
                        onChange={setValue}
                    />

            <PhoneNumberTopText id='phone-number-top-text'>Telefónne číslo</PhoneNumberTopText>
                    
        </MainParent>
    
    </>
  )
}
