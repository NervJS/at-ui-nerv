// 思路参考自Element React
import classnames from 'classnames'
import * as Nerv from 'nervjs'
import { CSSProperties } from 'react'

export default class Component<P, S> extends Nerv.Component<P & {
  className?: string
  style?: CSSProperties
}, S> {
  constructor (...args) {
    super(args[0], args[1])
  }
  classnames (...args): string {
    return classnames(...args)
  }
  className (...args) {
    const { className } = this.props
    return this.classnames.apply(this, args.concat(className))
  }
  style (args: object) {
    const { style } = this.props
    return {...args, ...(style as object)}
  }
}
