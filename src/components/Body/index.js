// Write your code her
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div>
          {showContent && (
            <div>
              <h1>Content</h1>
              <p>Lorem ipsum</p>
            </div>
          )}
          {showLeftNavbar && (
            <div>
              <h1>Left Navbar Menu</h1>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </div>
          )}
          {showRightNavbar && (
            <div>
              <h1>Right Navbar Menu</h1>
              <div>
                <p>Ad 1</p>
              </div>
              <div>
                <p>Ad 2</p>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
