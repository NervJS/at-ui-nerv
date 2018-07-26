declare module 'at-ui-nerv' {
  export import Button = AtUINerv.Button
  export import Alert = AtUINerv.Alert
  export import Card = AtUINerv.CardL
  export import Loadingbar = AtUINerv.Loadingbar
  export import Message = AtUINerv.Message
  export import Notification = AtUINerv.Notification
  export import Badge = AtUINerv.Badge
  export import Input = AtUINerv.Input
  export import Icon = AtUINerv.Icon
  export import Breadcrumb = AtUINerv.Breadcrumb
  export import InputNumber = AtUINerv.InputNumber
  export import Checkbox = AtUINerv.Checkbox
  export import Tag = AtUINerv.Tag
  export import Dropdown = AtUINerv.Dropdown
  export import Select = AtUINerv.Select
  export import Radio = AtUINerv.Radio
  export import Rate = AtUINerv.Rate
  export import Modal = AtUINerv.Modal
  export import Collapse = AtUINerv.Collapse
  export import Menu = AtUINerv.Menu
  export import Switch = AtUINerv.Switch
  export import Tooltip = AtUINerv.Tooltip
  export import Slider = AtUINerv.Slider
  export import Textarea = AtUINerv.Textarea
  export import Timeline = AtUINerv.Timeline
  export import Popover = AtUINerv.Popover
  export import Tabs = AtUINerv.Tabs
  export import Table = AtUINerv.Table
  export import Steps = AtUINerv.Steps
  export import Pagination = AtUINerv.Pagination
  export import Progress = AtUINerv.Progress
}
declare module '@o2team/at-ui-nerv' {
  export import Button = AtUINerv.Button
  export import Alert = AtUINerv.Alert
  export import Card = AtUINerv.CardL
  export import Loadingbar = AtUINerv.Loadingbar
  export import Message = AtUINerv.Message
  export import Notification = AtUINerv.Notification
  export import Badge = AtUINerv.Badge
  export import Input = AtUINerv.Input
  export import Icon = AtUINerv.Icon
  export import Breadcrumb = AtUINerv.Breadcrumb
  export import InputNumber = AtUINerv.InputNumber
  export import Checkbox = AtUINerv.Checkbox
  export import Tag = AtUINerv.Tag
  export import Dropdown = AtUINerv.Dropdown
  export import Select = AtUINerv.Select
  export import Radio = AtUINerv.Radio
  export import Rate = AtUINerv.Rate
  export import Modal = AtUINerv.Modal
  export import Collapse = AtUINerv.Collapse
  export import Menu = AtUINerv.Menu
  export import Switch = AtUINerv.Switch
  export import Tooltip = AtUINerv.Tooltip
  export import Slider = AtUINerv.Slider
  export import Textarea = AtUINerv.Textarea
  export import Timeline = AtUINerv.Timeline
  export import Popover = AtUINerv.Popover
  export import Tabs = AtUINerv.Tabs
  export import Table = AtUINerv.Table
  export import Steps = AtUINerv.Steps
  export import Pagination = AtUINerv.Pagination
  export import Progress = AtUINerv.Progress
}
declare namespace AtUINerv {
  //Button
  export type ButtonType =
    | 'default'
    | 'primary'
    | 'success'
    | 'error'
    | 'warning'
    | 'info'
    | 'text'
  export type ButtonSize = 'large' | 'small' | 'smaller'

  interface ButtonProps {
    type?: ButtonType
    className?: string
    icon?: string
    size?: ButtonSize
    hollow?: boolean
    nativeType?: string
    loading?: boolean
    circle?: boolean
    disabled?: boolean
  }
  interface ButtonGroupProps {
    size?: ButtonSize
    className?: string
    children?: any[]
  }
  export class Button extends Nerv.Component<ButtonProps, any> {
    static Group: typeof ButtonGroup
  }
  //alert
  interface AlertProps {
    type?: string
    message?: string
    description?: string
    closable?: boolean
    showIcon?: boolean
    icon?: string
    closeText?: string
  }

