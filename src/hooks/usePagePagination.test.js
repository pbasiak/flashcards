import { renderHook, act } from '@testing-library/react-hooks'
import { usePagePagination } from './usePagePagination';

describe('usePagePagination', () => {
    it('returns correct values', () => {
        const { result } = renderHook(() => usePagePagination({ limit: 2, count: 10 }));

        expect(result.current.start).toEqual(0);
        expect(result.current.page).toEqual(1);
        expect(result.current.pagesCount).toEqual(5);
    });

    it('changes pages', () => {
        const { result } = renderHook(() => usePagePagination({ limit: 2, count: 10 }));

        act(() => {
            result.current.handlePaginationChange({}, 4);
        });

        expect(result.current.page).toBe(4);
    });
})