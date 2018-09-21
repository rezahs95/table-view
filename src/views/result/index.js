// @flow
import {connect} from 'react-redux'
import * as React from 'react'
import PropTypes from "prop-types"

import styles from 'src/consts/styles'
import Table from './Table'
import PopUpButton from './PopUpButton'
import {resultTableData} from 'src/consts/flowTypes'

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
  },
  dataSet: resultTableData[],
}

const Result = (props: resultProps) => {
  const {strings, dataSet} = props
  const {result} = styles
  return (
      <div className='result-wrapper'>
        {/*language=SCSS*/}
        <style jsx>{`
          .result-wrapper {
            padding-left: ${result.size.resultPagePaddingRightSize};
            padding-right: ${result.size.resultPagePaddingRightSize};
            padding-top: ${result.size.resultPagePaddingTopSize};
            padding-bottom: ${result.size.resultPagePaddingTopSize};
          }
          @media screen and (max-width: 750px) {
            .result-wrapper {
              padding-left: ${result.size.resultPagePaddingRightSmallSize};
              padding-right: ${result.size.resultPagePaddingRightSmallSize};
              font-size: ${result.fontSize.smallTableFontSize};
            }
          }
        `}</style>

        <Table strings={strings.tableHeader} dataSet={dataSet}/>
        <PopUpButton/>
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
    ]
  }
}

export default connect(mapStateToProps)(Result)