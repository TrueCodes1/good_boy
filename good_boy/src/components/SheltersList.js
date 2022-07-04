import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import $ from 'jquery';

// IMPORTING FROM MUI MATERIAL
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

// IMPORTING REDUX ACTIONS
import { updateFirstStageHelper } from '../actions/FirstStage';

// IMPORTING STYLESHEETS
import '../styles/animations.sass';

const placeholderStyle = {

  display: "flex",
  flexDirection: "column",
  alignItem: "center",
  justifyContent: "center",
  paddingLeft: "10px",

  "&.unshifted": {
    padding: "0",
    transition: ".25s ease-in-out"
  }

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
  transition: .25s ease-in-out;

  &.hidden {
    opacity: 0;
    transition: .25s ease-in-out;
  }

`

export default function SheltersList(props) {

  const typeOfHelp = useSelector(state => state.firstStage.typeOfHelp)
  const shelter = useSelector(state => state.firstStage.shelter);
  const amount = useSelector(state => state.firstStage.amount);
  
  const dispatch = useDispatch();
  // const [shelter, setShelter] = useState('');

  const handleChange = (e) => {

    // setShelter(e.target.value)
    dispatch(updateFirstStageHelper(typeOfHelp, e.target.value, amount))

  }

  const sheltersData = useSelector(state => state.shelters);

  const sheltersList = () => {

      let toReturn = [];

      for (let i = 0; i < sheltersData.length; i++) {
      
          toReturn.push(<MenuItem key={sheltersData[i]['id']} value={sheltersData[i]['name']}>{sheltersData[i]['name']}</MenuItem>)

      }

      return toReturn
  }

  return (
    <>

      <FormControl fullWidth>

      <InputLabel style={placeholderStyle} id="input-label">

          <UpperPlaceholderPart>Útulok</UpperPlaceholderPart>
          <LowerPlaceholderPart id='lower-placeholder-part' >Vyberte si zo zoznamu útulkov</LowerPlaceholderPart>
          
      </InputLabel>

      <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Útulok"
          sx={{

              paddingBottom: '20px',
              paddingTop: '20px',
              paddingLeft: '10px',
              borderRadius: '8px',
              fontFamily: 'Public Sans'

          }}
          onChange={handleChange}
      >

          {sheltersList()}

      </Select>

      {/* <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          sx={{

              paddingBottom: '20px',
              borderRadius: '8px'

          }}
          defaultValue=""
          value={shelter}
          onChange={handleChange}
          >

          {sheltersList()}

      </Select> */}

      </FormControl>
    
    </>
  )
}
