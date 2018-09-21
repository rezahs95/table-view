// @flow
import PropTypes from 'prop-types'
import React from 'react'
import {connect} from 'react-redux'

import styles from 'src/consts/styles'

type propTypes = {|
  strings: {
    copyright: string
  },
  year: string,
|}

const Footer = (props: propTypes) => {
  const {strings, year} = props
  const {login} = styles

  return(
    <div className='footer'>
      { /*language=CSS*/ }
      <style jsx>{`
        .footer{
          position: absolute;
          height: 60px;
          bottom: 0;
          right: 0;
          width: 100%;
          color: ${login.color.loginPageTextColor};
          font-size: 13px;
          text-align: center;
        }
      `}</style>
      
      {`${year} ${strings.copyright}`}
    </div>
  )
}

Footer.propTypes = {
  strings: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
  return {
    strings: state.translate.strings.loginFooter
  }
}

export default connect(mapStateToProps)(Footer)