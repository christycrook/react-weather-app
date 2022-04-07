import React from "react";
import { screen, render } from "@testing-library/react";
import App from "./App";

test("renders week cards", () => {
    render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
    );
    screen.getByText("Check Weather");
});

test("renders hourly cards", () => {
    render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
    );
    screen.getByText("See More");
});

