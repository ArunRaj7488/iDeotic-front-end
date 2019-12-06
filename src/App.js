import React, { Component } from 'react';
import LoginForm from "../src/components//loginForm";
import Registration from "../src/components/registratio";
import AllBreeds from "../src/components/allBreed";
import Image from "../src/components/imgView";
import {Route, Switch} from "react-router-dom"
import "./App.css";
class App extends Component {
  
  render() {
    return (
        <div className="App-bg" >      
        <Switch>
          <Route path="/signup" component={Registration}></Route>
          <Route path="/all" component={AllBreeds}></Route>
          <Route path="/img" component={Image}></Route>
          <Route path="/" component={LoginForm}></Route>
        </Switch>
        </div>
    );
  }
}

export default App;
