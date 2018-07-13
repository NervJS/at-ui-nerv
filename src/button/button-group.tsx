import * as Nerv from 'nervjs'
import classnames from 'classnames'

import { ButtonSize } from './button'

export interface ButtonGroupProps {
  size?: ButtonSize,
  className?: string,
  children?: any[]
}

export default function ButtonGroup (props: ButtonGroupProps) {
  const { size, className, ...others } = props
  const classNames = classnames('at-btn-group', [
    props.size ? `at-btn-group--${size}` : ''
  ], className)
  return (
    <div className={classNames} {...others} />
  )
}
