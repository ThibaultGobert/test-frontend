export default (contract) => {
  let data;
  if (contract.signed && contract.signed_pdf != null) {
    ({ data } = contract.signed_pdf);
  } else if (contract.unsigned_pdf != null) {
    ({ data } = contract.unsigned_pdf);
  }
  return `data:application/octet-stream;base64,${data}`;
};
