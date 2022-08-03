import { AppBar, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../roweb_logo.png';
import Button from '@material-ui/core/Button';
import { Grid } from '@mui/material';

const Home = () => {
  let navigate = useNavigate();

  const _login = () => {
    navigate('/login');
  }

  const _register = () => {
    navigate('/register');
  }

  return (
    // <div>
    //     <Link to="/login" className='pe-5'>Login</Link>
    //     <Link to="/register">Register</Link>
    // </div>
    <AppBar>
      <Toolbar>
        <img src={Logo} alt='Logo'></img>
        <Grid container justifyContent='flex-end'>
          <Button onClick={_login}>Login</Button>
          <Button onClick={_register}>Register</Button>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Home