import './App.css';
import React from 'react';
import {Route,Switch} from "react-router-dom"
import Landing from './components/Landing/Landing.jsx';
import Default from './components/Default/Default.jsx';
import Home from './components/Home/Home.jsx'
import Create from './components/Create/Create.jsx';
import Detail from './components/Detail/Detail.jsx';
import About from './components/About/About.jsx';

function App() {
  return (
    <div className="App">
    
      <Switch>
            <Route exact path="/" render={()=><Landing/>}/>
            <Route exact path="/home" render={()=><Home/>}/>
            <Route exact path="/create" render={()=><Create/>}/>
            <Route path="/videogame/:id" render={()=><Detail/>}/>
            <Route path="/about" render={()=><About/>}/>
            <Route path="/" render={()=><Default/>}/>

      /</Switch>     
         
    </div>
  );
}

export default App;
