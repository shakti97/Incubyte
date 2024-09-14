import { render, screen } from "@testing-library/react";
import App from './App';

describe("String Calculator Component", () => {
  it("should render the component", () => {
    render(<App/>);
    expect(screen.getByText("String Calculator")).toBeInTheDocument();
  });

  it("should render input box", () => {
    render(<App/>);
    expect(screen.getByText("String Calculator")).toBeInTheDocument();
  });

  it('renders input field with correct placeholder', () => {
    render(<App />);
    const inputElement = screen.getByTestId("input");
    expect(inputElement).toBeInTheDocument();
  });

  it('renders calculate button', () => {
    render(<App />);
    const buttonElement = screen.getByTestId("calculate");
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders result block', () => {
    render(<App />);
    const resultElement = screen.getByTestId("result");
    expect(resultElement).toBeInTheDocument();
  });
});
