import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom'
import RouterGuard from "./RouterGuard";
import routerConfig from "./routerConfig";


const renderRoutesMap = (routes:any) => {
  if (!Array.isArray(routes)) {
    routes = routerConfig
  }
  return (
    routes.map((route:any, index:any) => {
      return (
        <Route key={index} path={route.path} render={props => <RouterGuard {...route} {...props} />}
        />
      )
    })
  )
}


// class renderRoutesMap extends Component {
//   render() {
//     return(
//       <Switch>
//         {
//           routes.map((route, index) => {
//             return(
//               <Route
//                 key={index}
//                 path={route.path}
//                 render={props => <RouterGuard {...route} {...props}/>}
//               />
//             )
//           })
//         }
//         {/*<Redirect exact from="/" to={routes[0].path}></Redirect>*/}
//         {/*/!* 这里用 redirect 进行 首页自动跳转到 /home 路由下*/}
//         {/*exact 意味着精确匹配 当为 / 时才跳转 /home 不是包含 / 就跳转到 /home*/}
//         {/**!/*/}
//         {/*<Redirect to='/404'></Redirect>*/}
//       </Switch>
//     )
//   }
// }

export default renderRoutesMap;
