import metricDataService from './MetricDataService';
import CloudwatchMetric from '../model/CloudwatchMetric';

const CLOUDWATCH_LOG_GROUP_NAMESPACE = 'AvailabilityCheckerFunction';

class ClouwatchMetricService {

    buildCloudwatchServiceMonitoringMetric(metricName, metricUnit, metricValue, serviceNameValue) {
        const metricDataList = [metricDataService.buildServiceMonitoringMetricData(metricName, metricUnit, metricValue, serviceNameValue)];
        return new CloudwatchMetric(metricDataList, CLOUDWATCH_LOG_GROUP_NAMESPACE);
    }

}

export { ClouwatchMetricService as default };