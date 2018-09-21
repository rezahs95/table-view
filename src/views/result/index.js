// @flow
import {connect} from 'react-redux'
import * as React from 'react'
import PropTypes from "prop-types"

import Table from './Table'
import {resultTableFields, resultTableData} from 'src/consts/flowTypes'

type resultProps = {
  strings: {
    tableHeader: resultTableFields,
  },
  dataSet: resultTableData[],
}

const Result = (props: resultProps) => {
  const {strings, dataSet} = props
  return (
      <div className='result-wrapper'>
        <style jsx>{`
        `}</style>

        <Table strings={strings.tableHeader} dataSet={dataSet}/>
      </div>
  )
}

Result.propTypes = {
  strings: PropTypes.shape({
    tableHeader: PropTypes.object.isRequired,
  }).isRequired,
  dataSet: PropTypes.array.isRequired,
}

const mapStateToProps = state => {
  return {
    strings: state.translate.strings.resultPage,
    dataSet: [
      {
        id: 1,
        name: 'رضا',
        familyName: 'رضایی',
        email: 'rezahs@aut.ac.ir',
        date: '1999/12/12',
      },
      {
        id: 2,
        name: 'رضا',
        familyName: 'رضایی',
        email: 'rezahs@aut.ac.ir',
        date: '1999/12/12',
      },
      {
        id: 3,
        name: 'رضا',
        familyName: 'رضایی',
        email: 'rezahs@aut.ac.ir',
        date: '1999/12/12',
      },
      {
        id: 4,
        name: 'رضا',
        familyName: 'رضایی',
        email: 'rezahs@aut.ac.ir',
        date: '1999/12/12',
      },
      {
        id: 5,
        name: 'رضا',
        familyName: 'رضایی',
        email: 'rezahs@aut.ac.ir',
        date: '1999/12/12',
      },
      {
        id: 6,
        name: 'رضا',
        familyName: 'رضایی',
        email: 'rezahs@aut.ac.ir',
        date: '1999/12/12',
      },
      {
        id: 7,
        name: 'رضا',
        familyName: 'رضایی',
        email: 'rezahs@aut.ac.ir',
        date: '1999/12/12',
      },
      {
        id: 8,
        name: 'رضا',
        familyName: 'رضایی',
        email: 'rezahs@aut.ac.ir',
        date: '1999/12/12',
      },
    ]
  }
}

export default connect(mapStateToProps)(Result)