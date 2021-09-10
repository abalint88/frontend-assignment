export const toDoList = [{
    "complete": true,
    "createdAt": 1631210209979,
    "updatedAt": 1631210234039,
    "id": 53,
    "title": "First title",
    "description": "First description.",
    "priority": 0,
    "project": null
},
{
    "createdAt": 1631219208851,
    "updatedAt": 1631219208851,
    "id": 54,
    "title": "Second title",
    "description": "Second description.",
    "priority": 0,
    "project": null
}];

export const editedTask = {
    "complete": true,
    "createdAt": 1631210209979,
    "updatedAt": 1631210234039,
    "id": 53,
    "title": "Edited title",
    "description": "Edited description",
    "priority": 0,
    "project": null
};

export const errorMessage = {
    title: "No tasks Found!",
    description: "Please add a new task using the form above."
}

export const errorNetwork = {
    "title": "Can't connect to server",
    "description": "It seems, that the server is not running on the expected port. http://localhost:1337/tasks"
}

export const emptyTasks = []

export const errorResponse = {
    "message": "Network Error",
    "name": "Error",
    "stack": "Error: Network Error\n    at createError (http://localhost:3000/static/js/vendors~main.chunk.js:936:15)\n    at XMLHttpRequest.handleError (http://localhost:3000/static/js/vendors~main.chunk.js:383:14)",
    "config": {
        "url": "http://localhost:1337/tasks",
        "method": "get",
        "headers": {
            "Accept": "application/json, text/plain, */*"
        },
        "transformRequest": [null],
        "transformResponse": [null],
        "timeout": 0,
        "xsrfCookieName": "XSRF-TOKEN",
        "xsrfHeaderName": "X-XSRF-TOKEN",
        "maxContentLength": -1, "maxBodyLength": -1,
        "transitional": {
            "silentJSONParsing": true,
            "forcedJSONParsing": true,
            "clarifyTimeoutError": false
        }
    }
}
