import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import Logo from "./Logo"

describe('Logo', () => {
    it('renders correctly', () => {
        render(
            <MemoryRouter>
                <Logo />
            </MemoryRouter>
        );

        expect(screen.getByText('Learn')).toBeInTheDocument();
        expect(screen.getByText('Dev')).toBeInTheDocument();
    });

    it('redirects to root', () => {
        render(
            <MemoryRouter>
                <Logo />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText('Learn'));

        expect(); // TODO
    })
})