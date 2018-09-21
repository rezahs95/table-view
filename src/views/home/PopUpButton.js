// @flow
import * as React from 'react'
import FontAwesome from 'react-fontawesome'
import PropTypes from 'prop-types'

import styles from 'src/consts/styles/index'

type popUpProps = {
}

type popUpStates = {
  showInformation: boolean,
}
class PopUpButton extends React.Component<popUpProps, popUpStates> {
  constructor(props: popUpProps){
    super(props)
    this.state = {
      showInformation: false,
    }
  }
  changeState = () => {
    this.setState({...this.state, showInformation: !this.state.showInformation})
  }

  render() {
    const {home} = styles
    const {showInformation} = this.state

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
            margin-bottom: 10px;
          }
          .pop-up-window{
            border: solid ${home.color.popUpButtonBackgroundColor};
            border-width: ${home.size.popUpWindowBorderSize};
            padding: ${home.size.popUpWindowPadding};
            color: ${home.color.popUpButtonFontColor};
            text-align: justify;
          }

        `}</style>
          <button onClick={this.changeState} className='pop-up-button pulse'><FontAwesome name='info'/></button>
          {showInformation &&
            <div className='pop-up-window'>
              لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.
              لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.
            </div>
          }
        </div>
    )

  }
}

PopUpButton.propTypes = {}

export default PopUpButton