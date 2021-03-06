import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

// IMPORTING ASSETS
import walletIcon from '../assets/wallet_icon.svg';
import pawIcon from '../assets/paw_icon.svg';

// IMPORTING REDUX ACTIONS
import { updateFirstStageHelper } from '../actions/FirstStage';
import { updateGeneralStateHelper } from '../actions/AllIsReady';

// IMPORTING STYLESHEETS
import '../styles/animations.sass';

const DoubleChoiceParent = styled.div`

    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: center;

    &.hide {
        animation: 1 .25s leaveAnimation;
        -webkit-animation: 1 .25s leaveAnimation;
        opacity: 0;
    }

`

const SingleChoice = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    border: 1px solid #CD8B65;
    background: #FAF9F9;
    width: 100%;
    padding: 20px;
    color: #585757;
    border-radius: 24px 0 0 24px;
    cursor: pointer;
        transition: .25s ease-in-out;

    &.right {

        border-radius: 0 24px 24px 0;

    }   

    &.active {

        background: linear-gradient(180deg, #CD8B65 0%, #BB6B3D 100%);
        box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07), 
                    0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 
                    0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 
                    0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 
                    0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 
                    0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
        color: #fff;
        transition: .25s ease-in-out;
    
    }


`

const ChoiceImageParent = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: 100px;
    background: #2f2f2f18;

`

const ChoiceImage = styled.img`



`

const ChoiceText = styled.p`

    font-weight: 600;
    font-size: 16px;
    line-height: 21px;
    max-width: 300px;

`

export default function DoubleChoice() {

    // FIRST STAGE REDUX STATES
    const typeOfHelp = useSelector(state => state.firstStage.typeOfHelp);
    const shelter = useSelector(state => state.firstStage.shelter);
    const shelterID = useSelector(state => state.firstStage.shelterID);
    const amount = useSelector(state => state.firstStage.amount);

    // REDUX STATES TELLING WHETHER THE SECOND AND THE THIRD STAGES ARE READY
    // TO BE PROCESSED
    const secondStageIsReady = useSelector(state => state.secondStage.isReady);
    const thirdStageIsReady = useSelector(state => state.thirdStage.isReady);

    // REDUX FUNCTION USED WHEN UPDATING ANY STATE OF THE APP
    const dispatch = useDispatch();

    // FUNCTION CALLED WHEN CHOOSING THE LEFT OPTION FROM THE TOP DOUBLE CHOICE
    const setLeft = () => {

        let isReady = false;
        (typeOfHelp !== '' && shelter !== '' && shelterID !== '' && amount !== '') ? isReady = true : isReady = false;

        dispatch(updateFirstStageHelper('specific_shelter', shelter, shelterID, amount, isReady))

        let isAllReady = false;

        (isReady === true && secondStageIsReady === true && thirdStageIsReady === true) ? isAllReady = true : isAllReady = false;

        dispatch(updateGeneralStateHelper(isAllReady))
    }

    // FUCNTION CALLED WHEN CHOOSING THE RIGHT OPTION FROM THE TOP DOBLE CHOICE
    const setRight = () => {

        let isReady = false;
        (typeOfHelp !== '' && amount !== '') ? isReady = true : isReady = false;

        dispatch(updateFirstStageHelper('whole_organisation', shelter, shelterID, amount, isReady))

        let isAllReady = false;

        (isReady === true && secondStageIsReady === true && thirdStageIsReady === true) ? isAllReady = true : isAllReady = false;

        dispatch(updateGeneralStateHelper(isAllReady))
    }

  return (
    <>
    
        <DoubleChoiceParent id='double-choice'>

            <SingleChoice id="single-choice-left" className="single-choice-top active" onClick={setLeft}>

                <ChoiceImageParent>

                    <ChoiceImage src={ walletIcon } />

                </ChoiceImageParent>

                <ChoiceText>Chcem finan??ne prispie?? konkr??tnemu ??tulku</ChoiceText>

            </SingleChoice>

            <SingleChoice id="single-choice-right" className='single-choice-top right' onClick={setRight}>

                <ChoiceImageParent>

                    <ChoiceImage src={ pawIcon } />

                </ChoiceImageParent>

                <ChoiceText>Chcem finan??ne prispie?? celej nad??cii</ChoiceText>

            </SingleChoice>

        </DoubleChoiceParent>
    
    </>
  )
}
