import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import $ from 'jquery';
import { useSelector, useDispatch } from 'react-redux';

// IMPORTING REDUX ACTIONS
import { fetchShelters } from '../actions/Shelters';
import { moveForth, moveBackward, setProgress } from '../actions/Progress';

// IMPORTING STYLESHEETS
import '../styles/animations.sass';
import '../styles/classes.sass';

// IMPORTING COMPONENTS
import DoubleChoice from './DoubleChoice';
import SheltersList from './SheltersList';
import ChoiceMoney from './ChoiceMoney';
import Button from './Button';

// IMPORTING JSONS
import Headers from '../jsons/headers.json';

// BUGS TO FIX:

// - MAKE PLACEHOLDER IN SELECT INPUT BEHAVE CORRECTLY WHEN DROPDOWN OPENED,
// SO THAT THE TO PART MOVES TO THE GAP ABOVE AND BOTTOM PART DISAPPEARS

// - FIX THE COLOR OF BORDER AT THE SINGLE CHOICES AT THE TOP WHEN ITEM
// ACTIVE (DETAIL)
    

const MainParent = styled.div`

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    min-height: 600px;
    max-height: 600px;

    &.hidden {
        display: none;
    }

`

// const leaveAnimation = keyframes`

//     0% {
//         transform: translateX(0);
//         opacity: 1;
//     }
//     80% {
//         opacity: 0;
//     }
//     100% {
//         transform: scale(1.05);
//         opacity: 0;
//     }

// `

const FormPart = styled.div`

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;

`

const FormUpperPart = styled.div`

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    width: 100%;
    height: 100%;

    &.hide {
        animation: 1 .25s leaveAnimation;
        -webkit-animation: 1 .25s leaveAnimation;
        opacity: 0;
    }

`

const UpperPartTop = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    &.single {

        justify-content: flex-start;

    }

`

const UpperPartTopMainText = styled.p`

    font-weight: 800;
    font-size: 16px;
    color: #2F2F2F;

`

const UpperPartTopSideText = styled.p`

    font-weight: 800;
    font-size: 14px;
    color: #2F2F2F;
    opacity: .8;

`

const FormLowerPart = styled.div`

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    height: 100%;
    box-sizing: border-box;

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

  &.single {

    justify-content: flex-end;

  }

