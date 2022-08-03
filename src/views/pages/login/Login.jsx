import React, { useState } from 'react';
import classes from './Login.module.scss';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button, Link } from '@material-ui/core';
import Logo from '../roweb_logo.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  const _handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
    if (value.length) {
      setErrors(prev => ({...prev, [name]: ''}));
    }
  }

  const _login = async () => {
    const isValid = _validate();
    
    if (isValid) {
      //API Request
      const payload = {
        email,
        password,
      };

      // const formData = new FormData();
      // formData.append('email', email);
      // formData.append('password', password);

      // const res = await fetch('http://practica.local/api/login', {
      //   method: 'POST',
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/x-www-form-urlencoded',
      //   },
      //   body: JSON.stringify(payload),
      // });
    }
  }

  const _validate = () => {
    let isValid = true;
    const tmpErrors = {...errors};

    if (!email.length) {
      tmpErrors.email = "Email cannot be empty!";
      isValid = false;
    }

    if (!password.length) {
      tmpErrors.password = "Password cannot be empty!";
      isValid = false;
    }

    setErrors(tmpErrors);

    return isValid;
  }

  return (
    // <section>
    //   <Container>
    //     <div className={classes.loginContainer}>
    //       <div>
    //         <Form.Group className="mb-3">
    //           <Form.Label>Email address</Form.Label>
    //           <Form.Control name="email" type="email" placeholder="Enter email" value={email} isInvalid={errors.email.length} onChange={_handleChange} />
    //           {!!errors.email.length && <Form.Control.Feedback type='invalid'>
    //             {errors.email}
    //           </Form.Control.Feedback>}
    //         </Form.Group>
    //       </div>
    //       <div>
    //         <Form.Group className="mb-3" controlId="formBasicEmail">
    //           <Form.Label>Password</Form.Label>
    //           <Form.Control isInvalid={errors.password.length} name="password" type="password" value={password} placeholder="Enter password" onChange={_handleChange} />
    //           {!!errors.password.length && <Form.Control.Feedback type='invalid'>
    //             {errors.password}
    //             </Form.Control.Feedback>}
    //         </Form.Group>
    //       </div>
    //       <Button onClick={_login}>Login</Button>
    //     </div>
    //   </Container>
    // </section>
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid className={classes.size} item xs={12} sm={8} md={5} component={Paper} elevation={1} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <img src={Logo} alt='Logo' className={classes.logo}></img>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <form className={classes.form}>
            <TextField onChange={_handleChange} variant="outlined" margin='normal' required fullWidth value={email} label='Email address' name='email' type='email' />
            <TextField onChange={_handleChange} variant="outlined" margin='normal' required fullWidth value={password} label='Password' name='password' type='password' />
            <Button onClick={_login} type='submit' fullWidth variant='contained' color='primary' className={classes.space}>Sign In</Button>
            <Grid container direction="column" className={classes.space}>
              <Grid item>
                <Link href='/forgot-password' variant='body2'>{"Forgot password?"}</Link>
              </Grid>
              <br></br>
              <Grid item>
                <Link href='/register' variant='body2'>{"Don't have an account? Sign up"}</Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  )
}

export default Login