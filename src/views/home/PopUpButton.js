// @flow
import * as React from 'react'
import FontAwesome from 'react-fontawesome'
import PropTypes from 'prop-types'

import styles from 'src/consts/styles/index'
import {CSSTransition} from 'react-transition-group'

type popUpProps = {}

type popUpStates = {
  showInformation: boolean,
  showPopUpButton: boolean,
}

class PopUpButton extends React.Component<popUpProps, popUpStates> {
  constructor(props: popUpProps) {
    super(props)
    this.state = {
      showInformation: false,
      showPopUpButton: true,
    }
  }

  showPopup = () => {
    this.setState({...this.state, showPopUpButton: false})
  }

  showPopupButton = () => {
    this.setState({...this.state, showInformation: false})
  }

  render() {
    const {home} = styles
    const {showInformation, showPopUpButton} = this.state

    return (
        <div className='pop-up-button-wrapper'>
          {/*language=SCSS*/}
          <style jsx>{`
            .pop-up-button{
              background: ${home.color.popUpButtonBackgroundColor};
              width: ${home.size.popUpButtonWidth};
              height: ${home.size.popUpButtonWidth};
              color: ${home.color.popUpButtonFontColor};
              font-size: ${home.fontSize.popUpButtonFontSize};
              border-radius: 50%;
            }

            .pop-up-close-button{
              background: ${home.color.popUpCloseButtonBackgroundColor};
              width: ${home.size.popUpCloseButtonWidth};
              height: ${home.size.popUpCloseButtonWidth};
              color: ${home.color.popUpButtonFontColor};
              font-size: ${home.fontSize.popUpCloseButtonFontSize};
              margin-bottom: ${home.size.popUpCloseButtonMarginSize};
              border-radius: 50%;
            }

            .pop-up-window{
              border: solid ${home.color.popUpButtonBackgroundColor};
              border-width: ${home.size.popUpWindowBorderSize};
              padding: ${home.size.popUpWindowPadding};
              color: ${home.color.popUpButtonFontColor};
              text-align: justify;
              width: 90%;
            }

            .popup-window-enter {
              opacity: 0.1;
              transition: opacity 300ms ease-in;
            }
            .popup-window-enter-active {
              opacity: 1;
            }
            .popup-window-exit {
              opacity: 1;
              transition: opacity 300ms ease-in;
            }
            .popup-window-exit-active {
              opacity: 0.01;
            }

            .popup-button-enter {
              opacity: 0.1;
              transition: opacity 300ms ease-in;
            }
            .popup-button-enter-active {
              opacity: 1;
            }
            .popup-button-exit {
              opacity: 1;
              transition: opacity 300ms ease-in;
            }
            .popup-button-exit-active {
              opacity: 0.01;
            }
          `}</style>

          <CSSTransition
              in={showPopUpButton}
              timeout={300}
              classNames='popup-button'
              unmountOnExit
              onExited={() => {

                this.setState({
                  ...this.state,
                  showInformation: true,
                });
              }}>
            <button onClick={this.showPopup} className='pop-up-button pulse'>
              <FontAwesome name='info'/>
            </button>
          </CSSTransition>

          <CSSTransition
              in={showInformation}
              timeout={300}
              classNames='popup-window'
              unmountOnExit
              onExited={() => {
                this.setState({
                  ...this.state,
                  showPopUpButton: true,
                });
              }}>
            <div>
              <button onClick={this.showPopupButton} className='pop-up-close-button pulse'>
                <FontAwesome name='close'/>
              </button>
              <div className='pop-up-window'>
                لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و
                طراحی
                گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه
                اولیه
                شکل
                ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و
                ظاهر
                متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا
                صرفا
                به
                مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه
                به
                نظر
                می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن
                نیستند
                و
                وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با
                استفاده
                از
                محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.
              </div>
            </div>
          </CSSTransition>
        </div>
    )
  }
}

PopUpButton.propTypes = {}

export default PopUpButton