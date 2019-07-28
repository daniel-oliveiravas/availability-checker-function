import { CloudWatch } from 'aws-sdk';
const cloudwatch = new CloudWatch();

class CloudwatchService {
    async sendMetric(cloudwatchMetric) {
        await cloudwatch.putMetricData(cloudwatchMetric).promise();
    }
}

export { CloudwatchService as default };