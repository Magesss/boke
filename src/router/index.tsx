import React from 'react';
import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import RouterGuard from "./RouterGuard";
import routerConfig from "./routerConfig";



const renderRoutesMap = (routes:any) => {
  let redc1:any
  let redc2:any
  if (!Array.isArray(routes)) {
    routes = routerConfig
    redc1 = <Redirect exact from="/" to='/home'></Redirect>
    redc2 = <Redirect to='/404'></Redirect>
  }
  return (
    <Switch>
      {
        routes.map((route:any, index:any) => {
          return (
            <Route key={index} path={route.path} render={props => <RouterGuard {...route} {...props} />}
            />
          )
        })
      }
      {redc1}
      {redc2}
    </Switch>
  )
}

export default renderRoutesMap;
