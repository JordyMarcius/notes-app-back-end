# notes-app-back-end

The main purpose of this project is to build a back-end to create, read, update, and delete data in notes application.

<h2>Technologies</h2>

- **JavaScrtipt** as a main programming language to build this project.
- **Node.Js** as a JavaScript runtime to execute code outside of browser.
- **Hapi.Js** as a framework to develop web server.

<h2>How to Run</h2>

To run the web-server
```
npm run start
```

The web server will running in:
- Host: localhost
- Port: 5000

<h2>API Endpoints and Request Methods</h2>

| Method   | URL                                      | Description                              |
| -------- | ---------------------------------------- | ---------------------------------------- |
| `POST`   | `/notes`                                 | Create and add a new note.               |
| `GET`    | `/notes`                                 | Get and read all notes.                  |
| `GET`    | `/notes/{id}`                            | Get and read note by ID.                 |
| `PUT`    | `/notes/{id}`                            | Edit or update note by ID.               |
| `DELETE` | `/notes/{id}`                            | Delete note by ID.                       |
