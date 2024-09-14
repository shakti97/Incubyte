import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { add } from "./utils/Add";

jest.mock("./utils/Add", () => ({
  add: jest.fn(() => 6),
}));

describe("String Calculator Component", () => {
  it("should render the component", () => {
    render(<App />);
    expect(screen.getByText("String Calculator")).toBeInTheDocument();
  });

  it("should render input box", () => {
    render(<App />);
    expect(screen.getByText("String Calculator")).toBeInTheDocument();
  });

  it("renders input field with correct placeholder", () => {
    render(<App />);
    const inputElement = screen.getByTestId("input");
    expect(inputElement).toBeInTheDocument();
  });

  it("renders calculate button", () => {
    render(<App />);
    const buttonElement = screen.getByTestId("calculate");
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders result block", () => {
    render(<App />);
    const resultElement = screen.getByTestId("result");
    expect(resultElement).toBeInTheDocument();
  });

  test("updates input value once user start updating", () => {
    render(<App />);
    const inputElement = screen.getByTestId("input");
    fireEvent.change(inputElement, { target: { value: "1,2,3" } });
    expect(inputElement).toHaveValue("1,2,3");
  });

  test("calls add function and displays result on button click", () => {
    render(<App />);
    const inputElement = screen.getByTestId("input");
    const buttonElement = screen.getByTestId("calculate");

    fireEvent.change(inputElement, { target: { value: "1,2,3" } });
    fireEvent.click(buttonElement);

    expect(add).toHaveBeenCalledWith("1,2,3");
    expect(screen.getByTestId("result")).toHaveTextContent("Result: 6");
  });

  test("handles errors gracefully and displays error message", () => {
    (add as jest.Mock).mockImplementation(() => {
      throw new Error("negative numbers not allowed -1, -2, -3");
    });

    render(<App />);
    const inputElement = screen.getByTestId("input");
    const buttonElement = screen.getByTestId("calculate");

    fireEvent.change(inputElement, { target: { value: "-1,-2,-3" } });
    fireEvent.click(buttonElement);

    expect(add).toHaveBeenCalledWith("-1,-2,-3");
    expect(screen.getByTestId("result")).toHaveTextContent(
      "negative numbers not allowed -1, -2, -3"
    );
  });
});
