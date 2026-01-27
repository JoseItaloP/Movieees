import { render, RenderResult, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../../../routes/Home";
import HelperLocationDisplay from "../../helpers/HelperLocationDisplay";
import elements from "./elements";
import { expect } from "vitest";
import userEvent from "@testing-library/user-event";

export default new class HomePage {

  renderHome(): RenderResult {
    return render(
      <MemoryRouter>
        <Home />
        <HelperLocationDisplay />
      </MemoryRouter>
    );
  }

  verifyTopMovies(){
    const movieTittleLink = screen.getByTestId(elements.topMoviesTittle)
    expect(movieTittleLink).toBeInTheDocument()
  }

  async ventClick(){
    await userEvent.click(screen.getByTestId(elements.topMoviesTittle))
  }

  async expectResultUrl(){
      expect(screen.getByTestId(elements.testId))
        .toHaveTextContent(elements.tabUrl);
      expect(screen.getByText(elements.topMoviesTittle)).toBeInTheDocument()
  }
}