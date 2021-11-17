import { render, screen, fireEvent } from "@testing-library/react";
import { MockAuthApiProvider } from "../../utils/testUtils";
import DeckForm from "./DeckForm";

describe("DeckForm", () => {
  const SUBMIT_TEXT = "Submit";
  const handleChange = jest.fn();
  const values = {
    tags: [
      { id: "1", name: "tag1" },
      { id: "2", name: "tag2" },
    ],
  };

  const props = {
    handleChange,
    submitText: SUBMIT_TEXT,
  };

  it("should call onChange on level select change", () => {
    render(<DeckForm {...props} />, {
      wrapper: MockAuthApiProvider,
    });

    expect(screen.getByText(SUBMIT_TEXT)).toBeInTheDocument();

    fireEvent.mouseDown(screen.getByText("Junior"));
    fireEvent.click(screen.getAllByRole("option")[2]);

    expect(handleChange).toHaveBeenCalled();
  });

  it("should render select tags", () => {
    render(
      <DeckForm
        submitText={SUBMIT_TEXT}
        handleChange={handleChange}
        values={values}
      />,
      {
        wrapper: MockAuthApiProvider,
      }
    );

    const tagOneName = values.tags[0].name;
    const tagTwoName = values.tags[1].name;

    expect(screen.queryByText(tagTwoName)).not.toBeInTheDocument();

    fireEvent.mouseDown(screen.getAllByRole("button")[0]);
    expect(screen.getByText(tagOneName)).toBeInTheDocument();
    expect(screen.getByText(tagTwoName)).toBeInTheDocument();
    fireEvent.click(screen.getAllByRole("option")[0]);

    expect(handleChange).toBeCalledWith(
      expect.objectContaining({
        target: { name: "tags", value: [values.tags[1]] },
      })
    );

    expect(screen.getByText(tagTwoName)).toBeInTheDocument();
  });
});
