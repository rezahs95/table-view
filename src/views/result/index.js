// @flow
import {connect} from 'react-redux'
import * as React from 'react'
import PropTypes from "prop-types"
import Pagination from "react-js-pagination"

import Table from './Table'
import {resultTableData} from 'src/consts/flowTypes/index'
import {bindActionCreators} from "redux";
import OtherActions from "../../redux/actions/otherActions";

//require("bootstrap/less/bootstrap.less")

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
  backClick: Function,
  dataSet: resultTableData[],
  actions: {
    onHomePage: Function,
    outHomePage: Function,
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
}

class Result extends React.Component  <resultProps, resultState> {

  constructor(props: resultProps) {
    super(props)
    this.state = {
      activePage: 15,
      redirectLocal: false,
    }
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }

  backClick = () => {
    const {actions} = this.props
    const {onHomePage} = actions
    onHomePage()
    this.setState({...this.state, redirectLocal: true})

    this.props.history.push({
      pathname: '/',
      state:{
        color: this.props.location.state.color,
        page: this.props.location.state.page,
      }
    });

  }

  render() {
    const {strings, dataSet, backClick, location} = this.props
      const backgColor = `radial-gradient(ellipse at center, ${location.state.color} 0%, #000001 98%)`
    return (
        <div className='result-wrapper'>
          {/*language=SCSS*/}
          <style jsx>{`
            .result-wrapper {
              position: absolute;
              top: 0;
              background: ${backgColor};

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

            @media screen and (max-width: 750px) {
              .result-wrapper {
                padding-left: 2%;
                padding-right: 2%;
                font-size: 14px;
              }
            }
          `}</style>
          <Table strings={strings.tableHeader} dataSet={dataSet}/>
          <div className='footer-holder'>
            <button onClick={this.backClick} className='back-button pulse'>ذخیره نتایج</button>
            <Pagination
                activePage={this.state.activePage}
                itemsCountPerPage={10}
                totalItemsCount={450}
                pageRangeDisplayed={5}
                onChange={this.handlePageChange}
            />
            <button onClick={this.backClick} className='back-button pulse'>{strings.back}</button>
          </div>
        </div>

    )
  }
}

Result.propTypes = {
  strings: PropTypes.shape({
    tableHeader: PropTypes.object.isRequired,
  }).isRequired,
  dataSet: PropTypes.array.isRequired,
  backClick: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
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
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Result)