// 思路参考自Element React
import * as Nerv from 'nervjs'
import classnames from 'classnames'

export default class Component<P, S> extends Nerv.Component<P & {
  className?: string
  style?: {
    [key: string]: string | number
  } | string
}, S> {
  state: S
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
