import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi, afterEach, } from "vitest";

import Searching from "../../HeaderComponets/Searching";
import "@testing-library/jest-dom/vitest";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { mockFetchedData } from "../helpers/TestData";
import Search from "../../../routes/Search";
import HelperLocationDisplay from "../helpers/HelperLocationDisplay";
import { linksUrl } from "../../../types/urlFetchs";


describe("Search Test", () => {

      const { key, searchMovie } = linksUrl;
    
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

    afterEach(() => {
        vi.resetAllMocks();
    });


    it("should change the PlaceHolder to TV", async () => {
        render(
            <MemoryRouter>

                <Searching />
            </MemoryRouter>
        )
        const selectElement = screen.getByDisplayValue('Movie');
        const DisplayValue = screen.getByPlaceholderText(/Search by the/i)
        expect(selectElement.tagName).toBe('SELECT')
        expect(DisplayValue.getAttribute('placeholder')).toBe('Search by the Movie')

        await userEvent.selectOptions(selectElement, 'TV');
        expect(selectElement).toHaveValue('TV');
        expect(DisplayValue.getAttribute('placeholder')).toBe('Search by the TV')

    })

    it("should jump to next page in the search params", async() => {


        render(
            <MemoryRouter initialEntries={["/search?q=batman&t=Movie&page=1"]}>
                <Search />
                <HelperLocationDisplay/>
            </MemoryRouter>
        )
        await waitFor(()=>{
            expect(global.fetch).toHaveBeenCalledWith(`${searchMovie}?${key}&query=batman&page=1`)
        })
        expect(screen.getByTestId('location-display')).toHaveTextContent("/search?q=batman&t=Movie&page=1")
        const ValueTwoPage = screen.getByTestId("Page 2")
        expect(ValueTwoPage).toBeInTheDocument()
        await userEvent.click(ValueTwoPage)
        expect(screen.getByTestId('location-display')).toHaveTextContent("/search?q=batman&t=Movie&page=2")

    })
})