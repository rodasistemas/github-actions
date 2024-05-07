import {render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Tests Home", ()=>{

    it("Home page should have Template", ()=>{
        render(<Home></Home>);
        const templates = screen.getByText("Templates");
        expect(templates).toBeDefined()
    })
    it("Home page should have About Page Link", ()=>{
        render(<Home></Home>);
        const homePageLink = screen.getByRole("link",{name: "About Page"});
        expect(homePageLink).toBeDefined()
        expect(homePageLink.getAttribute("href")).not.toBe("/home")
    });
})