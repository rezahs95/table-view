// @flow
import * as React from 'react'
import PropTypes from 'prop-types'

import styles from 'src/consts/styles'
import {resultTableFields} from 'src/consts/flowTypes'

type rowProps = resultTableFields

const Row = (props: rowProps) => {
  const {result, global} = styles
  const {index, id, date, name, familyName, email} = props
  return (
      <tr className='row-wrapper'>
        { /*language=SCSS*/ }
        <style jsx>{`
          .row-wrapper {
            background-color: ${result.color.tableRowBackgroundColor};
            color: ${result.color.tableRowFontColor};
            transition: all ${global.duration.transition};

            .table-data {
              // table width => number of column / 100
              width: 16%;
              padding-top: ${result.size.tableCellPaddingSize};
              padding-bottom: ${result.size.tableCellPaddingSize};
              text-align: center;
              border-bottom: 1px solid ${result.color.tableRowBorderColor};
              transition: all ${global.duration.transition};
            }
            .table-data:first-child {
              border-right: solid ${result.size.tableRowBorderRightSize};
              border-right-color: ${result.color.tableRowBorderRightColor};
            }

            &:hover {
              background-color: ${result.color.tableRowBackgroundHoverColor};

              .table-data {
                //padding-bottom: ${result.size.cellPaddingHoverSize};
              }
              .table-data:first-child {
                border-right-color: ${result.color.tableRowBorderRightHoverColor};
              }
            }
          }
        `}</style>

        <td className='table-data'>{index}</td>
        <td className='table-data'>{id}</td>
        <td className='table-data'>{date}</td>
        <td className='table-data'>{name}</td>
        <td className='table-data'>{familyName}</td>
        <td className='table-data'>{email}</td>
      </tr>
  )
}

Row.propTypes = {
  index: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  familyName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}

export default Row