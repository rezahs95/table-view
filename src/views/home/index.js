// @flow
import * as React from 'react'
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";

import Page from './Page'
import OtherActions from "../../redux/actions/otherActions";
import HomeActions from "../../redux/actions/homeActions";
import styles from 'src/consts/styles'
import PreviewImg from "../../images/home/PreviewImg";

type homeProps = {
  strings: {
    page: {
      datePicker: {
        startDate: string,
        endDate: string,
      },
      search: string,
      name: string,
      email: string,
    },
  },
  actions: {
    outFocus: Function,
    onFocus: Function,
    submit: Function,
    onPreview: Function,
    outPreview: Function,
    onHomePage: Function,
    outHomePage: Function,
  },
  other: {
    focus: boolean,
    preview: boolean,
    homePage: boolean,
  },
}

type homeState = {
  page: number,
  previewPage: number,
}

class Home extends React.Component <homeProps, homeState> {
  numberOfPages: number

  constructor(props: homeProps) {
    super(props)
    this.state = {
      page: 0,
      previewPage: 0,
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
    const {page, previewPage} = this.state
    const {other} = this.props
    const {focus, preview, homePage} = other
    if (homePage && !focus && !preview) {
      if (event.keyCode === 37 && page > 0) {
        this.setState({...this.state, page: page - 1})
      }
      else if (event.keyCode === 39 && page < this.numberOfPages - 1) {
        this.setState({...this.state, page: page + 1})
      }
    }
    if (preview) {
      //TODO: preview next button
      if (event.keyCode === 37 && previewPage > 0) {
        this.setState({...this.state, previewPage: previewPage - 1})
      }
      else if (event.keyCode === 39 && previewPage < this.numberOfPages - 1) {
        this.setState({...this.state, previewPage: previewPage + 1})
      }
    }
  }

  previewClick = () => {
    const {page, previewPage} = this.state
    const {actions, other} = this.props
    const {onPreview, outPreview} = actions
    const {preview} = other

    if (preview) {
      outPreview()
      this.setState({...this.state, page: previewPage})
    }
    else {
      onPreview()
      this.setState({...this.state, previewPage: page})
    }
  }

  render() {
    const {page, previewPage} = this.state
    const {strings, actions, other} = this.props
    const {preview, homePage} = other
    const {submit, outFocus, onFocus, onHomePage, outHomePage} = actions
    const {global} = styles

    const arrayNumber = [...Array(this.numberOfPages).keys()]

    const left = preview === true ? previewPage * -30 + '%' : page * -100 + '%';
    return (
        <div className='home-wrapper'>
          {/*language=SCSS*/}
          <style jsx>{`
            .home-wrapper{
              position: relative;
              left: ${left};
              transition: all ${global.duration.transitionMode};
              transition-duration: ${global.duration.animationDuration}ms;

              .preview-button {
                position: fixed;
                display: ${homePage === true ? 'block' : 'none'};
                z-index: 100;
                left: 0;
                background: transparent;
                margin: 20px;
              }
              .pages-container {
                position: relative;
                top: 50%;
                height: 100vh;
                transform: ${preview ? 'scale3d(0.3, 0.3, 1)' : 'scale3d(1, 1, 1)'};
                transition: all ${global.duration.transitionMode};
                transition-duration: ${global.duration.transition};
              }

            }
          `}</style>
          <button onClick={this.previewClick} className='preview-button pulse'><PreviewImg width={60} height={60}/>
          </button>
          <div className='pages-container'>
            {arrayNumber.map(number =>
                <Page page={number} preview={preview} activePage={page} strings={strings.page} submit={submit}
                      onHomePage={onHomePage} outHomePage={outHomePage}
                      onFocus={onFocus} outFocus={outFocus}
                      key={'page' + number}/>
            )}
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
    onPreview: OtherActions.onPreview,
    outPreview: OtherActions.outPreview,
    onHomePage: OtherActions.onHomePage,
    outHomePage: OtherActions.outHomePage,
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)