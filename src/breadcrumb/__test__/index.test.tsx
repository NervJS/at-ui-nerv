import * as Nerv from 'nervjs'
import * as $ from 'webpack-zepto'
import Breadcrumb from '../'

describe('Breadcrumb test', () => {
    let scratch
    beforeAll(() => {
        scratch = document.createElement('div')
        document
            .body
            .appendChild(scratch)
    })

    beforeEach(() => {
        scratch = document.createElement('div')
        document
            .body
            .appendChild(scratch)
    })

    afterAll(() => {
        scratch
            .parentNode
            .removeChild(scratch)
        scratch = null
    })
    it('basic test', () => {
        const breadcrumb = <Breadcrumb>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>活动管理</Breadcrumb.Item>
        </Breadcrumb>
        const component = Nerv.render(breadcrumb, scratch)
        expect($(component.dom).hasClass('at-breadcrumb')).toBeTruthy()
        expect($(component.dom).find('.at-breadcrumb__item').length).toBe(2)
    })
    it('test separator', () => {
        const breadcrumb = <Breadcrumb separator='\'>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>活动管理</Breadcrumb.Item>
        </Breadcrumb>
        const component = Nerv.render(breadcrumb, scratch)
        expect($(component.dom).find('.at-breadcrumb__separator').text()).toBe('\\')
    })
})
