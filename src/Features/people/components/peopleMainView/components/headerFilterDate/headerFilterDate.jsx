import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import SyncRoundedIcon from '@material-ui/icons/SyncRounded';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import DateRangePicker from '@material-ui/lab/DateRangePicker';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterDateTime, resetDate } from './filterDateSlice';
import './headerFilterDate.css';

HeaderFilterDate.propTypes = {
    
};

function HeaderFilterDate(props) {
    const dispatch = useDispatch()
    const [value, setValue] = useState([null, null]);
    
    const handleClickReset=()=>{
        setValue([null,null])
        const valueDates=[]
        const action = resetDate(valueDates)
                    dispatch(action)
    }
    return (
        <div className="mainview__candidates--header-more d-flex align-items-center justify-content-between col-lg-6 col-md-6 ">
                
                <LocalizationProvider dateAdapter={AdapterDateFns}>
            
                <DateRangePicker
                calendars={1}
                value={value}
                
                onChange={(valueDates) => {
                    setValue(valueDates)
                    const action = filterDateTime(valueDates)
                    dispatch(action)
                }}
                renderInput={(startProps, endProps) => (
                    <Fragment>
                    <TextField {...startProps} variant="standard" />
                    <Box sx={{ mx: 1 }}> to </Box>
                    <TextField {...endProps} variant="standard" />
                    </Fragment>
                )}
                />
            </LocalizationProvider> 
            <SyncRoundedIcon onClick={handleClickReset}></SyncRoundedIcon>
        </div>
    );
}

export default HeaderFilterDate;