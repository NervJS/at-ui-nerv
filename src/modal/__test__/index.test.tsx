import * as Nerv from 'nervjs'
import sinon from 'sinon'
import $ from 'webpack-zepto'
import Modal from '../'
import { VNode } from 'nerv-shared'
describe('modal test', () => {
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
    $('.at-modal__container').remove()
  })
  afterAll(() => {
    scratch.parentNode.removeChild(scratch)
    scratch = null
  })
  it('basic render', (done) => {
    Modal.alert({
      title: '这里是标题名称',
      content: '这里是文本内容'
    })
    setTimeout(() => {
      expect($('.at-modal__container').length).toBeTruthy()
      done()
    }, 4000)
  })
  it('use Modal as component ', (done) => {
    const modalJSX = (
      <Modal value title={'这是标题1'}>
        <Modal.body style='text-align:center;'>
          <p>能看到这里的内容吗？</p>
        </Modal.body>
        <Modal.footer />
      </Modal>
    )
    Nerv.render(modalJSX as VNode, scratch)
    Nerv.nextTick(() => {
      expect($('.at-modal__container').length).toBeTruthy()
      done()
    })
  })
  it('mask click close', (done) => {
    const onCancel = sinon.spy()
    Modal.confirm({
      title: '提示1',
      content: '此操作需要非常谨慎，您确定要这么做吗？',
      onCancel
    })
    new Promise((resolve, reject) => {
      setTimeout(() => {
        $('.at-modal__mask').trigger('click')
        resolve()
      }, 2000)
    }).then(() => {
      setTimeout(() => {
        expect($('.at-modal').length).toBeFalsy()
        done()
      }, 2000)
    })
  })
  it('different mode', (done) => {
    const modes = ['info', 'success', 'warning', 'error']
    modes.forEach((mode) => {
      Modal[mode]({
        content: `这里是${mode}的消息`
      })
      Nerv.nextTick(() => {
        $('.at-modal__close')
          .eq(0)
          .trigger('click')
      })
    })

    done()
  })
  it('prompt test', (done) => {
    const onConfirm = sinon.spy()
    Modal.prompt({
      title: '提示',
      content: (
        <div>
          <p>'请输入邮件地址：'</p>
          <input
            onChange={(e) => {
              this.setState({
                value: e.target.value
              })
            }}
          />
        </div>
      ),
      onConfirm
    })
    $('.at-btn--primary').trigger('click')
    Nerv.nextTick(() => {
      expect($('.at-modal__container').length).toBeFalsy()
      done()
    })
  })
  it('close btn click should close modal', (done) => {
    Modal.confirm({
      title: '提示2',
      content: '此操作需要非常谨慎，您确定要这么做吗？'
    })
    $('.at-modal__close')
      .eq(0)
      .trigger('click')
    Nerv.nextTick(() => {
      expect($('.at-modal').length).toBeFalsy()
      done()
    }, 2000)
  })
  it('确认 btn should trigger onConfirm', (done) => {
    const onConfirm = sinon.spy()
    const modalJSX = (
      <Modal value title={'这是标题3'} onConfirm={onConfirm}>
        <Modal.body style='text-align:center;'>
          <p>能看到这里的内容吗？</p>
        </Modal.body>
        <Modal.footer />
      </Modal>
    )
    Nerv.render(modalJSX as VNode, scratch)
    new Promise((resolve, reject) => {
      Nerv.nextTick(() => {
        $('.at-modal__container')
          .find('.at-btn--primary')
          .trigger('click')
        resolve()
      })
    }).then(() => {
      Nerv.nextTick(() => {
        expect(onConfirm.callCount).toBe(1)
        done()
      })
    })
  })
  it('取消 btn should trigger onCancel', (done) => {
    const onCancel = sinon.spy()
    const modalJSX = (
      <Modal
        value
        title={'这是标题4'}
        type={'success'}
        onCancel={onCancel}
      >
        <Modal.body style={{ textAlign: 'center' }}>
          <p>能看到这里的内容吗？</p>
        </Modal.body>
        <Modal.footer showCancel />
      </Modal>
    )
    Nerv.render(modalJSX as VNode, scratch)
    new Promise((resolve, reject) => {
      Nerv.nextTick(() => {
        $('.at-modal__container')
          .find('.at-btn--default')
          .trigger('click')
        resolve()
      })
    }).then(() => {
      Nerv.nextTick(() => {
        expect(onCancel.callCount).toBe(1)
        done()
      })
    })
  })
  it('different mode should work', async () => {
    const modes = {
      info: 'icon-info',
      success: 'icon-check-circle',
      warning: 'icon-alert-circle',
      error: 'icon-x-circle'
    }
    for (const mode in modes) {
      const modalJSX = (
        <Modal value type={mode}>
          <Modal.body style={{ textAlign: 'center' }}>
            <p>能看到这里的内容吗？</p>
          </Modal.body>
          <Modal.footer showCancel />
        </Modal>
      )
      Nerv.render(modalJSX as VNode, scratch)
      await new Promise((resolve, reject) => {
        Nerv.nextTick(() => {
          expect($('.at-modal__icon').hasClass(modes[mode])).toBeTruthy()
          $('.at-btn--primary').trigger('click')
          Nerv.unmountComponentAtNode(scratch)
          resolve()
        })
      })
    }
  })
})
