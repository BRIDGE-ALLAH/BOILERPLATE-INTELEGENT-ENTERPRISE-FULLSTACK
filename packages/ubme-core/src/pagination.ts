export interface PaginationParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginationResult<T> {
  data: T[];
  total: number;
  page: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

export class PaginationUtil {
  static async paginate<T>(
    items: T[],
    page: number = 1,
    limit: number = 10,
  ): Promise<PaginationResult<T>> {
    const total = items.length;
    const totalPages = Math.ceil(total / limit);
    const start = (page - 1) * limit;
    const end = start + limit;
    const data = items.slice(start, end);

    return {
      data,
      total,
      page,
      totalPages: totalPages > 0 ? totalPages : 1,
      hasNext: page < totalPages,
      hasPrevious: page > 1,
    };
  }
}