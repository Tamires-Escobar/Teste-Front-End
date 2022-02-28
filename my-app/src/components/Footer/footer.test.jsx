// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Footer } from "./index";

describe("Should render component Footer", () => {
  it("Should render", () => {
    render(<Footer />);
    
  });
});