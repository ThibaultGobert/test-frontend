import api from './api/appServiceApi';
import { getUser } from './storage';
import mapToContracts from './mappers/mapToContracts';

class ContractApi {
  static getContracts() {
    return api.get(`/userservice/contract?sessionToken=${getUser().token}&includeFile=true`, { timeout: 20000 }).then(mapToContracts);
  }
  static getContractsById(contractId) {
    return api.get(`/userservice/contract/${contractId}?sessionToken=${getUser().token}&includeFile=true`, { timeout: 20000 }).then(mapToContracts);
  }
  static postContract(file, contractId) {
    const pdfFile = { file_name: file.name, content_type: 'application/pdf', data: file.base64 };
    const response = api.post(`/userservice/contract/${contractId}?sessionToken=${getUser().token}`, {
      body: pdfFile,
      timeout: 20000,
    });
    return response;
  }
}

export default ContractApi;
