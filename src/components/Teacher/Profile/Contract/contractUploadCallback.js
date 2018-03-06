import toastr from 'toastr';
import contractsApi from '../../../../api/contracts';

export default (file, contractId) => {
  contractsApi.postContract(file[0], contractId)
    .then(() => { toastr.success('Upload gelukt'); })
    .catch(() => { toastr.warning('Upload mislukt'); });
};
