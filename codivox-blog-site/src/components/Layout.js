import React from 'react'

import Navbar from './Navbar'
import Footer from './Footer'
import './all.sass'

const TemplateWrapper = (props) => (
  <div>
    <Navbar />
    <div>{props.children}</div>
    <Footer />
  </div>
)

export default TemplateWrapper
