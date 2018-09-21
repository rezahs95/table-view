// @flow
import * as React from 'react'
import SearchTextInput from './SearchTextInput'
import SearchButton from './SearchButton'
import {DateRange} from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns';

class Home extends React.Component <{}, {}> {

  constructor(props, context) {
    super(props, context);

    this.state = {
      dateRange: {
        selection: {
          startDate: new Date(),
          endDate: null,
          key: 'selection',
        },
      },
    };
  }

  handleRangeChange(which, payload) {
    console.log(which, payload);
    this.setState({
      [which]: {
        ...this.state[which],
        ...payload,
      },
    });
  }

  formatDateDisplay = (date, defaultText) => {
    if (!date) return defaultText;
    return format(date, 'MM/DD/YYYY');
  }

  render() {
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

            .daterange-picker {
              direction: ltr !important;
              text-align: left;
            }
          `}</style>

          <div className='home-wrapper-index'>
            <div className='search-index'>
              <SearchTextInput placeholder='Name'/>
              <SearchTextInput placeholder='Email'/>
              <div className='daterange-picker'>
                <DateRange
                    onChange={this.handleRangeChange.bind(this, 'dateRange')}
                    moveRangeOnFirstSelection={false}
                    ranges={[this.state.dateRange.selection]}
                    className={'PreviewArea'}
                />
              </div>
            </div>
            <SearchButton/>
          </div>


        </div>
    )
  }
}

export default Home