export interface FilmData {
  id: number;
  attributes: {
    name: string;
    description: string;
    images: string[];
    release_date: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface FilmsResponse {
  data: FilmData[];
  meta: {
    pagination: Pagination;
  };
}