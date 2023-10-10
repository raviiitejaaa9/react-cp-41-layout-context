// Write your code here
import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

class ConfigurationController extends Component {
  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => (
          <div className="config-sec">
            <h1> Layout </h1>
            <div>
              <input
                type="checkbox"
                id="content"
                onChange={value.onToggleShowContent}
                checked={value.showContent}
              />
              <label htmlFor="content"> Content </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="left-nav"
                onChange={value.onToggleShowLeftNavbar}
                checked={value.showLeftNavbar}
              />
              <label htmlFor="left-nav"> Left Navbar </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="right-nav"
                onChange={value.onToggleShowRightNavbar}
                checked={value.showRightNavbar}
              />
              <label htmlFor="right-nav"> Right Navbar </label>
            </div>
          </div>
        )}
      </ConfigurationContext.Consumer>
    )
  }
}

export default ConfigurationController
