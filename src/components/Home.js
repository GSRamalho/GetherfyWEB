import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logo from '../assets/imgs/logo.png'
// import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button'
import {Link as RouterLink, Route, Router} from 'react-router-dom'
import Link from '@material-ui/core/Link'

import Login from '../components/Login'
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
      www.wises.com.br
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#e9f3f5'
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  button: {
    padding: '8px',
    borderRadius: '8px',
    color: 'white',
    marginTop: '40px',
    marginLeft: '15px',
    backgroundColor: '#1976d2',
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      // theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
      '#ffffff'
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (

    <div className={classes.root}>
      
      <CssBaseline />
      <Container justify="center" className="home-color" component="main" className={classes.main} maxWidth="sm">
        
        <Typography  variant="h2" component="h1" gutterBottom>
        <img src={logo} alt="logo" height="150px" />
          etherfy
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Organize suas reuniões de forma prática.'}
        </Typography>
        <Typography variant="body1">Para isso, faça login ou registre-se.</Typography>


        <Button href="/login" className={classes.button}>Conecte-se
          </Button>
         
          <Button href="/cadastro" className={classes.button}>Registre-se
          </Button>

          <Button href="#" className={classes.button}>Nova organização
          </Button>

      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">Desenvolvido por Wise Systems.</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>

  );
}