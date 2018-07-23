import $ from 'webpack-zepto'

import Notification from '../'

describe('notification test', () => {
  afterEach(() => {
    $('.at-notification').remove()
  })
  it('basic render', () => {
    const noticeTitle = '这里是标题'
    Notification({ title: noticeTitle })
    expect($('.at-notification').length).toBeTruthy()
    expect($('.at-notification').text()).toBe(noticeTitle)
  })
  it('with message', () => {
    const noticeTitle = '这里是标题'
    const noticeMessage = '这里是内容'
    Notification({
      title: noticeTitle,
      message: noticeMessage
    })
    expect($('.at-notification__title').text()).toBe(noticeTitle)
    expect($('.at-notification__message').text()).toBe(noticeMessage)
  })
  it('duration set auto close after 2s', (done) => {
    Notification({
      title: '这里是标题',
      message: '这里是内容，文案~~~',
      duration: 2000
    })
    expect($('.at-notification')).toBeTruthy()
    setTimeout(() => {
      expect($('.at-notification').length).toBeFalsy()
      done()
    }, 3100)
  })
  it('close btn should work', (done) => {
    Notification({
      title: '这里是标题',
      message: '这里是内容，文案~~~',
      duration: 2000
    })
    expect($('.at-notification')).toBeTruthy()
    new Promise((resolve, reject) => {
      setTimeout(() => {
        $('.at-notification__close').trigger('click')
        resolve()
      }, 1000)
    }).then(() => {
      setTimeout(() => {
        expect($('.at-notification').length).toBeFalsy()
        done()
      }, 3000)
    })
  })
  it('different type of icon', () => {
    const iconMap = {
      success: 'icon-check-circle',
      error: 'icon-x-circle',
      warning: 'icon-alert-circle',
      info: 'icon-info'
    }
    Object.keys(iconMap).forEach((type) => {
      Notification({
        title: '这里是标题',
        message: '这里是内容，文案~~~',
        duration: 2000,
        type
      })
      expect($('.at-notification__icon').hasClass(iconMap[type])).toBeTruthy()
      //   $(document.body)
      //     .find('*')
      //     .remove()
    })
  })
})
