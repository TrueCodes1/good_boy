import React from 'react';
import styled from 'styled-components';
import $ from 'jquery';
import { useSelector, useDispatch } from 'react-redux';

// IMPORTING REDUX ACTIONS
import { updateFirstStageHelper } from '../actions/FirstStage';
import { updateGeneralStateHelper } from '../actions/AllIsReady';

// IMPORTING FUNCTIONS
import { checker } from '../functions/amountChecker';

// IMPORTING STYLESHEETS
import '../styles/classes.sass';
import '../styles/animations.sass';

const ChoicesMoney = styled.div`

    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: stretch;

`

const SingleChoiceMoney = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #DFDFDF;
    padding: 15px;
    border-radius: 10px;
    font-weight: 800;
    font-size: 16px;
    color: #2f2f2f;
    margin: 0 3.5px;
    cursor: pointer;
    transition: .25s ease;
    user-select: none;

    &:first-child {
        margin: 0 3.5px 0 0;
    }

    &.active {
        transition: .25s ease;
        background: linear-gradient(115.41deg, #CD8A64 -1.77%, #C4794F 73.03%);
        color: #FFFFFF;
        border: 2px solid #CD8A64;
    }

`

const OwnChoiceMoney = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #DFDFDF;
    padding: 15px;
    border-radius: 10px;
    font-family: 'Public Sans';
    font-weight: 800;
    font-size: 16px;
    color: #2F2F2F;
    margin: 0 3.5px;
    transition: .25s ease;
    user-select: none;
    cursor: pointer;

    &.active {
        transition: .25s ease;
        background: linear-gradient(115.41deg, #CD8A64 -1.77%, #C4794F 73.03%);
        color: #FFFFFF;
        border: 2px solid #CD8A64;
    }

    &.active > input {
        border-bottom: 1px solid #fff;
        color: #fff;
    }

`

const OwnChoiceInput = styled.input`

    &:hover,
    &:focus,
    &:active,
    &:visited{
        border-bottom: 1px solid #C9C9C9;
        outline: none;
        background: transparent;
    }

    border: none;
    outline: none;
    border-bottom: 1px solid #C9C9C9;
    min-width: 33px;
    max-width: 33px;
    padding: 5px;
    font-family: 'Public Sans';
    font-weight: 800;
    font-size: 16px;
    color: #2F2F2F;
    background: transparent;
    margin-right: 5px;

`

export default function ChoiceMoney() {
    
    // FIRST STAGE REDUX STATES
    const typeOfHelp = useSelector(state => state.firstStage.typeOfHelp)
    const shelter = useSelector(state => state.firstStage.shelter);
    const shelterID = useSelector(state => state.firstStage.shelterID);

    // REDUX STATES OF THE SECOND AND THE THIRD STAGE WHICH TELL WHETHER THE SPECIFIC
    // STAGE IS READY TO BE PROCESSED
    const secondStageIsReady = useSelector(state => state.secondStage.isReady);
    const thirdStageIsReady = useSelector(state => state.thirdStage.isReady);

    // REDUX FUNCTION USED WHEN UPDATING ANY STATE OF THE APP
    const dispatch = useDispatch();

    // FUNCTION HANDLING EVENT WHEN THE AMOUNT OF MONEY IS CHOSEN
    // FROM PREPARED CHOICES
    const handleChange = (e) => {

        let value = e.target.id;
        value = value.substring(0, value.indexOf('-'))

        let isReady = false;
        (typeOfHelp === 'specific_shelter' && shelter !== '' && shelterID !== '' && value !== '') || (typeOfHelp === 'whole_organisation' && value !== '') ? isReady = true : isReady = false;

        dispatch(updateFirstStageHelper(typeOfHelp, shelter, shelterID, value, isReady))

        let isAllReady = false;

        (isReady === true && secondStageIsReady === true && thirdStageIsReady === true) ? isAllReady = true : isAllReady = false;

        dispatch(updateGeneralStateHelper(isAllReady))

    }
    
    // FUNCTION HANDLING EVENT WHEN THE AMOUNT OF MONEY IS CHOSEN
    // INDIVIDUALLY IN THE INPUT FIELD
    const handleChangeInput = (e) => {

        let value = e.target.value;

        let checked = checker(value);

        e.target.value = checked.validated;

        if (checked.isOfSomeValue === true) {

            let isReady = false;
            (typeOfHelp === 'specific_shelter' && shelter !== '' && shelterID !== '' && checked.validated !== '') || (typeOfHelp === 'whole_organisation' && checked.validated !== '') ? isReady = true : isReady = false;
    
            dispatch(updateFirstStageHelper(typeOfHelp, shelter, shelterID, checked.validated, isReady))

            let isAllReady = false;

            (isReady === true && secondStageIsReady === true && thirdStageIsReady === true) ? isAllReady = true : isAllReady = false;
    
            dispatch(updateGeneralStateHelper(isAllReady))

        } else {

            dispatch(updateFirstStageHelper(typeOfHelp, shelter, shelterID, '', false))
            
            dispatch(updateGeneralStateHelper(false))

        }

    }

  return (
    <>
    
        <ChoicesMoney>

            <SingleChoiceMoney className='single-choice-money' id='5-eur' onClick={handleChange}>5 €</SingleChoiceMoney>
            <SingleChoiceMoney className='single-choice-money' id='10-eur' onClick={handleChange}>10 €</SingleChoiceMoney>
            <SingleChoiceMoney className='single-choice-money' id='20-eur' onClick={handleChange}>20 €</SingleChoiceMoney>
            <SingleChoiceMoney className='single-choice-money' id='30-eur' onClick={handleChange}>30 €</SingleChoiceMoney>
            <SingleChoiceMoney className='single-choice-money' id='50-eur' onClick={handleChange}>50 €</SingleChoiceMoney>
            <SingleChoiceMoney className='single-choice-money' id='100-eur' onClick={handleChange}>100 €</SingleChoiceMoney>

            <OwnChoiceMoney id="own-choice-money">

                <OwnChoiceInput type="text" id="own-choice-money-input" onChange={handleChangeInput} onFocus={handleChangeInput}/>

                €

            </OwnChoiceMoney>

        </ChoicesMoney>

    </>
  )
}
