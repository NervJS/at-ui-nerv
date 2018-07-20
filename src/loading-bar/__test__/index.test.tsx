import * as Nerv from 'nervjs'
import sinon from 'sinon'
import $ from 'webpack-zepto'

import LoadingBar from  '../'

describe('loadingBar test', () => {
    afterAll(() => {
        LoadingBar.finish()
    })
    it('basic render', () => {
        LoadingBar.start()
        expect($(document.body).find('.at-loading-bar')).toBeTruthy()
    })
    it('single instance', () => {
        const controlMethods = ['start', 'finish', 'error', 'update']
        controlMethods.forEach((method) => {
            LoadingBar[method]()
            expect($(document.body).find('.at-loading-bar').length).toBe(1)
        })
    })
})
