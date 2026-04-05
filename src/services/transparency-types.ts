import { TransparencyTypes } from '@/types/transparency-types';
import { api } from './api';

export const getTransparencyTypes = async () => {
  const response = await api.get<TransparencyTypes[]>('/image-type/v1');

  return response;
};
