import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {status: true}

  change = () => {
    console.log('Hi')
    this.setState(prevState => ({status: !prevState.status}))
  }

  render() {
    const {status} = this.state
    let autButton
    if (status === true) {
      autButton = (
        <button type="button" className="but" onClick={this.change}>
          Subscribe
        </button>
      )
    } else {
      autButton = (
        <button type="button" className="but" onClick={this.change}>
          Subscribed
        </button>
      )
    }

    return (
      <div className="div">
        <h1>Welcome</h1>
        <p>Thank you!Happy Learning</p>
        <div className="btn-con">{autButton}</div>
      </div>
    )
  }
}

export default Welcome
