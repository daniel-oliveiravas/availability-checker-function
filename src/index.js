const axios = require('axios');
import cloudwatchMetricService from "./service/CloudwatchMetricService";
import cloudwatchService from "./service/CloudwatchService";


const SERVICE_URL = process.env.SERVICE_URL;
const SERVICE_NAME = process.env.SERVICE_NAME;
const SUCESS_METRIC_NAME = 'Sucess';
const ERROR_METRIC_NAME = 'Error';
const METRIC_UNIT = 'Count';
const METRIC_VALUE = '';

exports.handler = (event, context) => {
    axios.get(SERVICE_URL)
        .then(response => {
            cloudwatchService.sendMetric(cloudwatchMetricService.buildCloudwatchServiceMonitoringMetric(
                SUCESS_METRIC_NAME, METRIC_UNIT, METRIC_VALUE, SERVICE_NAME));
        })
        .catch(error => {
            cloudwatchService.sendMetric(cloudwatchMetricService.buildCloudwatchServiceMonitoringMetric(
                ERROR_METRIC_NAME, METRIC_UNIT, METRIC_VALUE, SERVICE_NAME));
        });
}