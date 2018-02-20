import api from './api/appServiceApi';
import { getUser } from './storage';
import mapToLocations from './mappers/mapToLocations';

class LocationApi {
  static getLocations() {
    return api.get(`/locationservice/getlocationsbyteacherid?sessionToken=${getUser().token}`).then(mapToLocations);
  }
}

export default LocationApi;
