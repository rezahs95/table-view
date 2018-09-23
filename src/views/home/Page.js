// @flow
import * as React from 'react'
import DatePicker from 'react-datepicker'
import PropTypes from 'prop-types'

import PopUpButton from '../home/PopUpButton'
import SearchTextInput from './SearchTextInput'
import SearchButton from './SearchButton'
import styles from 'src/consts/styles'

import 'react-datepicker/dist/react-datepicker.css';

type homeProps = {
  strings: {
    datePicker: {
      startDate: string,
      endDate: string,
    }
  },
  outFocus: Function,
  onFocus: Function,
}

type homeState = {
  startDate: {} | null,
  endDate: {} | null,
}

class Page extends React.Component <homeProps, homeState> {
  constructor(props: homeProps) {
    super(props)
    this.state = {
      startDate: null,
      endDate: null,
    }
  }

  handleChangeStart = (date: {}) => {
    this.setState({...this.state, startDate: date});
  }

  handleChangeEnd = (date: {}) => {
    this.setState({...this.state, endDate: date});
  }

  render() {
    const {strings, onFocus, outFocus} = this.props
    const {home} = styles
    return (
        <div className='home-wrapper'>
          {/*language=SCSS*/}
          <style jsx>{`
            .home-wrapper {
              min-height: 100%;
              background: radial-gradient(ellipse at center, #163039 0%, #000001 98%);
              filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='$lightgrey', endColorstr='$darkgrey', GradientType=1);
              background-size: cover;
              position: fixed;
              left: 0;
              top: 0;
              bottom: 0;
              right: 0;
            }

            .home-wrapper-index {
              z-index: -99;
              position: fixed;
              left: 0;
              top: 0;
              bottom: 0;
              right: 0;
              background-image: -webkit-repeating-linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 2px, rgba(0, 0, 0, 0.3) 3px);
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
              justify-content: flex-end;
              align-items: center;
              width: 100%;
              position: fixed;
              bottom: 6px;
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

          `}</style>

          <div className='home-wrapper-index'>
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
              <SearchButton/>
            </div>
          </div>
        </div>
    )
  }
}

Page.propTypes = {
  strings: PropTypes.object.isRequired,
  onFocus: PropTypes.func.isRequired,
  outFocus: PropTypes.func.isRequired,
}

export default Page