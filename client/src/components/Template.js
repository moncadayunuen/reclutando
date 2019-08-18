import React from 'react'

import Nav from './Layout/Nav'
import Footer from './Layout/Footer'

function Template (props) {
  return (
    <React.Fragment>
      <Nav />
      {props.children}
      <Footer />
    </React.Fragment>
  )
}

export default Template
