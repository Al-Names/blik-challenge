import React, {Component} from 'react'

import { connect } from 'react-redux'



class ScrollBar extends Component {


 render(){

    return(
      <nav className="navbar navbar-inverse navbar-fixed-bottom">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Analytics</a>
          </div>
          <ul className="nav navbar-nav">
            <li><a href="#distributionPage"><i className="fa fa-bar-chart"></i> Distribution</a></li>
            <li><a href="#deliveryPage"><i className="fa fa-area-chart"></i> Deliveries</a></li>
            <li><a href="#throughputPage"><i className="fa fa-line-chart"></i> Throughput</a></li>
            <li><a href="#zonePage"><i className="fa fa-map-o"></i> Zone</a></li>
          </ul>
          <div className="navbar-right">
            <a className="navbar-brand viewed">{this.props.analyticsId}</a>
          </div>
        </div>
      </nav>

);
 }
 }

export default connect(
  null,

)(ScrollBar)