`

export default function FirstStage(props) {

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
    
        const backBtn = $(`#back-btn-first`);
        const forthBtn = $(`#forth-btn-first`);
    
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
    
        /********************************* */
        //
        //           FUNCTIONS
        //
        /********************************* */

        const moveOnFirst = () => {

            if (typeOfHelp !== '' && shelter !== '' && amount !== '') {

                // MOVING FROM THE FIRST VIEW TO THE SECOND VIEW
        
                let timeout = 0;
        
                // EACH OF THE COMPONENTS OF THE FIRST VIEW IS 
                // ASSIGNED A TIMEOUT WHEN THERE WILL BE CLASS "HIDE"
                // APPENDED TO IT. 
                firstViewComponents.forEach(component => {

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

                    $(firstStage).addClass('hidden');
        
                    firstViewComponents.forEach(component => {
        
                        $(component).removeClass('hide');
                        $(component).addClass('invisible');
        
                    })

                }, timeout + 250)

                setTimeout(() => {

                    // THE TIMEOUT VARIABLE IS RESET TO 0
                    timeout = 0;
        
                    // CHANGING THE TEXT OF THE HEADER FOR THE SECOND STAGE
                    $(header).html(`${Headers.second}`)
                    
                    $(secondStage).removeClass('hidden');
        
                    secondViewComponents.forEach(component => {
        
                        setTimeout(() => {
        
                        $(component).addClass('show');
            
                        }, timeout)
            
                        // FOR EACH OF THE COMPONENTS, THE TIME WHEN
                        // THE CLASS WILL BE APPENDED IS PLUS 0.1 SEC. 
                        timeout += 100;
            
                    })

                }, timeout + 200)

                currentView = 'second';
                dispatch(setProgress(2))

            }

        }
      
        const moveBackFirst = () => {
                
            alert('There is nowhere else to move backward.')
        
        }
    
        /********************************** */
        //
        //         EVENT LISTENERS
        //
        /********************************** */
    
        $(backBtn).on('click', moveBackFirst);
    
        $(forthBtn).on('click', moveOnFirst);
    
        // THE TWO CHOCIES AT THE TOP WHERE CUSTOMER DECIDES WHAT TYPE OF FINANCIAL
        // HELP THEY WANT TO OFFER
        let singleChoicesTop = document.getElementsByClassName(`single-choice-top`);

        // ALL THE DEFAULT OPTIONS OF AMOUNT OF MONEY TO DONATE
        let singleChoicesMoney = document.getElementsByClassName(`single-choice-money`);
        // THE "OWN CHOICE" PARENT DIV
        let ownChoiceMoney = $(`#own-choice-money`);

        // ****************************

        //          FUNCTIONS         

        //*****************************

        const toggleActiveClassOnTopChoices = e => {

            let id = e.currentTarget.id;

            // EACH OF THE CHOICES IS REMOVED THE CLASS "ACTIVE"
            Object.values(singleChoicesTop).forEach(elem => {

                $(elem).removeClass('active');

            })

            // FINALLY, THE CLICKED ELEMENT IS APPENDED THE CLASS "ACTIVE"
            $(`#${id}`).addClass('active');

        }

        // FUNCTION THAT EMPHESIZES THE CURRENTLY CLICKED OPTION FROM 
        // AMOUNT OF MONEY CHOICES, OR IF THE "OWN CHOICE" IS CLICKED, 
        // IT THE INPUT FOCUSES
        const toggleActiveClassOnMoney = e => {

            // GETTING ID OF THE CLICKED ELEMENT
            let id = e.currentTarget.id;

            // EACH OF THE CHOICES IS REMOVED THE CLASS "ACTIVE"
            Object.values(singleChoicesMoney).forEach(elem => {

                $(elem).removeClass('active');

            })
            // AS WELL AD THE OWN CHOICE IS REMOVE THE CLASS "ACTIVE"
            $(ownChoiceMoney).removeClass('active');

            // FINALLY, THE CLICKED ELEMENT IS APPENDED THE CLASS "ACTIVE"
            $(`#${id}`).addClass('active');

            // IN CASE THE ID IS THE ONE OF THE "OWN CHOICE", THE INPUT FOCUSES
            id === 'own-choice-money' ? $(`#own-choice-money-input`).focus() :  $(`#own-choice-money-input`).unfocus();

        }


        // ****************************

        //       EVENT LISTENERS         

        //*****************************

        // EACH OF THE ELEMTENTS IN THE CHOICES IS "ON CLICK" ADDED THE
        // FUNCTION "TOGGLE ACTIVE CLASS ON TOP CHOICES"
        Object.values(singleChoicesTop).forEach(elem => {

            $(elem).on('click', toggleActiveClassOnTopChoices)

        })

        // EACH OF THE ELEMTENTS IN THE CHOICES IS "ON CLICK" ADDED THE
        // FUNCTION "TOGGLE ACTIVE CLASS"
        Object.values(singleChoicesMoney).forEach(elem => {

            $(elem).on('click', toggleActiveClassOnMoney)

        })

        // ALSO, THE "OWN CHOICE" IS "ON CLICK" ADDED THIS FUNCTION 
        // "TOGGLE ACTIVE CLASS" 
        $(ownChoiceMoney).on('click', toggleActiveClassOnMoney);

    })

  return (
    <>
    
        <MainParent id='first-stage' className={props.parentClass}>

            <DoubleChoice />

            <FormPart>

                <FormUpperPart id='form-upper-part' > 

                    <UpperPartTop>

                        <UpperPartTopMainText>O projekte</UpperPartTopMainText>

                        <UpperPartTopSideText>Nepovinné</UpperPartTopSideText>

                    </UpperPartTop>

                    <SheltersList />

                </FormUpperPart>

                <FormLowerPart id='form-lower-part' >

                    <UpperPartTop className='single'>

                        <UpperPartTopMainText>Suma, ktorou chcem prispieť</UpperPartTopMainText>

                    </UpperPartTop>

                    <ChoiceMoney />

                </FormLowerPart>

            </FormPart>

            <ButtonsParent id='buttons-first-stage' className='single'>

              <Button text='Späť' class='back hidden' id='back-btn-first' />

              <Button text='Pokračovať' class={`forth ${typeOfHelp !== '' && shelter !== '' && amount !== '' ? 'active' : ''}`} id='forth-btn-first' />

            </ButtonsParent>

        </MainParent>
    
    </>
  )
}
