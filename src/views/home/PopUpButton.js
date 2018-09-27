// @flow
import * as React from 'react'
import FontAwesome from 'react-fontawesome'

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
    const {home, global} = styles
    const {showInformation, showPopUpButton} = this.state

    return (
        <div className='pop-up-button-wrapper'>
          {/*language=SCSS*/}
          <style jsx>{`
            :global(.popup-button-enter) {
              opacity: 0.1;
              transition: opacity ease-in;
              transition-duration: ${global.duration.animationDuration}ms;
            }
            :global(.popup-button-enter-active) {
              opacity: 1;
            }
            :global(.popup-button-exit) {
              opacity: 1;
              transition: opacity ease-in;
              transition-duration: ${global.duration.animationDuration}ms;
            }
            :global(.popup-button-exit-active) {
              opacity: 0.01;
            }
            .pop-up-button{
              background: ${home.color.popUpButtonBackgroundColor};
              width: 42px;
              height: 42px;
              color: ${home.color.popUpButtonFontColor};
              font-size: 30px;
              border-radius: 50%;
            }

            :global(.popup-window-enter) {
              opacity: 0.1;
              transition: opacity ease-in;
              transition-duration: ${global.duration.animationDuration}ms;
            }
            :global(.popup-window-enter-active) {
              opacity: 1;
            }
            :global(.popup-window-exit) {
              opacity: 1;
              transition: opacity ease-in;
              transition-duration: ${global.duration.animationDuration}ms;
            }
            :global(.popup-window-exit-active) {
              opacity: 0.01;
            }
            .pop-up-close-button{
              background: ${home.color.popUpCloseButtonBackgroundColor};
              width: 28px;
              height: 28px;
              color: ${home.color.popUpButtonFontColor};
              font-size: 18px;
              margin-bottom: 5px;
              border-radius: 50%;
            }
            .pop-up-window{
              border: 4px solid ${home.color.popUpButtonBackgroundColor};
              padding: 10px;
              color: ${home.color.popUpButtonFontColor};
              text-align: justify;
              width: 90%;
            }
          `}</style>

          <CSSTransition
              in={showPopUpButton}
              timeout={global.duration.animationDuration}
              classNames='popup-button'
              unmountOnExit
              onExited={() => {

                this.setState({
                  ...this.state,
                  showInformation: true,
                });
              }}>
            <div>
              <button onClick={this.showPopup} className='pop-up-button pulse'>
                <FontAwesome name='info'/>
              </button>
            </div>
          </CSSTransition>

          <CSSTransition
              in={showInformation}
              timeout={global.duration.animationDuration}
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