// @flow
import * as React from 'react'
import DatePicker from 'react-datepicker'
import PropTypes from 'prop-types'
import ProgressButton from 'react-progress-button'

import PopUpButton from '../home/PopUpButton'
import SearchTextInput from './SearchTextInput'
import styles from 'src/consts/styles'

import 'react-datepicker/dist/react-datepicker.css';
import 'src/views/home/react-progress-button.css'
import Result from "./Result";
import {CSSTransition} from "react-transition-group";

type homeProps = {
  strings: {
    datePicker: {
      startDate: string,
      endDate: string,
    }
  },
  submit: Function,
  outFocus: Function,
  onFocus: Function,
}

type homeState = {
  startDate: {} | null,
  endDate: {} | null,
  buttonState: string,
  redirect: boolean,
}

class Page extends React.Component <homeProps, homeState> {
  constructor(props: homeProps) {
    super(props)
    this.state = {
      startDate: null,
      endDate: null,
      buttonState: '',
      redirect: false,
    }
  }

  handleChangeStart = (date: {}) => {
    this.setState({...this.state, startDate: date});
  }

  handleChangeEnd = (date: {}) => {
    this.setState({...this.state, endDate: date});
  }

  backClick = () => {
    this.setState({...this.state, redirect: false, buttonState: ''})
  }

  handleClick = () => {
    const {submit} = this.props
    this.setState({...this.state, buttonState: 'loading'})

    submit({formValues: {}})

    setTimeout(() => {
      this.setState({...this.state, buttonState: 'success'}, () => {
        setTimeout(() => {
          this.setState({...this.state, redirect: true})
        }, 1000)
      })
    }, 3000)
  }

  render() {
    const {strings, onFocus, outFocus} = this.props
    const {home} = styles
    return (
        <div className='page-wrapper'>
          {/*language=SCSS*/}
          <style jsx>{`
            .page-wrapper {
              overflow: hidden;
              background: radial-gradient(ellipse at center, #163039 0%, #000001 98%);
              filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='$lightgrey', endColorstr='$darkgrey', GradientType=1);
              position: relative;
              z-index: 1;
            }

            .page-wrapper-index {
              overflow: hidden;
              z-index: -99;
              background-image: -webkit-repeating-linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 2px, rgba(0, 0, 0, 0.3) 3px);
              position: relative;
              height: 100vh;
            }

            .upper-home {
              display: flex;
              height: 100%;
            }
            .search-index {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              width: 100%;
            }

            .popup-container {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              width: 60%;
            }
            .search-button-container {
              z-index: 2;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              width: 100%;
              position: fixed;
              bottom: 5px;
            }
            .datepickers-holder {
              display: flex;
              flex-direction: row;
              justify-content: flex-end;
              align-items: center;
              margin-top: 15px;
            }

            :global(.date-picker-start) {
              color: ${home.color.datePickerFontColor};
              background: inherit;
              border: solid ${home.color.datePickerBorderColor};
              border-width: ${home.size.datePickerBorderSize};
              padding: ${home.size.datePickerPaddingSize};
              //margin: ${home.size.datePickerMarginSize};
              font-size: ${home.fontSize.datePickerFontSize};
              height: 25px;
              width: 160px;

              &::placeholder{
                color: ${home.color.datePickerPlaceHolderFontColor};
              }
            }

            :global(.date-picker-end) {
              color: ${home.color.datePickerFontColor};
              background: inherit;
              border: solid ${home.color.datePickerBorderColor};
              border-right: none;
              border-width: ${home.size.datePickerBorderSize};
              padding: ${home.size.datePickerPaddingSize};
              //margin: ${home.size.datePickerMarginSize};
              font-size: ${home.fontSize.datePickerFontSize};
              height: 25px;
              width: 160px;

              &::placeholder{
                color: ${home.color.datePickerPlaceHolderFontColor};
              }
            }

            .inner {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              align-content: center;
            }

            :global(.page-go-down-enter) {
              position: relative;
              bottom: -1000px;
              transition: all 400ms ease-in;
            }

            :global(.page-go-down-enter-active) {
              transform: translateY(-1000px);
            }

            :global(.page-go-down-exit) {
              transition: all 400ms ease-in;
              bottom: 0;
            }

            :global(.page-go-down-exit-active){
              transform: translateY(1000px);
            }

            :global(.page-go-top-enter) {
              position: relative;
              top: 0;
              transition: all 400ms ease-in;
            }

            :global(.page-go-top-enter-active) {
              transform: translateY(1000px);
            }

            :global(.page-go-top-exit) {
              transition: all 400ms ease-in;
              bottom: 0;
            }

            :global(.page-go-top-exit-active){
              transform: translateY(-1000px);
            }

          `}</style>
          <CSSTransition
              in={this.state.redirect}
              timeout={400}
              classNames={'page-go-down'}
              unmountOnExit>
            <Result backClick={this.backClick}/>
          </CSSTransition>

          <CSSTransition
              in={!this.state.redirect}
              timeout={400}
              classNames={'page-go-top'}
              unmountOnExit>

            <div className='page-wrapper-index'>
              <div className='upper-home'>
                <div className='search-index'>
                  <SearchTextInput placeholder='نام' onFocus={onFocus} outFocus={outFocus}/>
                  <SearchTextInput placeholder='رایانامه' onFocus={onFocus} outFocus={outFocus}/>
                  <div className='datepickers-holder'>
                    <DatePicker
                        selected={this.state.startDate}
                        selectsStart
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onChange={this.handleChangeStart}
                        placeholderText={strings.datePicker.startDate}
                        className='date-picker-start'
                    />

                    <DatePicker
                        selected={this.state.endDate}
                        selectsEnd
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onChange={this.handleChangeEnd}
                        placeholderText={strings.datePicker.endDate}
                        className='date-picker-end'
                    />
                  </div>
                </div>
                <div className='popup-container'>
                  <PopUpButton/>
                </div>
              </div>
              <div className='search-button-container'>
                <div className='inner'>
                  <ProgressButton onClick={this.handleClick} state={this.state.buttonState}>
                    جست و جو
                  </ProgressButton>
                </div>
              </div>
            </div>
          </CSSTransition>
        </div>
    )
  }

}

Page.propTypes = {
  strings: PropTypes.object.isRequired,
  onFocus: PropTypes.func.isRequired,
  outFocus: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
}

export default Page