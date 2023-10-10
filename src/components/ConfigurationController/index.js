// Write your code here
import {Component} from 'react'
import './index.css'

class ConfigurationController extends Component {
  render() {
    return (
      <div className="config-sec">
        <h1> Layout </h1>

        <div>
          <input type="checkbox" id="content" />
          <label htmlFor="content"> Content </label>
        </div>

        <div>
          <input type="checkbox" id="left-nav" />
          <label htmlFor="left-nav"> Left Navbar </label>
        </div>

        <div>
          <input type="checkbox" id="right-nav" />
          <label htmlFor="right-nav"> Right Navbar </label>
        </div>
      </div>
    )
  }
}

export default ConfigurationController
