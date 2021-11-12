import { render, screen } from "@testing-library/react";
import DashboardCard from "./DashboardCard";

describe('DashboardCard', () => {
    const TITLE_TEXT = 'Title';
    const CONTENT_TEXT = 'Content';
    it('should render with title', () => {
        render(<DashboardCard title={TITLE_TEXT} />);

        expect(screen.getByText(TITLE_TEXT)).toBeInTheDocument();
    });

    it('should render proper content without title', () => {
        render(<DashboardCard content={CONTENT_TEXT} />);

        expect(screen.getByText(CONTENT_TEXT)).toBeInTheDocument();
        expect(screen.queryByText(TITLE_TEXT)).not.toBeInTheDocument();
    });

    it('should not render content when it is loading', () => {
        render(<DashboardCard content={CONTENT_TEXT} isLoadingContent />);

        expect(screen.queryByText(CONTENT_TEXT)).not.toBeInTheDocument();
    });
})