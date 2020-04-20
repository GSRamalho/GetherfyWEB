import React, { Component } from 'react';
import NavBar from './components/NavBar'
import Home from './components/Home'
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import Routes from './Routes'
import Footer from './components/Footer'
import Reservas from './components/Reservas';

// class App extends Component {
// render(){
//   return(
//   <div>
//       {/* <NavBar/> */}
//       <Home />
//       <Routes/>
//     </div>
// );
//   }
// }
// export default App;

export default props =>
<BrowserRouter>
    <div className="app">
        
        <Routes/>
        {/* <Footer/> */}
        
    </div>
</BrowserRouter>