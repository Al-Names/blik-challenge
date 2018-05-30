
import React, { Component } from 'react';
import { connect } from 'react-redux';


import { 
    analyticsDelivery, 
    analyticsDistribution, 
    analyticsThroughput,
    analyticsZone,
    deliveryOptionChanged, 
    distributionOptionChanged,
    zoneOptionChanged
} from '../actions';

import ScrollBar from './Scroll';
import Delivery from './Delivery';
import Distribution from './Distribution';
import Throughput from './Throughput';
import Zone from './Zone';
import Map from './Map';

class View extends Component {
    constructor(props) {
        super(props)
        this.analyticsId = this.props.match.params.id

    }

    componentDidMount() {
        this.props.analyticsDistribution(this.analyticsId)
        this.props.analyticsDelivery(this.analyticsId, this.props.deliveryOption)
        this.props.analyticsThroughput(this.analyticsId)
        this.props.analyticsZone(this.analyticsId)

   
    }
    renderZoneOption(){
        const zones = this.props.zones

        if (zones) {
            return zones.map(zone => (
                <option value={zone.name} key={zone.name}>{zone.name}</option>
            ))
        }
    }

    handleDistributionOption(e) {
        this.props.distributionOptionChanged(e.target.value)
    }
    handleDeliveryOption(e) {
        this.props.deliveryOptionChanged(e.target.value)
        this.props.analyticsDelivery(this.analyticsId, e.target.value)
    }
    handleZoneOption(e) {
        this.props.zoneOptionChanged(e.target.value)
    }

    render() {

        const { distributions, distributionOption, deliveries, numbers, throughputs, zones, zoneOption, zoneLocation, zoneDescription } = this.props

        return (
            <div >
                <div className= "viewed">
                <h1 >
                    {this.analyticsId}
                </h1>    
                <hr/>
                </div>  
            <div id="analyticsBody">
            <div className="map">
                <Map zoneLocation={zoneLocation}/>   
            </div>     
                
                {/* distribution data */}
                <div className="analyticsPanel" id="distributionPage">
                    <div className="text-center analyticTitle">
                        <h1 className="text-center">
                            Distribution
                        </h1>
                        <hr/>
                    </div>
                    <Distribution data={distributions} distributionOption={distributionOption} />
                    <div className="options">
                    <form onChange={this.handleDistributionOption.bind(this)} >
                        <label className="radio-inline">
                            <input type="radio" name="distributionOption" value="alle" defaultChecked={distributionOption === "alle" ? "checked" : ""} /> Alle
                        </label>
                        <label className="radio-inline">
                            <input type="radio" name="distributionOption" value="leergut" defaultChecked={distributionOption === "leergut" ? "checked" : ""} /> Leergut
                        </label>
                        <label className="radio-inline">
                            <input type="radio" name="distributionOption" value="vollgut" defaultChecked={distributionOption === "vollgut" ? "checked" : ""} /> Vollgut
                        </label>
                    </form>
                    </div>
                </div>
                <hr/>

                {/* delivery data */}
                <div className="analyticsPanel subsequentPanel" id="deliveryPage">
                    <div className="text-center analyticTitle">
                        <h1 className="text-center">
                            Delivery
                        </h1>
                        <hr/>
                    </div>
                    <p>Gesamtzahl SLTs im Kreislauf: {numbers}</p>
                    <Delivery data={deliveries} />
                    <div className="options">
                    <label> Per: 
                        <select onChange={this.handleDeliveryOption.bind(this)} value={this.props.deliveryOption}>
                            <option value="week">Week</option>
                            <option value="month">Month</option>
                        </select>
                    </label>
                    </div>
                </div>
                <hr/>

                {/* througput data */}
                <div className="analyticsPanel subsequentPanel" id="throughputPage">
                    <div className="text-center analyticTitle">
                        <h1 className="text-center">
                            Throughput
                        </h1>
                        <hr/>
                    </div>
                    <Throughput data={throughputs} />
                </div>
                <hr/>

                {/* zone data */}
                <div className="analyticsPanel subsequentPanel" id="zonePage">
                    <div className="text-center analyticTitle">
                        <h1 className="text-center">
                            Zone Data
                        </h1>
                    </div>
                    <hr/>
                    <p>Average length of stay in zone: </p>
                    <select onChange={this.handleZoneOption.bind(this)} value={this.props.zoneOption}>
                        {this.renderZoneOption()}
                    </select>
                    <Zone data={zones} zoneOption={zoneOption}/>
                    <p>{zoneDescription}</p>
                </div>  
                <hr/>       
            </div>
            {/* Scroll */}
            <ScrollBar analyticsId={this.analyticsId} zoneLocation={zoneLocation}/>  
            </div>
        );
    }
}

const mapStateToProps = state => ({
    deliveries: state.analytics.deliveries,
    distributions: state.analytics.distributions,
    throughputs: state.analytics.throughputs,
    zones: state.analytics.zones,
    deliveryOption: state.analytics.deliveryOption,
    distributionOption: state.analytics.distributionOption,
    zoneOption: state.analytics.zoneOption,
    zoneLocation: state.analytics.zoneLocation,
    zoneDescription: state.analytics.zoneDescription,
    numbers: state.analytics.numbers,
});
export default 
    connect(

            mapStateToProps,
            {
                analyticsDelivery,
                analyticsDistribution,
                analyticsThroughput,
                analyticsZone,
                deliveryOptionChanged,
                distributionOptionChanged,
                zoneOptionChanged
            }

    )(View);