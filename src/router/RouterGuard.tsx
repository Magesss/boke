import React,{Component,Fragment} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import renderRoutesMap from './index'
import {white} from "color-name";



const mapStateToProps = (state:any) => (state)
const mapDispatchToProps = (dispatch:any) => ({ ...dispatch })

class RouterGuard extends Component{
  // constructor(props:any) {
  //   super()
  // }
  componentDidMount() {
    // @ts-ignore
    let {history: {replace}, location} = this.props
    let whiteList:Array<string> = ['/login'] // 登录之前能去的路由， 登录之后不能去的路由
    let isWhite:number = whiteList.findIndex((v) => {
      return location.pathname.includes(v)
    })
    // 未登录 无权限
    if (!sessionStorage.getItem('access_token')) {
      // -> whiteList / 不阻止   不是 whiteList -> /login
      if(isWhite === -1) {
        replace('/login')
      }
    } else {
      //  有权限  -> login / register -> /home
      if(isWhite > -1) {
        replace('/home')
      }
    }
  }
  render() {
    // @ts-ignore
    let { component, routes = [] } = this.props
    const LoadableComponent = component
    return (
      <Fragment>
        <LoadableComponent {...this.props} />
        {renderRoutesMap(routes)}
      </Fragment>
    )
  }
}
// @ts-ignore
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RouterGuard))
