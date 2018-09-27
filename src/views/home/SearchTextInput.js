// @flow
import * as React from 'react'
import PropTypes from 'prop-types'
import styles from 'src/consts/styles'

type searchTextInputProps = {
  placeholder: string,
  outFocus: Function,
  onFocus: Function,
  textFieldChange: Function,
}

type searchTextInputStates = {
  filled: boolean,
  emptied: boolean,
}

class SearchTextInput extends React.Component <searchTextInputProps, searchTextInputStates> {
  constructor(props: searchTextInputProps) {
    super(props)
    this.state = {filled: false, emptied: false}
  }

  textChange = (event: SyntheticEvent<HTMLInputElement>) => {
    const {textFieldChange} = this.props
    if (event.target.value === '') {
      if (this.state.filled) {
        this.setState({...this.state, emptied: true, filled: false})
      }
      else {
        this.setState({...this.state, emptied: false, filled: false})
      }
    } else {
      this.setState({...this.state, filled: true, emptied: false})
    }
    textFieldChange(event)
  }

  onFocus = () => {
    const {onFocus} = this.props
    onFocus()
  }
  focusOut = (event: SyntheticEvent<HTMLInputElement>) => {
    const {outFocus} = this.props
    this.setState({...this.state, emptied: false})
    outFocus()
  }

  render() {
    const {placeholder} = this.props
    const {home, global} = styles

    return (
        <div className='input-wrapper'>
          {/*language=SCSS*/}
          <style jsx>{`
            .input {
              position: relative;
              z-index: 1;
              display: inline-block;
              margin: 25px 0;
              right: 10%;
              width: 80%;
              text-align: center;
            }
            .input-field {
              position: relative;
              display: block;
              float: right;
              padding: 18px;
              width: 100%;
              background: transparent;
              color: ${home.color.searchInputBorder};
              transition: all ${global.duration.transition};
              font-weight: bold;
              font-size: 180%;
              text-align: center;

              :focus + .input-label::before {
                transform: ${!this.state.emptied || !this.state.filled ? 'translate3d(-10%, 0, 0)' : 'none'};
              }
              :focus + .input-label::after {
                transform: ${!this.state.emptied || !this.state.filled ? 'translate3d(10%, 0, 0)' : 'none'};
              }
              :focus + .input-label .input-label-content {
                animation: go-down-animation forwards;
                animation-name: ${!this.state.filled ? '' : 'none'};
                animation-duration: ${!this.state.filled ? global.duration.transition : ''};
              }
            }
            .input-label {
              float: right;
              padding: 0 10px;
              font-weight: bold;
              user-select: none;
              position: absolute;
              left: 0;
              width: 100%;
              color: ${home.color.searchInputLabel};
              pointer-events: none;

              ::before, ::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 50%;
                height: 100%;
                border: 4px solid ${home.color.searchInputLabelBorder};
                transition: transform ${global.duration.transition};
              }
              ::before {
                border-right: none;
                transform: ${this.state.emptied ? 'translate3d(-10%, 0, 0)' : 'none'};
              }
              ::after {
                left: 50%;
                border-left: none;
                transform: ${this.state.emptied ? 'translate3d(10%, 0, 0)' : 'none'};
              }

              .input-label-content {
                position: relative;
                display: block;
                padding: 26px 0;
                top: ${this.state.emptied ? '4.5em' : (this.state.filled ? '4.5em' : '0')};
              }
            }
            @keyframes go-down-animation {
              100% {
                transform: ${!this.state.emptied ? 'translate3d(0, 4.5em, 0)' : 'none'};
              }
            }
          `}
          </style>

          <span className="input">
					<input className="input-field" type="text"
                 onChange={this.textChange} onBlur={this.focusOut} onFocus={this.onFocus}/>
					<label className="input-label">
						<span className="input-label-content">{placeholder}</span>
					</label>
				</span>
        </div>
    )
  }
}

SearchTextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onFocus: PropTypes.func.isRequired,
  outFocus: PropTypes.func.isRequired,
  textFieldChange: PropTypes.func.isRequired,
}

export default SearchTextInput