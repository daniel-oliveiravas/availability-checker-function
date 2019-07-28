import dimensionService from './DimensionService';
import MetricData from '../model/MetricData';

class MetricDataService {

    buildServiceMonitoringMetricData(metricName, metricUnit, metricValue, serviceNameValue) {
        const dimensions = [dimensionService.buildServiceMonitoringMetricData(serviceNameValue)];
        return new MetricData(metricName, dimensions, metricUnit, metricValue);
    }
}

export { MetricDataService as default };