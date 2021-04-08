import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("render correctly", () => {
    render(<App />);
    expect(screen.getByText("Login with Github")).toBeInTheDocument();
  });
});
