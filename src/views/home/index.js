// @flow
import * as React from 'react'
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";

import Page from './Page'
import OtherActions from "../../redux/actions/otherActions";
import HomeActions from "../../redux/actions/homeActions";
import styles from 'src/consts/styles'
import PreviewImg from "../../images/home/PreviewImg";
import ColorActions from "../../redux/actions/colorActions";

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
    setColor: Function,
  },
  other: {
    focus: boolean,
    preview: boolean,
    homePage: boolean,
  },
  location: {
    state: {
      color: string,
      page: number,
    }
  },
  history: {
    push: Function,
  },
  color: [],
}

type homeState = {
  page: number,
  changed: boolean,
}

class Home extends React.Component <homeProps, homeState> {
  numberOfPages: number
  keyDownFunction = (event: SyntheticKeyboardEvent<>) => {
    // 37 - left
    // 39 - right
    const {page} = this.state
    const {other} = this.props
    const {focus, homePage} = other
    if (homePage && !focus) {
      if (event.keyCode === 37 && page > 0) {
        this.setState({...this.state, page: page - 1, changed: false})
      }
      else if (event.keyCode === 39 && page < this.numberOfPages - 1) {
        this.setState({...this.state, page: page + 1, changed: false})
      }
    }
  }
  previewClick = () => {
    const {actions, other} = this.props
    const {onPreview, outPreview} = actions
    const {preview} = other

    if (preview) {
      outPreview()
    }
    else {
      onPreview()
    }
    this.setState({...this.state, changed: true})
  }

  constructor(props: homeProps) {
    super(props)
    this.state = {
      page: 0,
      changed: false,
    }
    this.numberOfPages = 5
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyDownFunction, false)

    if (this.props.location.state && this.props.location.state.page) {
      this.setState({...this.state, page: this.props.location.state.page})
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyDownFunction, false)
  }

  render() {
    const {page} = this.state
    const {strings, actions, other, history, color} = this.props
    const {preview, homePage} = other
    const {submit, outFocus, onFocus, onHomePage, outHomePage, setColor} = actions
    const {global} = styles
    const arrayNumber = [...Array(this.numberOfPages).keys()]
    const left = preview === true ? page * -30 + '%' : page * -100 + '%';

    return (
        <div className='home-wrapper'>
          {/*language=SCSS*/}
          <style jsx>{`
            .home-wrapper{
              position: relative;
              left: ${left};
              transition: ${this.state.changed ? 'none' : 'all ' + global.duration.transitionMode};
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
            <Page color={color[0]} history={history}
                  page={0} preview={preview}
                  tableName={'نام جدول' + 0} strings={strings.page} submit={submit}
                  tableNameServer={'TABLEA'}
                  onHomePage={onHomePage} outHomePage={outHomePage}
                  onFocus={onFocus} outFocus={outFocus}
                  setColor={setColor}
                  key={'page' + 0}/>

            <Page color={color[1]} history={history}
                  page={1} preview={preview}
                  tableName={'نام جدول' + 1} strings={strings.page} submit={submit}
                  tableNameServer={'TABLEB'}
                  onHomePage={onHomePage} outHomePage={outHomePage}
                  onFocus={onFocus} outFocus={outFocus}
                  setColor={setColor}
                  key={'page' + 1}/>

            <Page color={color[2]} history={history}
                  page={2} preview={preview}
                  tableName={'نام جدول' + 2} strings={strings.page} submit={submit}
                  tableNameServer={'TABLEC'}
                  onHomePage={onHomePage} outHomePage={outHomePage}
                  onFocus={onFocus} outFocus={outFocus}
                  setColor={setColor}
                  key={'page' + 2}/>

            <Page color={color[3]} history={history}
                  page={3} preview={preview}
                  tableName={'نام جدول' + 3} strings={strings.page} submit={submit}
                  tableNameServer={'TABLED'}
                  onHomePage={onHomePage} outHomePage={outHomePage}
                  onFocus={onFocus} outFocus={outFocus}
                  setColor={setColor}
                  key={'page' + 3}/>

            <Page color={color[4]} history={history}
                  page={4} preview={preview}
                  tableName={'نام جدول' + 4} strings={strings.page} submit={submit}
                  tableNameServer={'TABLEE'}
                  onHomePage={onHomePage} outHomePage={outHomePage}
                  onFocus={onFocus} outFocus={outFocus}
                  setColor={setColor}
                  key={'page' + 4}/>

          </div>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    strings: state.translate.strings,
    other: state.other,
    color: state.color,
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
    setColor: ColorActions.setColor,
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)