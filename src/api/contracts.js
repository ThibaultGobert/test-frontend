import api from './api/appServiceApi';
import { getUser } from './storage';
import mapToContracts from './mappers/mapToContracts';

class ContractApi {
  static getContracts() {
    return api.get(`/userservice/contract?sessionToken=${getUser().token}&includeFile=true`).then(mapToContracts);
  }
  static getContractsById(contractId) {
    return api.get(`/userservice/contract/${contractId}?sessionToken=${getUser().token}&includeFile=true`).then(mapToContracts);
  }
  static postContract(file, contractId) {
    const pdfFile = { file_name: file[0].name, content_type: 'application/pdf', data: file[0].base64 };
    const response = api.post(`/userservice/contract/${contractId}?sessionToken=${getUser().token}`, {
      body: pdfFile,
    });
    return response;
  }
}

export default ContractApi;
