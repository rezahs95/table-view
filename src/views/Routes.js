import React from 'react'
import {Switch} from 'react-router-dom'

import Home from './home/index'
import PrivateRoute from './PrivateRoute'
import routes from 'src/consts/routes'

const Routes = (props) => {
  return(
    <Switch>
      <PrivateRoute exact={true} path='/' component={Home}/>
    </Switch>
  )
}

export default Routes