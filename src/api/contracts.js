import api from './api/appServiceApi';
import { getUser } from './storage';
import mapToContracts from './mappers/mapToContracts';

class ContractApi {
  static getContracts() {
    return api.get(`/userservice/contract/?sessionToken=${getUser().token}`).then(mapToContracts);
  }
  static getContractsById(contractId) {
    return api.get(`/userservice/contract/${contractId}?sessionToken=${getUser().token}`).then(mapToContracts);
  }
}

export default ContractApi;
