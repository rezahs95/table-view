// @flow
import * as React from 'react'
import PropTypes from 'prop-types'


const PopUpButton = (props: {}) => {
  return (
      <div className='row-wrapper'>
        { /*language=SCSS*/ }
        <style jsx>{`
        `}</style>
      </div>
  )
}

PopUpButton.propTypes = {
  index: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  familyName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}

export default PopUpButton