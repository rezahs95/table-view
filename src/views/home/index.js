// @flow
import * as React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'

import PopUpButton from '../home/PopUpButton'
import SearchTextInput from './SearchTextInput'
import SearchButton from './SearchButton'
import styles from 'src/consts/styles'

import 'react-datepicker/dist/react-datepicker.css';

type homeState = {
  page: number,
  startDate: {} | null,
  endDate: {} | null,
}
class Home extends React.Component <{}, homeState> {
  numberOfPages: number
  constructor(props: {}){
    console.log(moment(), 'sssss')
    super(props)
    this.state = {
      page: 0,
      startDate: null,
      endDate: null,
    }
    this.numberOfPages = 5
  }
  componentDidMount() {
    document.addEventListener('keydown', this.keyDownFunction, false)
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyDownFunction, false)
  }

  keyDownFunction = (event: SyntheticKeyboardEvent<>) => {
    // 37 - left
    // 39 - right
    const {page} = this.state
    if(event.keyCode === 37 && page > 0){
      this.setState({...this.state, page: page - 1})
    }
    else if(event.keyCode === 39 && page < this.numberOfPages){
      this.setState({...this.state, page: page + 1})
    }
  }

  handleChangeStart = (date: {}) => {
    this.setState({...this.state, startDate: date});
  }

  handleChangeEnd = (date: {}) => {
    this.setState({...this.state, endDate: date});
  }

  render() {
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

            .search-index {
              display: flex;
            }

            :global(.date-picker) {
              color: ${home.color.datePickerFontColor};
              background: inherit;
              border: solid ${home.color.datePickerBorderColor};
              border-width: ${home.size.datePickerBorderSize};
              padding: ${home.size.datePickerPaddingSize};
              margin: ${home.size.datePickerMarginSize};
              font-size: ${home.fontSize.datePickerFontSize};

              &::placeholder{
                color: ${home.color.datePickerPlaceHolderFontColor};
              }
            }

          `}</style>

          <div className='home-wrapper-index'>
            <div className='search-index'>
              <SearchTextInput placeholder='Name'/>
              <SearchTextInput placeholder='Email'/>
              <DatePicker
                  selected={this.state.startDate}
                  selectsStart
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                  onChange={this.handleChangeStart}
                  placeholderText={'تاریخ شروع'}
                  className='date-picker'
              />

              <DatePicker
                  selected={this.state.endDate}
                  selectsEnd
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                  onChange={this.handleChangeEnd}
                  placeholderText={'تاریخ پایان'}
                  className='date-picker'
              />
            </div>
            <PopUpButton/>
            <SearchButton/>
          </div>
        </div>
    )
  }
}

export default Home