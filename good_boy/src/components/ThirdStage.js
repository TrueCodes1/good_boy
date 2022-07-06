import React from 'react'
import styled from 'styled-components';
import $ from 'jquery';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

// IMPORTING REDUX ACTIONS
import { setProgress } from '../actions/Progress';
import { updateThirdStageHelper } from '../actions/ThirdStage';
import { updateGeneralStateHelper } from '../actions/AllIsReady';

// IMPORTING COMPONENTS
import RecapElement from './RecapElement';
import Button from './Button';

// IMPORTING ASSESTS
import tick from '../assets/tick.svg';

// IMPORTING STYLESHEETS
import '../styles/classes.sass';
import '../styles/animations.sass';

// IMPORTING FUNCTIONS
import { move } from '../functions/transitions/move';

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

    // FIRST STAGE REDUX STATES
    const typeOfHelp = useSelector(state => state.firstStage.typeOfHelp);
    const shelter = useSelector(state => state.firstStage.shelter);
    const shelterID = useSelector(state => state.firstStage.shelterID);
    const amount = useSelector(state => state.firstStage.amount);
    const firstStageIsReady = useSelector(state => state.firstStage.isReady);

    // SECOND STAGE REDUX STATES
    const name = useSelector(state => state.secondStage.name);
    const surname = useSelector(state => state.secondStage.surname);
    const email = useSelector(state => state.secondStage.email);
    const number = useSelector(state => state.secondStage.number);
    const secondStageIsReady = useSelector(state => state.secondStage.isReady);

    // GENERAL STATE OF ALL THE STAGES TOGETHER
    const allIsReady = useSelector(state => state.generalState.allIsReady);

    const dispatch = useDispatch();

    // FUNCTIONS THAT SENDS THE STAGES WITH ITS DATA TO EXTERNAL VALIDATION
    // FUNCTION AND IN CASE WHEN ALL THE DATA IS VALIDATED, MAKES THE POST
    // REQUEST TO THE FINAL ENDPOINT
    const checkAndGo = () => {

        if (allIsReady === true) {

            let body = {
                            
                "firstName": name,
                "lastName": surname,
                "email": email,
                "phone": number,
                "value": amount,
                "shelterID": shelterID

            }

            axios.post('https://frontend-assignment-api.goodrequest.dev/api/v1/shelters/contribute', body)
            .then(res => {

                console.log(res)

                res = res.data.messages[0];
                let type = res.type;
                let message = res.message;

                if (type === 'SUCCESS') {

                    alert(message);

                    // IN CASE THE REQUEST WAS SUCCESSFUL WITH STATUS 200 WE ARE
                    // RETURNING THE USER BACK TO THE BEGINNING WITH THE WHOLE REDUX STATE RESET
                    window.location.reload()

                } 

            })
            .catch((err) => {

                console.log(err)

                // IN CASE OF BAD REQUEST, THE USER IS SHOWN MESSAGE ABOUT THE NON-EXISTING SHELTER
                alert(err.response.data.messages[0].message)

            })

        }

    }

    // MOVING BACK TO THE SECOND STAGE
    const moveBack = () => {

        const header = $(`#header`);

        const secondStage = $(`#second-stage`);
        const thirdStage = $(`#third-stage`);

        // SECOND VIEW COMPONENTS
        let topPart = $(`#top-part`);
        let nameParent = $(`#parent-name`);
        let surnameParent = $(`#parent-surname`);
        let emailParent = $(`#parent-email`);
        let parentPhoneInput = $(`#parent-phone-number`);
        let buttonsSecond = $(`#buttons-second-stage`);
        let secondViewComponents = [header, topPart, nameParent, surnameParent, emailParent, parentPhoneInput, buttonsSecond];
        
        // THIRD VIEW COMPONENTS
        let recap1 = $(`#recap-1`);
        let recap2 = $(`#recap-2`);
        let recap3 = $(`#recap-3`);
        let recap4 = $(`#recap-4`);
        let recap5 = $(`#recap-5`);
        let recap6 = $(`#recap-6`);
        let parentCheckbox = $(`#parent-checkbox`);
        let buttonsThird = $(`#buttons-third-stage`);
        let thirdViewComponents = [header, recap1, recap2, recap3, recap4, recap5, recap6, parentCheckbox, buttonsThird];

        move('back', 'third', thirdViewComponents, secondViewComponents, thirdStage, secondStage);
        dispatch(setProgress(2));

    }

  return (
    <>
    
        <MainParent id='third-stage' className={props.parentClass}>

            <RecapElement parentId="recap-1" parentClass="invisible" heading="Akou formou chcem pomôcť" info={`${ typeOfHelp === 'specific_shelter' ? 'Chcem finančne prispieť danému útulku' : 'Chcem finančne prispieť celej nadácii'}`} />
            <RecapElement parentId="recap-2" parentClass="invisible" heading="Najviac mi záleží na útulku" info={ shelter } />
            <RecapElement parentId="recap-3" parentClass="invisible" heading="Suma ktorou chcem pomôcť" info={`${ amount } €`} />
            <RecapElement parentId="recap-4" parentClass="invisible" heading="Meno a priezvisko" info={`${ name } ${ surname }`} />
            <RecapElement parentId="recap-5" parentClass="invisible" heading="E-mailová adresa" info={ email } />
            <RecapElement parentId="recap-6" parentClass="invisible" heading="Telefónne číslo" info={ number } />

            <CheckboxParent id='parent-checkbox' className="invisible">

                <CheckboxInput id="checkbox-input"  onClick={ () => { 

                        if ($(`#checkbox-tick`).hasClass('checked')) {
                        
                            $(`#checkbox-tick`).removeClass('checked');
                            dispatch(updateThirdStageHelper(false, false));

                            dispatch(updateGeneralStateHelper(false));
                        
                        } else { 
                        
                            $(`#checkbox-tick`).addClass('checked');
                            dispatch(updateThirdStageHelper(true, true));
                        
                            let isReady = false;

                            (firstStageIsReady === true && secondStageIsReady === true) ? isReady = true : isReady = false;

                            dispatch(updateGeneralStateHelper(isReady));
                        } 

                    } }>

                    <TickImg src={tick} id="checkbox-tick" />

                </CheckboxInput>

                <CheckboxLabel>Súhlasím so spracovaním mojich osobných údajov</CheckboxLabel>

            </CheckboxParent>

            <ButtonsParent id='buttons-third-stage' className='invisible'>

              <Button text='Späť' class='back' id='back-btn-third' onClick={ moveBack } />

              <Button text='Odoslať formulár' class={`forth ${ allIsReady === true ? 'active' : ''}`} id='forth-btn-third' onClick={ checkAndGo } />

            </ButtonsParent>

        </MainParent>
    
    </>
  )
}
