import Dimension from '../model/Dimension';

const SERVICE_MONITORING_DIMENSION_NAME = 'ServiceName';

class DimensionService {

    buildServiceMonitoringDimension(serviceNameValue) {
        return new Dimension(SERVICE_MONITORING_DIMENSION_NAME, serviceNameValue);
    }
}

export { DimensionService as default };