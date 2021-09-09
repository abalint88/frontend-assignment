import '@testing-library/jest-dom'
import * as React from 'react'
import { render, screen } from '@testing-library/react'

import List from "../Components/List";

const toDoList = [{
    "complete": true,
    "createdAt": 1631210209979,
    "updatedAt": 1631210234039,
    "id": 53,
    "title": "Dolor sit amet",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti accusamus aspernatur quasi odit sit? Quis consequuntur inventore doloremque? Quae laboriosam neque voluptas nihil maiores expedita molestias, eum placeat eaque deserunt.",
    "priority": 0,
    "project": null
},
{
    "createdAt": 1631219208851,
    "updatedAt": 1631219208851,
    "id": 54,
    "title": "Lorem ipsum",
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita molestiae nesciunt nam impedit iure asperiores laborum explicabo, praesentium animi cum eaque aspernatur voluptates optio facere nostrum laboriosam dignissimos incidunt perspiciatis.",
    "priority": 0,
    "project": null
}];

const errorMessage = {
    title: "No tasks Found!",
    description: "Please add a new task using the form above."
}

const emptyTasks = []

test("List - displays no tasks, when no tasks loaded", () => {
    render(
        <List
            tasks={emptyTasks}
            handleDelete={() => { }}
            handleLoading={() => { }}
            handleEdit={() => { }}
            handleComplete={() => { }}
        />
    );
    expect(screen.queryByText(errorMessage.title)).toBeInTheDocument()
});

test("List - displays 1 complete task, when tasks are loaded", () => {
    render(
        <List
            tasks={toDoList}
            handleDelete={() => { }}
            handleLoading={() => { }}
            handleEdit={() => { }}
            handleComplete={() => { }}
        />
    );
    const btnComplete = screen.queryAllByTitle("Complete");
    expect(btnComplete.length).toEqual(1);
});

test("List - displays 3 Delete and Edit", () => {
    render(
        <List
            tasks={toDoList}
            handleDelete={() => { }}
            handleLoading={() => { }}
            handleEdit={() => { }}
            handleComplete={() => { }}
        />
    );

    const btnEdit = screen.queryAllByTitle("Edit");
    expect(btnEdit.length).toEqual(2);

    const btnDelete = screen.queryAllByTitle("Delete");
    expect(btnDelete.length).toEqual(2);
});


