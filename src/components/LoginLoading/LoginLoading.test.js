import { render, screen } from "@testing-library/react";
import LoginLoading from "./LoginLoading";

describe("LoginLoading", () => {
  it("should render loading text with title", () => {
    const title = "example";

    render(<LoginLoading title={title} />);

    expect(screen.getByText(`Loading ${title}...`)).toBeInTheDocument();
  });
});
