const BASE_USERS_URL = 'users';

export const USERS_URLS = {
  SIGN_IN: `${BASE_USERS_URL}/signin`,
  SAVE_USER: `${BASE_USERS_URL}/save_user`,
  ME: `${BASE_USERS_URL}/me`,
  CHANGE_PASSWORD: `${BASE_USERS_URL}/changePassword`,
  SEARCH: `${BASE_USERS_URL}/search`,
  GET_USERS: (userId: string) => `${BASE_USERS_URL}/get_user/${userId}`,
  DELETE_USERS: (userId: string) => `${BASE_USERS_URL}/delete_user/${userId}`,
};

const BASE_OPERATIONS_URL = 'operations';

export const OPERATIONS_URLS = {
  TRANSFER: `${BASE_OPERATIONS_URL}/transfer`,
  DEBIT: `${BASE_OPERATIONS_URL}/debit`,
  CREDIT: `${BASE_OPERATIONS_URL}/credit`,
  OPERATIONS: (accountId: string) =>
    `${BASE_OPERATIONS_URL}/${accountId}/pageOperations`,
  OPERATIONS_LIST: (accountId: string) =>
    `${BASE_OPERATIONS_URL}/list/${accountId}`,
  OPERATION: (operationId: string) =>
    `${BASE_OPERATIONS_URL}/get/${operationId}`,
};

const BASE_BANK_ACCOUNT_URL = 'bank_account';

export const BANK_ACCOUNT_URLS = {
  ADD_BANK_ACCOUNT: `${BASE_BANK_ACCOUNT_URL}/bank_account`,
};
