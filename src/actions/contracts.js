import {
  FETCH_CONTRACTS_START,
  FETCH_CONTRACTS_SUCCESS,
  FETCH_CONTRACTS_ERROR,
} from './types/contracts';

export function fetchContractsStart() {
  return { type: FETCH_CONTRACTS_START };
}

export function fetchContractsSuccess(data) {
  return { type: FETCH_CONTRACTS_SUCCESS, data };
}

export function fetchContractsError(error) {
  return { type: FETCH_CONTRACTS_ERROR, error };
}
