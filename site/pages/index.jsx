import * as Nerv from 'nervjs'
import { Link } from 'react-router-dom'
import {Modal} from '@src'

import HeaderS from '../components/headerS'

import '../assets/style/index.scss'

class Index extends Nerv.Component {
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
      window.location.href = 'https://at-ui.github.io/at-ui/#/zh/resource/design'
    })
  }
  render () {
    return (
      <div className='wrapper'>
        <HeaderS collapse />
        <section className='section section-banner'>
          <div className='container'>
            <div className='logo'>
              <svg width='161px' height='160px' viewBox='0 0 161 160' version='1.1' xmlns='http://www.w3.org/2000/svg'>
                <defs>
                  <linearGradient
                    x1='22.5170547%'
                    y1='8.01121418%'
                    x2='96.9400333%'
                    y2='96.3671667%'
                    id='linearGradient-1'>
                    <stop stop-color='#66C7FF' offset='0%' />
                    <stop stop-color='#3473E7' offset='100%' />
                  </linearGradient>
                </defs>
                <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
                  <g
                    id='Desktop-HD-Copy-2'
                    transform='translate(-640.000000, -245.000000)'
                    fill='url(#linearGradient-1)'>
                    <path
                      d='M801,245 L801,405 L718.862712,405 C704.67281,404.638416 691.529157,400.841844 679.431356,393.610169 C667.333555,386.378495 657.737324,376.706275 650.642373,364.59322 C643.547422,352.299374 640,339.101765 640,325 C640,310.536651 643.592902,297.158254 650.778814,284.864407 C657.964725,272.57056 667.742876,262.807946 680.113559,255.576271 C692.484243,248.525388 705.946255,245 720.5,245 C729.414169,245 738.009846,246.355919 746.287288,249.067797 C754.564731,251.779675 762.068893,255.666641 768.8,260.728814 L768.8,245 L801,245 Z M768.8,325 C768.8,318.672285 767.572046,312.570651 765.116102,306.694915 C762.660157,300.81918 759.158215,295.621492 754.610169,291.101695 C750.062124,286.581898 744.83195,283.101707 738.919492,280.661017 C733.007033,278.220327 726.867263,277 720.5,277 C707.765473,277 696.39553,281.700518 686.389831,291.101695 C681.841785,295.621492 678.385323,300.81918 676.020339,306.694915 C673.655355,312.570651 672.472881,318.672285 672.472881,325 C672.472881,337.836222 677.111818,349.135544 686.389831,358.898305 C696.213608,368.11869 707.583551,372.728814 720.5,372.728814 L768.8,372.728814 L768.8,325 Z'
                      id='a-copy-4'
                    />
                  </g>
                </g>
              </svg>
            </div>
            <h1>一款轻量级、模块化的前端 UI 组件库</h1>
            <div className='btn-container'>
              <div className='btn btn-begin'>
                <Link to='/docs/introduction'>开始使用</Link>
              </div>
              <div className='btn btn-github'>
                <a href='https://github.com/NervJS/at-ui-nerv'>Github</a>
              </div>
            </div>
          </div>
          <div className='prototype-screens flex'>
            <div className='prototype prototype-1'>
              <img src={require('../assets/prototype-1.png')} alt='' />
            </div>
            <div className='prototype prototype-2'>
              <img src={require('../assets/prototype-2.png')} alt='' />
            </div>
            <div className='prototype prototype-3'>
              <img src={require('../assets/prototype-3.png')} alt='' />
            </div>
            <div className='prototype prototype-4'>
              <img src={require('../assets/prototype-4.png')} alt='' />
            </div>
          </div>
          <div className='separate-panel' />
        </section>
        <section className='section section-navigation'>
          <div className='container flex flex-around'>
            <div className='navigation-panel'>
              <div className='icon-cnt'>
                <img src={require('../assets/icon-navigation-1.png')} alt='' />
              </div>
              <div className='title'>指南</div>
              <div className='desc'>
                了解设计指南，利用统一的规范进行设计赋能，帮助产品设计师，前端工程师，后台工程师迅速搭建中后台产品。
              </div>
              <div className='btn-readmore'>
                <a onClick={this.goToGuide} href='https://at-ui.github.io/at-ui/#/zh/guide/color' target='__blank'>
                  查看详情 <i className='icon icon-chevron-right' />
                </a>
              </div>
            </div>
            <div className='navigation-panel'>
              <div className='icon-cnt'>
                <img src={require('../assets/icon-navigation-2.png')} alt='' />
              </div>
              <div className='title'>组件</div>
              <div className='desc'>
                基于 Nerv 的 UI 组件化，可以通过组件的 Demo
                体验交互细节，开发中既可以根据需要单独引用，也可以使用引入所有组件。
              </div>
              <div className='btn-readmore'>
                <Link to='/docs'>
                  查看详情 <i className='icon icon-chevron-right' />
                </Link>
              </div>
            </div>
            <div className='navigation-panel'>
              <div className='icon-cnt'>
                <img src={require('../assets/icon-navigation-3.png')} alt='' />
              </div>
              <div className='title'>资源</div>
              <div className='desc'>
                提供视觉稿原稿下载，产品可直接用 Sketch 工具快速搭建高保真的产品原型稿，减少沟通成本，提升工作效率。
              </div>
              <div className='btn-readmore'>
                <a onClick={
                  this.goToSource
                }>
                  查看详情 <i className='icon icon-chevron-right' />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default Index
