import { render, screen } from "@testing-library/react";
import PageTemplate from "./PageTemplate";

describe("PageTemplate", () => {
  const TEXT_CONTENT = "Text";
  it("should render with proper class name", () => {
    const className = "bold";
    const { container } = render(
      <PageTemplate className={className}>{TEXT_CONTENT}</PageTemplate>
    );

    expect(screen.getByText(TEXT_CONTENT)).toBeInTheDocument();
    expect(container.getElementsByClassName(className)[0]).toHaveClass(
      className
    );
  });

  it("should render with default class name", () => {
    const DEFAULT_CLASS = "page-template";
    const { container } = render(<PageTemplate>{TEXT_CONTENT}</PageTemplate>);

    expect(container.getElementsByClassName(DEFAULT_CLASS)[0]).toHaveClass(
      DEFAULT_CLASS
    );
  });
});
