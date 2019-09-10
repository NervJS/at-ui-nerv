import { VNode } from 'nerv-shared'
import * as Nerv from 'nervjs'

import { AlertProps, AlertState } from '../src/alert/alert'
import { BadgeProps } from '../src/badge/badge'
import { BreadcrumbProps } from '../src/breadcrumb/breadcrumb'
import { BreadCrumbItemProps } from '../src/breadcrumb/breadcrumb-item'
import { CardProps } from '../src/card/card'
import { CheckboxProps, CheckboxState } from '../src/checkbox/checkbox'
import { CheckboxGroupProps, CheckboxGroupState } from '../src/checkbox/checkbox-group'
import { CollapseProps, CollapseState } from '../src/collapse/collapse'
import CollapseItem from '../src/collapse/collapseItem'
import { DropdownProps, DropdownState } from '../src/dropdown/dropdown'
import { IconProps } from '../src/icon/icon'
import { InputNumberProps, InputNumberState } from '../src/input-number/InputNumber'
import { InputProps, InputState } from '../src/input/input'
import { MenuProps } from '../src/menu/Menu'
import { MenuGroupProps } from '../src/menu/MenuGroup'
import MenuItem from '../src/menu/MenuItem'
import MenuSub from '../src/menu/MenuSub'
import Message from '../src/message/Message'
import {
  ModalAlert,
  ModalConfirm,
  ModalError,
  ModalInfo,
  ModalPrompt,
  ModalProps,
  ModalState,
  ModalSuccess,
  ModalWarning
} from '../src/modal/modal'
import { ModalFooterProps } from '../src/modal/ModalFooter'
import { ModalBodyProps } from '../src/modal/ModalBody'
import { NotificationContent } from '../src/notification/notification'
import { PaginationProps } from '../src/pagination/pagination'
import { PopoverProps } from '../src/popover/popover'
import { ProgressProps } from '../src/progress/progress'
import { RadioProps, RadioState } from '../src/radio/Radio'
import { RadioButtonProps, RadioButtonState } from '../src/radio/RadioButton'
import { RadioGroupProps } from '../src/radio/RadioGroup'
import { RateProps, RateState } from '../src/rate/rate'
import { SelectProps } from '../src/select/select'
import SelectOption from '../src/select/select-option'
import SelectOptionGroup from '../src/select/select-optiongroup'
import { SliderProps } from '../src/slider/slider'
import { StepProps } from '../src/step/step'
import { StepsProps } from '../src/step/steps'
import { SwitchProps } from '../src/switch/switch'
import { TableProps } from '../src/table/table'
import { TabPaneProps } from '../src/tabs/tab-pane'
import { TabsProps } from '../src/tabs/tabs'
import { TagProps, TagState } from '../src/tag/tag'
import { TextareaProps } from '../src/textarea/textarea'
import { TimelineProps } from '../src/timeline/timeline'
import { TimelineItemProps } from '../src/timeline/timeline-item'
import { ToolProps } from '../src/tooltip/tooltip'

export { default as Button } from '../src/button/index'

interface Style {
  [key: string]: string
}
type ClassName = string

interface BaseProps {
  style?: Style
  className?: ClassName
}
export class Alert extends Nerv.Component<BaseProps & AlertProps, AlertState> {}

// card
export class Card extends Nerv.Component<BaseProps & CardProps, any> {}
// loadingbar
export interface Loadingbar {
  start: () => void
  update: () => void
  finish: () => void
  error: () => void
  config: (config: object) => void
}

// Message
export { Message }
// notification

interface NotificationInterface {
  (options: NotificationContent): void
  close?: (id: string, customCloseFunc: (a: VNode) => void) => void
  closeAll?: () => void
}
export let Notification: NotificationInterface

// badge
export class Badge extends Nerv.Component<BaseProps & BadgeProps, {}> {}

// input
export class Input extends Nerv.Component<BaseProps & InputProps, InputState> {}

// icon
export class Icon extends Nerv.Component<BaseProps & IconProps, any> {}

// breadcrumb
declare class BreadcrumbItem extends Nerv.Component<
  BaseProps & BreadCrumbItemProps,
  {}
> {}
export class Breadcrumb extends Nerv.Component<BaseProps & BreadcrumbProps, any> {
  static Item: typeof BreadcrumbItem
}

// inputnumber
export class InputNumber extends Nerv.Component<
  BaseProps & InputNumberProps,
  InputNumberState
> {}

// checkbox
declare class CheckboxGroup extends Nerv.Component<
  BaseProps & CheckboxGroupProps,
  CheckboxGroupState
> {}
export class Checkbox extends Nerv.Component<BaseProps & CheckboxProps, CheckboxState> {
  static Group: typeof CheckboxGroup
}

// Tag

// const colorArr = ['default', 'primary', 'success', 'error', 'warning', 'info']
export class Tag extends Nerv.Component<BaseProps & TagProps, TagState> {}

// dropdown
export class Dropdown extends Nerv.Component<BaseProps & DropdownProps, DropdownState> {}

export class Select extends Nerv.Component<BaseProps & SelectProps, any> {
  static Option: typeof SelectOption
  static OptionGroup: typeof SelectOptionGroup
}

declare class RadioButton extends Nerv.Component<
  BaseProps & RadioButtonProps,
  RadioButtonState
> {}

declare class RadioGroup extends Nerv.Component<BaseProps & RadioGroupProps, any> {}
export class Radio extends Nerv.Component<BaseProps & RadioProps, RadioState> {
  static elementName: 'AtRadio'
  static Button: typeof RadioButton
  static Group: typeof RadioGroup
}

// rate
export class Rate extends Nerv.Component<BaseProps & RateProps, RateState> {}

// modal
export { default as Modal } from '../src/modal/modal'

// collapse
export class Collapse extends Nerv.Component<BaseProps & CollapseProps, CollapseState> {
  static Item: typeof CollapseItem
}

// menu
export { default as Menu } from '../src/menu/Menu'

// switch
export class Switch extends Nerv.Component<BaseProps & SwitchProps, any> {
  private value: boolean
  private checkedText: any
  private unCheckedText: any
}

// tooltip
export class Tooltip extends Nerv.Component<BaseProps & ToolProps, any> {}

// slider
export class Slider extends Nerv.Component<BaseProps & SliderProps, any> {}

// textarea
export class Textarea extends Nerv.Component<BaseProps & TextareaProps, any> {}

// timeline
declare class TimelineItem extends Nerv.Component<BaseProps & TimelineItemProps, any> {}
export class Timeline extends Nerv.Component<BaseProps & TimelineProps, any> {
  static Item: typeof TimelineItem
}

// popover
export class Popover extends Nerv.Component<BaseProps & PopoverProps, any> {}

// tabs
declare class TabPane extends Nerv.Component<BaseProps & TabPaneProps, any> {}
export class Tabs extends Nerv.Component<BaseProps & TabsProps, any> {
  static Pane: typeof TabPane
}

// table
export class Table extends Nerv.Component<BaseProps & TableProps, any> {}

// steps
declare class Step extends Nerv.Component<BaseProps & StepProps, any> {}
export class Steps extends Nerv.Component<BaseProps & StepsProps, any> {
  static Step: typeof Step
}

// pagination
export class Pagination extends Nerv.Component<BaseProps & PaginationProps, any> {}

// progress
export class Progress extends Nerv.Component<BaseProps & ProgressProps, any> {}
