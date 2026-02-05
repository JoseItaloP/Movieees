import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import HelperLocationDisplay from "../../helpers/HelperLocationDisplay";
import SingleMovie from "../../../routes/SingleMovie";
import { expect, vi } from "vitest";
import { MovieMockData } from "../../helpers/TestData";
import elements from "./elements";

export default new class SinglePage {

    async renderMemoryRouter() {
        render(
            <MemoryRouter>
                <Routes>
                    <Route path="movie/:id" element={<SingleMovie />} />
                </Routes>
                < HelperLocationDisplay />
            </MemoryRouter>

        );
    }

    beforeeach() {
        global.fetch = vi.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(MovieMockData[0]),
                ok: true,
                status: 200,
            } as Response)
        );
    }

    aftereach() {
        cleanup()
        vi.resetAllMocks();
    }

    async verifytitle(tittle: string) {
        const tittlePage = await screen.findByTestId(`#${tittle}_movie`)
        expect(tittlePage).toHaveTextContent(tittle)
    }

    async verifyOrinalTittleAndTag(Otittle: string, Tag: string) {
        const OrinalT = await screen.findByTestId(Otittle)
        const TagName = await screen.findByTestId(Tag)

        expect(OrinalT).toHaveTextContent(Otittle)
        expect(TagName).toHaveTextContent(`"${Tag}"`)
    }

    async verifyFrom(originCountry: string, originLang: string, type: string, name: string) {
        const originCountryP = await screen.findByTestId(elements.returnDataTest(type, name))
        const originCountrySpan = await screen.findByTestId(elements.returnDataTestSpan(type, name))

        expect(originCountryP).toHaveTextContent(`${originCountry} | ${originLang}`)
        expect(originCountrySpan).toHaveTextContent(name)
    }

    async verifyRdata(releseD: string, type: string, name: string) {
        const originCountryP = await screen.findByTestId(elements.returnDataTest(type, name))
        const originCountrySpan = await screen.findByTestId(elements.returnDataTestSpan(type, name))

        expect(originCountryP).toHaveTextContent(`${elements.releseDataReturn(releseD)}`)
        expect(originCountrySpan).toHaveTextContent(name)
    }

    async verifyBudget(budGet: number, type: string, name: string) {
        const originCountryP = await screen.findByTestId(elements.returnDataTest(type, name))
        const originCountrySpan = await screen.findByTestId(elements.returnDataTestSpan(type, name))

        expect(originCountryP).toHaveTextContent(`${elements.budgetReturn(budGet)}`)
        expect(originCountrySpan).toHaveTextContent(name)
    }

    async verifyRevennue(Revennue: number, type: string, name: string) {
        const originCountryP = await screen.findByTestId(elements.returnDataTest(type, name))
        const originCountrySpan = await screen.findByTestId(elements.returnDataTestSpan(type, name))

        expect(originCountryP).toHaveTextContent(`${elements.budgetReturn(Revennue)}`)
        expect(originCountrySpan).toHaveTextContent(name)
    }

    async verifyPopularity(popularity: number, type: string, name: string) {
        const originCountryP = await screen.findByTestId(elements.returnDataTest(type, name))
        const originCountrySpan = await screen.findByTestId(elements.returnDataTestSpan(type, name))

        expect(originCountryP).toHaveTextContent(`${popularity}`)
        expect(originCountrySpan).toHaveTextContent(name)
    }

    async verifyRuntime(runtime: number, type: string, name: string) {
        const originCountryP = await screen.findByTestId(elements.returnDataTest(type, name))
        const originCountrySpan = await screen.findByTestId(elements.returnDataTestSpan(type, name))

        expect(originCountryP).toHaveTextContent(`${runtime} minutes`)
        expect(originCountrySpan).toHaveTextContent(name)
    }

    async verifyOverview(Overview: string, type: string, name: string, br: boolean) {
        const originCountryP = await screen.findByTestId(elements.returnDataTest(type, name, br))
        const originCountrySpan = await screen.findByTestId(elements.returnDataTestSpan(type, name, br))

        expect(originCountryP).toHaveTextContent(`${Overview}`)
        expect(originCountrySpan).toHaveTextContent(name)
    }
}