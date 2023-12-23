class WeatherService {
    constructor() {
        this.andersonGeoCoordinates = {
            latitude: 40.1053,
            longitude: -85.6803
        };
        this.weatherForecastUrl = `https://api.weather.gov/points/${this.andersonGeoCoordinates.latitude},${this.andersonGeoCoordinates.longitude}`;
    }
  }

//https://radar.weather.gov/region/centgrlakes/standard
//https://radar.weather.gov/ridge/standard/CENTGRLAKES_loop.gif

//note the NWS data blurb