import React, { useState } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';  

import axios from 'axios';
import { Redirect } from 'react-router';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        wises.com.br
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const url = "http://127.0.0.1:8080/ReservaDeSala/rest/usuario/loginV2/";
  const authorization="secret"
  const classes = useStyles();

  async function submit(e) {
    e.preventDefault();
    

    const retorno = await axios.get(url, { 
      headers: {
        email,
        password,
        authorization
      }
    });

   
   console.log(retorno)

   if(retorno.status==200){
    const UsuarioLogado = {
      idOrganizacao: retorno.data.idOrganizacao.id,
      nome: retorno.data.nome
    }

    window.localStorage.setItem('user', JSON.stringify(UsuarioLogado));
    window.location.href = "/reservas";

   }
  }

 
  return (
    <Container component="main" maxWidth="xs" minHeight="100vh">
      <CssBaseline />
      <div className={classes.paper}>

        <span></span>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={email}
            onInput={e => setEmail(e.target.value)}
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            value={password}
            onInput={e=> setPassword(e.target.value)}
            autoComplete="current-password"
          />
        
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submit}
          >
            Conectar-se
            
          </Button>
          <Grid container>

            <Grid item>
              <Link href="cadastro" variant="body2">
                {"Não tem uma conta? Cadastre-se"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );

}