  interface AlertState {
    isShow: boolean
    isExited: boolean
  }

  export class Alert extends Nerv.Component<AlertProps, AlertState> {}
  //card
  interface CardProps {
    bordered?: boolean
    noHover?: boolean
    bodyStyle?: object
    loading?: boolean
  }
  export class CardL extends Nerv.Component<CardProps, any> {}
  //loadingbar
  export interface Loadingbar {
    start: () => void
    update: () => void
    finish: () => void
    error: () => void
    config: (config: object) => void
  }
  //Message
  export type MessageContent = OptionsContent | string
  export interface OptionsContent {
    type?: string
    message?: string
    duration: number
    icon?: string
    onClose?: () => void
  }
  interface MessageInterface {
    (options?: OptionsContent | string): void
    close?: (id: string, customCloseFunc: (a: VNode) => void) => void
    closeAll?: () => void
    info?: (e: any) => void
    success?: (e: any) => void
    warning?: (e: any) => void
    error?: (e: any) => void
  }
  export let Message: MessageInterface
  //notification
  interface OptionsContent {
    type?: string
    title?: string
    message?: string
    duration?: number
    icon?: string
    onClose?: () => void
  }

  interface NotificationInterface {
    (options: OptionsContent): void
    close?: (id: string, customCloseFunc: (a: VNode) => void) => void
    closeAll?: () => void
  }
  export let Notification: NotificationInterface
  //badge
  interface BadgeProps {
    value?: string | number
    maxNum?: number
    dot?: boolean
    show?: boolean
    status?: string
  }

  export class Badge extends Nerv.Component<BadgeProps, {}> {}
  //input
  interface InputProps {
    type?: string
    value?: string | number
    name?: string
    placeholder?: string
    icon?: string
    prependButton?: boolean
    appendButton?: boolean
    readonly?: boolean
    disabled?: boolean
    autofocus?: boolean
    maxlength?: number
    minlength?: number
    max?: number
    min?: number
  }

  interface InputState {
    currentValue?: string | number
  }

  export class Input extends Nerv.Component<InputProps, InputState> {}
  //icon
  export interface IconProps {
    className?: string
    type?: string
  }

  export class Icon extends Nerv.Component<IconProps, any> {}
  //breadcrumb
  interface BreadCrumbItemProps {
    href?: string
    to?: object | string
    replace?: boolean
  }

  interface BreadCrumbItemState {
    separator?: string
  }

  class BreadCrumbItem extends Nerv.Component<
    BreadCrumbItemProps,
    BreadCrumbItemState
  > {}
  export class Breadcrumb extends Nerv.Component<BreadcrumbProps, any> {
    static Item: typeof BreadcrumbItem
  }
  //inputnumber
  interface InputNumberProps {
    value?: number
    onBlur?: (a?) => {}
    onFocus?: (a) => {}
    size?: 'large' | 'normal' | 'small'
    step?: number | string
    min?: number
    max?: number
    disabled?: boolean
    readonly?: boolean
    autofocus?: boolean
    onChange?: (val: number) => void
  }

  interface InputNumberState {
    currentValue: number
  }

  export class InputNumber extends Nerv.Component<
    InputNumberProps,
    InputNumberState
  > {}
  //checkbox
  export interface CheckboxProps {
    label?: labelType
    name?: string
    checked?: boolean
    disabled?: boolean
    onChange?: (checked: boolean, label: labelType) => {}
  }

  interface State {
    focus: boolean
    currentValue: any
  }
  interface CheckboxGroupProps {
    onChange?: (e) => void
  }

  interface CheckboxGroupState {
    valueList: any[]
  }

  class CheckboxGroup extends Nerv.Component<
    CheckboxGroupProps,
    CheckboxGroupState
  > {}
  export class Checkbox extends Nerv.Component<CheckboxProps, State> {
    static Group: typeof CheckboxGroup
  }
  //Tag
  export interface TagProps {
    name?: string | number
    color?: string
    closable?: boolean
  }

