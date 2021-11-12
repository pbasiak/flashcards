import { render, screen } from "@testing-library/react";
import DeckItem from "./DeckItem";

const props = {
  title: "TestName",
  cardsCount: 3,
  handleShowDeck: jest.fn(),
  handlePlayDeck: jest.fn(),
  id: 1,
};

describe("Logo", () => {
  it("renders correctly", () => {
    render(<DeckItem {...props} />);

    expect(screen.getByText("TestName")).toBeInTheDocument();
  });
});
