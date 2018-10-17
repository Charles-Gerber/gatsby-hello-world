import React from 'react'
import Header from '../components/header'
import { Link } from 'gatsby'

export default () => (
  <div>
    <Link to="/contact/">Contact</Link>
    <Header headerText="Index de la mort" optionalText="not have to" />
    Hello coco2!
    <p />
    <img src="img/CGPhotography-4-2.jpg" />
  </div>
)
