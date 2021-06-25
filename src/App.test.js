import { render, screen } from "@testing-library/react";
import MainAppContainer from "./App";

test("renders learn react link", () => {
	render(<MainAppContainer />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
