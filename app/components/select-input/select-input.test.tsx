import { render, screen } from "@testing-library/react";
import SelectInput from "./select-input";

describe("SelectInput", () => {
  it("should render correctly", () => {
    render(
      <SelectInput
        value=""
        setter={jest.fn()}
        options={[
          { id: "test", name: "test" },
          { id: "test1", name: "teste1" },
        ]}
      />
    );

    expect(screen.getByText("test")).toBeInTheDocument();
  });

  it("should not render input", () => {
    render(<SelectInput value="" setter={jest.fn()} options={[]} />);

    expect(screen.queryByText("test")).not.toBeInTheDocument();
  });
});
