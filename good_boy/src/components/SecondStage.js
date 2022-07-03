import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import $ from 'jquery';

import PhoneInput from 'react-phone-number-input';

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

`


export default function SecondStage(props) {

    const [value, setValue] = useState();

  return (
    <>
    
        <MainParent id='second-stage' className={props.parentClass}>
        
            <TopPart id='top-part' className='invisible'>O Vás</TopPart>
            
            <TextInput type="text" defaultValue="Meno" placeholder="Zadajte Vaše meno" parentId="parent-name" inputId="input-name" placeholderId='input-name-placeholder' className="text-input" parentClass="invisible" name="name"/>
            <TextInput type="text" defaultValue="Priezvisko" placeholder="Zadajte Vaše priezvisko" parentId="parent-surname" inputId="input-surname" placeholderId='input-surname-placeholder' className="text-input" parentClass="invisible" name="surname"/>
            <TextInput type="email" defaultValue="Email" placeholder="Zadajte Váš e-mail" parentId="parent-email" inputId="input-email" placeholderId='input-email-placeholder' className="text-input" parentClass="invisible" name="email"/>

            <PhoneNumberInput parentClass="invisible" />

        </MainParent>

    </>
  )
}
