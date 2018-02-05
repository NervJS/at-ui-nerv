import * as Nerv from 'nervjs'

import Card from '../../../src/card'

class CardExample extends Nerv.Component {
  render () {
    return (
      <div className='card_example'>
        <div className='basic'>
          <Card style='width: 300px;'>
            <h4 slot='title'>Card Title</h4>
            <div slot='extra'>
              <a>Extra</a>
            </div>
            <div>Card Content</div>
          </Card>
        </div>
        <div className='no_border'>
          <Card style={{ width: '300px' }} bordered={false}>
            <h4 slot='title'>Card Title</h4>
            <div slot='extra'>
              <a>Extra</a>
            </div>
            <div>Card Content</div>
          </Card>
        </div>
        <div className='no_hover_shadow'>
          <Card style={{ width: '300px' }} noHover={true}>
            <h4 slot='title'>Card Title</h4>
            <div slot='extra'>
              <a>Extra</a>
            </div>
            <div>Card Content</div>
          </Card>
        </div>
        <div className='no_title_extra'>
          <Card style={{ width: '300px' }} bodyStyle={{ padding: 0 }}>
            <div>
              <img style={{ width: '100%' }} src='https://misc.aotu.io/koppthe/at-ui/cover.jpg' />
              <div style={{ padding: '14px' }}>
                <p>AT-UI</p>
              </div>
            </div>
          </Card>
        </div>
        <div className='with_loadding_default'>
          <Card loading={true} style={{ width: '300px' }}>
            <h4 slot='title'>Card Title</h4>
            <div slot='extra'>
              <a>Extra</a>
            </div>
            <div>Card Content</div>
          </Card>
        </div>
        <div className='with_loadding_customer'>
          <Card loading={true} style={{ width: '300px' }}>
            <h4 slot='title'>Card Title</h4>
            <div slot='extra'>
              <a>Extra</a>
            </div>
            <div slot='loading'>加载中...</div>
            <div>Card Content</div>
          </Card>
        </div>
      </div>
    )
  }
}

export default CardExample
