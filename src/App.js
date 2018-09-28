import React from 'react';
import {Switch} from 'react-router-dom'

import Routes from './views/Routes'
import styles from 'src/consts/styles'

const App = () => {
  const {global} = styles
  return (
      <div className='app-wrapper'>
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
            margin: 0 !important;
            padding: 0 !important;
            font-weight: normal;
            background: ${global.color.bodyBackgroundColor};
            overflow: auto;
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
            transition: all ${global.duration.transitionMode};
            transition-duration: ${global.duration.transition};
          }
          .pulse:hover{
            cursor: pointer;
            transform: scale3d(1.1, 1.1, 1);
          }
          .pulse:active{
            transform: scale3d(0.9, 0.9, 1);
          }
          ::-webkit-scrollbar {
            width: 0;
            background: transparent;
            display: none;
          }
          ::-webkit-scrollbar-thumb {
            background: transparent;
          }
        `}</style>

        <Switch>
          <Routes/>
        </Switch>
      </div>
  )
}

export default App