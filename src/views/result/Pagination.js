// @flow
import * as React from 'react'
import PropTypes from "prop-types"

import styles from 'src/consts/styles'

type paginationProps = {|
  page: number,
  endPage: number,
  nextPageClick: Function,
  prevPageClick: Function,
  startPageClick: Function,
  endPageClick: Function,
|}

type paginationState = {}

class Pagination extends React.Component  <paginationProps, paginationState> {

  constructor(props: paginationProps) {
    super(props)
    this.state = {}
  }

  render() {
    const {result} = styles
    const {page, endPage, nextPageClick, prevPageClick, endPageClick, startPageClick} = this.props
    return (
        <div className='pagination-wrapper'>
          {/*language=SCSS*/}
          <style jsx>{`
            .pagination-wrapper {
              color: #ffffff;
              display: flex;
              justify-content: center;
              user-select: none;

              .page {
                display: inline-block;
                padding: 5px 15px;
                font-size: 15px;
                text-align: center;
                background: ${result.color.paginationColor};
                margin: 5px;
              }
              .active {
                background: ${result.color.paginationActiveColor};
              }

            }
          `}</style>
          {page < endPage && <div className='page pulse' onClick={endPageClick}>صفحه انتها</div>}
          {page < endPage && <div className='page pulse' onClick={nextPageClick}>{page + 1}</div>}
          <div className='page active pulse'>{page}</div>
          {page > 1 && <div className='page pulse' onClick={prevPageClick}>{page - 1}</div>}
          {page > 1 && <div className='page pulse' onClick={startPageClick}>صفحه ابتدا</div>}

        </div>

    )
  }
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  endPage: PropTypes.number.isRequired,
  nextPageClick: PropTypes.func.isRequired,
  prevPageClick: PropTypes.func.isRequired,
  startPageClick: PropTypes.func.isRequired,
  endPageClick: PropTypes.func.isRequired,
}

export default Pagination
