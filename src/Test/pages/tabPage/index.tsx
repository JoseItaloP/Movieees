import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import { mockFetchedData, tabMockPage1, tabMockPage2, tabMockPage3 } from "../../helpers/TestData";
import HelperLocationDisplay from "../../helpers/HelperLocationDisplay";
import { expect, vi } from "vitest";
import { Card } from "../../../types/cardShow";
import userEvent from "@testing-library/user-event";
import elements from "./elements";
import Tab from "../../../routes/Tab";

export default new class TabPage {
    
    async renderMemoryRouter(){
        render(
        
            <MemoryRouter initialEntries={["/tab/TopMoviesofAllTime"]}>
                <Routes>
                    <Route path="/tab/:id" element={<Tab />} />
                </Routes>
                < HelperLocationDisplay />
            </MemoryRouter>
            
        );
        
    }

    beforeach(){
      global.fetch = vi.fn().mockImplementation((url: string) => {
      if(url.includes('&page=1')){
        return Promise.resolve({
          json: () => Promise.resolve(tabMockPage1),
          ok: true,
          status: 200,
        } as Response)
      }
      if(url.includes('&page=2')){
        return Promise.resolve({
          json: () => Promise.resolve(tabMockPage2),
          ok: true,
          status: 200,
        } as Response)
      }
      if(url.includes('&page=3')){
        return Promise.resolve({
          json: () => Promise.resolve(tabMockPage3),
          ok: true,
          status: 200,
        } as Response)
      } else {
        return Promise.resolve({
          json: () => Promise.resolve(mockFetchedData),
          ok: true,
          status: 200,
        } as Response)
      }
  })
    }

    aftereach(){
        cleanup()
        vi.resetAllMocks();
    }

    async verifyTittle(tittle: string){
        const bttnTittle = await screen.findByTestId(tittle)
        expect(bttnTittle).toBeInTheDocument()
    }

    async verifyDataPage(starValue: number, endValue: number){
        const mockedFetch = mockFetchedData.results.slice(starValue, endValue)
        let movie: Card
        for (movie of mockedFetch) {
            const cardItem = await screen.findByTestId(`${movie.id}`)
            expect(cardItem).toHaveAttribute('href', `/Movie/${movie.id}`)
        }
    }

    async clickOnNextBtt(){
        const bttNext = await screen.findByTestId(elements.nextPageBtt)
        await userEvent.click(bttNext)
    }
    
    async clickOnPrevBtt(){
        const bttPrev = await screen.findByTestId(elements.prevPageBtt)
        await userEvent.click(bttPrev)
    }

    async clickOnJump3Btt(){
        const bttJump = await screen.findByTestId(elements.jumpPage3)
        await userEvent.click(bttJump)
    }
}