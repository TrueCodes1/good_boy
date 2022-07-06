import React, { useEffect } from 'react';
import styled from 'styled-components';
import $ from 'jquery';
import { useSelector, useDispatch } from 'react-redux';

// IMPORTING REDUX ACTIONS
import { setProgress } from '../actions/Progress';

// IMPORTING FUNCTIONS
import { move } from '../functions/transitions/move';

// IMPORTING STYLESHEETS
import '../styles/animations.sass';
import '../styles/classes.sass';

// IMPORTING COMPONENTS
import DoubleChoice from './DoubleChoice';
import SheltersList from './SheltersList';
import ChoiceMoney from './ChoiceMoney';
import Button from './Button';

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

    const typeOfHelp = useSelector(state => state.firstStage.typeOfHelp)
    const shelter = useSelector(state => state.firstStage.shelter);
    const amount = useSelector(state => state.firstStage.amount);
    const isReady = useSelector(state => state.firstStage.isReady);

    // REDUX FUNCTION USED WHEN UPDATING ANY STATE OF THE APP
    const dispatch = useDispatch();

    // DECLARING ALL THE NECCESSARY VARIABLES FROM THE SPECIFIC STAGES
    const firstStage = $(`#first-stage`);
    const secondStage = $(`#second-stage`);

    const header = $(`#header`);
    
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

    // MOVING ON TO THE SECOND STAGE
    const moveOn = () => {
    
        if (
            (typeOfHelp === 'specific_shelter' && shelter !== '' && amount !== '') 
            || 
            (typeOfHelp === 'whole_organisation' && amount !== '')
        ){

            move('forth', 'first', firstViewComponents, secondViewComponents, firstStage, secondStage);
            dispatch(setProgress(2));
        
        }
    
    }

    // ALERTING THERE IS NO PREVIOUS STAGE BEFORE THE FIRST ONE
    const moveBack = () => {

        alert('Práve sa nachádzate na prvej časti dotazníka.')

    }

    useEffect(() => {
        
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

                        <UpperPartTopSideText>{` ${ typeOfHelp === 'specific_shelter' ? 'Povinné' : 'Nepovinné' } `}</UpperPartTopSideText>

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

              <Button text='Späť' class='back hidden' id='back-btn-first' oncClick={ moveBack } />

              <Button text='Pokračovať' class={`forth ${isReady === true ? 'active' : ''}`} id='forth-btn-first' onClick={ moveOn } />

            </ButtonsParent>

        </MainParent>
    
    </>
  )
}
