import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    fetch('/getUserInfo',{
      method:'get',
    }).then(data=>{
      console.log(data)
    })
  }
  render(){
    return (
      <div className="App">
        <button>ces</button>
      </div>
    );
  }
}

export default App;
