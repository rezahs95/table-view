// @flow
import React, {Component} from 'react'

import Footer from './Footer'
import Header from './Header'
import Content from './Content'

import LoginBg from '../../images/login/LoginBg.jpg'

type stateTypes = {|
  footer: {|
    year: string,
  |},
  header: {|
    iosLink: string,
    androidLink: string,
    address: string,
    phoneNumber: string,
    logoCaption: string
  |},
|}

class Login extends Component<{}, stateTypes> {
  constructor(props: {}) {
    super(props)
    //TODO: get this from server
    this.state = {
      footer: {
        year: '1397'
      },
      header: {
        iosLink: '#',
        androidLink: '#',
        address: 'انقلاب روبروی دانشگاه تهران مجتمع پارسا',
        phoneNumber: '02166972207',
        logoCaption: 'اکوسیستم دانش بنیان',
      }
    }
  }

  render() {
    const {header, footer} = this.state
    const {iosLink, androidLink, address, phoneNumber, logoCaption} = header
    const {year} = footer

    return(
      <div className='login-wrapper'>
        { /*language=CSS*/ }
        <style jsx>{`
          .login-wrapper {
            min-height: 100%;
            padding-top: 20px;
            user-select: none;
          }
          .login-container {
            max-width: 1070px;
            margin: 0 auto;
            padding: 0px 20px;
          }
          .background-login{
            background-image: url(${LoginBg});
            height: 100vh;
            background-repeat: no-repeat;
            background-size: cover;
            filter: blur(10px);
            position: fixed;
            left: -15px;
            right: -15px;
            top: 3px;
            z-index: -10;
          }
        `}</style>

        <div className='background-login'></div>
        <div className='login-container'>
          <Header iosLink={iosLink} androidLink={androidLink} address={address} phoneNumber={phoneNumber} logoCaption={logoCaption}/>
          <Content />
          <Footer year={year}/>
        </div>
      </div>
    )
  }
}

export default Login