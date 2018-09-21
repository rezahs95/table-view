// @flow
import * as React from 'react'

import SearchTextInput from './SearchTextInput'

const Home = (props: {}) => {
  return (
      <div className='home-wrapper'>
        {/*language=SCSS*/}
        <style jsx>{`
          .home-wrapper {
            min-height: 100%;
            background: radial-gradient(ellipse at center, #163039 0%, #000001 98%);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='$lightgrey', endColorstr='$darkgrey', GradientType=1);
            background-size: cover;
            position: fixed;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
          }
          .home-wrapper-index {
            z-index: -99;
            position: fixed;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            background-image: -webkit-repeating-linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 2px, rgba(0, 0, 0, 0.3) 3px);
          }
        `}</style>

        <div className='home-wrapper-index'>
          <SearchTextInput placeholder='Name'/>
          <SearchTextInput placeholder='Email'/>
        </div>


      </div>
  )
}

export default Home