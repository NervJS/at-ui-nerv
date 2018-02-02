import * as Nerv from 'nervjs'
import * as $ from 'webpack-zepto'
import * as sinon from 'sinon'
import { Checkbox, CheckboxGroup } from '../'

describe('Checkbox', () => {
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
})
