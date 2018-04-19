import * as Nerv from 'nervjs'
import classnames from 'classnames'

interface BreadCrumbItemProps {
    href?: string
    to?: object | string
    replace?: boolean
}

interface BreadCrumbItemState {
    separator?: string
}

class BreadCrumbItem extends Nerv.Component < BreadCrumbItemProps,
    BreadCrumbItemState> {
    static elementName = 'AtBreadcrumbItem'
    render () {
        const {children, separator, className} = this.props
        return (
            <span className={classnames('at-breadcrumb__item', className as any)}>
                {
                    children
                }
                <span className='at-breadcrumb__separator'>
                    {separator}
                </span>
            </span>
        )
    }

}

export default BreadCrumbItem
