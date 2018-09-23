// @flow
import * as React from 'react'
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";

import Page from './Page'
import OtherActions from "../../redux/actions/otherActions";
import {CSSTransition} from "react-transition-group";

type homeProps = {
  strings: {
    homePage: {
      datePicker: {
        startDate: string,
        endDate: string,
      }
    }
  },
  actions: {
    outFocus: Function,
    onFocus: Function,
  },
  other: {
    focus: boolean,
  },
}

type homeState = {
  page: number,
  goRight: boolean,
}

class Home extends React.Component <homeProps, homeState> {
  numberOfPages: number

  constructor(props: homeProps) {
    super(props)
    this.state = {
      page: 0,
      goRight: false,
    }
    this.numberOfPages = 5
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyDownFunction, false)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyDownFunction, false)
  }

  keyDownFunction = (event: SyntheticKeyboardEvent<>) => {
    // 37 - left
    // 39 - right
    const {page} = this.state
    const {other} = this.props
    const {focus} = other
    if (!focus) {
      if (event.keyCode === 37 && page > 0) {
        this.setState({...this.state, page: page - 1, goRight: false})
      }
      else if (event.keyCode === 39 && page < this.numberOfPages - 1) {
        this.setState({...this.state, page: page + 1, goRight: true})
      }
    }
  }

  render() {
    const {goRight} = this.state
    const {strings, actions} = this.props
    const {outFocus, onFocus} = actions

    const arrayNumber = [...Array(this.numberOfPages).keys()]
    return (
        <div className='home-wrapper'>
          {/*language=SCSS*/}
          <style jsx>{`
            .home-wrapper{
              overflow: hidden;
            }
            .page-go-right-enter {
              position: relative;
              left: -100%;
              transition: all 100ms ease-in;
            }

            .page-go-right-enter-active {
              left: 0;
            }

            .page-go-right-exit {
              left: 0;
              display: none;
              transition: all 100ms ease-in;
            }

            .page-go-right-exit-active {
              left: -100%;
            }

            .page-go-left-enter {
              position: relative;
              left: 100%;
              transition: all 100ms ease-in;
            }

            .page-go-left-enter-active {
              left: 0;
            }

            .page-go-left-exit {
              left: 0;
              display: none;
              transition: all 100ms ease-in;
            }

            .page-go-left-exit-active {
              left: 100%;
            }
          `}</style>
          {arrayNumber.map(number =>
              <CSSTransition
                  in={this.state.page === number}
                  timeout={100}
                  classNames={goRight ? 'page-go-right' : 'page-go-left'}
                  unmountOnExit
                  key={`transition ${number}`}>
                <div>
                  <Page strings={strings.homePage} onFocus={onFocus} outFocus={outFocus}/>
                </div>

              </CSSTransition>
          )}

        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    strings: state.translate.strings,
    other: state.other,
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    onFocus: OtherActions.onFocus,
    outFocus: OtherActions.outFocus
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)