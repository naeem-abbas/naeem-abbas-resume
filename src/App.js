import React, { Component } from 'react';
import Home from "./components/Home";
import firebase from 'firebase/app';
import 'firebase/analytics';
import {db} from './components/Firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
class App extends Component {
  

  componentDidMount(){
    
  }
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}
export default App;