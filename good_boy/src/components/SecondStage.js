import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import $ from 'jquery';
// import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import'../styles/form.sass';

//********************************** */

// "VALIDATOR" IS WHAT WILL BE USED TO VALIDATE EMAIL ADDRESS
// import validator from 'validator';
// validator.isEmail('')

//********************************** */

// IMPORTING COMPONENTS
import TextInput from './TextInput';

const MainParent = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    font-family: 'Public Sans';

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

export default function SecondStage() {

    const [value, setValue] = useState();

  return (
    <>
    
        <MainParent>
        
            <TopPart>O Vás</TopPart>
            
            <TextInput type="text" defaultValue="Meno" placeholder="Zadajte Vaše meno" id="input-name" class="text-input" name="name"/>
            <TextInput type="text" defaultValue="Priezvisko" placeholder="Zadajte Vaše priezvisko" id="input-surname" class="text-input" name="surname"/>
            <TextInput type="email" defaultValue="Email" placeholder="Zadajte Váš e-mail" id="input-email" class="text-input" name="email"/>

            <PhoneInput
                placeholder="Zadajte Vaše telefónne číslo"
                defaultCountry="SK"
                className='active'
                international
                countrySelectProps={{ unicodeFlags: true }}
                value={value}
                onChange={setValue}
            />
            <PhoneNumberTopText>Telefónne číslo</PhoneNumberTopText>
            
        </MainParent>

    </>
  )
}
