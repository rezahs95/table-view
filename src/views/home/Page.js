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
  submit: Function,
  onFocus: Function,
  outFocus: Function,
  preview: boolean,
  onHomePage: Function,
  outHomePage: Function,
  onRedirect: Function,
  outRedirect: Function,
  tableName: string,
  activePage: number,
  homePage: boolean,
  redirect: boolean,
}

type homeState = {
  startDate: {} | null,
  endDate: {} | null,
  buttonState: string,
  redirectLocal: boolean,
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
      redirectLocal: false,
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
    const {onHomePage, outRedirect} = this.props
    onHomePage()
    outRedirect()
    this.setState({...this.state, redirectLocal: false, buttonState: ''})
  }

  handleSubmitClick = () => {
    const {submit, outHomePage, onRedirect} = this.props
    const {name, email, startDate, endDate} = this.state
    this.setState({...this.state, buttonState: 'loading'})

    submit({formValues: {name, email, startDate, endDate}})
    outHomePage()

    setTimeout(() => {
      this.setState({...this.state, buttonState: 'success'}, () => {
        setTimeout(() => {
          onRedirect()
          this.setState({...this.state, redirectLocal: true})
        }, 1000)
      })
    }, 3000)
  }


  render() {
    const {strings, onFocus, outFocus, page, tableName, preview, homePage, activePage, redirect} = this.props
    const {redirectLocal} = this.state
    const {home, global} = styles
    const pageLeft = `${page * 100}%`
    console.log(homePage, 'home pageeee')
    console.log(activePage, 'active pageeeee')
    console.log(page, 'page numberrr')
    return (
        <div className='page-wrapper'>
          {/*language=SCSS*/}
          <style jsx>{`
            .page-wrapper {
              position: absolute;
              width: 100%;
              top: 0;
              left: ${pageLeft};
              display: ${redirect ? (activePage === page ? 'block' : 'none'): 'block'};

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

                .table-name-out {
                  color: ${home.color.tableNameFontColor};
                  z-index: 10;
                  height: 100px;
                  width: 100%;
                  position: absolute;
                  text-align: center;
                  font-size: 140px;
                  bottom: -120px;
                }

                .show-page {
                  height: 100vh;

                  .table-name-wrapper {
                    position: absolute;
                    color: ${home.color.tableNameFontColor};
                    font-size: 50px;
                    text-align: center;
                    width: 100%;
                    margin-top: 20px;
                  }
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
              in={redirectLocal}
              timeout={global.duration.animationDuration}
              classNames={'page-go-down'}
              unmountOnExit>
            <Result backClick={this.backClick}/>
          </CSSTransition>

          <CSSTransition
              in={!redirectLocal}
              timeout={global.duration.animationDuration}
              classNames={'page-go-top'}
              unmountOnExit>
            <div className='page-wrapper-index'>
              {preview && <div className='table-name-out'>{tableName}</div>}
              {!preview &&
              <div className='show-page'>
                <div className='upper-home'>
                  <div className='table-name-wrapper'>{tableName}</div>
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
                    <ProgressButton onClick={this.handleSubmitClick}
                                    state={this.state.buttonState}>{strings.search}</ProgressButton>
                  </div>
                </div>
              </div>
              }
            </div>
          </CSSTransition>
        </div>
    )
  }
}

Page.propTypes = {
  strings: PropTypes.object.isRequired,
  page: PropTypes.number.isRequired,
  tableName: PropTypes.string.isRequired,
  preview: PropTypes.bool.isRequired,
  submit: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  outFocus: PropTypes.func.isRequired,
  onHomePage: PropTypes.func.isRequired,
  outHomePage: PropTypes.func.isRequired,
  onRedirect: PropTypes.func.isRequired,
  outRedirect: PropTypes.func.isRequired,
}

export default Page