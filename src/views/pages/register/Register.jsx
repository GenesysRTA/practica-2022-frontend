import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap';
import classes from './Register.module.scss';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button, Link } from '@material-ui/core';
import Logo from '../roweb_logo.png';

const Register = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    match: "",
  })

  const _handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'username') {
      setUsername(value);
    }

    if (name === 'email') {
      setEmail(value);
    }

    if (name === 'password') {
      setPassword(value);
    }

    if (name === 'confirmPassword') {
      setConfirmPassword(value);
    }

    if (value.length) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const _validate = () => {
    let isValid = true;
    const tmpErrors = { ...errors };

    if (!username.length) {
      tmpErrors.username = 'Username cannot be empty!';
      isValid = false;
    }

    if (!email.length) {
      tmpErrors.email = 'Email cannot be empty!';
      isValid = false;
    }

    if (!password.length) {
      tmpErrors.password = 'Password cannot be empty!';
      isValid = false;
    }

    if (!confirmPassword.length) {
      tmpErrors.confirmPassword = 'Confirm password cannot be empty!';
      isValid = false;
    }

    if (password != confirmPassword) {
      tmpErrors.match = 'Password and Confirm Password do not match!';
      isValid = false;
    }

    setErrors(tmpErrors);

    return isValid;
  }

  const _register = async () => {

    const isValid = _validate();

    if(isValid) {
      // make API REQUEST
      const payload = {
        username,
        email,
        password
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

      navigate('/verify-email');
    }
  }

  console.log(errors, errors.email.length);
  return (
    // <section>
    //   <Container>
    //     <div className={classes.loginContainer}>
    //       <div>
    //         <Form.Group className="mb-3">
    //           <Form.Label>Username</Form.Label>
    //           <Form.Control
    //             name="username"
    //             type="input"
    //             placeholder="Enter username"
    //             value={username}
    //             isInvalid={errors.username.length}
    //             onChange={_handleChange} />
    //           {!!errors.username.length && <Form.Control.Feedback type='invalid'>
    //             {errors.username}
    //           </Form.Control.Feedback>}
    //         </Form.Group>
    //       </div>
    //       <div>
    //         <Form.Group className="mb-3">
    //           <Form.Label>Email address</Form.Label>
    //           <Form.Control
    //             name="email"
    //             type="email"
    //             placeholder="Enter email"
    //             value={email}
    //             isInvalid={errors.email.length}
    //             onChange={_handleChange} />
    //           {!!errors.email.length && <Form.Control.Feedback type='invalid'>
    //             {errors.email}
    //           </Form.Control.Feedback>}
    //         </Form.Group>
    //       </div>
    //       <div>
    //         <Form.Group className="mb-3">
    //           <Form.Label>Password</Form.Label>
    //           <Form.Control
    //             name="password"
    //             type="password"
    //             placeholder="Enter password"
    //             value={password}
    //             isInvalid={errors.password.length}
    //             onChange={_handleChange} />
    //           {!!errors.password.length && <Form.Control.Feedback type='invalid'>
    //             {errors.password}
    //           </Form.Control.Feedback>}
    //         </Form.Group>
    //       </div>
    //       <div>
    //         <Form.Group className="mb-3">
    //           <Form.Label>Confirm Password</Form.Label>
    //           <Form.Control
    //             name="confirmPassword"
    //             type="password"
    //             placeholder="Confirm password"
    //             value={confirmPassword}
    //             isInvalid={errors.confirmPassword.length}
    //             onChange={_handleChange} />
    //           {!!errors.confirmPassword.length && <Form.Control.Feedback type='invalid'>
    //             {errors.confirmPassword}
    //           </Form.Control.Feedback>}
    //         </Form.Group>
    //       </div>
    //       <Button onClick={_register}>Register</Button>
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
            Log In
          </Typography>
          <form className={classes.form}>
          <TextField onChange={_handleChange} variant="outlined" margin='normal' required fullWidth value={username} label='Username' name='username' type='input' />
            <TextField onChange={_handleChange} variant="outlined" margin='normal' required fullWidth value={email} label='Email address' name='email' type='email' />
            <TextField onChange={_handleChange} variant="outlined" margin='normal' required fullWidth value={password} label='Password' name='password' type='password' />
            <TextField error={Boolean(errors?.match)} onChange={_handleChange} variant="outlined" margin='normal' required fullWidth value={confirmPassword} label='Confirm Password' name='confirmPassword' type='password' />
            <Button onClick={_register} type='submit' fullWidth variant='contained' color='primary' className={classes.space}>Sign In</Button>
            <Grid container className={classes.space}>
              <Grid item>
                <Link href='/login' variant='body2'>{"Already have an account? Login"}</Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  )
}

export default Register