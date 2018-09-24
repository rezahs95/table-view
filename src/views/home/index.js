// @flow
import * as React from 'react'
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";

import Page from './Page'
import OtherActions from "../../redux/actions/otherActions";
import {CSSTransition} from "react-transition-group";
import HomeActions from "../../redux/actions/homeActions";

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
    submit: Function,
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
    const {outFocus, onFocus, submit} = actions

    const arrayNumber = [...Array(this.numberOfPages).keys()]
    return (
        <div className='home-wrapper'>
          {/*language=SCSS*/}
          <style jsx>{`
            .home-wrapper{
              overflow: hidden;
            }
            :global(.page-go-right-enter) {
              position: relative;
              right: -100%;
              transition: all 400ms ease-in;
            }

            :global(.page-go-right-enter-active) {
              transform: translateX(100%);
            }

            :global(.page-go-right-exit) {
              right: -100%;
              transition: all 400ms ease-in;
            }

            :global(.page-go-right-exit-active) {
              transform: translateX(100%);
            }

            :global(.page-go-left-enter) {
              position: relative;
              left: 0;
              transition: all 400ms ease-in;
            }

            :global(.page-go-left-enter-active) {
              transform: translateX(-100%);
            }

            :global(.page-go-left-exit) {
              right: 100%;
              transition: all 400ms ease-in;
            }

            :global(.page-go-left-exit-active) {
              transform: translateX(-100%);
            }
          `}</style>
          {arrayNumber.map(number =>
              <CSSTransition
                  in={this.state.page === number}
                  timeout={400}
                  classNames={goRight ? 'page-go-right' : 'page-go-left'}
                  unmountOnExit
                  key={`transition ${number}`}>
                <div>
                  <Page strings={strings.homePage} onFocus={onFocus} outFocus={outFocus} submit={submit}/>
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
    outFocus: OtherActions.outFocus,
    submit: HomeActions.submit,
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)