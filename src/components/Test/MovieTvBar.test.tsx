import { render, screen, waitFor } from "@testing-library/react";
import MovieTvBar from "../Homi/MovieTvBar";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { MemoryRouter } from "react-router-dom";
// import userEvent from "@testing-library/user-event";
import { urlTopedMovies, mockFetchedData } from "./TestData";
import HelperLocationDisplay from "./HelperLocationDisplay"
import "@testing-library/jest-dom/vitest";
import userEvent from "@testing-library/user-event";
import { Card } from "../../types/cardShow";


describe("MoivieTvBar - Doom Test", () => {
  beforeEach(() => {
    global.fetch = vi.fn(() =>
      //os dados do Promise abaixo servem de resposta para a chamada falsa
      Promise.resolve({
        json: () => Promise.resolve(mockFetchedData),
        ok: true,
        status: 200,
      } as Response)
    );
  });

  //restaura o Mock depois de cada it
  afterEach(() => {
    vi.resetAllMocks();
  });

  it("RENDER DOM - Titulo Top Movies: Test and Fetch", async () => {
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

    expect(screen.getByTestId("Top Movies of All Time")).toBeInTheDocument();

    await waitFor(async () => {
      expect(global.fetch).toHaveBeenCalledWith(urlTopedMovies);
    });

    const topTenMovies = mockFetchedData.results.slice(0, 10);
    let movie: Card;
    for (movie of topTenMovies) {
      await waitFor(async () => {
        const movieLink = screen.getByTestId(movie.id);
        expect(movieLink).toBeInTheDocument();
        expect(movieLink).toHaveAttribute(
          "href",
          expect.stringContaining(`/movie/${movie.id}`)
        );

        await userEvent.click(movieLink)
        await waitFor(() => {
          expect(screen.getByTestId("location-display"))
            .toHaveTextContent(`/movie/${movie.id}`)
        })
      });
    }
  });
});

// describe("MovieTvBar - Click Items", () => {

//   beforeEach(() => {
//     global.fetch = vi.fn(() =>
//       //os dados do Promise abaixo servem de resposta para a chamada falsa
//       Promise.resolve({
//         json: () => Promise.resolve(mockFetchedData),
//         ok: true,
//         status: 200,
//       } as Response)
//     );
//   });

//   //restaura o Mock depois de cada it
//   afterEach(() => {
//     vi.resetAllMocks();
//   });

//   it("shoud change url page after click in movie/tvShow", async () => {
//     render(
//       <MemoryRouter>
//         <MovieTvBar
//           UrlLink={urlTopedMovies}
//           toPage="/Tab/TopMoviesofAllTime?page=1"
//           Tittle="Top Movies of All Time"
//           typeOf="movie" />
//         <HelperLocationDisplay />
//       </MemoryRouter>
//     )
//     await waitFor(async () => {
//       expect(global.fetch).toHaveBeenCalledWith(urlTopedMovies)
//     })
//     const ClickLink = mockFetchedData.results[0].id
//     console.log("Log - ", ClickLink)
//     expect(screen.getByTestId(ClickLink)).toBeInTheDocument();
//   })
// });
