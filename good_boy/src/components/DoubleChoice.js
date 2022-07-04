import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import $ from 'jquery';

// IMPORTING ASSETS
import walletIcon from '../assets/wallet_icon.svg';
import pawIcon from '../assets/paw_icon.svg';

// IMPORTING REDUX ACTIONS
import { updateFirstStageHelper } from '../actions/FirstStage';

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

    const typeOfHelp = useSelector(state => state.firstStage.typeOfHelp);
    const shelter = useSelector(state => state.firstStage.shelter);
    const amount = useSelector(state => state.firstStage.amount);

    const dispatch = useDispatch();
    // const [shelter, setShelter] = useState('');

    const setLeft = () => {
        dispatch(updateFirstStageHelper('specific_shelter', shelter, amount))
    }

    const setRight = () => {
        dispatch(updateFirstStageHelper('whole_organisation', shelter, amount))
    }

  return (
    <>
    
        <DoubleChoiceParent id='double-choice'>

            <SingleChoice id="single-choice-left" className="single-choice-top active" onClick={setLeft}>

                <ChoiceImageParent>

                    <ChoiceImage src={ walletIcon } />

                </ChoiceImageParent>

                <ChoiceText>Chcem finančne prispieť konkrétnemu útulku</ChoiceText>

            </SingleChoice>

            <SingleChoice id="single-choice-right" className='single-choice-top right' onClick={setRight}>

                <ChoiceImageParent>

                    <ChoiceImage src={ pawIcon } />

                </ChoiceImageParent>

                <ChoiceText>Chcem finančne prispieť celej nadácii</ChoiceText>

            </SingleChoice>

        </DoubleChoiceParent>
    
    </>
  )
}
