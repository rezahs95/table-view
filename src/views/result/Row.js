// @flow
import * as React from 'react'
import styles from 'src/consts/styles'

const Row = (props: {}) => {
  const {result, global} = styles
  return (
      <tr className='row-wrapper'>
        { /*language=SCSS*/ }
        <style jsx>{`
          .row-wrapper {
            background-color: ${result.color.tableRowBackgroundColor};
            color: ${result.color.tableRowFontColor};
            border: 1px solid red;
            transition: all ${global.duration.transition};

            .first-data {
              border-right: 4px solid ${result.color.tableRowBorderRightColor};
            }
            .table-row {
              padding: 10px;
              border-bottom: 1px solid ${result.color.tableRowBorderColor};
              transition: all ${global.duration.transition};
            }

            &:hover {
              background-color: ${result.color.tableRowBackgroundHoverColor};

              .first-data {
                border-right-color: ${result.color.tableRowBorderRightHoverColor};
              }
            }
          }
        `}</style>

        <td className='first-data table-row'>داده1</td>
        <td className='table-row'>داده2</td>
        <td className='table-row'>داده3</td>

      </tr>
  )
}

export default Row