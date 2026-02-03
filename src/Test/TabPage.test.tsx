import { describe, it, afterEach, beforeEach } from "vitest";
import "@testing-library/jest-dom/vitest";
import tabPage from "./pages/tabPage"



describe("MoivieTvBar - Doom Test", () => {

  beforeEach(() => {
    tabPage.beforeach()
  });


  afterEach(() => {
    tabPage.aftereach()
  });

  it("RENDER DOM - Tittle Top Movies and data verify", async () => {

    await tabPage.renderMemoryRouter()
    
    await tabPage.verifyTittle("Top Movies of All Time")

    tabPage.verifyDataPage(0, 20)

  });

  it("Should pass the page number after click on '>'", async ()=>{
    await tabPage.renderMemoryRouter()
  
    await tabPage.verifyTittle("Top Movies of All Time")

    await tabPage.clickOnNextBtt()

    tabPage.verifyDataPage(21,40)

  })

  it("Should pass the page number after click on '>' them go back click in '<'", async ()=>{
    await tabPage.renderMemoryRouter()
  
    await tabPage.verifyTittle("Top Movies of All Time")

    await tabPage.clickOnNextBtt()

    tabPage.verifyDataPage(21,40)

    await tabPage.clickOnPrevBtt()

    tabPage.verifyDataPage(0,20)

  })

  it("Should jump to page 3 after click on '3'", async ()=>{
    await tabPage.renderMemoryRouter()
  
    await tabPage.verifyTittle("Top Movies of All Time")

    await tabPage.clickOnJump3Btt()

    tabPage.verifyDataPage(41,60)
  })
});
