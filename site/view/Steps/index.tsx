
import * as Nerv from 'nervjs'

import Button from '../../../src/button'
import Steps from '../../../src/step'
const Step = Steps.Step
class StepExample extends Nerv.Component<any, any> {
  constructor (props) {
    super(props)
    this.state = {
      current: 0
    }
    this.addHandler = this.addHandler.bind(this)
    this.minusHandler = this.minusHandler.bind(this)
  }
  addHandler (e: MouseEvent) {
    let current = this.state.current
    if (current < 2) {
      current += 1
    }
    this.setState(
      {
        current
      },
      () => {
        console.log(this.state.current)
      }
    )
  }
  minusHandler (e: MouseEvent) {
    let current = this.state.current
    if (current > 0) {
      current -= 1
    }
    this.setState(
      {
        current
      },
      () => {
        console.log(this.state.current)
      }
    )
  }
  render () {
    return (
      <div style={{ width: '100%' }}>
        <Steps current={this.state.current} style='margin-top:100px;'>
          {}
          <Step
            style='color:red;'
            title='Step1'
            description='This is a description.'
          />
          <Step title='Step2' description='This is a description.' />
          <Step title='Step3' />
          <Step title='Step4' />
        </Steps>
        <Steps current={this.state.current} status='error'>
        {}
          <Step title='Step1' description='This is a description.' />
          <Step title='Step2' description='This is a description.' />
          <Step title='Step3' />
        </Steps>
        <Steps current={this.state.current} status='finish'>
        {}
          <Step title='Step1' description='This is a description.' />
          <Step title='Step2' description='This is a description.' />
          <Step title='Step3' />
        </Steps>
        <Steps current={this.state.current} status='process'>
          {}
          <Step title='Step1' description='This is a description.' />
          <Step title='Step2' description='This is a description.' />
          <Step title='Step3' />
        </Steps>
        <Steps current={this.state.current} status='wait'>
        {}
          <Step title='Step1' description='This is a description.' />
          <Step title='Step2' description='This is a description.' />
          <Step title='Step3' />
        </Steps>
        <Steps current={this.state.current} size='small'>
        {}
          <Step title='Step1' description='This is a description.' />
          <Step title='Step2' description='This is a description.' />
          <Step title='Step3' />
        </Steps>
        <Steps current={this.state.current} size='small' direction='vertical'>
        {}
          <Step title='Step1' description='This is a description.' />
          <Step title='Step2' description='This is a description.' />
          <Step title='Step3' />
        </Steps>
        <Steps current={this.state.current}>
        {}
          <Step
            title='Step1'
            description='This is a description.'
            icon='icon-user'
          />
          <Step
            title='Step2'
            description='This is a description.'
            icon='icon-airplay'
          />
          <Step title='Step3' icon='icon-pocket' />
        </Steps>
        <Button
          onClick={this.minusHandler}
          type='primary'
          style='margin-top: 12px;'
        >
          {}
          Prev
        </Button>
        <Button
          onClick={this.addHandler}
          type='primary'
          style='margin-top: 12px;'
        >
          {}
          Next
        </Button>
      </div>
    )
  }
}

export default StepExample
