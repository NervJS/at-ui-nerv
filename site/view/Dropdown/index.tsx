import * as Nerv from 'nervjs'

import Dropdown from '../../../src/dropdown'

class DropdownExample extends Nerv.Component {
    render () {
        return (
            <div className='dropdownExample'>
                <div className='basic'>
                    <Dropdown
                        dropdownChange={(name) => {
                        console.log(name)
                    }}>
                        <a className='ant-dropdown-link' href='#'>
                            Hover me
                        </a>
                        <Dropdown.Menu>
                            <Dropdown.Item>黄金糕</Dropdown.Item>
                            <Dropdown.Item>狮子头</Dropdown.Item>
                            <Dropdown.Item>螺蛳粉</Dropdown.Item>
                            <Dropdown.Item disabled>双皮奶</Dropdown.Item>
                            <Dropdown.Item divided>蚵仔煎</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div
                    className='trigger'
                    style={{
                    'display': 'flex',
                    'justifyContent': 'center'
                }}>
                    <Dropdown
                        dropdownChange={(name) => {
                            console.log(name)
                        }}>
                        <a className='ant-dropdown-link' href='#'>
                            Hover
                        </a>
                        <Dropdown.Menu>
                            <Dropdown.Item>黄金糕</Dropdown.Item>
                            <Dropdown.Item>狮子头</Dropdown.Item>
                            <Dropdown.Item>螺蛳粉</Dropdown.Item>
                            <Dropdown.Item disabled>双皮奶</Dropdown.Item>
                            <Dropdown.Item divided>蚵仔煎</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown
                        dropdownChange={(name) => {
                        console.log(name)
                    }}
                        trigger='click'>
                        <a className='ant-dropdown-link' href='#'>
                            点击
                        </a>
                        <Dropdown.Menu>
                            <Dropdown.Item>黄金糕</Dropdown.Item>
                            <Dropdown.Item>狮子头</Dropdown.Item>
                            <Dropdown.Item>螺蛳粉</Dropdown.Item>
                            <Dropdown.Item disabled>双皮奶</Dropdown.Item>
                            <Dropdown.Item divided>蚵仔煎</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        )
    }
}

export default DropdownExample
