import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import logo from '../assets/imgs/logo_white.png'
import { Button, Container } from '@material-ui/core';
import Login from './Login';
import { red } from '@material-ui/core/colors';
import axios from 'axios';
import List from '@material-ui/core/List'
import Fab from '@material-ui/core//Fab'
import AddIcon from '@material-ui/icons/Add';


console.log(JSON.parse(window.localStorage.getItem('user')));


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },

  content: {
    marginTop: '100px'
  },

  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  link: {
    margin: theme.spacing(1, 1.5),
    color: 'red',
    backgroundColor: 'white'
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  menuButton: {
    alignContent: 'flex-end',
  },
}));

export default function Reservas() {
  const id_organizacao = JSON.parse(window.localStorage.getItem('user')).idOrganizacao
  const url = "http://127.0.0.1:8080/ReservaDeSala/rest/reserva/byIdOrganizacao/";
  const authorization = "secret"



  async function load(e) {

    const retorno = await axios.get(url, {
      headers: {
        id_organizacao,
        authorization
      }
    });

    console.log(retorno.data)

    const arrayObj = retorno.data
    var x

    for (const i = 0; i < arrayObj.lenght; i++) {
      x += arrayObj[i]
      console.log(x)

    }

  }

  load()


  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>

        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <a href="/">
              <img src={logo} alt="logo" height="50px" />
            </a>
            <nav>

            </nav>
            <Button className={classes.menuButton} href="/" variant="outlined" className={classes.link}>
              Sair
          </Button>
          </Toolbar>
        </AppBar>
        <Container className={classes.content}>

          <List >
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        Titulo da reuniao
                </Typography>
                      <Typography variant="h5" gutterBottom>
                        12/04/2020 14:00 - 15:00
                </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Autor da reuniao
                </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" style={{ cursor: 'pointer' }}>
                        Remover
                </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </List>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Container>
      </div>
    </div>

  );
}
