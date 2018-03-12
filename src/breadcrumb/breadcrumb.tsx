import * as Nerv from 'nervjs'
import * as classnames from 'classnames'
import BreadcrumbItem from './breadcrumb-item'

interface BreadcrumbProps {
    separator?: string
}

class Breadcrumb extends Nerv.Component < BreadcrumbProps,
null > {
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
            <div className={classnames('at-breadcrumb', className)}>
                {crumbs}
            </div>
        )
    }
}

export default Breadcrumb
