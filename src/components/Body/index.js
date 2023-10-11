// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => {
  const leftNav = () => (
    <div className="each-sec">
      <h1> Left Navbar Menu </h1>
      <ul>
        <li> Item 1 </li>
        <li> Item 2 </li>
        <li> Item 3 </li>
        <li> Item 4 </li>
      </ul>
    </div>
  )

  const rightNav = () => (
    <div className="each-sec">
      <h1> Right Navbar Menu </h1>
      <div> Ad 1 </div>
      <div> Ad 2 </div>
    </div>
  )

  const content = () => (
    <div className="each-sec content-sec ">
      <h1> Content </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
    </div>
  )

  return (
    <ConfigurationContext.Consumer>
      {value => (
        <div className="body-sec">
          {value.showLeftNavbar && leftNav()}
          {value.showContent && content()}
          {value.showRightNavbar && rightNav()}
        </div>
      )}
    </ConfigurationContext.Consumer>
  )
}

export default Body
