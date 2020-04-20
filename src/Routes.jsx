import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Home from './components/Home'
import Login from './components/Login'
import Cadastro from './components/Cadastro'
import Reservas from './components/Reservas'

export default props =>
<Switch>
    <Route exact path = '/' component={Home}/>
    <Route path='/login' component={Login}/>
    <Route path='/cadastro' component={Cadastro}/>
    <Route path='/reservas' component={Reservas}/> 
    <Redirect from ='*' to='/' />
</Switch>