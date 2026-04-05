import {
  FindAllTransparencyOptions,
  TransparencyPaginated,
} from '@/types/transparency';
import { api } from './api';
import { addSearchParamsInUrl } from '@/utils/pagination';

export const getTransparency = async (options?: FindAllTransparencyOptions) => {
  const url = addSearchParamsInUrl(
    'v1/transparency-portal',
    {
      name: 'page',
      value: options?.page,
    },
    {
      name: 'limit',
      value: options?.limit,
    },
    {
      name: 'transparencyType',
      value: options?.transparencyType,
    },
  );

  const response = await api.get<TransparencyPaginated>(url);
  return response;
};
