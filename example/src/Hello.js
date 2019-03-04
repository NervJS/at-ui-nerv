import Nerv from 'nervjs'
// import { Component, createElement } from 'nervjs'
import {
  Button,
  Tag,
  Checkbox,
  Input,
  Rate,
  InputNumber,
  Radio,
  Select,
  Switch,
  Slider,
  Textarea,
  Alert,
  Loadingbar,
  Badge,
  Card,
  Collapse,
  Modal,
  Message,
  Notification,
  Progress,
  Popover,
  Tooltip,
  Timeline,
  Table,
  Breadcrumb,
  Dropdown,
  Menu,
  Pagination,
  Steps,
  Tabs
} from '@o2team/at-ui-nerv'

class Hello extends Nerv.Component {
  constructor () {
    super(...arguments)
    this.state = {
      message: 'world'
    }
  }

  render () {
    return (
      <div>
        Hello, {this.state.message}
        <div classname='component'>
          <Button>按钮哦</Button>
          <Button type='primary'>主要按钮</Button>
          <Button>次要按钮</Button>
          <Button type='text'>文字按钮</Button>
          <div>gap</div>
          <div>
            {(n => {
              const result = []
              for (let i = 0; i < n; i++) {
                result.push(
                  <div className='row at-row no-gutter'>
                    <div className={`col-md-${i}`}>
                      <div className='at-box-row bg-c-brand-dark' />
                    </div>
                    <div className={`col-md-${24 - i}`}>
                      <div className='at-box-row bg-c-brand-light' />
                    </div>
                  </div>
                )
              }
              return result
            })(12)}
          </div>

          <Tag>标签一</Tag>
          <Tag>标签二</Tag>
          <Tag>标签三</Tag>
          <Tag
            name='标签四'
            closable
            onClose={() => {
              alert('关闭')
            }}
          >
            标签四
          </Tag>
          <div>gap</div>
          <i class='icon icon-zoom-in' />
          <i class='icon icon-zoom-out' />
          <i class='icon icon-check' />
          <i class='icon icon-x' />
          <div>gap</div>
          <Checkbox
            onChange={(checked) => {
              this.setState({ val1: !!checked })
            }}
            checked={this.state.val1}
            label='深圳'
          >
            深圳
          </Checkbox>
          <p className='demo-desc'>{this.state.val1 ? 'true' : 'false'}</p>
          <div>gap</div>
          <Input
            onInput={n => {
              console.log(n)
            }}
            placeholder='输入提示'
          />
          <Input onInput={() => {}} placeholder='禁用状态' disabled />
          <Input onInput={() => {}} type='password' placeholder='密码' />
          <div>gap</div>
          <p className='demo-desc'>基本输入框</p>
          <div className='row no-gutter'>
            <div className='col-md-4'>
              <InputNumber
                onChange={n => {
                  console.log(n)
                }}
              />
              <br />
            </div>
          </div>
          <p className='demo-desc'>有取值范围的输入框，min=0, max=5</p>
          <div className='row no-gutter'>
            <div className='col-md-4'>
              <InputNumber min='0' max='5' />
            </div>
          </div>
        </div>
        <div>gap</div>
        <Radio
          onChange={label => {
            this.setState({ radio1: label })
          }}
          value={this.state.radio1}
          label='1'
        >
          选项一
        </Radio>
        <Radio
          onChange={label => {
            this.setState({ radio1: label })
          }}
          value={this.state.radio1}
          label='2'
        >
          选项二
        </Radio>
        <div>gap</div>
        <Rate />
        <div>gap</div>
        <Select style='width:100px'>
          <Select.Option value='1'>深圳</Select.Option>
          <Select.Option value='2'>
            广州广州广州广州广州广州广州广州广州广州
          </Select.Option>
          <Select.Option value='3'>上海</Select.Option>
          <Select.Option value='4'>北京</Select.Option>
          <Select.Option value='5'>成都</Select.Option>
        </Select>
        <Select value='1' style='width:100px'>
          <Select.Option value='1'>深圳</Select.Option>
          <Select.Option value='2'>广州</Select.Option>
        </Select>
        <Select disabled style='width:100px'>
          <Select.Option value='1'>深圳</Select.Option>
          <Select.Option value='2'>广州</Select.Option>
        </Select>
        <div>gap</div>
        <Switch
          onChange={val => {
            this.setState({
              check: val
            })
          }}
        />
        <span>{this.state.check}</span>
        <div>gap</div>
        <Slider
          value={this.state.val1}
          onChange={val => {
            this.setState({
              val1: val
            })
          }}
        />
        <div>gap</div>
        <Textarea placeholder='这里是输入框...' />
        <div>gap</div>
        <Alert
          message='这里是提示的文案~这里是提示的文案~这里是提示的文案~'
          type='success'
        />
        <Alert message='这里是提示的文案~' type='error' />
        <Alert message='这里是提示的文案~' type='warning' />
        <Alert message='这里是提示的文案~' type='info' />
        <div>gap</div>
        <Badge value='3' />
        <Badge value='23' />
        <Badge value='199' />
        <div>gap</div>
        <Card style={{ width: '300px' }}>
          <h4 slot='title'>Card Title</h4>
          <div slot='extra'>
            <a>Extra</a>
          </div>
          <div>Card Content</div>
        </Card>
        <div>gap</div>
        <Collapse value={[0, 1]}>
          {[
            {
              title: '标题1',
              content: '内容1'
            },
            {
              title: '标题2',
              content: '内容2'
            },
            {
              title: '标题3',
              content: '内容3',
              disabled: true
            }
          ].map((item, index) => {
            return (
              <Collapse.Item
                key={index}
                title={item.title}
                disabled={item.disabled}
              >
                <div>{item.content}</div>
              </Collapse.Item>
            )
          })}
        </Collapse>
        <div>gap</div>
        <Button
          onClick={() => {
            Loadingbar.config({ width: 4 })
          }}
        >
          设置线宽为 4px
        </Button>
        <Button
          onClick={() => {
            Loadingbar.config({ width: 2 })
          }}
        >
          设置线宽为 2px
        </Button>
        <Button
          onClick={() => {
            Loadingbar.finish()
          }}
        >
          测试
        </Button>
        <div>gap</div>
        <p className='demo-desc'>Modal.alert()</p>
        <Button
          onClick={() => {
            Modal.alert({
              title: '这里是标题名称',
              content: '这里是文本内容',
              callback: function () {
                // this.$Message(action)
              }
            })
          }}
        >
          Alert
        </Button>
        <div>gap</div>
        <Button
          onClick={() => {
            Message.info({
              message: 'isInfo',
              duration: 3000
            })
          }}
        >
          Info
        </Button>
        <Button
          onClick={() => {
            Message.success({
              message: 'isError',
              duration: 3000
            })
          }}
        >
          Success
        </Button>
        <Button
          onClick={() => {
            Message.warning({
              message: 'isWarning',
              duration: 3000
            })
          }}
        >
          Warning
        </Button>
        <Button
          onClick={() => {
            Message.error({
              message: 'isError',
              duration: 3000
            })
          }}
        >
          Error
        </Button>
        <div>gap</div>
        <p className='demo-desc'>{`Notification({ title: '这里是标题' })`}</p>
        <Button
          onClick={() => {
            Notification({
              title: '这里是标题'
            })
          }}
        >
          打开通知（仅标题）
        </Button>
        <p className='demo-desc'>{`Notification({ title: '这里是标题', message: '这里是内容，文案~~~' })`}</p>
        <Button
          onClick={() => {
            Notification({
              title: '这里是标题',
              message: '这里是内容，文案~~~'
            })
          }}
        >
          打开通知（标题和内容）
        </Button>
        <div>gap</div>
        <Progress percent='0' />
        <Progress percent='60' />
        <Progress percent='100' />
        <Progress percent='50' status='error' />
        <div>gap</div>
        <Popover trigger='click' content='Top Placement'>
          <Button size='small'>Click</Button>
        </Popover>
        <Popover trigger='hover' title='Title' content='Top Placement'>
          <Button size='small'>Hover</Button>
        </Popover>
        <div>gap</div>
        <Tooltip placement='top' content='提示信息'>
          <Button>按钮</Button>
        </Tooltip>
        <div>gap</div>
        <Timeline>
          <Timeline.Item>
            <p>刷牙洗脸</p>
          </Timeline.Item>
          <Timeline.Item>
            <p>吃早餐</p>
          </Timeline.Item>
          <Timeline.Item>
            <p>上班</p>
          </Timeline.Item>
          <Timeline.Item>
            <p>睡觉</p>
          </Timeline.Item>
        </Timeline>
        <div>gap</div>
        <Table
          columns={[
            {
              title: '姓名',
              key: 'name',
              width: '300'
            },
            {
              title: '年龄',
              key: 'age',
              width: '300'
            },
            {
              title: '地址',
              key: 'address',
              width: '800'
            }
          ]}
          data={[
            {
              name: '库里',
              age: 18,
              address: '深圳市宝安区创业一路'
            },
            {
              name: '詹姆斯',
              age: 25,
              address: '广州市天河区岗顶'
            },
            {
              name: '科比',
              age: 24,
              address: '上海市浦东新区'
            },
            {
              name: '杜兰特',
              age: 22,
              address: '深圳市南山区深南大道'
            },
            {
              name: '威斯布鲁克',
              age: 21,
              address: '北京市朝阳区'
            },
            {
              name: '邓肯',
              age: 26,
              address: '深圳市罗湖区万象城'
            },
            {
              name: '帕克',
              age: 25,
              address: '深圳市福田区中心书城'
            },
            {
              name: '欧文',
              age: 20,
              address: '广州市番禺区大学城'
            },
            {
              name: '托马斯',
              age: 19,
              address: '北京市朝阳区'
            }
          ]}
        />
        <div>gap</div>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item href='#/zh/docs/introduction'>
            Components
          </Breadcrumb.Item>
          <Breadcrumb.Item>Breadcrumb</Breadcrumb.Item>
        </Breadcrumb>
        <div>gap</div>
        <Dropdown>
          <Button size='small'>
            Hover 菜单 <i className='icon icon-chevron-down' />
          </Button>
          <Dropdown.Menu>
            <Dropdown.Item name='shenzhen'>深圳</Dropdown.Item>
            <Dropdown.Item name='guangzhou'>广州</Dropdown.Item>
            <Dropdown.Item name='shanghai' disabled>
              上海
            </Dropdown.Item>
            <Dropdown.Item name='beijin' divided>
              北京
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown trigger='click'>
          <Button size='small'>
            Click 菜单 <i className='icon icon-chevron-down' />
          </Button>
          <Dropdown.Menu>
            <Dropdown.Item name='shenzhen'>深圳</Dropdown.Item>
            <Dropdown.Item name='guangzhou'>广州</Dropdown.Item>
            <Dropdown.Item name='shanghai' disabled>
              上海
            </Dropdown.Item>
            <Dropdown.Item name='beijin' divided>
              北京
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div>gap</div>
        <Menu
          mode='horizontal'
          activeName={this.state.activeName1}
          onSelect={name => {
            console.log(this.state)
            this.setState({
              activeName1: name
            })
          }}
        >
          <Menu.Item name='1'>
            <i className='icon icon-home' />
            导航菜单一
          </Menu.Item>
          <Menu.Item name='2'>
            <i className='icon icon-layers' />
            导航菜单二
          </Menu.Item>
          <Menu.Sub
            name='3'
            title={
              <span>
                <i className='icon icon-life-buoy' />
                导航菜单三
              </span>
            }
          >
            <Menu.Item name='3-1'>
              <i className='icon icon-settings' />
              导航菜单四
            </Menu.Item>
            <Menu.Item name='3-2'>
              <i className='icon icon-settings' />
              导航菜单五
            </Menu.Item>
            <Menu.Sub
              title={
                <span>
                  <i className='icon icon-life-buoy' />
                  导航菜单六
                </span>
              }
            >
              <Menu.Item name='3-3-1'>
                <i className='icon icon-settings' />
                导航菜单七
              </Menu.Item>
              <Menu.Item name='3-3-2'>
                <i className='icon icon-settings' />
                导航菜单八
              </Menu.Item>
            </Menu.Sub>
          </Menu.Sub>
          <Menu.Item name='4'>
            <i className='icon icon-settings' />
            导航菜单四
          </Menu.Item>
        </Menu>
        <div>gap</div>
        <Pagination total='80' showTotal />
        <div>gap</div>
        <Steps current={this.state.current}>
          <Steps.Step
            title='Step1'
            description='This is a description.'
            icon='icon-user'
          />
          <Steps.Step
            title='Step2'
            description='This is a description.'
            icon='icon-airplay'
          />
          <Steps.Step title='Step3' icon='icon-pocket' />
        </Steps>
        <Button
          type='primary'
          onClick={() => {
            let current = this.state.current || 0
            current = current - 1 < 0 ? 0 : current - 1
            if (this.state.current) {
              this.setState({ current: current })
            }
          }}
          style='margin-top: 12px;'
        >
          Prev
        </Button>
        <Button
          type='primary'
          onClick={() => {
            let current = this.state.current || 0
            current = current + 1 > 2 ? 2 : current + 1
            console.log('test', current)
            this.setState({ current: current })
          }}
          style={{ marginTop: '12px' }}
        >
          Next
        </Button>
        <div>gap</div>
        <Tabs
          activeIndex={this.state.activeIndex2}
          onChange={index => {
            this.setState({
              activeIndex2: index
            })
          }}
        >
          <Tabs.Pane label='Tab1' name='name1' icon='icon-github'>
            <p>Content of Tab Pane 1</p>
          </Tabs.Pane>
          <Tabs.Pane label='Tab2' name='name2' icon='icon-twitter'>
            <p>Content of Tab Pane 2</p>
          </Tabs.Pane>
          <Tabs.Pane label='Tab3' name='name3' icon='icon-pocket'>
            <p>Content of Tab Pane 3</p>
          </Tabs.Pane>
        </Tabs>
      </div>
    )
  }
}

export default Hello
