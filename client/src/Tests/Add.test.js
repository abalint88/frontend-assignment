import '@testing-library/jest-dom'
import * as React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from "@testing-library/user-event";

import { editedTask } from "./MockData/mockData"

import Add from "../Components/Add";

test("List - initially displays empty input fields", () => {
    render(<Add />);

    let inputTitle = screen.queryByPlaceholderText("Title");
    let inputDesc = screen.queryByPlaceholderText("Description");

    expect(inputTitle.defaultValue).toBe("");
    expect(inputDesc.defaultValue).toBe("");
});

test("List - initially displays add button with Add text", () => {
    render(<Add />);
    expect(screen.queryByText("Add")).toBeInTheDocument()
});

test("List - initially displays add button with Modify text", () => {
    render(<Add edited={editedTask} />);
    expect(screen.queryByText("Modify")).toBeInTheDocument()
});

test("List - displays values of edited task", () => {
    render(<Add edited={editedTask} />);

    let inputTitle = screen.queryByPlaceholderText("Title");
    let inputDesc = screen.queryByPlaceholderText("Description");

    expect(inputTitle.defaultValue).toBe(editedTask.title);
    expect(inputDesc.defaultValue).toBe(editedTask.description);
});

test("List - can modify input fields", () => {
    render(<Add edited={editedTask} />);

    let inputTitle = screen.queryByPlaceholderText("Title");
    let inputDesc = screen.queryByPlaceholderText("Description");

    userEvent.type(inputTitle, " with some extra");
    expect(inputTitle.value).toBe(`${editedTask.title} with some extra`);

    userEvent.type(inputDesc, " with some extra");
    expect(inputDesc.value).toBe(`${editedTask.description} with some extra`);
});
