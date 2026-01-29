import { render, RenderResult, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../../../routes/Home";
import HelperLocationDisplay from "../../helpers/HelperLocationDisplay";
import elements from "./elements";
import { expect, Mock } from "vitest";
import userEvent from "@testing-library/user-event";
import { Card } from "../../../types/cardShow";

export default new class HomePage {

  renderHome(): RenderResult {
    return render(
      <MemoryRouter>
        <Home />
        <HelperLocationDisplay />
      </MemoryRouter>
    );
  }

  verifyElement(elementPass: string) {
    const ElementOnDoom = screen.getByText(elementPass)
    expect(ElementOnDoom).toBeInTheDocument()
  }

  verifyTittleAndSubTittle() {

    const TittleInPage = screen.getByText("Welcome to Movieees")
    const subTittleInPage = screen.getByText("A web site to search for today's best and most popular Movies and TV series.")

    expect(TittleInPage).toBeInTheDocument()
    expect(subTittleInPage).toBeInTheDocument()
  }

  async EventClick(elementClick: string) {
    await userEvent.click(screen.getByTestId(elementClick))
  }

  async expectResultUrl(){
      expect(screen.getByTestId(elements.testId))
      .toHaveTextContent("/Tab/TopMoviesofAllTime?page=1");
    expect(screen.getByText("Top Movies of All Time")).toBeInTheDocument()
  }

  verifyElementOnSlide(elementId: number) {
    const elementSlide = screen.findAllByTestId(elementId)
    expect(elementSlide).toBeTruthy()
  }

  async clickOnNextBtt() {
    const nextButton = document.querySelector(elements.nextBtt)
    if (nextButton) {
      await userEvent.click(nextButton)
    }
  }

  async clickOnPrevBtt() {
    const prevButton = document.querySelector(elements.prevBtt)
    if (prevButton) {
      await userEvent.click(prevButton)
    }
  }

  async verifyEachElementSlide(mockedResult: Card[]) {
    const firstTen = mockedResult.slice(0, 10)
    await waitFor(() => {

      firstTen.forEach((element) => {
        expect(screen.findAllByTestId(Number(element.id))).toBeTruthy()
      })

    }, { timeout: 3000 })

  }

  async verifyAllElementsOnSlide(mockedResult: Card[]) {

    const firstTen = mockedResult.slice(0, 10)
    const arrayElements: HTMLElement[] = []

    await waitFor(() => {
      firstTen.forEach((element) => {

        const elementFind = screen.getAllByTestId(element.id)[0]
        expect(elementFind).toBeInTheDocument()

        if (elementFind) {
          arrayElements.push(elementFind)
        }

      })

    }, { timeout: 3000 })

    expect(arrayElements).toHaveLength(10)
  }

  async verifySliceNext(mockSlice: Mock) {
    await waitFor(() => {
      this.clickOnNextBtt()
      expect(mockSlice).toHaveBeenCalled()
    })
  }

  async verifySlicePrev(mockSlice: Mock) {
    await waitFor(() => {
      this.clickOnPrevBtt()
      expect(mockSlice).toHaveBeenCalled()
    }) 
  }
}