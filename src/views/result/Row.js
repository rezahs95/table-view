// @flow
import * as React from 'react'
import PropTypes from 'prop-types'

import styles from 'src/consts/styles/index'

type rowProps = {
  id: number,
  index: number,
  date: string,
  name: string,
  familyName: string,
  email: string,
}

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
            transition: all ${global.duration.transitionMode};
            transition-duration: ${global.duration.transition};

            .table-data {
              // table width => number of column / 100
              width: 16%;
              padding-left: ${result.size.tableCellPaddingRightSize};
              padding-right: ${result.size.tableCellPaddingRightSize};
              padding-top: ${result.size.tableCellPaddingTopSize};
              padding-bottom: ${result.size.tableCellPaddingTopSize};
              text-align: center;
              border-bottom: 1px solid ${result.color.tableRowBorderColor};
              transition: all ${global.duration.transitionMode};
              transition-duration: ${global.duration.transition};

              :first-child {
                border-right: solid ${result.size.tableRowBorderRightSize};
                border-right-color: ${result.color.tableRowBorderRightColor};
              }
            }
            &:hover {
              background-color: ${result.color.tableRowBackgroundHoverColor};

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
  index: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  familyName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}

export default Row