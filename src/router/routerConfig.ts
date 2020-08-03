import {
  Home, Login, Error404, Error401
} from '../pages'
const routes = [{
  path: '/home',
  component: Home,
}, {
  path: '/login',
  component: Login,
  routes: [{
    path: '/login/404',
    component: Error404
  }]
}, {
  path: '/404',
  component: Error404
}, {
  path: '/401',
  component: Error401
},
];
export default routes
