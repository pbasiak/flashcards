import { render, screen } from "@testing-library/react";
import ContentFullWidthTemplate from "./ContentFullWidthTemplate";

describe("ContentFullWidthTemplate", () => {
  it("should render header and children", () => {
    const HEADER_TEXT = 'Header';
    const CHILDREN_TEXT = 'Test';
    render(<ContentFullWidthTemplate header={<div>{HEADER_TEXT}</div>}>{CHILDREN_TEXT}</ContentFullWidthTemplate>);

    expect(screen.getByText(CHILDREN_TEXT)).toBeInTheDocument();
    expect(screen.getByText(HEADER_TEXT)).toBeInTheDocument();
  });
});
