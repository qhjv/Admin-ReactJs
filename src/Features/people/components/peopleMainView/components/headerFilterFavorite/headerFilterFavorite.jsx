import { FormControl, MenuItem, Select } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { getCandidates } from '../../../../../../data/candidatesData';
import '../mainCandidatesView/mainCandidates.css';
import "./headerFillterFavorite.css";


HeaderFilterFavorite.propTypes = {
    onChange:PropTypes.func,
};

function HeaderFilterFavorite({onChange}) {
  const [age, setAge] = useState('');
  const [candidates,setCandidates] =useState([])

  const getlist = async()=>{
    try {
      const list = await getCandidates()
      setCandidates(list)
      
    } catch (error) {
      console.log("failed:",error)
    }
  }
  useEffect(()=>{
    getlist()
  },[])
  const handleChange = (event) => {
    setAge(event.target.value);
    onChange(event.target.value)
  };
 
   
  
    return (
      <div className="mainview__candidates--header-position d-flex align-items-center justify-content-between col-lg-3 col-md-6 ">
      <FormControl fullWidth>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>Favorite</em>
          </MenuItem>
          <MenuItem value="yes">
            yes
          </MenuItem>
          <MenuItem value="no">
            no
          </MenuItem>
          
        </Select>
      </FormControl>
    </div>
    );
}

export default HeaderFilterFavorite;