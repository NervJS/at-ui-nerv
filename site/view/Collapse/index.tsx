import * as Nerv from 'nervjs'

import { Collapse, CollapseItem } from '../../../src/collapse'

interface CollapseExampleState {
  list: any[]
}

class CollapseExample extends Nerv.Component<any, CollapseExampleState> {
  constructor (...args) {
    super(...args)
    this.state = {
      list: [
        {
          title: '标题一',
          content: '内容一'
        },
        {
          title: '标题二',
          content: '内容二'
        },
        {
          title: '标题三',
          content: '内容三',
          disabled: true
        }
      ]
    }
  }
  render () {
    const { list } = this.state
    return (
      <div className='collapse_example'>
        <div className='basic'>
          <Collapse value={[0, 1]}>
            {list.map((item, index) => {
              return (
                <CollapseItem key={index} title={item.title} disabled={item.disabled}>
                  <div>{item.content}</div>
                </CollapseItem>
              )
            })}
          </Collapse>
        </div>
        <div className='accordion'>
          <Collapse accordion value='0'>
            {list.map((item, index) => {
              return (
                <CollapseItem key={index} title={item.title} disabled={item.disabled}>
                  <div>{item.content}</div>
                </CollapseItem>
              )
            })}
          </Collapse>
        </div>
        <div className='panelNest'>
          <Collapse onChange='changeHandle' value='0'>
            {list.map((item, index) => {
              return (
                <CollapseItem key={index} title={item.title} disabled={item.disabled}>
                  {/* <div> */}
                  {/* {index !== 0 ? item.content : ''} */}
                  {index === 0 ? (
                    <Collapse accordion>
                      <CollapseItem title='嵌套面板'>
                        <div>嵌套面板的内容</div>
                      </CollapseItem>
                    </Collapse>
                  ) : (
                    ' '
                  )}

                  {/* </div> */}
                </CollapseItem>
              )
            })}
          </Collapse>
        </div>
      </div>
    )
  }
}

export default CollapseExample
