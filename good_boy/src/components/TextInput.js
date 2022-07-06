import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

// IMPORTING REDUX ACTIONS
import { updateSeconsStageHelper } from '../actions/SecondStage';
import { updateGeneralStateHelper } from '../actions/AllIsReady';

// IMPORT STYLESHEETS
import '../styles/classes.sass';
import '../styles/animations.sass';

// IMPORTING FUNCTIONS
import { realtimeValidate } from '../functions/realtimeValidation/inputIsCorrect';

const MainParent = styled.div`

    width: 100%;

    &.show {
        animation: 1 .25s showAnimation;
        -webkit-animation: 1 .25s showAnimation; 
        opacity: 1
    }

    &.hide {
        animation: 1 .25s leaveAnimation;
        -webkit-animation: 1 .25s leaveAnimation;
        opacity: 0;
    }
    
`

const Input = styled.input`

    padding: 35px 15px 15px 25px;
    width: 100%;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    background: #FFFFFF;
    border: 1px solid #DFDFDF;
    border-radius: 8px;
    outline: none;
    transition: .25s ease-in-out;
    color: #9F9F9F;

    &:hover {
        border: 1px solid #DFDFDF;
        outline: none;
    }

    &:focus {
        border: 1px solid #CD8B65;
        outline: none;
        transition: .25s ease-in-out;
        color: #2F2F2F;
    }

    /* &.show {
        animation: 1 .25s showAnimation;
        -webkit-animation: 1 .25s showAnimation;
        opacity: 1
    } */

    &.wrong {

        border: none;
        box-shadow: 5px 5px 10px 3px #E6B9B3,
                    -5px -5px 10px 3px #E6B9B3;

    }

`

const Placeholder = styled.p`

    transform: translateY(-60px) translateX(25px);
    padding: 0;
    margin: 0;
    font-weight: 800;
    font-size: 16px;
    line-height: 21px;
    color: #2F2F2F;

    /* &.show {
        animation: 1 .25s showAnimationPlaceholder;
        -webkit-animation: 1 .25s showAnimationPlaceholder;
        opacity: 1
    } */

`

export default function TextInput(props) {

    // SECOND STAGE REDUX STATES
    const name = useSelector(state => state.secondStage.name);
    const nameInputIsCorrect = useSelector(state => state.secondStage.nameInputIsCorrect);
    const surname = useSelector(state => state.secondStage.surname);
    const surnameInputIsCorrect = useSelector(state => state.secondStage.surnameInputIsCorrect);
    const email = useSelector(state => state.secondStage.email);
    const emailInputIsCorrect = useSelector(state => state.secondStage.emailInputIsCorrect);
    const number = useSelector(state => state.secondStage.number);
    const numberInputIsCorrect = useSelector(state => state.secondStage.numberInputIsCorrect);

    const firstStageIsReady = useSelector(state => state.firstStage.isReady);
    const thirdStageIsReady = useSelector(state => state.thirdStage.isReady);

    const handleChange = (e) => {

        let id = e.target.id;
        let value = e.target.value;

        let isCorrect = realtimeValidate(id, value);

        let isReady = false;

        switch (id) {
            case 'input-name':

                (typeof isCorrect === 'object') ? e.target.value = isCorrect['value'] : console.log();

                (isCorrect === true && surnameInputIsCorrect === true && emailInputIsCorrect === true && numberInputIsCorrect === true) ? isReady = true : isReady = false;

                if (value === '') {

                    value = '-'   
                
                }

                dispatch(updateSeconsStageHelper(value, isCorrect, surname, surnameInputIsCorrect, email, emailInputIsCorrect, number, numberInputIsCorrect, isReady))
                
                break
            
            case 'input-surname':

                (typeof isCorrect === 'object') ? e.target.value = isCorrect['value'] : console.log() ;

                (nameInputIsCorrect === true && isCorrect === true && emailInputIsCorrect === true && numberInputIsCorrect === true) ? isReady = true : isReady = false;
                
                dispatch(updateSeconsStageHelper(name, nameInputIsCorrect, value, isCorrect, email, emailInputIsCorrect, number, numberInputIsCorrect, isReady))
        
                break
            
            case 'input-email':
                
                (nameInputIsCorrect === true && surnameInputIsCorrect === true && isCorrect === true && numberInputIsCorrect === true) ? isReady = true : isReady = false;

                dispatch(updateSeconsStageHelper(name, nameInputIsCorrect, surname, surnameInputIsCorrect, value, isCorrect, number, numberInputIsCorrect, isReady))
                
                break
            
            default:
            
                break
        }

        let isAllReady = false;

        (firstStageIsReady === true && isReady === true && thirdStageIsReady === true) ? isAllReady = true : isAllReady = false;

        dispatch(updateGeneralStateHelper(isAllReady));

    }

    const dispatch = useDispatch()

  return (
    <MainParent id={props.parentId} className={props.parentClass}>

        <Input type={props.type} id={props.inputId} name={props.name} className={props.className} placeholder={props.placeholder} minLength={props.minLength} maxLength={props.maxLength} onChange={ handleChange } />

        <Placeholder id={props.placeholderId} className={props.className}>{props.defaultValue}</Placeholder>

    </MainParent>
  )
}
