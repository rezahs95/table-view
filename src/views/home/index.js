// @flow
import * as React from 'react'
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";

import Page from './Page'
import OtherActions from "../../redux/actions/otherActions";
import {CSSTransition} from "react-transition-group";
import HomeActions from "../../redux/actions/homeActions";
import styles from 'src/consts/styles'

type homeProps = {
  strings: {
    page: {
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

    const {global} = styles

    const left = this.state.page * -100 + '%';
    console.log(left)
    return (
        <div className='home-wrapper'>
          {/*language=SCSS*/}
          <style jsx>{`
            .home-wrapper{
              position: relative;
              left: ${left};
              transition: all 0.5s ease-in-out;

              :global(.page-go-right-enter) {
                position: relative;
                right: -100%;
                transition: all ease-in;
                transition-duration: ${global.duration.transition};
              }
              :global(.page-go-right-enter-active) {
                transform: translateX(100%);
              }
              :global(.page-go-right-exit) {
                right: -100%;
                transition: all ease-in;
                transition-duration: ${global.duration.transition};
              }
              :global(.page-go-right-exit-active) {
                transform: translateX(100%);
              }

              :global(.page-go-left-enter) {
                position: relative;
                left: 0;
                transition: all ease-in;
                transition-duration: ${global.duration.transition};
              }
              :global(.page-go-left-enter-active) {
                transform: translateX(-100%);
              }
              :global(.page-go-left-exit) {
                right: 100%;
                transition: all ease-in;
                transition-duration: ${global.duration.transition};
              }
              :global(.page-go-left-exit-active) {
                transform: translateX(-100%);
              }

              .page-container {
                position: absolute;
                width: 100%;
                top: 0;
              }
              .page-container1 {
                left: 0;
              }
              .page-container2 {
                left: 100%;
              }
              .page-container3 {
                left: 200%;
              }
              .page-container4 {
                left: 300%;
              }
              .page-container5 {
                left: 400%;
              }
            }
          `}</style>
          <div className='page-container page-container1'>
            <Page strings={strings.page} onFocus={onFocus} outFocus={outFocus} submit={submit}/>
          </div>
          <div className='page-container page-container2'>
            <Page strings={strings.page} onFocus={onFocus} outFocus={outFocus} submit={submit}/>
          </div>
          <div className='page-container page-container3'>
            <Page strings={strings.page} onFocus={onFocus} outFocus={outFocus} submit={submit}/>
          </div>
          <div className='page-container page-container4'>
            <Page strings={strings.page} onFocus={onFocus} outFocus={outFocus} submit={submit}/>
          </div>
          <div className='page-container page-container5'>
            <Page strings={strings.page} onFocus={onFocus} outFocus={outFocus} submit={submit}/>
          </div>
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