# REST-rant project

REST-Rant is an app where users can review restaurants.

`This activity is a fully RESTful restaurant reviewer app called REST-Rant. This app will have a real database powering the information behind it, and will be able to add, update, and delete (CRUD) restaurants as well as add and delete comments and reviews.`

### Running tests

To run tests run this command: `npm run test`

### Routes table

| Method | Path                             | Purpose                                   |
| ------ | -------------------------------- | ----------------------------------------- |
| GET    | `/*`                             | 404 page wildcard/catch-all               |
| GET    | `/`                              | Places home page                          |
| GET    | `/places`                        | Get all places                            |
| POST   | `/places`                        | Create new place                          |
| GET    | `/places/new`                    | Creating a new place form                 |
| GET    | `/places:id`                     | Get details about a particular place      |
| PUT    | `/places:id`                     | Update a particular place                 |
| GET    | `/places/:id/edit`               | Update a particular place                 |
| DELETE | `/places/:id`                    | Delete a particular place                 |
| POST   | `/places/:id/comment`            | Create comment about a particular place   |
| DELETE | `/places/:id/comment/:commentId` | Delete a comment about a particular place |

### Data structure

| Field Name | Data Type      |
| ---------- | -------------- |
| name       | string         |
| city       | string         |
| state      | string         |
| cuisines   | string         |
| pic        | string (a URL) |
| founded    | number         |
