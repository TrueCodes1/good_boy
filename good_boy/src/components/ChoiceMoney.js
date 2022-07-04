import React from 'react';
import styled from 'styled-components';
import $ from 'jquery';
import { useSelector, useDispatch } from 'react-redux';

// IMPORTING REDUX ACTIONS
import { updateFirstStageHelper } from '../actions/FirstStage';

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
    
    const typeOfHelp = useSelector(state => state.firstStage.typeOfHelp)
    const shelter = useSelector(state => state.firstStage.shelter);
    const amount = useSelector(state => state.firstStage.amount);

    const dispatch = useDispatch();
    // const [shelter, setShelter] = useState('');

    const handleChange = (e) => {

        let value = e.target.id;

        value = value.substring(0, value.indexOf('-'))

        dispatch(updateFirstStageHelper(typeOfHelp, shelter, value))

    }
    
    const handleChangeInput = (e) => {

        let value = e.target.value;

        dispatch(updateFirstStageHelper(typeOfHelp, shelter, value))

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
