import { render, screen } from "@testing-library/react"
import * as React from "react"
import App from "../../App"

describe("App tests", () => {
  it("should contains the heading 1", () => {
    render(<App />)
    const heading = screen.getByText(/Welcome back, Alex/i)
    expect(heading).toBeInTheDocument()
  })
})
