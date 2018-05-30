import React, {Component} from 'react'

import { connect } from 'react-redux'

import GoogleMapReact from 'google-map-react';

class Map extends Component {

    render(){

        return(

            <GoogleMapReact className="map" bootstrapURLKeys={{ key: 'AIzaSyAoUgmPpP_90JrKrNn8tNWNZClS89FfaSk' }} center={this.props.zoneLocation} zoom={10}>
            </GoogleMapReact>
        

        );
    }
 }


const mapStateToProps = state => ({

  zoneLocation: state.analytics.zoneLocation,
  
});


export default connect(
  mapStateToProps,


)(Map)
