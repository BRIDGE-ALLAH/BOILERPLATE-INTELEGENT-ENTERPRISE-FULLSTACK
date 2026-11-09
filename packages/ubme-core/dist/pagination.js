"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationUtil = void 0;
class PaginationUtil {
    static async paginate(items, page = 1, limit = 10) {
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
exports.PaginationUtil = PaginationUtil;
