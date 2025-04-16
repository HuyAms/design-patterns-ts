interface MetricCalculator {
  getDistanceInMeters(): number;
}

class MetricSystem implements MetricCalculator {
  constructor(private distanceInMeters: number) {}

  getDistanceInMeters() {
    return this.distanceInMeters;
  }
}

// This class is not compatible with MetricCalculator interface
class ImperialSystem {
  constructor(private distanceInFeet: number) {}

  getDistanceInFeet() {
    return this.distanceInFeet;
  }
}

// That's why we need to create an adapter
class ImperialToMetricAdapter implements MetricCalculator {
  constructor(private imperialSystem: ImperialSystem) {}

  getDistanceInMeters() {
    return this.imperialSystem.getDistanceInFeet() * 0.3048;
  }
}

class Reporter {
  static reportDistance(calculator: MetricCalculator) {
    console.log('Report distance in meters: ', calculator.getDistanceInMeters());
  }
}

// Usage
const metricDistance = new MetricSystem(5);
Reporter.reportDistance(metricDistance);

const imperialDistance = new ImperialSystem(10);
const adapter = new ImperialToMetricAdapter(imperialDistance);
Reporter.reportDistance(adapter);
