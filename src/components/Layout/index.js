import {Component} from 'react'

import Body from '../Body'

import Header from '../Header'

import Footer from '../Footer'

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}

export default Layout
