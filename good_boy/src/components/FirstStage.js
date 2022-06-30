import React from 'react';
import styled from 'styled-components';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

// IMPORTING ASSETS
import walletIcon from '../assets/wallet_icon.svg';
import pawIcon from '../assets/paw_icon.svg';


const MainParent = styled.div`

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;

`

const DoubleChoice = styled.div`

    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: center;

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

    &.right {

        background: linear-gradient(180deg, #CD8B65 0%, #BB6B3D 100%);
        box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07), 
                    0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 
                    0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 
                    0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 
                    0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 
                    0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
        color: #fff;
        border-radius: 0 24px 24px 0;
    
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

`

const UpperPartTop = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;

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

const UpperPartSelect = styled.input`



`

const FormLowerPart = styled.div`

    width: 100%;
    height: 100%;

`

export default function FirstStage() {
  return (
    <>
    
        <MainParent>

            <DoubleChoice>

                <SingleChoice>

                    <ChoiceImageParent>

                        <ChoiceImage src={ walletIcon } />

                    </ChoiceImageParent>

                    <ChoiceText>Chcem finančne prispieť konkrétnemu útulku</ChoiceText>

                </SingleChoice>
                
                <SingleChoice className='right'>

                    <ChoiceImageParent>

                        <ChoiceImage src={ pawIcon } />

                    </ChoiceImageParent>

                    <ChoiceText>Chcem finančne prispieť celej nadácii</ChoiceText>

                </SingleChoice>

            </DoubleChoice>

            <FormPart>

                <FormUpperPart>

                    <UpperPartTop>

                        <UpperPartTopMainText>O projekte</UpperPartTopMainText>

                        <UpperPartTopSideText>Nepovinné</UpperPartTopSideText>

                    </UpperPartTop>

                    <FormControl fullWidth>

                        <InputLabel id="demo-simple-select-label">Útulok</InputLabel>

                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Útulok"
                        >

                            <MenuItem value={'utulok1'}>Útulok 1</MenuItem>
                            <MenuItem value={'utulok2'}>Útulok 2</MenuItem>
                            <MenuItem value={'utulok3'}>Útulok 3</MenuItem>
                        
                        </Select>

                    </FormControl>

                </FormUpperPart>

                <FormLowerPart>



                </FormLowerPart>

            </FormPart>

        </MainParent>
    
    </>
  )
}
