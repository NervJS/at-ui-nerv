import { VNode } from 'nerv-shared'
import * as Nerv from 'nervjs'

import { AlertProps, AlertState } from '../src/alert/alert'
import { BadgeProps } from '../src/badge/badge'
import { BreadcrumbProps } from '../src/breadcrumb/breadcrumb'
import { BreadCrumbItemProps, BreadCrumbItemState } from '../src/breadcrumb/breadcrumb-item'
import { ButtonProps } from '../src/button/button'
import ButtonGroup from '../src/button/button-group'
import { CardProps } from '../src/card/card'
import { CheckboxProps, CheckboxState } from '../src/checkbox/checkbox'
import { CheckboxGroupProps, CheckboxGroupState } from '../src/checkbox/checkbox-group'
import { CollapseProps, CollapseState } from '../src/collapse/collapse'
import { CollapseItemProps, CollapseItemState } from '../src/collapse/collapseItem'
import { DropdownProps, DropdownState } from '../src/dropdown/dropdown'
import { IconProps } from '../src/icon/icon'
import { InputNumberProps, InputNumberState } from '../src/input-number/InputNumber'
import { InputProps, InputState } from '../src/input/input'
import { MenuProps } from '../src/menu/Menu'
import { MenuGroupProps } from '../src/menu/MenuGroup'
import MenuItem from '../src/menu/MenuItem'
import MenuSub from '../src/menu/MenuSub'
import { MessageContent } from '../src/message/Message'
import { ModalFunc, ModalProps, ModalState } from '../src/modal/modal'
import { ModalFooterProps } from '../src/modal/ModalFooter'
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

declare namespace AtUINerv {
  // Button
  export class Button extends Nerv.Component<ButtonProps, any> {
    static Group: typeof ButtonGroup
  }

  export class Alert extends Nerv.Component<AlertProps, AlertState> {}

  // card
  export class Card extends Nerv.Component<CardProps, any> {}
  // loadingbar
  export interface Loadingbar {
    start: () => void
    update: () => void
    finish: () => void
    error: () => void
    config: (config: object) => void
  }
  // Message
  interface MessageInterface {
    (options?: MessageContent): void
    close?: (id: string, customCloseFunc: (a: VNode) => void) => void
    closeAll?: () => void
    info?: (e: any) => void
    success?: (e: any) => void
    warning?: (e: any) => void
    error?: (e: any) => void
  }
  export let Message: MessageInterface
  // notification

  interface NotificationInterface {
    (options: MessageContent): void
    close?: (id: string, customCloseFunc: (a: VNode) => void) => void
    closeAll?: () => void
  }
  export let Notification: NotificationInterface

  // badge
  export class Badge extends Nerv.Component<BadgeProps, {}> {}

  // input
  export class Input extends Nerv.Component<InputProps, InputState> {}

  // icon
  export class Icon extends Nerv.Component<IconProps, any> {}

  // breadcrumb
  class BreadcrumbItem extends Nerv.Component<
    BreadCrumbItemProps,
    BreadCrumbItemState
  > {}
  export class Breadcrumb extends Nerv.Component<BreadcrumbProps, any> {
    static Item: typeof BreadcrumbItem
  }

  // inputnumber
  export class InputNumber extends Nerv.Component<
    InputNumberProps,
    InputNumberState
  > {}

  // checkbox
  class CheckboxGroup extends Nerv.Component<
    CheckboxGroupProps,
    CheckboxGroupState
  > {}
  export class Checkbox extends Nerv.Component<CheckboxProps, CheckboxState> {
    static Group: typeof CheckboxGroup
  }

  // Tag

  // const colorArr = ['default', 'primary', 'success', 'error', 'warning', 'info']
  export class Tag extends Nerv.Component<TagProps, TagState> {}

  // dropdown
  export class Dropdown extends Nerv.Component<DropdownProps, DropdownState> {}

  export class Select extends Nerv.Component<SelectProps, any> {
    static Option: typeof SelectOption
    static OptionGroup: typeof SelectOptionGroup
  }

  class RadioButton extends Nerv.Component<
    RadioButtonProps,
    RadioButtonState
  > {}

  class RadioGroup extends Nerv.Component<RadioGroupProps, any> {}
  export class Radio extends Nerv.Component<RadioProps, RadioState> {
    static elementName: 'AtRadio'
    static Button: typeof RadioButton
    static Group: typeof RadioGroup
  }

  // rate
  export class Rate extends Nerv.Component<RateProps, RateState> {}

  // modal
  class ModalFooter extends Nerv.Component<ModalFooterProps, any> {}
  class ModalBody {}
  export class Modal extends Nerv.Component<ModalProps, ModalState> {
    static body: typeof ModalBody
    static footer: typeof ModalFooter
    static alert: ModalFunc
    static info: ModalFunc
    static success: ModalFunc
    static error: ModalFunc
    static warning: ModalFunc
    static confirm: ModalFunc
    static prompt: ModalFunc
  }

  // collapse
  class CollapseItem extends Nerv.Component<
    CollapseItemProps,
    CollapseItemState
  > {}
  export class Collapse extends Nerv.Component<CollapseProps, CollapseState> {
    static Item: typeof CollapseItem
  }

  // menu
  class MenuGroup extends Nerv.Component<MenuGroupProps, any> {}
  export class Menu extends Nerv.Component<MenuProps, any> {
    static Group: typeof MenuGroup
    static Item: typeof MenuItem
    static Sub: typeof MenuSub
  }

  // switch
  export class Switch extends Nerv.Component<SwitchProps, any> {
    private value: boolean
    private checkedText: any
    private unCheckedText: any
  }

  // tooltip
  export class Tooltip extends Nerv.Component<ToolProps, any> {}

  // slider
  export class Slider extends Nerv.Component<SliderProps, any> {}

  // textarea
  export class Textarea extends Nerv.Component<TextareaProps, any> {}

  // timeline
  class TimelineItem extends Nerv.Component<TimelineItemProps, any> {}
  export class Timeline extends Nerv.Component<TimelineProps, any> {
    static Item: typeof TimelineItem
  }

  // popover
  export class Popover extends Nerv.Component<PopoverProps, any> {}

  // tabs
  class TabPane extends Nerv.Component<TabPaneProps, any> {}
  export class Tabs extends Nerv.Component<TabsProps, any> {
    static Pane: typeof TabPane
  }

  // table
  export class Table extends Nerv.Component<TableProps, any> {}

  // steps
  class Step extends Nerv.Component<StepProps, any> {}
  export class Steps extends Nerv.Component<StepsProps, any> {
    static Step: typeof Step
  }

  // pagination
  export class Pagination extends Nerv.Component<PaginationProps, any> {}

  // progress
  export class Progress extends Nerv.Component<ProgressProps, any> {}
}

export = AtUINerv
