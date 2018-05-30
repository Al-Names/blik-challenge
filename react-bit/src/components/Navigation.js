import React from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

const Navigation = props => (

        <header className=" nav ">
        <ul className=" nav navbar-nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/analytics">Analytics</Link></li>
        </ul>
        </header>

)



export default connect(
  null, 
 
)(Navigation)