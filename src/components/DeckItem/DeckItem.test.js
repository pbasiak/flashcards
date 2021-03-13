import { fireEvent, render, screen } from "@testing-library/react"
import DeckItem from "./DeckItem";

const props = {
    name: 'TestName',
    cardsCount: 3,
    likesCount: 5,
    commentsCount: 12,
    handleShowDeck: jest.fn(),
    handlePlayDeck: jest.fn(),
};

describe('Logo', () => {
    it('renders correctly', () => {
        render(
            <DeckItem {...props} />
        );

        expect(screen.getByText('TestName')).toBeInTheDocument();
        expect(screen.getByText('3 cards')).toBeInTheDocument();
        expect(screen.getByText('5 likes')).toBeInTheDocument();
        expect(screen.getByText('12 comments')).toBeInTheDocument();
        expect(screen.getByText('Play')).toBeInTheDocument();
    });

    it('calls play function', () => {
        const handlePlay = jest.fn();
        render(<DeckItem {...props} handlePlayDeck={handlePlay} />);

        expect(screen.getByText('Play')).toBeInTheDocument();
        fireEvent.click(screen.getByText('Play'));

        expect(handlePlay).toHaveBeenCalled();
    });

    it('calls show deck function', () => {
        const handleShowDeck = jest.fn();
        render(<DeckItem {...props} handleShowDeck={handleShowDeck} />);

        expect(screen.getByText('Show deck')).toBeInTheDocument();
        fireEvent.click(screen.getByText('Show deck'));

        expect(handleShowDeck).toHaveBeenCalled();
    });
});
