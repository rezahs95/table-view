// @flow
import * as React from 'react'
import PropTypes from 'prop-types'
import styles from 'src/consts/styles'

type searchTextInputProps = {
  placeholder: string,
}
const SearchTextInput = (props: searchTextInputProps) => {
  const {placeholder} = props
  const {home} = styles
  return (
      <div className='input-wrapper'>
        {/*language=SCSS*/}
        <style jsx>{`
          .input-wrapper {
          }

          .input {
            position: relative;
            z-index: 1;
            display: inline-block;
            margin: 1em;
            margin-bottom: 3em;
            max-width: 320px;
            width: calc(100% - 2em);
            vertical-align: top;
          }

          .input-field {
            position: relative;
            display: block;
            float: right;
            padding: 0.8em;
            border: none;
            border-radius: 0;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            width: 100%;
            background: transparent;
            color: ${home.color.searchInputBorder};
            opacity: 0;
            text-align: center;
            transition: opacity 0.3s;
            font-weight: bold;
            font-size: 180%;
          }

          .input-label {
            display: inline-block;
            float: right;
            padding: 0 1em;
            font-weight: bold;
            font-size: 100%;
            user-select: none;
            position: absolute;
            left: 0;
            width: 100%;
            color: ${home.color.searchInputLabel};
            pointer-events: none;
          }

          .input-label-content {
            position: relative;
            display: block;
            padding: 1.6em 0;
            width: 100%;
            text-align: center;
          }

          .input-label::before,
          .input-label::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 50%;
            height: 100%;
            border: 4px solid ${home.color.searchInputLabelBorder};
            transition: transform 0.3s;
          }

          .input-label::before {
            border-right: none;
          }

          .input-label::after {
            left: 50%;
            border-left: none;
          }

          .input-field:focus {
            opacity: 1;
            transition-delay: 0.3s;
          }

          .input-field:focus + .input-label::before {
            transform: translate3d(-10%, 0, 0);
          }

          .input-field:focus + .input-label::after {
            transform: translate3d(10%, 0, 0);
          }

          .input-field:focus + .input-label .input-label-content {
            animation: anim-2 0.3s forwards;
          }

          @keyframes anim-2 {
            50% {
              opacity: 0;
              transform: scale3d(0.3, 0.3, 1);
            }
            51% {
              opacity: 0;
              transform: translate3d(0, 4.5em, 0) scale3d(0.3, 0.3, 1);
            }
            100% {
              opacity: 1;
              transform: translate3d(0, 4.5em, 0);
            }
          }
        `}</style>

        <span className="input">
					<input className="input-field" type="text" id="input-7"/>
					<label className="input-label" htmlFor="input-7">
						<span className="input-label-content">{placeholder}</span>
					</label>
				</span>
      </div>
  )
}

SearchTextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
}

export default SearchTextInput