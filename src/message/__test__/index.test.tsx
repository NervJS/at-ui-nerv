import * as Nerv from 'nervjs'
import sinon from 'sinon'
import $ from 'webpack-zepto'
import Message from '../'

describe('message test', () => {
  let scratch
  beforeAll(() => {
    scratch = document.createElement('div')
    document.body.appendChild(scratch)
  })

  beforeEach(() => {
    scratch = document.createElement('div')
    document.body.appendChild(scratch)
  })

  afterEach(() => {
    scratch.parentNode.removeChild(scratch)
    scratch = null
  })
  it('basic render', (done) => {
    Message.info &&
      Message.info({
        message: 'isInfo',
        duration: 3000
      })
    Nerv.nextTick(() => {
      expect($(document.body).find('.at-message__wrapper')).toBeTruthy()
      done()
    })
  })
  it('different mode', () => {
    const modes = ['info', 'success', 'warning', 'error', 'loading']
    modes.forEach((mode) => {
      Message[mode]({
        message: 'isInfo',
        duration: 3000
      })
      expect($('.at-message').hasClass(`at-message--${mode}`)).toBeTruthy()
    })
  })
})
