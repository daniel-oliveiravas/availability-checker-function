class CloudwatchMetric {
    constructor(metricDataList, namespace) {
        this.MetricData = metricDataList;
        this.Namespace = namespace;
    }
}

exports.default = CloudwatchMetric;