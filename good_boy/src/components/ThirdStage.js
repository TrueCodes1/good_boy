import React, { useEffect } from 'react'
import styled from 'styled-components';
import $ from 'jquery';

// IMPORTING COMPONENTS
import RecapElement from './RecapElement';

// IMPORTING ASSEST
import tick from '../assets/tick.svg';

const MainParent = styled.div`

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    width: 100%;

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

export default function ThirdStage() {

    useEffect(() => {

        // THE "CHECKBOX INPUT" STYLED COMPONENT THAT HOLDS THE TICK IMAGE
        const checkboxParent = $(`#checkbox-input`);
        // THE TICK IMAGE ITSELF
        const checkboxTick = $(`#ckeckbox-tick`);

        //******************************* */
        //
        //          FUNCTIONS
        //
        //******************************* */

        // FUNCTION, THAT LISTENS TO CLICK EVENT ON THE INTPUT CHECKBOX ELEMENT
        const checkCheckbox = () => {
            
            // IF THERE IS A CLASS "CHECKED" WITHIN THE TICK IMAGE CLASSLIST
            // IT IS REMOVED AND THIS CAUSES THE CSS TO HIDE THE TICK BY 
            // SETTING ITS OPACITY TO 0
            if ($(checkboxTick).hasClass('checked')) {

                $(checkboxTick).removeClass('checked');

            // ELSEWAY, IT IS ADDED TO THE CLASSLIST, THIS CAUSES THE CSS
            // TO SHOW THE TICK WITH OPACITY 1
            } else {

                $(checkboxTick).addClass('checked');

            } 

        }

        //******************************* */
        //
        //       EVENT LISTENERS
        //
        //******************************* */

        // THE DIV THAT HOLDS THE TICK IMAGE IS APPENDED THE EVENT LISTENER FOR CLICK
        $(checkboxParent).on('click', checkCheckbox);

    })

  return (
    <>
    
        <MainParent>

            <RecapElement heading="Akou formou chcem pomôcť" info="Chcem finančne prispieť celej nadácii" />
            <RecapElement heading="Najviac mi záleží na útulku" info="Mestský útulok, Žilina" />
            <RecapElement heading="Suma ktorou chcem pomôcť" info="50 €" />
            <RecapElement heading="Meno a priezvisko" info="Norbert Sviatko" />
            <RecapElement heading="E-mailová adresa" info="truecodes.dev@gmail.com" />
            <RecapElement heading="Telefónne číslo" info="+421 907 337 618" />

            <CheckboxParent>

                <CheckboxInput id="checkbox-input">

                    <TickImg src={tick} id="ckeckbox-tick" />

                </CheckboxInput>

                <CheckboxLabel>Súhlasím so spracovaním mojich osobných údajov</CheckboxLabel>

            </CheckboxParent>

        </MainParent>
    
    </>
  )
}
