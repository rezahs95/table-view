import React from 'react';
import {Switch} from 'react-router-dom'

import Routes from './views/Routes'
import Login from './views/login'
import PublicRoute from './views/PublicRoute'
import routes from 'src/consts/routes'
import styles from 'src/consts/styles'

const App = () => {
  const {global} = styles
  return (
      <div className='App'>
        {/*language=SCSS*/}
        <style jsx global>{`
          * {
            font-family: 'IRANSansWebFaNum';
            direction: rtl;
            box-sizing: border-box;
            outline: none;
            border: 0;
          }
          *:focus {
            outline: none;
          }
          body {
            margin: 0;
            padding: 0;
            font-weight: normal;
          }
          a, a:hover, a:focus {
            text-decoration: none !important;
          }
          img {
            vertical-align: middle;
          }
          table {
            border-spacing: 0;
          }
          .pulse{
            transition: all ${global.duration.transition};
          }
          .pulse:hover{
            cursor: pointer;
            transform: scale3d(1.1, 1.1, 1);
          }
          .pulse:active{
            transform: scale3d(0.9, 0.9, 1);
          }
        `}</style>

        <Switch>
          <PublicRoute path={routes.LOGIN} component={Login}/>
          <Routes/>
        </Switch>
      </div>
  )
}

export default App