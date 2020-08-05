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
