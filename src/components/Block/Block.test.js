import { render, screen } from "@testing-library/react";
import Block from "./Block";

describe("Block", () => {
  it("renders correctly", () => {
    render(<Block renderTitle="BlockTitle">BlockContent</Block>);

    expect(screen.getByText("BlockTitle")).toBeInTheDocument();
    expect(screen.getByText("BlockContent")).toBeInTheDocument();
  });
});
