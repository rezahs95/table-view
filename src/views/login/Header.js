// @flow
import FontAwesome from 'react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'
import {connect} from 'react-redux'

import styles from 'src/consts/styles'
import {LogoDaneshBoom} from 'src/images/Icons'

type propTypes = {|
  address: string,
  androidLink: string,
  iosLink: string,
  logoCaption: string,
  phoneNumber: string,
  strings: {
    daneshBoom: string
  },
|}

const Header = (props: propTypes) => {
  const {address, androidLink, iosLink, logoCaption, phoneNumber, strings} = props
  const {global, login} = styles

  return(
    <div className='header-login'>
      { /*language=CSS*/ }
      <style jsx>{`
        .header-login {
          display: flex;
          align-items: center;
          color: #fff;
          padding: 0 15px;
          margin-bottom: 120px;
          flex-flow: row wrap;
        }
        .header-part{
          flex: 0 0 50%;
          max-width: 50%;
          display: flex;
        }
        .daneshboom-logo{
          flex: 0 0 50px;
          height: 48px;
        }
        .daneshboom-text{
          flex: 0 0 125px;
          font-size: 30px;
          margin: 0 10px 0 0;
        }
        .divider{
          border: 1.25px solid #fff;
          width: 0;
          height: 36px;
          margin: 8px;
        }
        .logo-caption{
          flex: 0 0 70px;
          min-width: 70px;
          font-size: 12px;
          color: ${login.color.loginPageTextColor};
          margin: 8px;
        }
        .address-wrapper{
          justify-content: flex-end;
        }
        .icon{
          color: ${global.color.iconColor};
          font-size: ${global.fontSize.iconFontSize};
          border-radius: 50%;
          width: ${global.size.iconSize};
          height: ${global.size.iconSize};
          background:  ${global.color.iconBgColor};
          text-align: center;
          line-height: ${global.size.iconLineHeight};
          min-width: ${global.size.iconSize};
        }
        .address-part{
          display: flex;
          margin-left: 40px;
        }
        .phone-icon{
          margin-left: 20px;
        }
        .phone-number{
          font-size: 14px;
        }
        .address{
          font-size: 12px;
        }
        .app-icon-part{
          display: flex;
        }
        .app-icon{
          margin-right: 10px;
        }
        @media screen and (max-width: 990px){
          .header-part{
            flex: 0 0 100%;
            max-width: 100%;
          }
          .address-wrapper{
            justify-content: flex-start;
            margin-top: 20px;
          }
        }
      `}</style>
      <div className='header-part'>
        <img className='daneshboom-logo' src={LogoDaneshBoom} alt='logo-danesh-boom'/>
        <div className='daneshboom-text'>{strings.daneshBoom}</div>
        <div className='divider'></div>
        <div className='logo-caption'>{logoCaption}</div>
      </div>
      <div className='header-part address-wrapper'>
        <div className='address-part'>
          <div className='icon phone-icon'>
            <FontAwesome name="phone"/>
          </div>
          <div className='address-text'>
            <div className="phone-number">{phoneNumber}</div>
            <div className="address">{address}</div>
          </div>
        </div>
        <div className='app-icon-part'>
          <a href={androidLink}>
            <div className='icon app-icon'>
              <FontAwesome name="android"/>
            </div>
          </a>
          <a href={iosLink}>
            <div className='icon app-icon'>
              <FontAwesome name="apple"/>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  address: PropTypes.string.isRequired,
  androidLink: PropTypes.string.isRequired,
  iosLink: PropTypes.string.isRequired,
  logoCaption: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  strings: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
  return {
    strings: state.translate.strings.loginHeader
  }
}

export default connect(mapStateToProps)(Header)