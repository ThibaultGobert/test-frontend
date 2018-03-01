export default (contract) => {
  if (contract.unsigned_pdf) {
    return contract.unsigned_pdf;
  }
  return contract.signed_pdf;
};

