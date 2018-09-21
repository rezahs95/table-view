// @flow
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import React from 'react'
import {Formik} from 'formik'

import styles from 'src/consts/styles'

type propTypes = {|
  onSubmit: Function,
  strings: {
    password: string,
    passwordRecovery: string,
    rememberMe: string,
    signIn: string,
    username: string,
  },
|}

let SignInForm = (props: propTypes) => {
  const {global, login} = styles
  const {onSubmit, strings} = props

  return (
    <div className='login-form-container'>
      { /*language=CSS*/ }
      <style jsx>{`
        .login-form-container{
          animation: open 1s ease-in-out 0s 1 forwards;
          padding: 20px;
          flex: 1 1 auto;
        }
        .login-form-container :global(.text-input-login-form){
          outline: none;
          margin-bottom: 10px;
          padding: 5px 10px;
          font-size: 15px;
          width: 100%;
          color: ${login.color.loginTextFieldColor};
          border: 1px solid ${login.color.loginTextFieldBorderColor};
          border-radius: ${global.size.borderRadiusSize};
          transition: all ${global.duration.transition};
        }
        .login-form-container :global(.text-input-login-form::placeholder){
          color: ${login.color.loginTextFieldPlaceholderColor};
        }
        .login-form-container :global(.text-input-login-form:focus){
          border-color: ${login.color.signInButtonColor};
        }
        .submit-button{
          display: block;
          background: ${login.color.signInButtonColor};
          border: 0px;
          width: 100%;
          padding: 8px;
          color: #fff;
          font-size: 15px;
          margin: 5px 0 10px 0;
          border-radius: ${global.size.borderRadiusSize};
          transition: all ${global.duration.transition};
        }
        .submit-button:hover{
          cursor: pointer;
          background: ${login.color.signInButtonHoverColor};
        }
        .remember-recovery-container{
          color: ${login.color.signInButtonColor};
          font-size: 12px;
          display: flex;
          align-items: center;
        }
        .remember-me-checkbox{
          margin-right: 20px;
        }
        .password-recovery{
          margin-right: 20px;
        }
        .remember-me-label:hover, .password-recovery:hover{
          cursor: pointer;
          color: ${login.color.signInButtonHoverColor};
        }
      `}</style>
      <Formik 
        initialValues={
          { 
            username: '',
            password: '',
            rememberMe: false,
          }
        }
        render={
          ({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
            <form onSubmit={onSubmit} method='POST'>
              <input className='text-input-login-form' name='username' type='text' placeholder={strings.username} onChange={handleChange} onBlur={handleBlur}/>
              <input className='text-input-login-form' name='password' type='text' placeholder={strings.password} onChange={handleChange} onBlur={handleBlur}/>
              <button className='submit-button' type='submit'>{strings.signIn}</button>
              <div className='remember-recovery-container'>
                <input className='remember-me-checkbox' name='rememberMe' id='rememberMe' type='checkbox' checked={values.rememberMe === true} onChange={handleChange} onBlur={handleBlur}/>
                <label className='remember-me-label' htmlFor='rememberMe'>{strings.rememberMe}</label>
                <span className='password-recovery'>{strings.passwordRecovery}</span>
              </div>
            </form>
          )
        }
      />
    </div>
  )
}

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  strings: PropTypes.shape ({
    password: PropTypes.string.isRequired,
    passwordRecovery: PropTypes.string.isRequired,
    rememberMe: PropTypes.string.isRequired,
    signIn: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired
}

const mapStateToProps = (state) => {
  return {
    strings: state.translate.strings.signInForm
  }
}

export default connect(mapStateToProps)(SignInForm)