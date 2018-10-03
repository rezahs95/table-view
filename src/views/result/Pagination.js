// @flow
import * as React from 'react'
import PropTypes from "prop-types"

import styles from 'src/consts/styles'

type paginationProps = {|
  page: number,
  endPage: number,
  nextPageClick: Function,
  prevPageClick: Function,
|}

type paginationState = {}

class Pagination extends React.Component  <paginationProps, paginationState> {

  constructor(props: paginationProps) {
    super(props)
    this.state = {}
  }

  render() {
    const {result} = styles
    const {page, endPage, nextPageClick, prevPageClick} = this.props
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

              .previous {
                background: ${result.color.paginationPrevColor};
              }
            }
          `}</style>

          {page < endPage && <div className='page next pulse' onClick={nextPageClick}>صفحه بعد</div>}
          <div className='page active pulse'>1</div>
          {page > 1 && <div className='page previous pulse' onClick={prevPageClick}>صفحه قبل</div>}

        </div>

    )
  }
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  endPage: PropTypes.number.isRequired,
  nextPageClick: PropTypes.func.isRequired,
  prevPageClick: PropTypes.func.isRequired,
}

export default Pagination
