import * as Nerv from 'nervjs'
import Component from '@lib/component'

export interface BreadCrumbItemProps {
    href?: string
    to?: object | string
    replace?: boolean
}

export interface BreadCrumbItemState {
    separator?: string
}

class BreadCrumbItem extends Component < BreadCrumbItemProps,
    BreadCrumbItemState> {
    static elementName = 'AtBreadcrumbItem'
    render () {
        const {children, separator, className} = this.props
        return (
            <span className={this.className('at-breadcrumb__item', className as any)}>
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
