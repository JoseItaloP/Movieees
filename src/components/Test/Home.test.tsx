import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, afterEach, vi } from "vitest";
import { userEvent } from "@testing-library/user-event"
import { MemoryRouter } from "react-router-dom";
import Home from "../../routes/Home";
import HelperLocationDisplay from "./HelperLocationDisplay"
import "@testing-library/jest-dom/vitest";
import Header from "../HeaderComponets/Header";



describe("Home Link Test's", () => {

  afterEach(() => {
    cleanup()
    vi.resetAllMocks()
  })

  it("should change the url in click from 'Most Popular Movies'", async () => {

    render(
      <MemoryRouter>
        <Home />
        <HelperLocationDisplay />
      </MemoryRouter>
    )

    const movieTittleLink = screen.getByTestId("Top Movies of All Time")

    expect(movieTittleLink).toBeInTheDocument()

    expect(screen.getByTestId("location-display")).toHaveTextContent("/")

    await userEvent.click(movieTittleLink)

    await waitFor(() => {

      expect(screen.getByTestId("location-display"))
        .toHaveTextContent('/Tab/TopMoviesofAllTime?page=1');
      expect(screen.getByText("Top Movies of All Time")).toBeInTheDocument()
    })


  });

  it("should search for batman", async () => {
    render(
      <MemoryRouter>
        <Header />
        <HelperLocationDisplay />
      </MemoryRouter>
    )

    // const searchElement = screen.getByRole('textbox', { name: 'search' })
    const searchElement = screen.getByPlaceholderText(/Search by the/i)
    expect(searchElement).toBeInTheDocument()

    await userEvent.type(searchElement, 'batman')
    await userEvent.click(screen.getByTestId("BtnSearch"))
    await waitFor(() => {
      expect(screen.getByTestId("location-display"))
        .toHaveTextContent("/search?q=batman&t=Movie&page=1")
    })
  })
});
