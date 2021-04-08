import { render, screen } from "@testing-library/react";
import CardBox from "./CardBox";

describe("CardBox", () => {
  it("renders correctly", () => {
    render(<CardBox>CardBoxContent</CardBox>);

    expect(screen.getByText("CardBoxContent"));
  });
});
