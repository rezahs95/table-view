// @flow
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import React from 'react'
import {Formik} from 'formik'

import styles from 'src/consts/styles'

type propTypes = {|
  onSubmit: Function,
  strings: {
    email: string,
    password: string,
    passwordAgain: string,
    signUp: string,
    username: string,
    person: string,
    organization: string,
  },
|}

let SignUpForm = (props: propTypes) => {
  const {onSubmit, strings} = props
  const {globalStyles, loginPageStyles} = styles

  return (
    <div className='login-form-container'>
      <style jsx>{`
        .login-form-container{
          padding: 20px;
          flex: 1 1 auto;
        }
        .login-form-container :global(.text-input-login-form){
          outline: none;
          color: ${loginPageStyles.color.loginTextFieldColor};
          margin-bottom: 10px;
          padding: 5px 10px;
          font-size: 15px;
          width: 100%;
          border: 1px solid ${loginPageStyles.color.loginTextFieldBorderColor};
          border-radius: ${globalStyles.size.borderRadiusSize};
          transition: all ${globalStyles.duration.transition};
        }
        .login-form-container :global(.text-input-login-form::placeholder){
          color: ${loginPageStyles.color.loginTextFieldPlaceholderColor};
        }
        .login-form-container :global(.text-input-login-form:focus){
          border-color: ${loginPageStyles.color.signInButtonColor};
        }
        .radio-button-container{
          display: flex;
          font-size: 16px;
          margin: 0 0 10px 0;
        }
        .submit-button{
          display: block;
          background: ${loginPageStyles.color.signInButtonColor};
          border: 0px;
          width: 100%;
          padding: 8px;
          color: #fff;
          font-size: 15px;
          margin: 5px 0 0 0;
          border-radius: ${globalStyles.size.borderRadiusSize};
          transition: all ${globalStyles.duration.transition};
        }
        .submit-button:hover{
          cursor: pointer;
          background: ${loginPageStyles.color.signInButtonHoverColor};
        }
        .radio-label {
          display: block;
          position: relative;
          padding-left: 40px;
          margin-bottom: 12px;
          font-size: 16px;
        }
        .radio-label :global(input) {
          position: absolute;
          opacity: 0;
        }
        .checkmark {
          position: absolute;
          top: 2px;
          left: 10px;
          height: 20px;
          width: 20px;
          background: #fff;
          border: 3px solid ${loginPageStyles.color.radioButtonColor};
          border-radius: 50%;
        }
        .checkmark:after {
          content: '';
          position: absolute;
          opacity: 0;
          top: 3px;
          left: 3px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: ${loginPageStyles.color.radioButtonColor};
          transition: all ${globalStyles.duration.transition};
        }
        .radio-label :global(input:checked ~ .checkmark:after) {
          opacity: 1;
        }
      `}</style>
      <Formik 
        initialValues={
          { 
            userType: 'person',
            username: '',
            email: '',
            password: '',
            passwordAgain: '',
          }
        }
        render={
          ({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
            <form onSubmit={onSubmit} method='POST'>
              <div className='radio-button-container'>
                <label className='radio-label'>
                  {strings.person}
                  <input name='userType' type='radio' checked={values.userType === 'person'} value='person' onChange={handleChange} onBlur={handleBlur}/>
                  <span className='checkmark'></span>
                </label>
                <label className='radio-label'>
                  {strings.organization}
                  <input name='userType' type='radio' checked={values.userType === 'organization'} value='organization' onChange={handleChange} onBlur={handleBlur}/>
                  <span className='checkmark'></span>
                </label>
              </div>
              <input className='text-input-login-form' name='username' type='text' placeholder={strings.username} onChange={handleChange} onBlur={handleBlur} value={values.username} />
              <input className='text-input-login-form' name='email' type='text' placeholder={strings.email} onChange={handleChange} onBlur={handleBlur} value={values.email} />
              <input className='text-input-login-form' name='password' type='text' placeholder={strings.password} onChange={handleChange} onBlur={handleBlur} value={values.password} />
              <input className='text-input-login-form' name='passwordAgain' type='text' placeholder={strings.passwordAgain} onChange={handleChange} onBlur={handleBlur} value={values.passwordAgain} />
              <button className='submit-button' type='submit'>{strings.signUp}</button>
            </form>
          )
        }
      />
    </div>
  )
}

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  strings: PropTypes.shape ({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    passwordAgain: PropTypes.string.isRequired,
    signUp: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    person: PropTypes.string.isRequired,
    organization: PropTypes.string.isRequired,
  }).isRequired
}

const mapStateToProps = (state) => {
  return {
    strings: state.translate.strings.signUpForm
  }
}

export default connect(mapStateToProps)(SignUpForm)