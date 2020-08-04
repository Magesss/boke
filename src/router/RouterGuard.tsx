import React,{Component,Fragment} from 'react'
import {withRouter, RouteComponentProps} from 'react-router-dom'
import {connect} from 'react-redux'
import renderRoutesMap from './index'



const mapStateToProps = (state:any) => (state)
const mapDispatchToProps = (dispatch:any) => ({ ...dispatch })

class RouterGuard extends Component{
  // constructor(props:any) {
  //   super()
  // }
  componentDidMount() {
    // @ts-ignore
    let {history: {replace}, location} = this.props
    let whiteList:Array<string> = ['/login']
    if (!sessionStorage.getItem('access_token')) replace('/login')
    if (location.pathname === '/') replace('./home')
    // 屏蔽 登录后不能去的页面
    const i:number = whiteList.findIndex((v) => {
      return location.pathname.includes(v)
    })
    if(i > -1) replace('/home')
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
