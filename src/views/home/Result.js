// @flow
import {connect} from 'react-redux'
import * as React from 'react'
import PropTypes from "prop-types"

import Table from './Table'
import {resultTableData} from 'src/consts/flowTypes/index'

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
}

const Result = (props: resultProps) => {
  const {strings, dataSet, backClick} = props
  return (
      <div className='result-wrapper'>
        {/*language=SCSS*/}
        <style jsx>{`
          .result-wrapper {
            padding: 20px 10%;

            .back-button {
              background: transparent;
              width: 150px;
              height: 50px;
              margin: 20px auto;
              color: #dddddd;
              font-size: 20px;
              border: 3px solid #dddddd;
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
        <Table strings={strings.tableHeader} dataSet={dataSet}/>

        <button onClick={backClick} className='back-button pulse'>{strings.back}</button>

      </div>
  )
}

Result.propTypes = {
  strings: PropTypes.shape({
    tableHeader: PropTypes.object.isRequired,
  }).isRequired,
  dataSet: PropTypes.array.isRequired,
  backClick: PropTypes.func.isRequired,
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
      },{
        id: '11',
        name: 'رضا',
        familyName: 'رضایی',
        email: 'rezahs@aut.ac.ir',
        date: '1999/12/12',
      },

    ]
  }
}

export default connect(mapStateToProps)(Result)