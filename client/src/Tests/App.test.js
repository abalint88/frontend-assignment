import '@testing-library/jest-dom'
import * as React from 'react'
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react'
import userEvent from "@testing-library/user-event";

import { toDoList } from "./MockData/mockData"

import Add from "../Components/Add";
import List from "../Components/List";

// App events are correct

test("App - can Add new task", async () => {
    render(<List tasks={toDoList} />);
    render(<Add />);

    let promise = Promise.resolve();
    let inputTitle = screen.queryByPlaceholderText("Title");
    let inputDesc = screen.queryByPlaceholderText("Description");
    let button = screen.queryByText("Add")

    userEvent.type(inputTitle, "New task title");
    userEvent.type(inputDesc, " New task description");
    fireEvent.keyDown(button, {
        key: "Enter",
        code: 13,
        charCode: 13,
        keyCode: 13,
    });

    await waitFor(() => {
        let btnEdit = screen.queryAllByTitle("Edit");
        expect(btnEdit.length).toEqual(3);

        let btnDelete = screen.queryAllByTitle("Delete");
        expect(btnDelete.length).toEqual(3);
    });
    await act(() => promise);
});

test("App - can Delete task", async () => {
    render(<List tasks={toDoList} />);
    render(<Add />);

    let promise = Promise.resolve();
    let button = screen.queryAllByTitle("Delete")

    fireEvent.keyDown(button[0], {
        key: "Enter",
        code: 13,
        charCode: 13,
        keyCode: 13,
    });

    await waitFor(() => {
        let btnEdit = screen.queryAllByTitle("Edit");
        expect(btnEdit.length).toEqual(2);

        let btnDelete = screen.queryAllByTitle("Delete");
        expect(btnDelete.length).toEqual(2);
    });
    await act(() => promise);
});

test("App - can Complete task", async () => {
    render(<List tasks={toDoList} />);
    render(<Add />);

    let promise = Promise.resolve();
    let button = screen.queryAllByTitle("Complete")

    fireEvent.keyDown(button[0], {
        key: "Enter",
        code: 13,
        charCode: 13,
        keyCode: 13,
    });

    await waitFor(() => {
        let btnEdit = screen.queryAllByTitle("Complete");
        expect(btnEdit.length).toEqual(2);
    });
    await act(() => promise);
});

