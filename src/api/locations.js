import api from './api/lpfApi';

class LocationApi {
  static getLocation(locationId) {
    return api.get(`/locations/${locationId}`);
  }
}

export default LocationApi;
