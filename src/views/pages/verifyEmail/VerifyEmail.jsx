import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import classes from './VerifyEmail.module.scss';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button, Link } from '@material-ui/core';
import Logo from '../roweb_logo.png';

const VerifyEmail = () => {

    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [errors, setErrors] = useState({
        email: "",
        code: ""
      });

    const _handleChange = (e) => {
        const { name, value } = e.target;
        
        if (name === 'email') {
          setEmail(value);
        }
        if (name === 'code') {
          setCode(value);
        }
        if (value.length) {
          setErrors(prev => ({...prev, [name]: ''}));
        }
      }

    const _verify = () => {
      const isValid = _validate();

        if (isValid) {
            // make API REQUEST
            const payload = {
                email,
                code
            };

            // const res = await fetch('http://practica.local/api/login', {
            //   method: 'POST',
            //   headers: {
            //     "Accept": 'application/json',
            //     "Content-Type": 'application/json'
            //   },
            //   body: JSON.stringify(payload)
            // })

            // console.log(res);
        }
    }

    const _validate = () => {
        let isValid = true;
        const tmpErrors = {...errors};
    
        if (!email.length) {
          tmpErrors.email = "Email cannot be empty!";
          isValid = false;
        }
    
        if (!code.length) {
          tmpErrors.code = "Code cannot be empty!";
          isValid = false;
        }
    
        setErrors(tmpErrors);
    
        return isValid;
      }

    return (
        // <div className={classes.verifyEmailContainer}>
        //     <div>
        //         <Form.Group className="mb-3">
        //       <Form.Label>Email address</Form.Label>
        //       <Form.Control name="email" type="email" placeholder="Enter email" value={email} isInvalid={errors.email.length} onChange={_handleChange} />
        //       {!!errors.email.length && <Form.Control.Feedback type='invalid'>
        //         {errors.email}
        //       </Form.Control.Feedback>}
        //     </Form.Group>
        //   </div>
        //   <div>
        //     <Form.Group className="mb-3" controlId="formBasicEmail">
        //       <Form.Label>Code</Form.Label>
        //       <Form.Control isInvalid={errors.code.length} name="code" type="input" value={code} placeholder="Enter code" onChange={_handleChange} />
        //       {!!errors.code.length && <Form.Control.Feedback type='invalid'>
        //         {errors.code}
        //         </Form.Control.Feedback>}
        //     </Form.Group>
        //   </div>
        //   <Button onClick={_verify}>Verify</Button>
        // </div>
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid className={classes.size} item xs={12} sm={8} md={5} component={Paper} elevation={1} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <img src={Logo} alt='Logo' className={classes.logo}></img>
          </Avatar>
          <Typography component="h1" variant="h5">
            Verify Email
          </Typography>
          <form className={classes.form}>
            <TextField onChange={_handleChange} variant="outlined" margin='normal' required fullWidth value={email} label='Email address' name='email' type='email' />
            <TextField onChange={_handleChange} variant="outlined" margin='normal' required fullWidth value={code} label='Code' name='code' type='input' />
            <Button onClick={_verify} type='submit' fullWidth variant='contained' color='primary' className={classes.space}>Verify</Button>
          </form>
        </div>
      </Grid>
    </Grid>
    )
}

export default VerifyEmail