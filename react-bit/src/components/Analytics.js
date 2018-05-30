
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { analyticsList } from '../actions';

class Analytics extends Component {
    componentDidMount(){
        this.props.analyticsList()
    }

    render() {
        let idList = this.props.ids.map(id =>
                        
                      <Link to={`analytics/${id}`} className="idLink center-text">
                        <div key={id} className= "anaId col-md-6 thumbnail">
                          <h2>
                            {id}
                          </h2>
                        </div>
                      </Link>
            )
        return (
            <div>
               
                <h3 className="banner">Available analytics:</h3>
                <div className= "row"> 
                  {idList}
                </div> 
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ids: state.analytics.ids,
});

export default 
    connect(
        mapStateToProps, 
        {
            analyticsList
        }
    )(Analytics);