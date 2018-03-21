import * as Nerv from 'nervjs'
import * as classnames from 'classnames'

interface DropdownItemProps {
    name: string
    disabled?: boolean
    divided?: boolean
}

class DropdownItem extends Nerv.Component < DropdownItemProps,
any > {
    static elementName = 'AtDropdownItem'
    static defaultProps = {
        disabled: false,
        divider: false
    }
    constructor (...args) {
        super(...args)
    }
    onClickHandle = () => {
        const {name, disabled, children} = this.props
        if (!disabled) {
            this
                .context
                .component
                .onMenuItemClickHandle(name || children, this)
        }

    }
    render () {
        const {children, disabled, divided} = this.props

        return (
            <li
                className={classnames('at-dropdown-menu__item', {
                'at-dropdown-menu__item--disabled': disabled,
                'at-dropdown-menu__item--divided': divided
            })}
                onClick={this.onClickHandle}>{children}</li>
        )
    }
}

export default DropdownItem
