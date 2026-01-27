import { render, screen, waitFor } from "@testing-library/react";
import MovieTvBar from "../components/Homi/MovieTvBar";
import { describe, it, expect, vi, afterEach, beforeEach } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { mockFetchedData, urlTopedMovies, } from "./helpers/TestData";
import "@testing-library/jest-dom/vitest";
import { Card } from "../types/cardShow";
import userEvent from "@testing-library/user-event";
import HelperLocationDisplay from "./helpers/HelperLocationDisplay";



describe("MoivieTvBar - Doom Test", () => {

  beforeEach(() => {
    global.fetch = vi.fn(() =>

      Promise.resolve({
        json: () => Promise.resolve(mockFetchedData),
        ok: true,
        status: 200,
      } as Response)
    );
  });


  afterEach(() => {
    vi.resetAllMocks();
  });

  it.only("RENDER DOM - Titulo Top Movies: Test and Fetch", async () => {

    render(
      <MemoryRouter>
        <MovieTvBar
          UrlLink={urlTopedMovies}
          toPage="/Tab/TopMoviesofAllTime?page=1"
          Tittle="Top Movies of All Time"
          typeOf="movie"
        />
        <HelperLocationDisplay />
      </MemoryRouter>
    );


    await waitFor(async () => {
      expect(global.fetch).toHaveBeenCalledWith(urlTopedMovies);
    });

    const bttnTittle = screen.getByTestId("Top Movies of All Time")
    expect(bttnTittle).toBeInTheDocument()

    const mockedFetch = mockFetchedData.results.slice(0, 9)
    let movie: Card
    for (movie of mockedFetch) {

      const cardItem = screen.getByTestId(`${movie.id}`)
      expect(cardItem).toHaveAttribute('href', `/movie/${movie.id}`)

      await waitFor(() => {
        userEvent.click(cardItem)
      })


      await waitFor(() => {
        expect(screen.getByTestId("location-display"))
            .toHaveTextContent(`/movie/${movie.id}`)
      })

    }
  });
});
