import { render, screen, fireEvent } from "@testing-library/react";
import ROUTES from "../../const/routes";
import DeckItem from "./DeckItem";

const mockPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockPush,
  }),
}));

const mockDeckItemId = 4;

const props = {
  title: "TestName",
  cardsCount: 3,
  handleShowDeck: jest.fn(),
  handlePlayDeck: jest.fn(),
  id: mockDeckItemId,
};

describe("DeckItem", () => {
  it("should call history push function after click on deck item", () => {
    render(<DeckItem {...props} />);

    fireEvent.click(screen.getByText("TestName"));
    expect(mockPush).toHaveBeenCalledWith(`${ROUTES.Decks.path}/${mockDeckItemId}`)
  });
});
