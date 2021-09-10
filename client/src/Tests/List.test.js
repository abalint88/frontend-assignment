import '@testing-library/jest-dom'
import * as React from 'react'
import { render, screen } from '@testing-library/react'

import { toDoList, errorResponse, errorMessage, errorNetwork, emptyTasks } from "./MockData/mockData"

import List from "../Components/List";

// List rendering is correct

test("List - displays no tasks, when no tasks loaded", () => {
    render(<List tasks={emptyTasks} />);
    expect(screen.queryByText(errorMessage.title)).toBeInTheDocument()
});

test("List - displays no connection, when server is not running", () => {
    render(<List handleError={errorResponse} />);
    expect(screen.queryByText(errorNetwork.title)).toBeInTheDocument()
});

test("List - displays 1 complete task, when tasks are loaded", () => {
    render(<List tasks={toDoList} />);
    let btnComplete = screen.queryAllByTitle("Complete");
    expect(btnComplete.length).toEqual(1);
});

test("List - displays 3 Delete and Edit", () => {
    render(<List tasks={toDoList} />);

    let btnEdit = screen.queryAllByTitle("Edit");
    expect(btnEdit.length).toEqual(2);

    let btnDelete = screen.queryAllByTitle("Delete");
    expect(btnDelete.length).toEqual(2);
});
