import React, { useEffect } from 'react'
import styled from 'styled-components';
import $ from 'jquery';

// IMPORTING COMPONENTS
import RecapElement from './RecapElement';

// IMPORTING ASSESTS
import tick from '../assets/tick.svg';

// IMPORTING STYLESHEETS
import '../styles/classes.sass';
import '../styles/animations.sass';

const MainParent = styled.div`

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    width: 100%;
    min-height: 500px;
    max-height: 500px;

    &.hidden {
        display: none;
    }

`

const CheckboxParent = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

`

const CheckboxInput = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #F3E2D9;
    border-radius: 8px;
    min-width: 34px;
    max-width: 34px;
    min-height: 34px;
    max-height: 34px;
    cursor: pointer;

`

const TickImg = styled.img`

    min-width: 20px;
    max-width: 20px;
    min-height: 20px;
    max-height: 20px;
    opacity: 0;
    transition: .1s ease-in-out;

    &.checked {
        opacity: 1;
        transition: .1s ease-in-out;
    }

`

const CheckboxLabel = styled.p`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    color: #2F2F2F;
    margin-left: 20px;

`

export default function ThirdStage(props) {

  return (
    <>
    
        <MainParent id='third-stage' className={props.parentClass}>

            <RecapElement parentId="recap-1" parentClass="invisible" heading="Akou formou chcem pomôcť" info="Chcem finančne prispieť celej nadácii" />
            <RecapElement parentId="recap-2" parentClass="invisible" heading="Najviac mi záleží na útulku" info="Mestský útulok, Žilina" />
            <RecapElement parentId="recap-3" parentClass="invisible" heading="Suma ktorou chcem pomôcť" info="50 €" />
            <RecapElement parentId="recap-4" parentClass="invisible" heading="Meno a priezvisko" info="Norbert Sviatko" />
            <RecapElement parentId="recap-5" parentClass="invisible" heading="E-mailová adresa" info="truecodes.dev@gmail.com" />
            <RecapElement parentId="recap-6" parentClass="invisible" heading="Telefónne číslo" info="+421 907 337 618" />

            <CheckboxParent id='parent-checkbox' className="invisible">

                <CheckboxInput id="checkbox-input"  onClick={ () => { $(`#checkbox-tick`).hasClass('checked') ? $(`#checkbox-tick`).removeClass('checked') : $(`#checkbox-tick`).addClass('checked') } }>

                    <TickImg src={tick} id="checkbox-tick" />

                </CheckboxInput>

                <CheckboxLabel>Súhlasím so spracovaním mojich osobných údajov</CheckboxLabel>

            </CheckboxParent>

        </MainParent>
    
    </>
  )
}