  export interface TagState {
    show: boolean
  }

  const colorArr = ['default', 'primary', 'success', 'error', 'warning', 'info']
  export class Tag extends Nerv.Component<TagProps, TagState> {}
  //dropdown
  interface DropdownProps {
    trigger?: 'click' | 'hover' | 'focus'
    placement?:
      | 'top'
      | 'top-left'
      | 'top-right'
      | 'left'
      | 'left-top'
      | 'left-bottom'
      | 'right'
      | 'right-top'
      | 'right-bottom'
      | 'bottom'
      | 'bottom-left'
      | 'bottom-right'
    dropDownChange?: (name) => void
  }

  interface DropdownState {
    visible: boolean
  }

  export class Dropdown extends Nerv.Component<DropdownProps, DropdownState> {}
  //select
  export interface SelectProps {
    className?: string
    icon?: string
    hollow?: boolean
    nativeType?: string
    loading?: boolean
    circle?: boolean
    disabled?: boolean
    value?: string | number
  }

  export class Select extends Nerv.Component<SelectProps, any> {
    static Option: typeof SelectOption
    static OptionGroup: typeof SelectOptionGroup
  }
  //radio
  interface RadioProps {
    value: string | number
    name?: string
    label: string | number
    disabled?: boolean
  }

  interface RadioState {
    focus: boolean
    checked: boolean
  }

  interface RadioButtonProps {
    label: string | number
    value?: string | number
    disabled?: boolean
  }

  interface RadioButtonState {
    checked: boolean
  }

  class RadioButton extends Nerv.Component<
    RadioButtonProps,
    RadioButtonState
  > {}
  interface RadioGroupProps {
    value: string | number | any[]
    size?: string
    fill?: string
    textColor?: string
    onRadioGroupChange?: (a) => void
  }

  class RadioGroup extends Nerv.Component<RadioGroupProps, any> {}
  export class Radio extends Nerv.Component<RadioProps, RadioState> {
    static elementName = 'AtRadio'
    static Button: typeof RadioButton
    static Group: typeof RadioGroup
  }
  //rate
  interface RateProps {
    value?: number
    count?: number
    disabled?: boolean
    allowHalf?: boolean
    showText?: boolean
    icon?: string
    onChange?: (a) => void
    allowClear?: boolean
  }

  interface RateState {
    currentValue: number
    hoverIndex: number
    lastHoverIndex: number
    isHoverRate: boolean
    isHalf: boolean
  }
  export class Rate extends Nerv.Component<RateProps, RateState> {}
  //modal
  interface ModalProps {
    title?: string
    content?: string
    value?: boolean
    cancelText?: string
    okText?: string
    maskClosable?: string
    showHead?: boolean
    showClose?: boolean
    showFooter?: boolean
    showInput?: boolean
    width?: number | string
    closeOnPressEsc?: boolean
    type?: string
    willUnmount?: () => void
  }

  interface ModalState {
    wrapShow: boolean
    showCancelButton: boolean
    showConfirmButton: boolean
    action: string
    inputValue: any
    inputPlaceholder: string
    callback: null
    visible: boolean
  }
  interface ModalFooterProps {
    cancelText?: string
    okText?: string
    onConfirm?: Function
    onCancel?: Function
    showCancel?: boolean
  }

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
  //collapse
  interface CollapseProps {
    accordion?: boolean
    value?: any[] | string | number
    simple?: boolean
    onChange?: (a) => {}
  }

  interface CollapseState {
    currentValue: any
  }
  interface CollapseItemProps {
    title?: string
    panelName?: string
    disabled?: boolean
    isActive?: boolean
  }

  interface CollapseItemState {
    index: number
    isActive: boolean | undefined
  }

