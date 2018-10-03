// @flow
import {connect} from 'react-redux'
import * as React from 'react'
import PropTypes from "prop-types"
import {CSVLink, CSVDownload} from 'react-csv'

import Table from './Table'
import {resultTableData} from 'src/consts/flowTypes/index'
import {bindActionCreators} from "redux";
import OtherActions from "../../redux/actions/otherActions";
import SearchTextInput from "../home/SearchTextInput";
import {makeGetDataset} from "../../redux/selectors/resultPageSelector";
import Pagination from './Pagination'
import HomeActions from "../../redux/actions/homeActions";

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
    submit: Function,
  },
  location: {
    state: {
      color: string,
      page: number,
    }
  },
  history: {
    push: Function,
  },
  pagination: {
    items: [],
    pageNumber: number,
    resultNumber: number,
    endPage: number,
  },
  filter: {
    tableName: string,
    name: string,
    email: string,
    startDate: string,
    endDate: string,
    resultNumber: number,
    pageNumber: number,
  }
}

type resultState = {
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

    this.props.history.push({
      pathname: '/',
      state: {
        color: this.props.location.state.color,
        page: this.props.location.state.page,
      }
    });
  }
  onDownload = () => {

  }
  filterData = () => {
    const {dataSet} = this.props
    const {filter} = this.state
    const {name, familyName, email} = filter

    const nameFilter = name !== '' ? dataSet.filter(data => data.name.toUpperCase() === name.toUpperCase()) : dataSet
    const familyNameFilter = familyName !== '' ? nameFilter.filter(data => data.familyName.toUpperCase() === familyName.toUpperCase()) : nameFilter
    return email !== '' ? familyNameFilter.filter(data => data.email.toUpperCase() === email.toUpperCase()) : familyNameFilter
  }
  nextPageClick = () => {
    const {filter, actions} = this.props
    const {submit} = actions

    submit({formValues: {...filter, page: filter.pageNumber + 1}})
    console.log(filter, 'filter next')
  }
  prevPageClick = () => {
    const {filter, actions} = this.props
    const {submit} = actions

    submit({formValues: {...filter, page: filter.pageNumber - 1}})
    console.log(filter, 'filter prev')
  }

  render() {
    const {strings, location, actions, pagination} = this.props
    const {onFocus, outFocus} = actions

    const csvData =[
      ['firstname', 'lastname', 'email'] ,
      ['Ahmed', 'Tomi' , 'ah@smthing.co.com'] ,
      ['Raed', 'Labes' , 'rl@smthing.co.com'] ,
      ['Yezzi','Min l3b', 'ymin@cocococo.com']
    ];

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

              .back-button-link {

              }

              .not-found {
                font-size: 40px;
                text-align: center;
                color: #ffffff;
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
          {filteredData.length === 0
              ?
              <div>
                <Table strings={strings.tableHeader} dataSet={filteredData}/>
                <Pagination nextPageClick={this.nextPageClick} prevPageClick={this.prevPageClick} page={pagination.pageNumber} endPage={pagination.endPage}/>
              </div>
              : <div className='not-found'>موردی یافت نشد</div>
          }

          <div className='footer-holder'>
            <button onClick={this.onDownload} className='back-button pulse'><CSVLink data={csvData} className='back-button-link' separator={"\",\""} filename={"Result.csv"} >ذخیره نتایج</CSVLink></button>

            <button onClick={this.backClick} className='back-button pulse'>{strings.back}</button>
          </div>
        </div>

    )
  }
}

const mapStateToProps = () => {
  const getDatas = makeGetDataset()
  return (state, props) => {
    return {
      strings: state.translate.strings.resultPage,
      dataSet: getDatas(state, props),
      pagination: state.pagination,
      filter: state.other.filter,
    }
  }
}
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    onHomePage: OtherActions.onHomePage,
    outHomePage: OtherActions.outHomePage,
    onFocus: OtherActions.onFocus,
    outFocus: OtherActions.outFocus,
    submit: HomeActions.submit,
  }, dispatch)
})

Result.propTypes = {
  strings: PropTypes.shape({
    tableHeader: PropTypes.object.isRequired,
  }).isRequired,
  dataSet: PropTypes.array.isRequired,
  pagination: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  filter: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Result)
