import * as React from 'react'
import PropTypes from 'prop-types'

type previewImgProps = {
  width?: number,
  height?: number,
}
const PreviewImg = (props: previewImgProps) => {
  const {width, height} = props
  return (
      <svg version="1.1" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg"
           xmlnsXlink="http://www.w3.org/1999/xlink"
           x="0px" y="0px" width={`${width}px`} height={`${height}px`} viewBox="0 0 90 100" xmlSpace="preserve">
        <rect x="25.25" y="33.542" fill="none" strokeWidth="2" stroke="#ffffff" strokeMiterlimit="10" width="39.5"
              height="32.916"/>
        <path fill="none" stroke="#ffffff" strokeMiterlimit="10" d="M85.269,33.542H64.75v32.916h20.519C87.346,61.38,88.5,55.826,88.5,50
	C88.5,44.174,87.346,38.62,85.269,33.542z"/>
        <path fill="none" stroke="#ffffff" strokeMiterlimit="10" d="M25.25,33.542H4.731C2.654,38.62,1.5,44.174,1.5,50
	c0,5.826,1.154,11.38,3.231,16.458H25.25V33.542z"/>
        <g>
          <line fill="none" strokeWidth="2" stroke="#ffffff" strokeMiterlimit="10" x1="45" y1="74.584" x2="45"
                y2="86"/>
          <g>
            <polygon points="40.91,77.898 41.643,78.58 44.999,74.969 48.356,78.58 49.089,77.898 44.999,73.5"
                     fill="#ffffff"/>
          </g>
        </g>
        <g>
          <line fill="none" strokeWidth="2" stroke="#ffffff" strokeMiterlimit="10" x1="45" y1="13" x2="45"
                y2="24.416"/>
          <g>
            <polygon points="40.91,21.102 41.643,20.42 44.999,24.032 48.356,20.42 49.089,21.102 44.999,25.5"
                     fill="#ffffff"/>
          </g>
        </g>
        <circle fill="none" stroke="#ffffff" strokeWidth="2" strokeMiterlimit="10" cx="45" cy="50" r="43.5"/>
      </svg>
  )
}

PreviewImg.defaultProps = {
  width: 80,
  height: 80,
}

PreviewImg.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
}
export default PreviewImg