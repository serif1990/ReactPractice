import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./Header";

describe("Header component", () => {
  test("renders logo image with correct alt text", () => {
    const { getByAltText } = render(
      <Router>
        <Header />
      </Router>
    );

    const logoImage = getByAltText("Logo");
    expect(logoImage).toBeInTheDocument();
    expect(logoImage.getAttribute("src")).toBe("/images/favicon.ico.png");
  });

  test("renders correct navigation links", () => {
    const { getByText } = render(
      <Router>
        <Header />
      </Router>
    );

    // const shopAllLink = getByText("Shop All");
    //expect(shopAllLink.getAttribute("href")).toBe("/products");

    //const heroProductsLinks = getByText("Hero Products");
    //expect(heroProductsLinks).toBeInTheDocument();
  });
});
