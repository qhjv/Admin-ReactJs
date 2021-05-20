import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from '@material-ui/core';
import React from 'react';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import './mainCadidateDialog.css';

MainCandidateDialog.propTypes = {
    
};

function MainCandidateDialog(props) {
    
    return (
        <Dialog
            fullWidth={true}
            maxWidth="xs"
            open={props.open}
            onClose={props.close}
        >
            <DialogTitle>{props.formmode ? 'Add New' : 'Update'} Candidate</DialogTitle>
            <ValidatorForm
                onSubmit={props.addCandidate}
            >
                <DialogContent>
                    <Grid container >
                    
                        <Grid item xs={6}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Full Name"
                                onChange={props.changeFullname}
                                name="fullname"
                                value={props.fullname}
                                validators={['required']}
                                errorMessages={['hãy nhập trường này !!!']}
                                autoComplete='off'
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Position"
                                onChange={props.changePosition}
                                name="position"
                                value={props.position}
                                validators={['required']}
                                errorMessages={['hãy nhập trường này !!!']}
                                autoComplete='off'
                            />
                        </Grid>
                        <Grid item xs={12}>

                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Avatar"
                                onChange={props.changeAvatar}
                                name="avatar"
                                value={props.avatar}
                                disabled
                            >
                            </TextValidator>
                            <input type="file" onChange={props.chooseAvatar}></input>
                            <Button onClick={props.updateImage} color="primary">Tải lên</Button>
                            
                        </Grid>
                        
                        <Grid item xs={12}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Favorite</FormLabel>
                                <RadioGroup aria-label="favorite" name="favorite" value={props.favorite} onChange={props.changeFavorite}>
                                    <FormControlLabel value="yes" control={<Radio color="primary"/>} label="yes"></FormControlLabel>
                                    <FormControlLabel value="no" control={<Radio color="primary"/>} label="no"></FormControlLabel>
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                type="date"
                                label=""
                                onChange={props.changeCalendar}
                                name="calendar"
                                value={props.calendar}
                                validators={['required']}
                                errorMessages={['hãy nhập trường này!!!']}
                                autoComplete='off'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                type="time"
                                label=""
                                onChange={props.changeTime}
                                name="time"
                                value={props.time}
                                validators={['required']}
                                errorMessages={['hãy nhập trường này!!!']}
                                autoComplete='off'
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.close} color="inherit" >Cancer</Button>
                    <Button type="submit" color="primary">{props.formmode ? 'Add' : 'Update'}</Button>
                </DialogActions>
            </ValidatorForm>
        </Dialog>
    );
}

export default MainCandidateDialog;
// const uploadTask = storage.ref(`images/${image.name}`).put(image);
//     uploadTask.on(
//       "state_changed",
//       snapshot=>{},
//       error =>{
//         console.log("faild:",error)
//       }
//       ()=>{
//         storage.ref("images")
//               .child(image.name)
//               .getDownloadURL()
//               .then(url =>{
//                 console.log(url)
//               })
//       }
//     )