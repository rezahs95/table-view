// @flow
import {connect} from 'react-redux'
import * as React from 'react'
import PropTypes from "prop-types"

import Table from './Table'
import {resultTableData} from 'src/consts/flowTypes/index'
import {bindActionCreators} from "redux";
import OtherActions from "../../redux/actions/otherActions";
import SearchTextInput from "../home/SearchTextInput";

type resultProps = {
  strings: {
    tableHeader: {
      id: string,
      index: number,
      date: string,
      name: string,
      familyName: string,
      email: string,
    },
    back: string,
  },
  dataSet: resultTableData[],
  actions: {
    onHomePage: Function,
    outHomePage: Function,
    outFocus: Function,
    onFocus: Function,
  },
  location: {
    state: {
      color: string,
      page: number,
    }
  },
  history: {
    push: Function,
  }
}

type resultState = {
  activePage: number,
  redirectLocal: boolean,
  familyName: string,
  name: string,
  email: string,
  filter: {
    name: string,
    familyName: string,
    email: string,
  }
}

class Result extends React.Component  <resultProps, resultState> {

  constructor(props: resultProps) {
    super(props)
    this.state = {
      activePage: 15,
      redirectLocal: false,
      familyName: '',
      name: '',
      email: '',
      filter: {
        familyName: '',
        name: '',
        email: '',
      }
    }
  }

  nameChange = (event: SyntheticInputEvent<EventTarget>) => {
    this.setState({...this.state, name: event.target.value})
  }
  emailChange = (event: SyntheticInputEvent<EventTarget>) => {
    this.setState({...this.state, email: event.target.value})
  }
  familyNameChange = (event: SyntheticInputEvent<EventTarget>) => {
    this.setState({...this.state, familyName: event.target.value})
  }
  filterSubmit = () => {
    this.setState({
          ...this.state,
          filter: {
            name: this.state.name,
            familyName: this.state.familyName,
            email: this.state.email,
          }
        }
    )
  }
  backClick = () => {
    const {actions} = this.props
    const {onHomePage} = actions
    onHomePage()
    this.setState({...this.state, redirectLocal: true})

    this.props.history.push({
      pathname: '/',
      state: {
        color: this.props.location.state.color,
        page: this.props.location.state.page,
      }
    });
  }
  filterData = () => {
    console.log(this.state.filter, 'filter')
    const {dataSet} = this.props
    const {filter} = this.state
    const {name, familyName, email} = filter

    const nameFilter = name !== '' ? dataSet.filter(data => data.name.toUpperCase() === name.toUpperCase()) : dataSet
    const familyNameFilter = familyName !== '' ? nameFilter.filter(data => data.familyName.toUpperCase() === familyName.toUpperCase()) : nameFilter
    return email !== '' ? familyNameFilter.filter(data => data.email.toUpperCase() === email.toUpperCase()) : familyNameFilter
  }

  render() {
    const {strings, location, actions} = this.props
    const {onFocus, outFocus} = actions

    const backgColor = `radial-gradient(ellipse at center, ${location.state.color} 0%, #000001 98%)`
    const filteredData = this.filterData()
    return (
        <div className='result-wrapper'>
          {/*language=SCSS*/}
          <style jsx>{`
            .result-wrapper {
              position: absolute;
              top: 0;
              background: ${backgColor};
              min-height: 100%;

              display: flex;
              flex-direction: column;
              padding: 20px 10%;
              width: 100%;

              .back-button {
                position: relative;
                background: transparent;
                width: 150px;
                height: 50px;
                margin: 20px auto;
                color: #dddddd;
                font-size: 20px;
                border: 3px solid #dddddd;
                left: 0;
              }
            }

            .footer-holder {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
            }

            .text-fields-container {
              display: flex;
              justify-content: space-around;

              .filter-button {
                width: 300px;
                font-size: 18px;
                font-weight: bold;
                background: #777777;
                color: #ffffff;
                height: 85px;
                margin-top: 10px;
              }
            }

            @media screen and (max-width: 750px) {
              .result-wrapper {
                padding-left: 2%;
                padding-right: 2%;
                font-size: 14px;
              }
            }
          `}</style>
          <div className='text-fields-container'>
            <SearchTextInput placeholder={strings.tableHeader.name} outFocus={outFocus} onFocus={onFocus}
                             textFieldChange={this.nameChange}/>
            <SearchTextInput placeholder={strings.tableHeader.familyName} outFocus={outFocus} onFocus={onFocus}
                             textFieldChange={this.familyNameChange}/>
            <SearchTextInput placeholder={strings.tableHeader.email} outFocus={outFocus} onFocus={onFocus}
                             textFieldChange={this.emailChange}/>
            <button className='filter-button pulse' onClick={this.filterSubmit}>فیلتر کن</button>
          </div>
          <Table strings={strings.tableHeader} dataSet={filteredData}/>
          <div className='footer-holder'>
            <button onClick={this.backClick} className='back-button pulse'>ذخیره نتایج</button>
            <button onClick={this.backClick} className='back-button pulse'>{strings.back}</button>
          </div>
        </div>

    )
  }
}

const mapStateToProps = state => {

  return {
    strings: state.translate.strings.resultPage,
    dataSet: [
      {
        id: '1',
        name: 'رضا',
        familyName: 'رضایی',
        email: 'rezahs@aut.ac.ir',
        date: '1999/12/12',
      },
      {
        id: '2',
        name: 'رضا',
        familyName: 'رضایی',
        email: 'rezahs@aut.ac.ir',
        date: '1999/12/12',
      },
      {
        id: '3',
        name: 'رضا',
        familyName: 'رضایی',
        email: 'rezahs@aut.ac.ir',
        date: '1999/12/12',
      },
      {
        id: '4',
        name: 'رضا',
        familyName: 'رضایی',
        email: 'rezahs@aut.ac.ir',
        date: '1999/12/12',
      },
      {
        id: '5',
        name: 'رضا',
        familyName: 'رضایی',
        email: 'rezahs@aut.ac.ir',
        date: '1999/12/12',
      },
      {
        id: '6',
        name: 'رضا',
        familyName: 'رضایی',
        email: 'rezahs@aut.ac.ir',
        date: '1999/12/12',
      },
      {
        id: '7',
        name: 'رضا',
        familyName: 'رضایی',
        email: 'rezahs@aut.ac.ir',
        date: '1999/12/12',
      },
      {
        id: '8',
        name: 'رضا',
        familyName: 'رضایی',
        email: 'rezahs@aut.ac.ir',
        date: '1999/12/12',
      },
      {
        id: '9',
        name: 'رضا',
        familyName: 'رضایی',
        email: 'rezahs@aut.ac.ir',
        date: '1999/12/12',
      },
      {
        id: '10',
        name: 'رضا',
        familyName: 'رضایی',
        email: 'rezahs@aut.ac.ir',
        date: '1999/12/12',
      }, {
        id: '11',
        name: 'رضا',
        familyName: 'رضایی',
        email: 'rezahs@aut.ac.ir',
        date: '1999/12/12',
      },

    ]
  }
}
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    onHomePage: OtherActions.onHomePage,
    outHomePage: OtherActions.outHomePage,
    onFocus: OtherActions.onFocus,
    outFocus: OtherActions.outFocus,
  }, dispatch)
})

Result.propTypes = {
  strings: PropTypes.shape({
    tableHeader: PropTypes.object.isRequired,
  }).isRequired,
  dataSet: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Result)
