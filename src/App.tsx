import React, { Component } from 'react';
import './App.css'
import RouterComponent from './router/index'
import {
  Switch,
  Redirect
} from 'react-router-dom'

class App extends Component {
  componentDidMount() {
    //对缓存数据 或者权限判断
    // console.log('app')
  }
  render() {
    return(
      <Switch>
        <RouterComponent />
        <Redirect exact from="/" to='/home'></Redirect>
      </Switch>
    )
  }
}

export default App;
