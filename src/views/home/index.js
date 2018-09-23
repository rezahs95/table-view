// @flow
import * as React from 'react'
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";

import Page from './Page'
import OtherActions from "../../redux/actions/otherActions";

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
}

class Home extends React.Component <homeProps, homeState> {
  numberOfPages: number

  constructor(props: homeProps) {
    super(props)
    this.state = {
      page: 0,
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
    if(!focus){
      if (event.keyCode === 37 && page > 0) {
        this.setState({...this.state, page: page - 1})
      }
      else if (event.keyCode === 39 && page < this.numberOfPages) {
        this.setState({...this.state, page: page + 1})
      }
    }
  }

  render() {
    const {strings, actions} = this.props
    const {outFocus, onFocus} = actions
    return (
        <div className='home-wrapper'>
          {/*language=SCSS*/}
          <style jsx>{`
          `}</style>
          <Page strings={strings.homePage} onFocus={onFocus} outFocus={outFocus}/>
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