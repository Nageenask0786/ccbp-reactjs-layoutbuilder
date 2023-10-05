import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
        showContent,
        showLeftNavbar,
        showRightNavbar,
      } = value

      const onChangeLeft = () => {
        onToggleShowLeftNavbar()
      }

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeRight = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div>
          <h1 className="heading">Layout Container</h1>
          <div>
            <label htmlFor="context">Content</label>
            <input
              type="checkbox"
              id="context"
              checked={showContent}
              onChange={onChangeContent}
            />
          </div>
          <div>
            <label htmlFor="left navbar">Left NavBar</label>
            <input
              type="checkbox"
              id="left navbar"
              onChange={onChangeLeft}
              checked={showLeftNavbar}
            />
          </div>

          <div>
            <label htmlFor="right navbar">Right NavBar</label>
            <input
              type="checkbox"
              id="right navbar"
              checked={showRightNavbar}
              onChange={onChangeRight}
            />
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
