// @flow
import * as React from 'react'
import DatePicker from 'react-datepicker'
import ProgressButton from 'react-progress-button'
import PropTypes from 'prop-types'

import PopUpButton from '../home/PopUpButton'
import Result from "./Result";
import SearchTextInput from './SearchTextInput'
import styles from 'src/consts/styles'
import {CSSTransition} from "react-transition-group";

import 'react-datepicker/dist/react-datepicker.css';
import 'src/styles/home/react-progress-button.css'

type homeProps = {
  strings: {
    datePicker: {
      startDate: string,
      endDate: string,
    },
    search: string,
    name: string,
    email: string,
  },
  page: number,
  activePage: number,
  preview: boolean,
  submit: Function,
  onFocus: Function,
  outFocus: Function,
  onHomePage: Function,
  outHomePage: Function,
}

type homeState = {
  startDate: {} | null,
  endDate: {} | null,
  buttonState: string,
  redirect: boolean,
  name: string,
  email: string,
}

class Page extends React.Component <homeProps, homeState> {
  constructor(props: homeProps) {
    super(props)
    this.state = {
      startDate: null,
      endDate: null,
      buttonState: '',
      redirect: false,
      name: '',
      email: '',
    }
  }

  handleChangeStart = (date: {}) => {
    this.setState({...this.state, startDate: date});
  }

  handleChangeEnd = (date: {}) => {
    this.setState({...this.state, endDate: date});
  }

  nameChange = (event: SyntheticInputEvent<EventTarget>) => {
    this.setState({...this.state, name: event.target.value})
  }

  emailChange = (event: SyntheticInputEvent<EventTarget>) => {
    this.setState({...this.state, email: event.target.value})
  }

  backClick = () => {
    const {onHomePage} = this.props
    onHomePage()
    this.setState({...this.state, redirect: false, buttonState: ''})
  }

  handleSubmitClick = () => {
    const {submit, outHomePage} = this.props
    const {name, email, startDate, endDate} = this.state
    this.setState({...this.state, buttonState: 'loading'})

    submit({formValues: {name, email, startDate, endDate}})
    outHomePage()

    setTimeout(() => {
      this.setState({...this.state, buttonState: 'success'}, () => {
        setTimeout(() => {
          this.setState({...this.state, redirect: true})
        }, 1000)
      })
    }, 3000)
  }


  render() {
    const {strings, onFocus, outFocus, preview, page, activePage} = this.props
    const {home, global} = styles
    const thumbnailLeft = `${-30 - 65 * page + activePage * 65}%`
    const pageLeft = `${page * 100}%`
    return (
        <div className='page-wrapper'>
          {/*language=SCSS*/}
          <style jsx>{`
            .page-wrapper {
              position: absolute;
              width: 100%;
              top: 0;
              left: ${pageLeft};

              background: radial-gradient(ellipse at center, #163039 0%, #000001 98%);
              filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='$lightgrey', endColorstr='$darkgrey', GradientType=1);
              z-index: 0;

              :global(.page-go-down-enter) {
                position: relative;
                bottom: -1000px;
                transition: all ${global.duration.transitionMode};
                transition-duration: ${global.duration.animationDuration}ms;
              }
              :global(.page-go-down-enter-active) {
                transform: translateY(-1000px);
              }
              :global(.page-go-down-exit) {
                transition: all ${global.duration.transitionMode};
                transition-duration: ${global.duration.animationDuration}ms;
                bottom: 0;
              }
              :global(.page-go-down-exit-active){
                transform: translateY(1000px);
              }
              :global(.page-go-top-enter) {
                position: relative;
                top: 0;
                transition: all ${global.duration.transitionMode};
                transition-duration: ${global.duration.animationDuration}ms;
              }
              :global(.page-go-top-enter-active) {
                transform: translateY(1000px);
              }
              :global(.page-go-top-exit) {
                transition: all ${global.duration.transitionMode};
                transition-duration: ${global.duration.animationDuration}ms;
                bottom: 0;
              }
              :global(.page-go-top-exit-active){
                transform: translateY(-1000px);
              }
              .page-wrapper-index {
                z-index: -1;
                background-image: -webkit-repeating-linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 2px, rgba(0, 0, 0, 0.3) 3px);
                position: relative;
                height: 100vh;

                .upper-home {
                  display: flex;
                  height: 100%;

                  .search-index {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    flex: 1;

                    .date-pickers-wrapper {
                      display: flex;
                      flex-direction: row;
                      justify-content: flex-end;
                      align-items: center;
                      margin-top: 15px;

                      .date-pickers-container {
                        :first-child {
                          margin-right: 5%;
                        }
                        :last-child {
                          margin-left: 5%;
                        }
                      }

                      :global(.date-picker) {
                        color: ${home.color.datePickerFontColor};
                        background: inherit;
                        border: 5px solid ${home.color.datePickerBorderColor};
                        padding: 23px 0;
                        text-align: center;
                        font-size: 18px;
                        height: 25px;
                        width: 100%;

                        &::placeholder{
                          color: ${home.color.datePickerPlaceHolderFontColor};
                        }
                      }
                      :global(.date-picker-end) {
                        border-right: none;
                      }
                    }
                  }
                }
              }
              .popup-container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                flex: 1;
              }
              .search-button-container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 100%;
                position: fixed;
                bottom: 50px;

                .inner {
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  align-content: center;
                }
              }
            }
          `}</style>
          <CSSTransition
              in={this.state.redirect}
              timeout={global.duration.animationDuration}
              classNames={'page-go-down'}
              unmountOnExit>
            <Result backClick={this.backClick}/>
          </CSSTransition>

          <CSSTransition
              in={!this.state.redirect}
              timeout={global.duration.animationDuration}
              classNames={'page-go-top'}
              unmountOnExit>
            <div className='page-wrapper-index'>
              {/*<div className='thumbnail'></div>*/}
              <div className='upper-home'>
                <div className='search-index'>
                  <SearchTextInput placeholder={strings.name} textFieldChange={this.nameChange} onFocus={onFocus}
                                   outFocus={outFocus}/>
                  <SearchTextInput placeholder={strings.email} textFieldChange={this.emailChange} onFocus={onFocus}
                                   outFocus={outFocus}/>
                  <div className='date-pickers-wrapper'>
                    <div className='date-pickers-container'>
                      <DatePicker
                          selected={this.state.startDate}
                          selectsStart
                          startDate={this.state.startDate}
                          endDate={this.state.endDate}
                          onChange={this.handleChangeStart}
                          placeholderText={strings.datePicker.startDate}
                          className='date-picker'
                      />
                    </div>

                    <div className='date-pickers-container'>
                      <DatePicker
                          selected={this.state.endDate}
                          selectsEnd
                          startDate={this.state.startDate}
                          endDate={this.state.endDate}
                          onChange={this.handleChangeEnd}
                          placeholderText={strings.datePicker.endDate}
                          className='date-picker date-picker-end'
                      />
                    </div>
                  </div>
                </div>
                <div className='popup-container'><PopUpButton/></div>
              </div>
              <div className='search-button-container'>
                <div className='inner'>
                  <ProgressButton onClick={this.handleSubmitClick} state={this.state.buttonState}>{strings.search}</ProgressButton>
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
  page: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
  preview: PropTypes.bool.isRequired,
  submit: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  outFocus: PropTypes.func.isRequired,
  onHomePage: PropTypes.func.isRequired,
  outHomePage: PropTypes.func.isRequired,
}

export default Page