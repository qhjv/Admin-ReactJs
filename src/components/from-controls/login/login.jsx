import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {Container ,Link, CssBaseline , Avatar, makeStyles, Card, CardContent, Typography, FormControlLabel, Checkbox ,Button, Grid, CircularProgress  } from '@material-ui/core'
import { LockRounded} from '@material-ui/icons'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import firebase from '../../../helpers/db';



const useStyles = makeStyles((theme)=>({
    root:{},
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        background: "linear-gradient(90deg, #db09ff 0%, #334bc9 100%)",
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit: {
        background: "linear-gradient(90deg, #db09ff 0%, #334bc9 100%)",
          margin: theme.spacing(3, 0, 2),
          color: '#fff'
      },
      card: {
          marginTop: '60px',
          paddingLeft: '20px',
          paddingRight: '20px',
          paddingBottom: '20px',
      },
      pointer: {
          cursor: 'pointer',
          color: 'red!important',
          "&:hover": {
            textDecoration: 'underline!important'
          }
      },
      loadingLogin:{
          position:"absolute",
          left:"46%!important",
          top:"58%!important",
          margin:"30px",
          width:"100%"
      }
}))

function LogIn(props) {
    const classes = useStyles()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [rememberme,setRememberme]=useState(false)
    const [loading,setLoading]=useState(false)

    const handleEmail =(event)=>{
        setEmail(event.target.value)
    }
    const handlePassword =(event)=>{
        setPassword(event.target.value)
    }
    const handleCheck=(event)=>{
        setRememberme(event.target.checked)
    }
    alert("TK : admin@gmail.com\nMK : 123456")
    const handleLogin =()=>{
        setLoading(true)
        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then(response => {
                const {user} =  response;
                const data = {
                    userId: user.uid,
                    email: user.email
                }
                localStorage.setItem('user', JSON.stringify(data));
                const storage = localStorage.getItem('user');
                const loggedInUser = storage !== null ? JSON.parse(storage) : null;
                props.loggedIn(loggedInUser);
                setLoading(false);
            }).catch(error => {
                toast.error(error.message);
                setLoading(false);
            });
    }
    return (
        <Container component="main" maxWidth="xs">
        <Card className={classes.card}>
            <CardContent>
                <ToastContainer/>
                <CssBaseline/>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockRounded/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign In
                    </Typography>
                    <ValidatorForm 
                        onSubmit={handleLogin}
                        onError={errors => {
                            for (const err of errors) {
                              console.log(err.props.errorMessages[0])
                            }
                            }}
                            className={classes.form}>
                    <TextValidator
                     variant="outlined"
                     margin="normal"
                     fullWidth
                     label="Email"
                     onChange={handleEmail}
                     name="email"
                     value={email}
                     validators={['required', 'isEmail']}
                     errorMessages={['Hãy điền trường này!!!', 'email không hợp lệ']}
                     autoComplete='off' />
                      <TextValidator
                            variant="outlined"
                            fullWidth
                            label="Password"
                            onChange={handlePassword}
                            name="password"
                            type="password"
                            value={password}
                            validators={['required']}
                            errorMessages={['Hãy điền trường này!!!']}
                            autoComplete="off"
                        />
                    <FormControlLabel
                        control={<Checkbox value={rememberme} onChange={(e) => handleCheck(e)}  color="primary" />}
                        label="Remember me"
                    />
                    
                    {loading ? (
                        <CircularProgress className={classes.loadingLogin} onLoad={loading} />
                       ): (
                           <Button
                               type="submit"
                               fullWidth
                               variant="contained"
                               className={classes.submit}
                           >
                                Sign In
                           </Button>
                       )}
                        <Grid container>
                            <Grid item>
                                {/* <Link  onClick={props.toggle} className={classes.pointer} variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link> */}
                            </Grid>
                        </Grid>
                    </ValidatorForm>
                </div>
            </CardContent>
        </Card>

    </Container>
                                
                                
                                
    );
}

export default LogIn;
