import React from 'react'
import {Switch} from 'react-router-dom'

import Home from './home'
import Result from './result'
import routes from 'src/consts/routes'
import PrivateRoute from './PrivateRoute'

const Routes = (props) => {
  return(
    <Switch>
      <PrivateRoute exact={true} path='/' component={Home}/>
      <PrivateRoute path={routes.RESULT} component={Result}/>
    </Switch>
  )
}

export default Routes