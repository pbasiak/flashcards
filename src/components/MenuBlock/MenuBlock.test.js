import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import ROUTES from "../../const/routes";
import { AppProvider } from "../../context/AppProvider";
import { ACTION_BUTTON_TEST_ID } from "../SidebarMenu/sidebarTestIds";
import MenuBlock from "./MenuBlock";

const mockPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockPush,
    location: {
      pathname: "test",
    },
  }),
}));

const Wrapper = ({ children }) => {
  return (
    <MemoryRouter initialEntries={["/"]}>
      <AppProvider>{children}</AppProvider>
    </MemoryRouter>
  );
};

describe("MenuBlock", () => {
  it("should redirect to add flash card page", () => {
    render(<MenuBlock />, { wrapper: Wrapper });

    fireEvent.click(screen.getAllByTestId(ACTION_BUTTON_TEST_ID)[1]);
    expect(mockPush).toHaveBeenCalledWith(ROUTES.AddFlashCard.path);
  });
  
  it("should redirect to add deck page", () => {
    render(<MenuBlock />, { wrapper: Wrapper });

    fireEvent.click(screen.getAllByTestId(ACTION_BUTTON_TEST_ID)[0]);
    expect(mockPush).toHaveBeenCalledWith(ROUTES.AddDeck.path);
  });
});
