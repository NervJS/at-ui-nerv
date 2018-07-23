import * as Nerv from 'nervjs'
import * as sinon from 'sinon'
import * as $ from 'webpack-zepto'

import Radio from '../'
import { VNode } from 'nerv-shared'

describe('Radio test', () => {
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
		const onChange = sinon.spy()
		const radioJSX = (
			<Radio onChange={onChange} value={'2'} label='1'>
				{}
				选项一
			</Radio>
		)
		const component = Nerv.render(radioJSX as any, scratch)
		$(Nerv.findDOMNode(component)).trigger('click')
		expect(
			$(component.vnode.dom)
				.find('.at-radio__inner')
				.hasClass('at-radio--checked')
		).toBeFalsy()
		expect(onChange.called).toBeTruthy()
	})
	it('disabled', () => {
		const onChange = sinon.spy()
		class Test extends Nerv.Component {
			state = {
				radio1: 0
			}
			render () {
				return (
					<div>
						<Radio
							onChange={(label) => {
								onChange()
								this.setState({ radio1: label })
							}}
							disabled
							value={this.state.radio1}
							label='1'
						>
							{}
							选项一
						</Radio>
						<Radio
							onChange={(label) => {
								this.setState({ radio1: label })
							}}
							value={this.state.radio1}
							label='2'
							Radio
						>
							{}
							选项二
						</Radio>
					</div>
				)
			}
		}
		const component = Nerv.render(<Test /> as VNode, scratch)
		$(component.vnode.dom)
			.find('.at-radio')
			.eq(0)
			.trigger('click')
		Nerv.nextTick(() => {
			expect(onChange.called).toBeFalsy()
		})
	})
	it('radioGroup', () => {
		const onChange = sinon.spy()
		const radioGroupJSX = (
			<Radio.Group
				value={1}
				fill='#FF6464'
				textColor='#4C5D73'
				onRadioGroupChange={(label) => {
					onChange(label)
				}}
			>
				{}
				<Radio value={1} label='1'>
					{}选项一
				</Radio>
				<Radio value={2} label='2'>
					{}选项二
				</Radio>
				<Radio value={3} label='3'>
					{}选项三
				</Radio>
			</Radio.Group>
		)
		const component = Nerv.render(radioGroupJSX as any, scratch)
		$(component.vnode.dom)
			.find('.at-radio')
			.eq(0)
			.trigger('click')
		expect(onChange.args).toEqual([['1']])
	})
	it('radio button', (done) => {
		const onChange = sinon.spy()
		const radiob = (
			<Radio.Button label='北京' act onChange={onChange}>
				{}北京
			</Radio.Button>
		)
		const component = Nerv.render(radiob as any, scratch)
		$(Nerv.findDOMNode(component)).trigger('click')
		Nerv.nextTick(() => {
			expect(onChange.called).toBeTruthy()
			done()
		})
	})
	it('radio btn group', (done) => {
		const btnGroup = (
			<Radio.Group value={'北京'} textColor='#4C5D73'>
				{}
				<Radio.Button label='北京' >{}北京</Radio.Button>
				<Radio.Button label='上海' disabled>
					{}上海
				</Radio.Button>
				<Radio.Button label='深圳'>{}深圳</Radio.Button>
				<Radio.Button label='凹凸实验室'>{}凹凸实验室</Radio.Button>
			</Radio.Group>
		)
		const component = Nerv.render(btnGroup as any, scratch)
		$(Nerv.findDOMNode(component))
			.find('.at-radio-button')
			.eq(0)
			.trigger('click')
		Nerv.nextTick(() => {
			expect($(Nerv.findDOMNode(component)).css('color')).toBe('rgb(0, 0, 0)')
			done()
		})
  })
})
