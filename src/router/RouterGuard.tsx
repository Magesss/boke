import React,{Component} from 'react'
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
    if (!sessionStorage.getItem('access_token')) replace('/login')
    if (location.pathname === '/') replace('./home')
  }
  render() {
    // @ts-ignore
    let { component, routes = [] } = this.props
    console.log('routes: ', routes)
    const LoadableComponent = component
    return (
      <div>
        <LoadableComponent {...this.props} />
        {renderRoutesMap(routes)}
      </div>
    )
  }
}
// @ts-ignore
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RouterGuard))
