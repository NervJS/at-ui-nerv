import * as Nerv from 'nervjs'
import classnames from 'classnames'
import BreadcrumbItem from './breadcrumb-item'

interface BreadcrumbProps {
    separator?: string
}

class Breadcrumb extends Nerv.Component < BreadcrumbProps,
any > {
    static Item: typeof BreadcrumbItem
    static defaultProps = {
        separator: '/'
    }
    render () {
        const {children, separator, className} = this.props
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
            <div className={classnames('at-breadcrumb', className as any)}>
                {crumbs}
            </div>
        )
    }
}

export default Breadcrumb
