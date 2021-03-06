import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/header'

export default () => (
  <div style={{ color: `teal` }}>
    <Link to="/">Index</Link>
    <Header headerText="Contact" />
    <p>Send us a message!</p>
  </div>
)
