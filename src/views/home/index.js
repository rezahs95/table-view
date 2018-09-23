// @flow
import * as React from 'react'

import Page from './Page'

type homeProps = {
  strings: {
    datePicker: {
      startDate: string,
      endDate: string,
    }
  }
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
    console.log('bb', this.state.page)
    if (event.keyCode === 37 && page > 0) {
      this.setState({...this.state, page: page - 1})
    }
    else if (event.keyCode === 39 && page < this.numberOfPages) {
      this.setState({...this.state, page: page + 1})
    }
  }

  render() {
    return (
        <div className='home-wrapper'>
          {/*language=SCSS*/}
          <style jsx>{`
          `}</style>
          <Page/>
        </div>
    )
  }
}


export default Home