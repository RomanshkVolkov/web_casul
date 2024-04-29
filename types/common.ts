interface Pagination {
        page: number;
        pages: number;
        total: number;
        limit: number;
        from: number;
        to: number;
    }

export default interface CommonTypes {
    Pagination: Pagination;
} 