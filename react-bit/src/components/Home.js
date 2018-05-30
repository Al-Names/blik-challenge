
import React from 'react'

import { connect } from 'react-redux'

const Home = props => (
  <div className="banner">
    <h4>by</h4>
    <h2>Mustapha Saeed. 2018.</h2>
    <hr/>
    <p>Welcome to the home page of the of my take on the Blik Front-End Challenge</p>
    <p>Click on analytics above to get started. Hope you like it.</p>
    
  </div>
)


export default connect(
  null, 
 
)(Home)