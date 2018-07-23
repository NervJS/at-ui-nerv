import * as Nerv from 'nervjs'

import Tabs from '../../../src/tab'
const Tabpane = Tabs.Pane
class TabExample extends Nerv.Component<any, any> {
  constructor (props) {
    super(props)
    this.onTabRemoveHanlder = this.onTabRemoveHanlder.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.tabChangeHandler = this.tabChangeHandler.bind(this)
    this.changeActiveTab = this.changeActiveTab.bind(this)
    this.state = {
      activeIndex: 10,
      tabList: [{
        label: 'Tab1',
        name: 'tab1',
        content: 'tab1 content'
      }, {
        label: 'Tab2',
        name: 'tab2',
        content: 'tab2 content'
      }, {
        label: 'Tab3',
        name: 'tab3',
        content: 'tab3 content'
      }, {
        label: 'Tab4',
        name: 'tab4',
        content: 'tab4 content'
      }, {
        label: 'Tab5',
        name: 'tab5',
        content: 'tab5 content'
      }, {
        label: 'Tab7',
        name: 'tab7',
        content: 'tab7 content'
      }, {
        label: 'Tab8',
        name: 'tab8',
        content: 'tab8 content'
      }, {
        label: 'Tab9',
        name: 'tab9',
        content: 'tab9 content'
      }, {
        label: 'Tab10',
        name: 'Tab10',
        content: 'Tab10 content'
      }, {
        label: 'Tab11',
        name: 'Tab11',
        content: 'Tab11 content'
      }, {
        label: 'Tab12',
        name: 'tab12',
        content: 'tab9 content'
      }, {
        label: 'Tab13',
        name: 'tab9',
        content: 'tab9 content'
      }, {
        label: 'Tab14',
        name: 'tab9',
        content: 'tab9 content'
      }, {
        label: 'Tab15',
        name: 'tab9',
        content: 'tab9 content'
      }, {
        label: 'Tab16',
        name: 'tab9',
        content: 'tab9 content'
      }, {
        label: 'Tab17',
        name: 'tab9',
        content: 'tab9 content'
      }, {
        label: 'Tab18',
        name: 'tab9',
        content: 'tab9 content'
      }, {
        label: 'Tab19',
        name: 'tab9',
        content: 'tab9 content'
      }, {
        label: 'Tab20',
        name: 'tab9',
        content: 'tab9 content'
      }, {
        label: 'Tab21',
        name: 'tab9',
        content: 'tab9 content'
      }, {
        label: 'Tab22',
        name: 'tab9',
        content: 'tab9 content'
      }, {
        label: 'Tab23',
        name: 'tab9',
        content: 'tab9 content'
      }, {
        label: 'Tab24',
        name: 'tab9',
        content: 'tab9 content'
      }, {
        label: 'Tab25',
        name: 'tab9',
        content: 'tab9 content'
      }, {
        label: 'Tab26',
        name: 'tab9',
        content: 'tab9 content'
      }, {
        label: 'Tab27',
        name: 'tab9',
        content: 'tab9 content'
      }, {
        label: 'Tab28',
        name: 'tab9',
        content: 'tab9 content'
      }, {
        label: 'Tab29',
        name: 'tab9',
        content: 'tab9 content'
      }, {
        label: 'Tab30',
        name: 'tab9',
        content: 'tab9 content'
      }, {
        label: 'Tab31',
        name: 'tab9',
        content: 'tab9 content'
      }]
    }
  }
  render () {
    const tabListAddable: any[] = []
    this.state.tabList.forEach((item, index) => {
      let unclosableFlag = false
      if (this.state.tabList.length === 1 && index === 0) {
        unclosableFlag = true
      }
      tabListAddable.push(<Tabpane key={index} label={item.label} name={item.name} unclosable={unclosableFlag}>
      {}
                            <p>{item.content}</p>
                          </Tabpane>)
    })
    return (
      <div className='tab-example'>
        {/* <Tabs>
          <Tabpane label='Tab1' name='name1'>
            <p>Content of Tab Pane 1</p>
          </Tabpane>
          <Tabpane label='Tab2' name='name2'>
            <p>Content of Tab Pane 2</p>
          </Tabpane>
          <Tabpane label='Tab3' name='name3'>
            <p>Content of Tab Pane 3</p>
          </Tabpane>
        </Tabs>
        <Tabs>
          <Tabpane label='Tab1' name='name1'>
            <p>Content of Tab Pane 1</p>
          </Tabpane>
          <Tabpane label='Tab2' name='name2'>
            <p>Content of Tab Pane 2</p>
          </Tabpane>
          <Tabpane label='Tab3' name='name3' disabled='true'>
            <p>Content of Tab Pane 3</p>
          </Tabpane>
        </Tabs>
        <Tabs>
          <Tabpane label='Tab1' name='name1' icon='icon-github'>
            <p>Content of Tab Pane 1</p>
          </Tabpane>
          <Tabpane label='Tab2' name='name2' icon='icon-twitter'>
            <p>Content of Tab Pane 2</p>
          </Tabpane>
          <Tabpane label='Tab3' name='name3' icon='icon-pocket'>
            <p>Content of Tab Pane 3</p>
          </Tabpane>
        </Tabs>
        <Tabs size='small'>
          <Tabpane label='Tab1' name='name1' icon='icon-github'>
            <p>Content of Tab Pane 1</p>
          </Tabpane>
          <Tabpane label='Tab2' name='name2' icon='icon-twitter'>
            <p>Content of Tab Pane 2</p>
          </Tabpane>
          <Tabpane label='Tab3' name='name3' icon='icon-pocket'>
            <p>Content of Tab Pane 3</p>
          </Tabpane>
        </Tabs>
        <Tabs type='card' size='default'>
          <Tabpane label='Tab1' name='name1' icon='icon-github'>
            <p>Content of Tab Pane 1</p>
          </Tabpane>
          <Tabpane label='Tab2' name='name2' icon='icon-twitter'>
            <p>Content of Tab Pane 2</p>
          </Tabpane>
          <Tabpane label='Tab3' name='name3' icon='icon-pocket'>
            <p>Content of Tab Pane 3</p>
          </Tabpane>
        </Tabs>
        <Tabs type='card' size='small'>
          <Tabpane label='Tab1' name='name1' icon='icon-github'>
            <p>Content of Tab Pane 1</p>
          </Tabpane>
          <Tabpane label='Tab2' name='name2' icon='icon-twitter'>
            <p>Content of Tab Pane 2</p>
          </Tabpane>
          <Tabpane label='Tab3' name='name3' icon='icon-pocket'>
            <p>Content of Tab Pane 3</p>
          </Tabpane>
        </Tabs>
        <Tabs animated='false'>
          <Tabpane label='Tab1' name='name1' icon='icon-github'>
            <p>Content of Tab Pane 1</p>
          </Tabpane>
          <Tabpane label='Tab2' name='name2' icon='icon-twitter'>
            <p>Content of Tab Pane 2</p>
          </Tabpane>
          <Tabpane label='Tab3' name='name3' icon='icon-pocket'>
            <p>Content of Tab Pane 3</p>
          </Tabpane>
        </Tabs>
        <Tabs animated='false' type='card'>
          <Tabpane label='Tab1' name='name1' icon='icon-github'>
            <p>Content of Tab Pane 1</p>
          </Tabpane>
          <Tabpane label='Tab2' name='name2' icon='icon-twitter'>
            <p>Content of Tab Pane 2</p>
          </Tabpane>
          <Tabpane label='Tab3' name='name3' icon='icon-pocket'>
            <p>Content of Tab Pane 3</p>
          </Tabpane>
        </Tabs>
        <Tabs size='small'>
          <Tabpane label='Tab1' name='name1'>
            <p>Content of Tab Pane 1</p>
          </Tabpane>
          <Tabpane label='Tab2' name='name2'>
            <p>Content of Tab Pane 2</p>
          </Tabpane>
          <Tabpane label='Tab3' name='name3'>
            <p>Content of Tab Pane 3</p>
          </Tabpane>
          <div slot='extra'>
            <button size='small'>额外内容</button>
          </div>
        </Tabs>
        <Tabs>
          <Tabpane label='Tab1' name='name1'>
            <p>Content of Tab Pane 1</p>
          </Tabpane>
          <Tabpane label='Tab2' name='name2'>
            <p>Content of Tab Pane 2</p>
          </Tabpane>
          <Tabpane label='Tab3' name='name3'>
            <p>Content of Tab Pane 3</p>
          </Tabpane>
        </Tabs> */}
        可变数量的tabs
        <Tabs animated='false' onChange={this.tabChangeHandler} activeIndex={this.state.activeIndex} value='tab6' closable onTabRemove={this.onTabRemoveHanlder}>
        {}
          {tabListAddable}
          <div slot='extra'>
            <button style={{ height: '20px', width: '100px' }} onClick={this.handleAdd}>添加</button>
          </div>
        </Tabs>
        <button onClick={this.changeActiveTab}>xxxx</button>
      </div>
    )
  }
  tabChangeHandler (index) {
    console.log('xxx', index)
    this.setState({
      activeIndex : index
    })
  }
  changeActiveTab () {

    this.setState({
      activeIndex : 24
    }, () => {
      console.log('xxxclick', this.state.activeIndex)
    })
  }
  handleAdd () {
    const tabList = this.state.tabList.concat()
    const length = tabList.length
    tabList.push({
      label: `Tab${length + 1}`,
      name: `Tab${length + 1}`,
      content: `tab${length + 1} content`
    })
    this.setState({
      tabList
    })
  }
  onTabRemoveHanlder (index, event) {
    const tabList = this.state.tabList.concat()
    tabList.splice(index, 1)
    this.setState({
      tabList
    })
  }
}

export default TabExample
