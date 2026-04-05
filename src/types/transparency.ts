import { Pagination } from './pagination';

export type Transparency = {
  id: string;
  path: string;
  filename: string;
};

export type TransparencyPaginated = Pagination<Transparency>;

export type FindAllTransparencyOptions = {
  transparencyType?: string;
  page?: number;
  limit?: number;
};
