import { afterEach, beforeEach, describe, test } from "vitest";
import SingleMTpage from "./pages/SingleMTpage";
import { MovieMockData } from "./helpers/TestData";
import { waitFor } from "@testing-library/react";

describe.only("Single Movie page test", ()=>{
    beforeEach(()=>{
        SingleMTpage.beforeeach()
    })

    afterEach(()=>{
        SingleMTpage.aftereach()
    })

    test.only("Should load correctly all the data in the screen", async ()=>{
        const data = MovieMockData[0]
        await waitFor(()=>{
            SingleMTpage.renderMemoryRouter()
        })

        SingleMTpage.verifytitle(data.title)

        SingleMTpage.verifyOrinalTittleAndTag(data.original_title, data.tagline)
        SingleMTpage.verifyFrom(data.origin_country[0], data.original_language, "1", "From" )
        SingleMTpage.verifyRdata(data.release_date, "2", "Release Date")
        SingleMTpage.verifyPopularity(data.popularity, "4", "Popularity")
        SingleMTpage.verifyBudget(data.budget, "3", "Budget")
        SingleMTpage.verifyRevennue(data.revenue, "3", "Revenue")
        SingleMTpage.verifyRuntime(data.runtime, "4", "Runtime")
        SingleMTpage.verifyOverview(data.overview, "4", "Overview", true)
    })

})