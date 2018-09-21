// @flow
import FontAwesome from 'react-fontawesome'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import React from 'react'

import styles from 'src/consts/styles'

type propTypes = {|
  signIn: boolean,
  strings: {
    signInWithOther: string,
    signUpWithOther: string,
  },
|}

const OtherAccount = (props: propTypes) => {
  const {strings, signIn} = props
  const {global, login} = styles

  return (
    <div className='other-account-container'>
      { /*language=CSS*/ }
      <style jsx>{`
        .text{
          line-height: 28px;
        }
        .text-container{
          display: flex;
          flex: 0 0 50%;
          min-width: 50%;
          justify-content: flex-start;
        }
        .other-account-container{
          padding: 10px 20px;
          font-size: 12px;
          background: ${login.color.otherAccountBackgroundColor};
          border-top: 1px solid ${login.color.otherAccountBorderColor};
          border-bottom-left-radius: ${global.size.borderRadiusSize};
          border-bottom-right-radius: ${global.size.borderRadiusSize};
          display: flex;
        }
        .icon-container{
          display: flex;
          flex: 0 0 50%;
          min-width: 50%;
          justify-content: flex-end;
        }
        .social-icon-wrapper {
          width: 28px;
          height: 28px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: ${login.color.otherAccountBorderColor};
          border: 2px solid ${login.color.otherAccountBorderColor};
          border-radius: 50%;
          margin: 0 4px;
          transition: all ${global.duration.transition};
        }
        .social-icon-wrapper:hover {
          cursor: pointer;
        }
        .twitter:hover {
          cursor: pointer;
          color: skyblue;
          border-color: skyblue;
        }
        .google:hover {
          color: red;
          border-color: red;
        }
        .facebook:hover {
          color: dodgerblue;
          border-color: dodgerblue;
        }
      `}</style>
      <div className='text-container'>
        {signIn 
          ? <span className='text'>{strings.signInWithOther}</span> 
          : <span className='text'>{strings.signUpWithOther}</span>
        }
      </div>
      <div className='icon-container'>
        <div className='social-icon-wrapper twitter'>
          <FontAwesome className='social-button twitter' name='twitter'/>
        </div>
        <div className='social-icon-wrapper google'>
          <FontAwesome className='social-button google' name='google'/>
        </div>
        <div className='social-icon-wrapper facebook'>
          <FontAwesome className='social-button facebook' name='facebook'/>
        </div>
      </div>
    </div>
  )
}

OtherAccount.propTypes = {
  strings: PropTypes.shape ({
    signInWithOther: PropTypes.string.isRequired,
    signUpWithOther: PropTypes.string.isRequired,
  }).isRequired
}

const mapStateToProps = (state) => {
  return {
    strings: state.translate.strings.loginPage.otherAccount
  }
}

export default connect(mapStateToProps)(OtherAccount)