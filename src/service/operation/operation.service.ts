import { api } from '../apiConfig';
import { OPERATIONS_URLS } from '../constants';

export const operationsList = (userId: string) =>
  api.get(OPERATIONS_URLS.OPERATIONS(userId));
