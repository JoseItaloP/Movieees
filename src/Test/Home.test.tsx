import { waitFor } from "@testing-library/react";
import { describe, it, afterEach, beforeEach } from "vitest";
// import { userEvent } from "@testing-library/user-event"
// import { MemoryRouter } from "react-router-dom";
// import Home from "../routes/Home";
// import HelperLocationDisplay from "./helpers/HelperLocationDisplay"
import "@testing-library/jest-dom/vitest";
// import Header from "../components/HeaderComponets/Header";

import home from "./pages/home";
import { mockFetchedData } from "./helpers/TestData";





describe("Teting Home page", () => {

  const { onSlicenext, onSlicePrev } = home.sliceBtt()

  //mock data fetched
  //mock url links

  home.swiperMock()

  beforeEach(() => {
    home.beforeach()
  });


  afterEach(() => {
    home.aftereach()
  });



  it("should change the url in click from 'Most Popular Movies'", async () => {

    home.renderHome()

    home.verifyElement("Top Movies of All Time")

    await home.EventClick("Top Movies of All Time")

    await waitFor(() => {
      home.expectResultUrl()
    })
  });

  it("should render all the elements in home page", () => {

    home.renderHome()

    home.verifyElement("Top Movies of All Time")
    home.verifyElement("Top Popular Movies")
    home.verifyElement("Top Now Playing Movies")
    home.verifyElement("Top TV Series of All Time")
    home.verifyElement("Top Popular TV Series")
    home.verifyElement("Top Now Playing TV Series")

  })

  it("should load all the slide on home page", async () => {
    home.renderHome()

    await home.verifyEachElementSlide(mockFetchedData.results)

  })

  it("should load correctly all the data in the swiper", async () => {

    home.renderHome()

    home.verifyAllElementsOnSlide(mockFetchedData.results)

  })

  it("should work correctly the '>' button", async () => {

    home.renderHome()

    home.verifySliceNext(onSlicenext)

  })

  it("Should work correctly the '<' button", async () => {
    home.renderHome()

    home.verifySlicePrev(onSlicePrev)
  })


});
