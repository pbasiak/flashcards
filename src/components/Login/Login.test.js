import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Login from "./Login";

describe('Login', () => {

    it('should render button', () => {
        render(<Login />, { wrapper: MemoryRouter });

        expect(screen.getByText('Login with Github')).toBeInTheDocument();
        expect(screen.getByText('Click button below to login / register')).toBeInTheDocument();
    });
});