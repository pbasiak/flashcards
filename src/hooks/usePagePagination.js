import { useCallback, useEffect, useState } from 'react';
const DEFAULT_START = 0;
const FIRST_PAGE = 1;

function usePagePagination({ limit, count }) {
    const [page, setPage] = useState(1);
    const [start, setStart] = useState(DEFAULT_START);
    const [pagesCount, setPagesCount] = useState(null);

    useEffect(() => {
        if (limit && count) {
            setPagesCount(Math.ceil(count / limit));
        }
    }, [limit, count]);

    useEffect(() => {
        if (page === FIRST_PAGE) {
            return setStart(DEFAULT_START);
        }
        if (page > 0) {
            return setStart((page - 1) * limit);
        }
    }, [page]);

    const handlePaginationChange = useCallback((event, page) => {
        setPage(page);
    });

    return {
        start,
        page,
        setPage,
        pagesCount,
        handlePaginationChange
    }
}

export { usePagePagination };