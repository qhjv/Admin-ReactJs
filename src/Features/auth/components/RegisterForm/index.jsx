import React from 'react';
import PropTypes from 'prop-types';
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import InputField from '../../../../components/from-controls/InpuField';
import PasswordField from '../../../../components/from-controls/PasswordField';



RegisterForm.propTypes = {
    onSubmit:PropTypes.func,
};

function RegisterForm(props) {
    
    const schema = yup.object().shape({
        title: yup.string()
        .required('Please enter title')
        .min(5,'Title is too short')
    });
    const form = useForm({
        defaultValues:{
            title:'',
        },
        resolver: yupResolver(schema)
        
    })
    const handleSubmit =(values)=>{
        const{onSubmit}=props
        if(onsubmit){
            onSubmit(values)
        }
        form.reset()
    }
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name="title" label="" form ={form}></InputField>
            <PasswordField name="password" label="Password" form={form}></PasswordField>
        </form>
    );
}

export default RegisterForm;