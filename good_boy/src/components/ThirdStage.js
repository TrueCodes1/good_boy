import React, { useEffect } from 'react'
import styled from 'styled-components';
import $ from 'jquery';
import { useSelector, useDispatch } from 'react-redux';

// IMPORTING REDUX ACTIONS
import { moveForth, moveBackward, setProgress } from '../actions/Progress';

// IMPORTING COMPONENTS
import RecapElement from './RecapElement';
import Button from './Button';

// IMPORTING ASSESTS
import tick from '../assets/tick.svg';

// IMPORTING STYLESHEETS
import '../styles/classes.sass';
import '../styles/animations.sass';

// IMPORTING JSONS
import Headers from '../jsons/headers.json';

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

const ButtonsParent = styled.div`

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  transform: translateY(60px);

  &.single {

    justify-content: flex-end;

  }

`

export default function ThirdStage(props) {

    const progress = useSelector(state => state.progress);

    const typeOfHelp = useSelector(state => state.firstStage.typeOfHelp)
    const shelter = useSelector(state => state.firstStage.shelter);
    const amount = useSelector(state => state.firstStage.amount);

    const dispatch = useDispatch();

    useEffect(() => {
        
        const firstStage = $(`#first-stage`);
        const secondStage = $(`#second-stage`);
        const thirdStage = $(`#third-stage`);
    
        const header = $(`#header`);
    
        const backBtnThird = $(`#back-btn-third`);
        const forthBtn = $(`#forth-btn-third`);
    
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
    
        const moveOnThird = () => {

            alert('Checking and sending')

        }
      
        const moveBackThird = () => {

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
            dispatch(setProgress(2))
            
        }
    
        /********************************** */
        //
        //         EVENT LISTENERS
        //
        /********************************** */
    
        $(backBtnThird).on('click', moveBackThird);
    
        $(forthBtn).on('click', moveOnThird);
    
    })

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

            <ButtonsParent id='buttons-third-stage' className='invisible'>

              <Button text='Späť' class='back' id='back-btn-third' />

              <Button text='Pokračovať' class={`forth ${typeOfHelp !== '' && shelter !== '' && amount !== '' ? 'active' : ''}`} id='forth-btn-third' />

            </ButtonsParent>

        </MainParent>
    
    </>
  )
}
