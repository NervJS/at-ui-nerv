import * as Nerv from 'nervjs'
import * as sinon from 'sinon'
import * as $ from 'webpack-zepto'
import { VNode } from 'nerv-shared'

import Menu from '../'

describe('menu test', () => {
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
  it('basic render', () => {
    const menuJSX = (
      <Menu mode='horizontal'>
        {}
        <Menu.Item name='1'>
          {}
          <i className='icon icon-home' />导航菜单一
        </Menu.Item>
        <Menu.Item name='2' disabled>
          {}
          <i className='icon icon-layers' />导航菜单二
        </Menu.Item>
        <Menu.Sub
          name='3'
          title={
            <span>
              <i className='icon icon-life-buoy' />导航菜单三 - 子菜单
            </span>
          }
        >
          {}
          <Menu.Group title='分组一'>
            {}
            <Menu.Item name='3-1'>{}子菜单一</Menu.Item>
            <Menu.Item name='3-2' disabled>
              {}子菜单二
            </Menu.Item>
          </Menu.Group>
          <Menu.Group title='分组二'>
            {}
            <Menu.Item name='3-3'>{}子菜单三</Menu.Item>
            <Menu.Item name='3-4'>{}子菜单四</Menu.Item>
          </Menu.Group>
        </Menu.Sub>
        <Menu.Item name='4'>
          {}
          <i className='icon icon-settings' />导航菜单四
        </Menu.Item>
      </Menu>
    )
    const component = Nerv.render(menuJSX as VNode, scratch)
    expect($(Nerv.findDOMNode(component)).find('.at-menu__item').length).toBe(7)
    expect(
      $(Nerv.findDOMNode(component)).find('.at-menu__submenu').length
    ).toBe(1)
  })
  it('mode test', () => {
    const modeSet = [`inline`, `horizontal`, `vertical`]
    modeSet.forEach((mode) => {
      const menuJSX = (
        <Menu mode={mode as `inline` | `horizontal` | `vertical`}>
          {}
          <Menu.Item name='1'>
            {}
            <i className='icon icon-home' />导航菜单一
          </Menu.Item>
        </Menu>
      )
      const component = Nerv.render(menuJSX as VNode, scratch)
      expect(
        $(Nerv.findDOMNode(component)).hasClass(`at-menu--${mode}`)
      ).toBeTruthy()
    })
  })
  it('inlineCollapsed test', (done) => {
    const onSelect = sinon.spy()
    const menuJSX = (
      <Menu onSelect={onSelect} inlineCollapsed>
        {}
        <Menu.Sub
          name='1'
          opened
          title={
            <span>
              <i className='icon icon-life-buoy' />导航菜单一
            </span>
          }
        >
          {}
          <Menu.Group title='分组一'>
            {}
            <Menu.Item name='1-1'>{}子菜单一</Menu.Item>
            <Menu.Item name='1-2'>{}子菜单二</Menu.Item>
          </Menu.Group>
          <Menu.Group title='分组二'>
            {}
            <Menu.Item name='1-3'>{}子菜单三</Menu.Item>
            <Menu.Item name='1-4'>{}子菜单四</Menu.Item>
          </Menu.Group>
        </Menu.Sub>
        <Menu.Sub
          name='2'
          title={
            <span>
              <i className='icon icon-life-buoy' />导航菜单二
            </span>
          }
        >
          {}
          <Menu.Item name='2-1'>{}子菜单一</Menu.Item>
          <Menu.Item name='2-2'>{}子菜单二</Menu.Item>
          <Menu.Item name='2-3'>{}子菜单三</Menu.Item>
          <Menu.Item name='2-4'>{}子菜单四</Menu.Item>
        </Menu.Sub>
      </Menu>
    )

    const component = Nerv.render(menuJSX as VNode, scratch)
    $(Nerv.findDOMNode(component))
      .find('.at-menu__submenu-title')
      .eq(0)
      .trigger('click')
    $(Nerv.findDOMNode(component))
      .find('.at-menu__submenu-title')
      .eq(1)
      .trigger('click')
    Nerv.nextTick(() => {
      setTimeout(() => {
        expect(
          $(Nerv.findDOMNode(component)).find('.at-menu__submenu--opened')
            .length
        ).toBe(1)
        done()
      }, 2000)
    })
  })
  it('mouse enter control', (done) => {
    const onSelect = sinon.spy()
    const menuJSX = (
      <Menu onSelect={onSelect} mode={`horizontal`}>
        {}
        <Menu.Sub
          name='1'
          opened
          title={
            <span>
              <i className='icon icon-life-buoy' />导航菜单一
            </span>
          }
        >
          {}
          <Menu.Group title='分组一'>
            {}
            <Menu.Item name='1-1'>{}子菜单一</Menu.Item>
            <Menu.Item name='1-2'>{}子菜单二</Menu.Item>
          </Menu.Group>
          <Menu.Group title='分组二'>
            {}
            <Menu.Item name='1-3'>{}子菜单三</Menu.Item>
            <Menu.Item name='1-4'>{}子菜单四</Menu.Item>
          </Menu.Group>
        </Menu.Sub>
        <Menu.Sub
          name='2'
          title={
            <span>
              <i className='icon icon-life-buoy' />导航菜单二
            </span>
          }
        >
          {}
          <Menu.Item name='2-1'>{}子菜单一</Menu.Item>
          <Menu.Item name='2-2'>{}子菜单二</Menu.Item>
          <Menu.Item name='2-3'>{}子菜单三</Menu.Item>
          <Menu.Item name='2-4'>{}子菜单四</Menu.Item>
        </Menu.Sub>
      </Menu>
    )
    const component = Nerv.render(menuJSX as VNode, scratch)
    $(Nerv.findDOMNode(component))
      .find('.at-menu__submenu')
      .eq(0)
      .trigger('mouseenter')
    Nerv.nextTick(() => {
      expect(
        $(Nerv.findDOMNode(component))
          .find('.at-menu__submenu')
          .eq(0)
          .hasClass('at-menu__submenu--opened')
      ).toBeTruthy()
      done()
    })
  })
  it('mouse leave control', (done) => {
    const onSelect = sinon.spy()
    const menuJSX = (
      <Menu onSelect={onSelect} mode={`horizontal`}>
        {}
        <Menu.Sub
          name='1'
          opened
          title={
            <span>
              <i className='icon icon-life-buoy' />导航菜单一
            </span>
          }
        >
          {}
          <Menu.Group title='分组一'>
            {}
            <Menu.Item name='1-1'>{}子菜单一</Menu.Item>
            <Menu.Item name='1-2'>{}子菜单二</Menu.Item>
          </Menu.Group>
          <Menu.Group title='分组二'>
            {}
            <Menu.Item name='1-3'>{}子菜单三</Menu.Item>
            <Menu.Item name='1-4'>{}子菜单四</Menu.Item>
          </Menu.Group>
        </Menu.Sub>
        <Menu.Sub
          name='2'
          title={
            <span>
              <i className='icon icon-life-buoy' />导航菜单二
            </span>
          }
        >
          {}
          <Menu.Item name='2-1'>{}子菜单一</Menu.Item>
          <Menu.Item name='2-2'>{}子菜单二</Menu.Item>
          <Menu.Item name='2-3'>{}子菜单三</Menu.Item>
          <Menu.Item name='2-4'>{}子菜单四</Menu.Item>
        </Menu.Sub>
      </Menu>
    )
    const component = Nerv.render(menuJSX as VNode, scratch)
    $(Nerv.findDOMNode(component))
      .find('.at-menu__submenu')
      .eq(0)
      .trigger('mouseenter')
    $(Nerv.findDOMNode(component))
      .find('.at-menu__submenu')
      .eq(0)
      .trigger('mouseleave')
    Nerv.nextTick(() => {
      expect(
        $(Nerv.findDOMNode(component))
          .find('.at-menu__submenu')
          .eq(0)
          .hasClass('at-menu__submenu--opened')
      ).toBeFalsy()
      done()
    })
  })
  it('onSelect', (done) => {
    const onSelect = sinon.spy()
    const menuJSX = (
      <Menu onSelect={onSelect} mode={`horizontal`}>
        {}
        <Menu.Sub
          name='1'
          opened
          title={
            <span>
              <i className='icon icon-life-buoy' />导航菜单一
            </span>
          }
        >
          {}
          <Menu.Group title='分组一'>
            {}
            <Menu.Item name='1-1'>{}子菜单一</Menu.Item>
            <Menu.Item name='1-2'>{}子菜单二</Menu.Item>
          </Menu.Group>
          <Menu.Group title='分组二'>
            {}
            <Menu.Item name='1-3'>{}子菜单三</Menu.Item>
            <Menu.Item name='1-4'>{}子菜单四</Menu.Item>
          </Menu.Group>
        </Menu.Sub>
        <Menu.Sub
          name='2'
          title={
            <span>
              <i className='icon icon-life-buoy' />导航菜单二
            </span>
          }
        >
          {}
          <Menu.Item name='2-1'>{}子菜单一</Menu.Item>
          <Menu.Item name='2-2'>{}子菜单二</Menu.Item>
          <Menu.Item name='2-3'>{}子菜单三</Menu.Item>
          <Menu.Item name='2-4'>{}子菜单四</Menu.Item>
        </Menu.Sub>
      </Menu>
    )
    const component = Nerv.render(menuJSX as VNode, scratch)
    $(Nerv.findDOMNode(component))
      .find('.at-menu__submenu')
      .find('.at-menu__item').eq(0)
      .trigger('click')
    Nerv.nextTick(() => {
      expect(onSelect.callCount).toBe(1)
      done()
    })
  })

})
