import * as Nerv from 'nervjs'
import classnames from 'classnames'

import FadeAnimation from '../animations/fade-animation'

interface ModalProps {
    title?: string
    content
        ?
        : string
    value?: boolean
    cancelText: string
    okText: string
    maskClosable: string
    showHead: boolean
    showClose: boolean
    showFooter: boolean
    showInput: boolean
    width: number | string
    closeOnPressEsc: boolean
    type: string
}

interface ModalState {
    wrapShow: boolean
    showCancelButton: boolean
    showConfirmButton: boolean
    action: string
    visible: boolean
    inputValue: any
    inputPlaceholder: string
    callback: null
}

class Modal extends Nerv.Component < ModalProps,
ModalState > {
    static defaultProps = {
        value: false,
        maskClosable: true,
        showHead: true,
        showClose: true,
        showFooter: true,
        showInput: true,
        width: 520,
        closeOnPressEsc: true
    }
    constructor (...args) {
        super(...args)
    }

    render () {
        const {style, type} = this.props
        const classArr = {
            'success': 'icon-check-circle',
            'error': 'icon-x-circle',
            'warning': 'icon-alert-circle',
            'info': 'icon-info'
        }
        const iconClass = classArr[type] || ''

        return (
            <div>
                <FadeAnimation>
                    <div
                        className='at-modal__mask'
                        style={{
                        display: visible
                            ? ''
                            : 'none'
                    }}
                        onClick={this.handleMaskClick}></div>
                </FadeAnimation>
                <div
                    className={classnames('at-modal__wrapper', {
                    'at-modal--hidden': !wrapShow,
                    'at-modal--confirm': isIconType,
                    [`at-modal--confirm-${type}`]: isIconType
                })}
                    onClick={handleWrapperClick}>
                    <FadeAnimation>
                        <div
                            className='at-modal'
                            style={{
                            ...modalStyle,
                            display: visible
                                ? ''
                                : 'none'
                        }}>
                            {showHead && ($slots.header || this.title)
                                ? (
                                    <div className='at-modal__header'>
                                        <div className='at-modal__title'>
                                            <slot name='header'>
                                                <p>{{
                                                        title
                                                    }}</p>
                                            </slot>
                                        </div>
                                    </div>
                                )
                                : ''
}

                            <div className='at-modal__body'>
                                <slot>
                                    <p>{{
                                            content
                                        }}</p>
                                    <div className='at-modal__input' v-if='showInput'>
                                        <at-input
                                            v-model='inputValue'
                                            : placeholder="inputPlaceholder"
                                            @keyup.enter.native="handleAction('confirm')"
                                            ref="input"></at-input>
                                    </div>
                                </slot>
                            </div>
                            {showFooter
                                ? (
                                    <div className='at-modal__footer'>
                                        <slot name='footer'>
                                            <Button v-show='showCancelButton' onclick={handleAction('cancel')}>{{
                                                    localeCancelText
                                                }}</Button>
                                            <Button
                                                type='primary'
                                                v-show='showConfirmButton'
                                                onclick={this.handleAction('confirm')}>{{
                                                    localeOKText
                                                }}</Button>
                                        </slot>
                                    </div>
                                )
                                : ''
}

                            <i v-if='isIconType' className='icon at-modal__icon' : className="iconClass"></i>
                            <span
                                v-if='showClose'
                                className='at-modal__close'
                                onClick={handleAction('cancel')}>
                                <i className='icon icon-x'></i>
                            </span>
                        </div>
                    </FadeAnimation>
                </div >
            </ div >
