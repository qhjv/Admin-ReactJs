import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@material-ui/core';
import { Controller } from 'react-hook-form';
import { Visibility, VisibilityOff } from '@material-ui/icons';

PasswordField.propTypes = {
    form:PropTypes.object.isRequired,
    name:PropTypes.string.isRequired,

    label:PropTypes.string,
    disabled:PropTypes.bool,
};

function PasswordField(props) {
    const{form,name,label,disabled}=props
    const {errors,formState}=form
    const hasError = formState.touched[name] && errors[name]
    const[showPassword,setShowPassword]=useState(false)

    const toggleshowPassWord =()=>{
        setShowPassword((x)=>!x)
    }
    return (
        <FormControl error={hasError} fullWidth margin="normal" variant="outLined"> 
            <InputLabel htmlFor={name}>{label}</InputLabel>

            <Controller
                name={name}
                control={form.control}
                render={({onChange,onBlur,value,name})=>(
                    <OutlinedInput
                        id={name}
                        type={showPassword ?'text':'password'}
                        label={label}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton aria-label="toggle password visibility" onClick={toggleshowPassWord} edge="end">
                                    {showPassword ? <Visibility/>:<VisibilityOff/>}
                                </IconButton>
                            </InputAdornment>
                        }
                        disabled={disabled}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                    />
                )}
            />
            <FormHelperText>{errors[name]?.message}</FormHelperText>
        </FormControl>
    );
}

export default PasswordField;