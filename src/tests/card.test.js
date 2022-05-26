import { screen, render } from "@testing-library/react";
import LoginPage from "../Components/LoginPage";

test("test-1", () => {
  render(<LoginPage />);
  const inp1 = screen.getByTestId("gn1").textContent;
  expect(inp1).toBe("LOGIN PAGE");
});