  class CollapseItem extends Nerv.Component<
    CollapseItemProps,
    CollapseItemState
  > {}
  export class Collapse extends Nerv.Component<CollapseProps, CollapseState> {
    static Item: typeof CollapseItem
  }
  //menu
  interface MenuProps {
    mode?: 'inline' | 'horizontal' | 'vertical'
    theme?: string
    activeName?: string | number
    inlineCollapsed?: boolean
    width?: string
    router?: boolean
    onSelect?: (e: string | number) => void
  }
  interface MenuGroupProps {
    title?: string
    _onSelect?: (e: any) => void
  }

  class MenuGroup extends Nerv.Component<MenuGroupProps, any> {}
  export class Menu extends Nerv.Component<MenuProps, any> {
    static Group: typeof MenuGroup
    static Item: typeof MenuItem
    static Sub: typeof MenuSub
  }
  //switch
  interface SwitchProps {
    className?: string
    type?: string
    value?: any
    size?: string
    disabled?: any
  }

  export class Switch extends Nerv.Component<SwitchProps, any> {
    private value: boolean
    private checkedText: any
    private unCheckedText: any
  }
  //tooltip
  export interface ToolProps {
    className?: string
    type?: string
    content?: string
    placement?: string
  }

  export class Tooltip extends Nerv.Component<ToolProps, any> {}
  //slider
  export interface SliderProps {
    className?: string
    type?: string
  }
  export class Slider extends Nerv.Component<SliderProps, any> {}
  //textarea
  export interface TextareaProps {
    className?: string
    type?: string
    disabled?: boolean
    placeholder?: string
    autofocus?: boolean
    autosize?: boolean
    resize?: string
    name?: string
    value?: any
  }

  export class Textarea extends Nerv.Component<TextareaProps, any> {}
  //timeline
  export interface TimelineProps {
    className?: string
    pending?: boolean
  }
  export interface TimelineItemProps {
    className?: string
    pending?: boolean
    classFromParent?: string
    color?: string
  }

  class TimelineItem extends Nerv.Component<TimelineItemProps, any> {}
  export class Timeline extends Nerv.Component<TimelineProps, any> {
    static Item: typeof TimelineItem
  }
  //popover
  export interface PopoverProps {
    className?: string
    type?: string
    content?: string
    placement?: string
    title?: string
    trigger?: triggerType
  }

  export class Popover extends Nerv.Component<PopoverProps, any> {}
  //tabs
  export interface TabsProps {
    className?: string
    size?: string
    type?: 'card' | 'line'
  }
  export interface TabPaneProps {
    className?: string
    type?: string
    name?: string | number
    label?: string
    icon?: string
    disabled?: boolean | string
    closable?: boolean | string
  }

  class TabPane extends Nerv.Component<TabPaneProps, any> {}
  export class Tabs extends Nerv.Component<TabsProps, any> {
    static Pane: typeof TabPane
  }
  //table
  export type SortType = 'normal' | 'desc' | 'asc'
  export interface TableProps {
    className?: string
    type?: string
    size?: string
    stripe?: boolean
    border?: boolean
    data?: any[]
    columns?: any[]
    optional?: boolean
    pagination?: boolean
    pageSize?: number
    showPageTotal?: boolean
    showPageSizer?: boolean
    showPagequickjump?: boolean
    height?: string | number
    sortType?: SortType
  }

  export class Table extends Nerv.Component<TableProps, any> {}
  //steps
  export interface StepsProps {
    className?: string
    current?: number
    status?: string
    size?: string
    direction?: string
  }
  export interface StepProps {
    className?: string
    type?: string
    title?: string
    description?: string
    icon?: string
    status?: StatusType
    current?: number
    index?: number
  }

  class Step extends Nerv.Component<StepProps, any> {}
  export class Steps extends Nerv.Component<StepsProps, any> {
    static Step: typeof Step
  }
  //pagination
  export interface PaginationProps {
    className?: string
    type?: string
    size?: string
  }

  export class Pagination extends Nerv.Component<PaginationProps, any> {}
  //progress
  export interface ProgressProps {
    className?: string
    pending?: boolean
    percent?: string | number
    status?: string
  }

  export class Progress extends Nerv.Component<ProgressProps, any> {}
}
