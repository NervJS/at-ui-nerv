// 思路参考自Element React
import * as Nerv from 'nervjs'
console.log('Nerv', Nerv)
import classnames from 'classnames'

export default class Component<props, state> extends Nerv.Component<props, state> {
  classnames (...args): string {
    return classnames(...args)
  }
  className (...args) {
    const { className } = this.props
    return this.classnames.apply(this, args.concat(className))
  }
  style (args): object {
    const { style } = this.props
    return {...args, ...style}
  }
}
