import * as Nerv from 'nervjs'
import classnames from 'classnames'
import { Link, NavLink, withRouter } from 'react-router-dom'
import { Modal } from '../../../src'
import './style.scss'

interface HeaderProps {
  collapse: boolean
}

class HeaderS extends Nerv.Component<HeaderProps, any> {
  constructor (props, context) {
    super(props, context)
    this.state = {
      toggle: true
    }
  }
  toggleMenu = () => {
    const _toggle = this.state.toggle
    this.setState({
      toggle: !_toggle
    })
  }
  goToGuide (e) {
    e.preventDefault()
    Modal.confirm({
      title: '提示',
      content: '即将跳转到AT-UI原版文档（vue），是否跳转'
    }).then(() => {
      window.location.href = 'https://at-ui.github.io/at-ui/#/zh/guide/color'
    })
  }
  goToSource (e) {
    e.preventDefault()
    Modal.confirm({
      title: '提示',
      content: '即将跳转到AT-UI原版文档（vue），是否跳转'
    }).then(() => {
      window.location.href =
        'https://at-ui.github.io/at-ui/#/zh/resource/design'
    })
  }
  render () {
    const { collapse } = this.props
    const { toggle } = this.state
    return (
      <header
        className={classnames('page-header', { collapse })}
        id='J-page-header'
      >
        <div className='nav-container'>
          <div className='nav-left'>
            <div className='logo'>
              <Link to='/'>
                <img
                  className='logo-img'
                  src='data:image/png;base64,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'
                />
                <span>AT UIKIT</span>
              </Link>
            </div>
            <i className='icon icon-menu nav-icon' onClick={this.toggleMenu} />
          </div>
          <div
            className='nav-right'
            style={{ height: toggle ? '0px' : 'auto' }}
          >
            <ul className='navbar'>
              <li>
                <a
                  onClick={this.goToGuide}
                  href='https://at-ui.github.io/at-ui/#/zh/guide/color'
                  target='_blank'
                >
                  指南
                </a>
              </li>
              <li>
                <NavLink activeClassName='router-link-active' to='/docs'>
                  组件
                </NavLink>
              </li>
              <li>
                <a
                  onClick={this.goToSource}
                  href='https://at-ui.github.io/at-ui/#/zh/resource/design'
                  target='_blank'
                >
                  资源
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    )
  }
}

export default withRouter(HeaderS)
