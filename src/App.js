import React from 'react';
import {Switch} from 'react-router-dom'

import Routes from './views/Routes'
import Login from './views/login'
import PublicRoute from './views/PublicRoute'
import routes from 'src/consts/routes'

const App = () => {
  return (
      <div className='App'>
        {/*language=SCSS*/}
        <style jsx global>{`
          * {
            font-family: 'IRANSansWebFaNum';
            direction: rtl;
            box-sizing: border-box;
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

          input, input:focus {
            outline: none;
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