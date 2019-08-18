import React from 'react'

import Header from '../components/Layout/Header'
import Categories from '../components/Layout/Categories'
import Newsletter from '../components/Layout/Newsletter'

class Home extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Header />
        <Categories />
        <Newsletter />
      </React.Fragment>
    )
  }
}

export default Home
