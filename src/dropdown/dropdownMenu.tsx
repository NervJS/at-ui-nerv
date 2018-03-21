import * as Nerv from 'nervjs'
import * as classnames from 'classnames'

interface DropdownMenuProps {
    placement: 'top' | 'top-left' | 'top-right' | 'left' | 'left-top' | 'left-bottom' | 'right' | 'right-top' | 'right-bottom' | 'bottom' | 'bottom-left' | 'bottom-right'
}

class DropdownMenu extends Nerv.Component < DropdownMenuProps,
any > {
    static elementName = 'AtDropdownMenu'
    render () {
        const {children} = this.props
        return (
            <ul
                className={classnames('at-dropdown-menu')}
                >{children}</ul>
        )
    }
}

export default DropdownMenu
