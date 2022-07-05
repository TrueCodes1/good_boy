import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

// IMPORTING REDUX ACTIONS
import { updateSeconsStageHelper } from '../actions/SecondStage';

// IMPORT STYLESHEETS
import '../styles/classes.sass';
import '../styles/animations.sass';

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

    const name = useSelector(state => state.secondStage.name);
    const surname = useSelector(state => state.secondStage.surname);
    const email = useSelector(state => state.secondStage.email);
    const number = useSelector(state => state.secondStage.number);

    const handleChange = (e) => {

        let id = e.target.id;
        let value = e.target.value;

        let isReady = false;

        switch (id) {
            case 'input-name':
                if (value!=='' && surname!=='' && email!=='' && number!=='') {

                    isReady = true;

                }
                dispatch(updateSeconsStageHelper(value, surname, email, number, isReady))
                break
            case 'input-surname':
                if (name!=='' && value!=='' && email!=='' && number!=='') {
               
                    isReady = true;
                    
                }
                dispatch(updateSeconsStageHelper(name, value, email, number, isReady))
                break
            case 'input-email':
                if (name!=='' && surname!=='' && value!=='' && number!=='') {
                 
                    isReady = true;

                }
                dispatch(updateSeconsStageHelper(name, surname, value, number, isReady))
                break
            default:
                break
        }

    }

    const dispatch = useDispatch()

  return (
    <MainParent id={props.parentId} className={props.parentClass}>

        <Input type={props.type} id={props.inputId} name={props.name} className={props.className} placeholder={props.placeholder} onChange={ handleChange } />

        <Placeholder id={props.placeholderId} className={props.className}>{props.defaultValue}</Placeholder>

    </MainParent>
  )
}
