import {
    ANALYTICS_LIST_REQUESTED,
    ANALYTICS_LIST_SUCCEEDED,
    ANALYTICS_LIST_FAILED,
    ANALYTICS_DELIVERY_REQUESTED,
    ANALYTICS_DELIVERY_SUCCEEDED,
    ANALYTICS_DELIVERY_FAILED,
    ANALYTICS_DISTRIBUTION_REQUESTED,
    ANALYTICS_DISTRIBUTION_SUCCEEDED,
    ANALYTICS_DISTRIBUTION_FAILED,
    ANALYTICS_THROUGHPUT_REQUESTED,
    ANALYTICS_THROUGHPUT_SUCCEEDED,
    ANALYTICS_THROUGHPUT_FAILED,
    ANALYTICS_ZONES_REQUESTED,
    ANALYTICS_ZONES_SUCCEEDED,
    ANALYTICS_ZONES_FAILED,
    DELIVERY_OPTION_CHANGE,
    DISTRIBUTION_OPTION_CHANGE,
    ZONE_OPTION_CHANGE
} from '../actions';

const INITIAL_STATE = {
    ids: [],
    error: '',
    deliveries: '',
    distributions: '',
    throughputs: '',
    zones: '',
    numbers: '',
    deliveryOption: 'week',
    distributionOption: 'alle',
    zoneOption: '',
    zoneDescription:'',
    zoneLocation: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ANALYTICS_LIST_REQUESTED:
            return { ...state };
        case ANALYTICS_LIST_SUCCEEDED:
            return { ...state, ids: action.payload };
        case ANALYTICS_LIST_FAILED:
            return { ...state, error: action.payload };
        case ANALYTICS_DELIVERY_REQUESTED:
            return { ...state };
        case ANALYTICS_DELIVERY_SUCCEEDED:
            return { ...state, deliveries: action.payload.deliveries };
        case ANALYTICS_DELIVERY_FAILED:
            return { ...state, error: action.payload };
        case ANALYTICS_DISTRIBUTION_REQUESTED:
            return { ...state };
        case ANALYTICS_DISTRIBUTION_SUCCEEDED:
            return { ...state, distributions: action.payload.distribution  };
        case ANALYTICS_DISTRIBUTION_FAILED:
            return { ...state, error: action.payload };
        case ANALYTICS_THROUGHPUT_REQUESTED:
            return { ...state };
        case ANALYTICS_THROUGHPUT_SUCCEEDED:
            return { ...state, throughputs: action.payload.throughput  };
        case ANALYTICS_THROUGHPUT_FAILED:
            return { ...state, error: action.payload };
        case ANALYTICS_ZONES_REQUESTED:
            return { ...state };
        case ANALYTICS_ZONES_SUCCEEDED:
            return { ...state, zones: action.payload.zones, zoneOption: action.payload.zones[0].name, zoneLocation: action.payload.location, zoneDescription: action.payload.desctiption, numbers: action.payload.numbers };
        case ANALYTICS_ZONES_FAILED:
            return { ...state, error: action.payload };
        case DELIVERY_OPTION_CHANGE:
            return { ...state, deliveryOption: action.payload };
        case DISTRIBUTION_OPTION_CHANGE:
            return { ...state, distributionOption: action.payload };
        case ZONE_OPTION_CHANGE:
            return { ...state, zoneOption: action.payload };
        default:
            return state;
    }
};