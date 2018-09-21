// @flow
import * as React from 'react'
import Row from './Row'

const Table = (props: {}) => {
  return (
      <table className='table-wrapper'>
        <style jsx>{`
          .table-wrapper {
            margin: 20px;
          }
        `}</style>
        <tr>
          <th>هدر1</th>
          <th>هدر2</th>
          <th>هدر3</th>
        </tr>
        <Row/>
        <Row/>
        <Row/>

      </table>
  )
}

export default Table