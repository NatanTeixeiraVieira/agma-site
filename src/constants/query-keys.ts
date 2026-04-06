import { FindAllTransparencyOptions } from '@/types/transparency';

export const transparencyTypesKey = () => ['transparency-types'];
export const transparencyDocumentsKey = (
  options?: FindAllTransparencyOptions,
) => ['transparency-documents', JSON.stringify(options)];
