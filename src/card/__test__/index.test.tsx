import * as Nerv from 'nervjs'
import * as $ from 'webpack-zepto'
// import * as sinon from 'sinon'
import Card from '../'

describe('card', () => {
  let scratch
  beforeAll(() => {
    scratch = document.createElement('div')
    document.body.appendChild(scratch)
  })

  beforeEach(() => {
    scratch = document.createElement('div')
    document.body.appendChild(scratch)
  })

  afterAll(() => {
    scratch.parentNode.removeChild(scratch)
    scratch = null
  })
  it('basic render', () => {
    const card = (
      <Card>
        <div slot='title'>title</div>
        <div slot='extra'>
          <a>extra</a>
        </div>
        <div>content</div>
      </Card>
    )
    const component = Nerv.render(card, scratch)
    expect(
      $(component.dom)
        .find('.at-card__title')
        .text()
    ).toBe('title')
    expect(
      $(component.dom)
        .find('.at-card__extra')
        .text()
    ).toBe('extra')
    expect(
      $(component.dom)
        .find('.at-card__body')
        .html()
    ).toBe('<div>content</div>')
  })
  it('bodyStyle test', () => {
    const bodyStyle = { padding: 0 }
    const card = <Card style={{ width: '300px' }} bodyStyle={bodyStyle} />
    const component = Nerv.render(card, scratch)
    expect($(component.dom).find('.at-card__body').css('padding')).toBe('0px')
  })
})
