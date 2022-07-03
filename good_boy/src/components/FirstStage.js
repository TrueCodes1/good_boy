import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import $ from 'jquery';

// IMPORTING FROM MUI MATERIAL
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

// IMPORTING ASSETS
import walletIcon from '../assets/wallet_icon.svg';
import pawIcon from '../assets/paw_icon.svg';

// IMPORTING STYLESHEETS
import '../styles/animations.sass';

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
    min-height: 500px;
    max-height: 500px;

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

const DoubleChoice = styled.div`

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

const placeholderStyle = {

    display: "flex",
    flexDirection: "column",
    alignItem: "center",
    justifyContent: "center",
    paddingLeft: "10px",

}

const UpperPlaceholderPart = styled.p`
    
    font-family: 'Public Sans';
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    color: #2F2F2F;
    margin: 0;
    padding: 0;

`

const LowerPlaceholderPart = styled.p`
    
    font-family: 'Public Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #9F9F9F;
    margin: 0;
    padding: 0;

`

export default function FirstStage(props) {

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

            <DoubleChoice id='double-choice'>

                <SingleChoice id="single-choice-left" className="single-choice-top active">

                    <ChoiceImageParent>

                        <ChoiceImage src={ walletIcon } />

                    </ChoiceImageParent>

                    <ChoiceText>Chcem finančne prispieť konkrétnemu útulku</ChoiceText>

                </SingleChoice>
                
                <SingleChoice id="single-choice-right" className='single-choice-top right'>

                    <ChoiceImageParent>

                        <ChoiceImage src={ pawIcon } />

                    </ChoiceImageParent>

                    <ChoiceText>Chcem finančne prispieť celej nadácii</ChoiceText>

                </SingleChoice>

            </DoubleChoice>

            <FormPart>

                <FormUpperPart id='form-upper-part' > 

                    <UpperPartTop>

                        <UpperPartTopMainText>O projekte</UpperPartTopMainText>

                        <UpperPartTopSideText>Nepovinné</UpperPartTopSideText>

                    </UpperPartTop>

                    <FormControl fullWidth>

                        <InputLabel style={placeholderStyle}>

                            <UpperPlaceholderPart>Útulok</UpperPlaceholderPart>
                            <LowerPlaceholderPart>Vyberte si zo zoznamu útulkov</LowerPlaceholderPart>
                            
                        </InputLabel>

                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Útulok"
                            sx={{

                                paddingBottom: '20px',
                                borderRadius: '8px'

                            }}
                        >

                            <MenuItem value={'utulok1'}>Útulok 1</MenuItem>
                            <MenuItem value={'utulok2'}>Útulok 2</MenuItem>
                            <MenuItem value={'utulok3'}>Útulok 3</MenuItem>
                        
                        </Select>

                    </FormControl>

                </FormUpperPart>

                <FormLowerPart id='form-lower-part' >

                    <UpperPartTop className='single'>

                        <UpperPartTopMainText>Suma, ktorou chcem prispieť</UpperPartTopMainText>

                    </UpperPartTop>

                    <ChoicesMoney>

                        <SingleChoiceMoney className='single-choice-money' id='5-eur'>5 €</SingleChoiceMoney>
                        <SingleChoiceMoney className='single-choice-money' id='10-eur'>10 €</SingleChoiceMoney>
                        <SingleChoiceMoney className='single-choice-money' id='20-eur'>20 €</SingleChoiceMoney>
                        <SingleChoiceMoney className='single-choice-money' id='30-eur'>30 €</SingleChoiceMoney>
                        <SingleChoiceMoney className='single-choice-money' id='50-eur'>50 €</SingleChoiceMoney>
                        <SingleChoiceMoney className='single-choice-money' id='100-eur'>100 €</SingleChoiceMoney>

                        <OwnChoiceMoney id="own-choice-money">

                            <OwnChoiceInput type="text" id="own-choice-money-input" />

                            €

                        </OwnChoiceMoney>

                    </ChoicesMoney>

                </FormLowerPart>

            </FormPart>

        </MainParent>
    
    </>
  )
}
