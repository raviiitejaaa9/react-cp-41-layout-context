// Write your code here
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
      <div> Add 1 </div>
      <div> Add 2 </div>
    </div>
  )

  const content = () => (
    <div className="each-sec content-sec ">
      <h1> Content </h1>
      <p>Some content . What are you doing? How are you doing. Are you good.</p>
    </div>
  )

  return (
    <div className="body-sec">
      {leftNav()}
      {content()}
      {rightNav()}
    </div>
  )
}

export default Body
