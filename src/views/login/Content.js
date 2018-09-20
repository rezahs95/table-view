// @flow
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import PropTypes from 'prop-types'
import React, {Component} from 'react'

import OtherAccount from './OtherAccount'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'
import AuthActions from 'src/redux/actions/authActions'

import styles from 'src/consts/styles'

type propTypes = {|
  strings: {
    signIn: string,
    signUp: string,
  },
  actions: {
    signIn: Function,
  },
|}

type stateTypes= {|
  isSignIn: boolean,
|}

class Content extends Component<propTypes, stateTypes> {
  constructor(props: propTypes) {
    super(props)
    this.state = {
      isSignIn: true
    }
  }

  _userExist = data => {
    console.log(data)
  }

  _userNotExist = data => {
    console.log(data)
  }

  componentDidMount(){
    const {actions} = this.props
    const {signIn} = actions
    signIn('mhooshdar_org', '12345678aA', true)
  }

  _submitSignIn = values => {
    console.log(values)
  }
  _submitSignUp = values => {
    console.log(values)
  }
  _signInClicked = (event: SyntheticEvent<HTMLButtonElement>) =>{
    this.setState({...this.state, isSignIn: true})
  }
  _signUpClicked = (event: SyntheticEvent<HTMLButtonElement>) =>{
    this.setState({...this.state, isSignIn: false})
  }

  render() {
    const {strings} = this.props
    const {globalStyles, loginPageStyles} = styles

    return(
      <div className='login-body-container'>
        <style jsx>{`
          @keyframes open1 {
            from {
              max-height: 0;
            }
            to {
              max-height: 390px;
            }
          }
          @keyframes open2 {
            from {
              max-height: 0;
            }
            to {
              max-height: 390px;
            }
          }
          .login-body-container{
            display: flex;
            flex-flow: row wrap;
          }
          .carousel-container{
            flex: 1 1 500px;
            min-width: 500px;
          }
          .login-card-container {
            display: flex;
            overflow-y: hidden;
            flex-direction: column;
            flex: 0 0 320px;
            min-width: 320px;
            margin: auto;
            background: #fff;
            border-radius: ${globalStyles.size.borderRadiusSize};
          }
          .form-container-sign-in{
            animation: open1 1000ms ease-in-out forwards;
          }
          .form-container-sign-up{
            animation: open2 1000ms ease-in-out forwards;
          }
          .login-buttons-container{
            display: flex;
          }
          .card-button{
            flex: 0 0 50%;
            min-width: 50%;
            text-align: center;
            padding: 10px 0;
            font-size: 14px;
            border: 1px solid #fff;
            border-radius: ${globalStyles.size.borderRadiusSize};
            transition: background ${globalStyles.duration.transition};
          }
          .sign-up{
            background: ${loginPageStyles.color.cardButtonsColor};
            border-radius: ${globalStyles.size.borderRadiusSize} 0;
            color: ${loginPageStyles.color.cardButtonsTextColor};
            border-bottom-color: ${loginPageStyles.color.cardButtonsBorderColor};
            border-right-color: ${loginPageStyles.color.cardButtonsBorderColor};
            border-top-color: ${loginPageStyles.color.cardButtonsColor};
            border-left-color: ${loginPageStyles.color.cardButtonsColor};
          }
          .sign-up:hover{
            cursor: pointer;
            background: ${loginPageStyles.color.cardButtonsHoverColor};
          }
          .sign-in{
            background: ${loginPageStyles.color.cardButtonsColor};
            border-radius: 0 ${globalStyles.size.borderRadiusSize};
            color: ${loginPageStyles.color.cardButtonsTextColor};
            border-bottom-color: ${loginPageStyles.color.cardButtonsBorderColor};
            border-left-color: ${loginPageStyles.color.cardButtonsBorderColor};
            border-top-color: ${loginPageStyles.color.cardButtonsColor};
            border-right-color: ${loginPageStyles.color.cardButtonsColor};
          }
          .sign-in:hover{
            cursor: pointer;
            background: ${loginPageStyles.color.cardButtonsHoverColor};
          }
        `}</style>
        <div className='carousel-container'>
          Carousel
        </div>
        <div className='login-card-container'>
          <div className='login-buttons-container'>
            <div className={this.state.isSignIn ? 'card-button' : 'card-button sign-in'} onClick={this._signInClicked}>{strings.signIn}</div>
            <div className={this.state.isSignIn ? 'card-button sign-up' : 'card-button'} onClick={this._signUpClicked}>{strings.signUp}</div>
          </div>
          <div className={this.state.isSignIn ? 'form-container-sign-in' : 'form-container-sign-up'}>
            {this.state.isSignIn
              ? <SignInForm onSubmit={this._submitSignIn}/>
              : <SignUpForm onSubmit={this._submitSignUp}/>
            }
            <OtherAccount signIn={this.state.isSignIn}/>
          </div>
        </div>
      </div>
    )
  }
}

Content.propTypes = {
  strings: PropTypes.shape ({
    signIn: PropTypes.string.isRequired,
    signUp:  PropTypes.string.isRequired,
  }).isRequired,
  actions: PropTypes.shape({
    signIn: PropTypes.func.isRequired,
  }).isRequired,
}

const mapStateToProps = state => {
  return {
    strings: state.translate.strings.loginPage,
  }
}

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({
    signIn: AuthActions.signIn,
	}, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Content)