import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import{Controller} from 'react-hook-form'

InputField.propTypes = {
    form:PropTypes.object.isRequired,
    name:PropTypes.string.isRequired,

    label:PropTypes.string,
    disabled:PropTypes.bool,
};

function InputField(props) {
    const{form,name,label,disabled}=props
    const {errors,formState}=form
    const hasError = formState.touched[name] && errors[name]
    return (
        <Controller
            name={name}
            control={form.control}
            render={({onChange,onBlur,value,name})=>(
                <TextField
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    disabled={disabled}
                    label={label}
    
                    error={!!hasError}
                    helperText={errors[name]?.message}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlue={onBlur}
                >

                </TextField>
            )}
            
        />
    );
}

export default InputField;