import * as Nerv from 'nervjs'
import Component from '@lib/component'
import BreadcrumbItem from './breadcrumb-item'

export interface BreadcrumbProps {
    separator?: string
}

class Breadcrumb extends Component < BreadcrumbProps,
any > {
    static Item: typeof BreadcrumbItem
    static defaultProps = {
        separator: '/'
    }
    render () {
        const {children, separator} = this.props
        const crumbs = children
            ? Nerv
                .Children
                .map(children as any, (child: any, index) => {
                    if (!child) {
                        return child
                    }
                    if (!(child.type && child.type.elementName === 'AtBreadcrumbItem')) {
                        console.warn('Breadcrumb only accepts Breadcrumb.Item as it\'s children')
                    }
                    return Nerv.cloneElement(child, {separator, key: index})
                }, this)
            : null
        return (
            <div className={this.className('at-breadcrumb')}>
                {crumbs}
            </div>
        )
    }
}

export default Breadcrumb
