// @flow
import * as React from 'react'

import Row from './Row'
import styles from 'src/consts/styles'
import {resultTableData} from 'src/consts/flowTypes'

type tableProps = {
  strings: {
    id: string,
    index: number,
    date: string,
    name: string,
    familyName: string,
    email: string,
  },
  dataSet: resultTableData[],
}

const Table = (props: tableProps) => {
  const {strings, dataSet} = props
  const {result} = styles
  return (
      <table className='table-wrapper'>
        {/*language=SCSS*/}
        <style jsx>{`
          .table-wrapper {
            width: 100%;
            //margin: 20px auto;

            .header-wrapper {
              color: ${result.color.tableHeaderFontColor};
              background: ${result.color.tableHeaderBackgroundColor};

              .header-data {
                padding-left: ${result.size.tableCellPaddingRightSize};
                padding-right: ${result.size.tableCellPaddingRightSize};
                padding-top: ${result.size.tableCellPaddingTopSize};
                padding-bottom: ${result.size.tableCellPaddingTopSize};
                border-bottom: 1px solid ${result.color.tableRowBorderColor};
              }
              .header-data:first-child {
                border-right: solid ${result.size.tableRowBorderRightSize};
                border-right-color: ${result.color.tableHeaderBorderRightColor};
              }
            }
          }
        `}</style>
        <thead>
        <tr className='header-wrapper'>
          <th className='header-data'>{strings.index}</th>
          <th className='header-data'>{strings.id}</th>
          <th className='header-data'>{strings.date}</th>
          <th className='header-data'>{strings.name}</th>
          <th className='header-data'>{strings.familyName}</th>
          <th className='header-data'>{strings.email}</th>
        </tr>
        </thead>
        <tbody>
        {dataSet.map((data, index) => <Row id={data.id} date={data.date} email={data.email} familyName={data.familyName}
                                           name={data.name} key={data.id} index={index + 1}/>)}
        </tbody>

      </table>
  )
}

export default Table