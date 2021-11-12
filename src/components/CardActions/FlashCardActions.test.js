import { fireEvent, render, screen } from "@testing-library/react"
import FlashCardActions from "./FlashCardActions"

describe('FlashCardActions', () => {
    const EDIT_BUTTON_TEXT = 'Edit';

    it('should not render edit button', () => {
        render(<FlashCardActions />);

        expect(screen.queryByText(EDIT_BUTTON_TEXT)).not.toBeInTheDocument();
    });

    it('should render edit button', () => {
        render(<FlashCardActions edit={true} />);

        expect(screen.getByText(EDIT_BUTTON_TEXT)).toBeInTheDocument();
    });

    it('should call on click function', () => {
        const handleEdit = jest.fn();
        render(<FlashCardActions edit={true} handleEdit={handleEdit} />);

        fireEvent.click(screen.getByText(EDIT_BUTTON_TEXT));
        expect(handleEdit).toHaveBeenCalled();
    });
})