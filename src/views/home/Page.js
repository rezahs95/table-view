// @flow
import * as React from 'react'
import DatePicker from 'react-datepicker'
import ProgressButton from 'react-progress-button'
import PropTypes from 'prop-types'
import moment from 'moment'

import PopUpButton from '../home/PopUpButton'
import SearchTextInput from './SearchTextInput'
import styles from 'src/consts/styles'
import {CSSTransition} from "react-transition-group";
import constants from 'src/consts/constants'

import 'react-datepicker/dist/react-datepicker.css';
import 'src/styles/home/react-progress-button.css'
import BackgroundColor from "../../images/home/BackgroundColor";
import {Redirect} from "react-router-dom";
import routes from 'src/consts/routes'

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
  color: string,
  submit: Function,
  onFocus: Function,
  outFocus: Function,
  preview: boolean,
  onHomePage: Function,
  outHomePage: Function,
  tableName: string,
  history: {
    push: Function,
  },
  setColor: Function,
  tableNameServer: string,
}

type homeState = {
  startDate: string | null,
  endDate: string | null,
  buttonState: string,
  redirectLocal: boolean,
  name: string,
  email: string,
  colorsPreview: boolean,
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
      colorsPreview: true,
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
  handleSubmitClick = () => {
    const {submit, outHomePage, tableNameServer} = this.props
    const {name, email, startDate, endDate} = this.state
    this.setState({...this.state, buttonState: 'loading'})
    const filter = {pageNumber: 1, tableName: tableNameServer, resultNumber: constants.resultPage, name, email,
      startDate: startDate !== null ? startDate.format('YYYY-MM-DD') : moment('0001-01-01').format('YYYY-MM-DD'),
      endDate: endDate !== null ? endDate.format('YYYY-MM-DD'): moment('9999-12-27').format('YYYY-MM-DD')}
    submit({formValues: filter})
    outHomePage()
    setTimeout(() => {
      this.setState({...this.state, buttonState: 'success'}, () => {
        setTimeout(() => {
          // this.setState({...this.state, redirectLocal: true})

          this.props.history.push({
            pathname: routes.RESULT,
            state: {
              color: this.props.color,
              page: this.props.page,
            }
          });
        }, 1000)
      })
    }, 3000)
  }
  previewClick = () => {
    const {colorsPreview} = this.state
    if (colorsPreview) {
      this.setState({...this.state, colorsPreview: false});
    } else {
      this.setState({...this.state, colorsPreview: true});
    }
  }
  onRedClick = () => {
    const {setColor, page} = this.props
    setColor({index: page, color: '#f50057'})
  }
  onBlueClick = () => {
    const {setColor, page} = this.props
    setColor({index: page, color: '#03a9f4'})
  }
  onGreenClick = () => {
    const {setColor, page} = this.props
    setColor({index: page, color: '#7cb342'})
  }
  onYellowClick = () => {
    const {setColor, page} = this.props
    setColor({index: page, color: '#ffd54f'})
  }
  onWhiteClick = () => {
    const {setColor, page} = this.props
    setColor({index: page, color: '#ba68c8'})
  }

  render() {
    const {strings, onFocus, outFocus, page, tableName, preview, color} = this.props
    const {redirectLocal} = this.state
    const {home, global} = styles
    const pageLeft = `${page * 100}%`
    const backgColor = `radial-gradient(ellipse at center, ${color} 0%, #000001 98%)`

    return (
        <div className='page-wrapper'>
          {/*language=SCSS*/}
          <style jsx>{`
            .page-wrapper {
              position: absolute;
              width: 100%;
              top: 0;
              left: ${pageLeft};
              background: ${backgColor};

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
              .color-button {
                position: absolute;
                display: block;
                z-index: 100;
                right: 0;
                color: white;
                background: transparent;
                margin: 20px;
              }
              .colors {
                z-index: 200;
                position: fixed;
                visibility: ${this.state.colorsPreview === true ? 'hidden' : 'visible'};
                transition: visibility 1.5s;
              }
              .color1 {
                position: absolute;
                display: block;
                background-color: red;
                width: 15px;
                height: 15px;
                right: 70px;
                top: 30px;
                border-radius: 3px;
                border: solid 0.5px white;
                opacity: ${this.state.colorsPreview === true ? '0' : '1'};
                transition: opacity 0.2s;
              }
              .color2 {
                position: absolute;
                display: block;
                background-color: blue;
                width: 15px;
                height: 15px;
                right: 90px;
                top: 30px;
                border-radius: 3px;
                border: solid 0.5px white;
                opacity: ${this.state.colorsPreview === true ? '0' : '1'};
                transition: opacity 0.5s;
              }
              .color3 {
              z-index: 200;
                position: absolute;
                display: block;
                background-color: green;
                width: 15px;
                height: 15px;
                right: 110px;
                top: 30px;
                border-radius: 3px;
                border: solid 0.5px white;
                opacity: ${this.state.colorsPreview === true ? '0' : '1'};
                transition: opacity 0.8s;
              }
              .color4 {
                position: absolute;
                display: block;
                background-color: darkorange;
                width: 15px;
                height: 15px;
                right: 130px;
                top: 30px;
                border-radius: 3px;
                border: solid 0.5px white;
                opacity: ${this.state.colorsPreview === true ? '0' : '1'};
                transition: opacity 1.1s;
              }
              .color5 {
                position: absolute;
                display: block;
                background-color: violet;
                width: 15px;
                height: 15px;
                right: 150px;
                top: 30px;
                border-radius: 3px;
                border: solid 0.5px white;
                opacity: ${this.state.colorsPreview === true ? '0' : '1'};
                transition: opacity 1.4s;
              }
            }
          `}</style>
          {this.state.redirectLocal &&
          <Redirect to={routes.RESULT}/>
          }

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
                  <button onClick={this.previewClick} className='color-button pulse'><BackgroundColor width={30}
                                                                                                      height={30}/>
                  </button>
                  <div className="colors">
                    <button onClick={this.onRedClick} className="color1 pulse"/>
                    <button onClick={this.onBlueClick} className="color2 pulse"/>
                    <button onClick={this.onGreenClick} className="color3 pulse"/>
                    <button onClick={this.onYellowClick} className="color4 pulse"/>
                    <button onClick={this.onWhiteClick} className="color5 pulse"/>
                  </div>
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
                            onFocus={onFocus}
                            onBlur={outFocus}
                            placeholderText={strings.datePicker.startDate}
                            dateFormat="YYYY-MM-DD"
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
                            onFocus={onFocus}
                            onBlur={outFocus}
                            placeholderText={strings.datePicker.endDate}
                            dateFormat="YYYY-MM-DD"
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
  color: PropTypes.string.isRequired,
  tableName: PropTypes.string.isRequired,
  preview: PropTypes.bool.isRequired,
  submit: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  outFocus: PropTypes.func.isRequired,
  onHomePage: PropTypes.func.isRequired,
  outHomePage: PropTypes.func.isRequired,
  setColor: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  tableNameServer: PropTypes.string.isRequired,
}

export default Page