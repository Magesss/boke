import React, { Component } from 'react';
import routes from './router'
import './App.css'
import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom'


class App extends Component {
  render() {
    return(
      <div className="App">
        <header>头部</header>
        <Switch>
          {
            routes.map(route => {
              return(
                <Route
                  key={route.path}
                  path={route.path}
                  component={route.component}
                />
              )
            })
          }
          <Redirect exact from="/" to={routes[0].path}></Redirect>
          {/* 这里用 redirect 进行 首页自动跳转到 /home 路由下
              exact 意味着精确匹配 当为 / 时才跳转 /home 不是包含 / 就跳转到 /home
          */}
          <Redirect to='/404/'></Redirect>
        </Switch>
        <footer>底部</footer>
      </div>
    )
  }
}

export default App;
