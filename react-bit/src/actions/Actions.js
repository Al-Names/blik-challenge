import axios from 'axios'

import { API } from '../api'
const url = API;

export const ANALYTICS_LIST_REQUESTED = 'analytics_list_requested'
export const ANALYTICS_LIST_SUCCEEDED = 'analytics_list_succeeded'
export const ANALYTICS_LIST_FAILED = 'analytics_list_failed'
export const ANALYTICS_DELIVERY_REQUESTED = 'analytics_delivery_requested'
export const ANALYTICS_DELIVERY_SUCCEEDED = 'analytics_delivery_succeeded'
export const ANALYTICS_DELIVERY_FAILED = 'analytics_delivery_failed'
export const ANALYTICS_DISTRIBUTION_REQUESTED = 'analytics_distribution_requested'
export const ANALYTICS_DISTRIBUTION_SUCCEEDED = 'analytics_distribution_succeeded'
export const ANALYTICS_DISTRIBUTION_FAILED = 'analytics_distribution_failed'
export const ANALYTICS_THROUGHPUT_REQUESTED = 'analytics_throughput_requested'
export const ANALYTICS_THROUGHPUT_SUCCEEDED = 'analytics_throughput_succeeded'
export const ANALYTICS_THROUGHPUT_FAILED = 'analytics_throughput_failed'
export const ANALYTICS_ZONES_REQUESTED = 'analytics_zones_requested'
export const ANALYTICS_ZONES_SUCCEEDED = 'analytics_zones_succeeded'
export const ANALYTICS_ZONES_FAILED = 'analytics_zones_failed'
export const DELIVERY_OPTION_CHANGE = 'delivery_option_change'
export const DISTRIBUTION_OPTION_CHANGE = 'distribution_option_change'
export const ZONE_OPTION_CHANGE = 'zone_option_change'

export const analyticsList = () => {
    return (dispatch) => {
        dispatch({ type: ANALYTICS_LIST_REQUESTED });

        axios.get(`${url}/analytics`)
            .then(function (response) {
                dispatch({ type: ANALYTICS_LIST_SUCCEEDED, payload: response.data });
            })
            .catch(function (error) {
                dispatch({ type: ANALYTICS_LIST_FAILED, payload: error });
            });
    };
};

export const analyticsDelivery = (id, deliveryOption) => {
    return (dispatch) => {
        dispatch({ type: ANALYTICS_DELIVERY_REQUESTED });

        axios.get(`${url}/analytics/${id}/delivery?${deliveryOption}`)
            .then(function (response) {
                dispatch({ type: ANALYTICS_DELIVERY_SUCCEEDED, payload: response.data });
            })
            .catch(function (error) {
                dispatch({ type: ANALYTICS_DELIVERY_FAILED, payload: error });
            });
    };
};

export const analyticsDistribution = (id) => {
    return (dispatch) => {
        dispatch({ type: ANALYTICS_DISTRIBUTION_REQUESTED });

        axios.get(`${url}/analytics/${id}/distribution`)
            .then(function (response) {
                dispatch({ type: ANALYTICS_DISTRIBUTION_SUCCEEDED, payload: response.data });
            })
            .catch(function (error) {
                dispatch({ type: ANALYTICS_DISTRIBUTION_FAILED, payload: error });
            });
    };
};

export const analyticsThroughput = (id) => {
    return (dispatch) => {
        dispatch({ type: ANALYTICS_THROUGHPUT_REQUESTED });

        axios.get(`${url}/analytics/${id}/throughput`)
            .then(function (response) {
                dispatch({ type: ANALYTICS_THROUGHPUT_SUCCEEDED, payload: response.data });
            })
            .catch(function (error) {
                dispatch({ type: ANALYTICS_THROUGHPUT_FAILED, payload: error });
            });
    };
};

export const analyticsZone = (id) => {
    return (dispatch) => {
        dispatch({ type: ANALYTICS_ZONES_REQUESTED });

        axios.get(`${url}/analytics/${id}`)
            .then(function (response) {
                dispatch({ type: ANALYTICS_ZONES_SUCCEEDED, payload: response.data });
            })
            .catch(function (error) {
                dispatch({ type: ANALYTICS_ZONES_FAILED, payload: error });
            });
    };
};

export const deliveryOptionChanged = (value) => {
    return {
        type: DELIVERY_OPTION_CHANGE,
        payload: value
    };
};

export const distributionOptionChanged = (value) => {
    return {
        type: DISTRIBUTION_OPTION_CHANGE,
        payload: value
    };
};

export const zoneOptionChanged = (value) => {
    return {
        type: ZONE_OPTION_CHANGE,
        payload: value

    };
};