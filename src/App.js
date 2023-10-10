import {Component} from 'react' // Import React and Component
import ConfigurationController from './components/ConfigurationController'
import Layout from './components/Layout'
import ConfigurationContext from './context/ConfigurationContext'
import './App.css'

class App extends Component {
  state = {
    showContent: true,
    showRightNavbar: true,
    showLeftNavbar: true,
  }

  onToggleShowContent = () => {
    this.setState(prevState => ({
      showContent: !prevState.showContent,
    }))
  }

  onToggleShowLeftNavbar = () => {
    this.setState(prevState => ({
      showLeftNavbar: !prevState.showLeftNavbar,
    }))
  }

  onToggleShowRightNavbar = () => {
    this.setState(prevState => ({
      showRightNavbar: !prevState.showRightNavbar,
    }))
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state

    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent: this.onToggleShowContent,
          onToggleShowLeftNavbar: this.onToggleShowLeftNavbar, // Fixed typo here
          onToggleShowRightNavbar: this.onToggleShowRightNavbar, // Fixed typo here
        }}
      >
        <div className="App">
          <ConfigurationController />
          <Layout />
        </div>
      </ConfigurationContext.Provider>
    )
  }
}

export default App
