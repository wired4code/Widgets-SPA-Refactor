# Widgets Single Page App Demo
The goal of this project was to take a hardcoded multi-page HTML site, refactor it into an SPA and make it hit an API for showing/listing user and widget information. This site was refactored using AngularJS.

# Demo

[widget-spa-refactor-sns.herokuapp.com](http://widget-spa-refactor-sns.herokuapp.com)


## Features
- A user view that displays a list of users (data via api `/users`), each user should have a method of clicking to viewing all the details of that user (`/user/:id`)
- A widget view that displays a list of widgets (`/widgets`), each widget should have a method of clicking to view the details of that widget (`/widget/:id`)
- A search/filter on the user and widget list views
- A method of creating a new widget (POST `/widgets`)
- A method of updating an existing widget (PUT `/widgets/:id`)


# API Documentation
There's an API available at `http://spa.tglrw.com:4000` for retrieving the data used to make this app. The hard-coded data in the existing HTML is only a placeholder for style. The API returns and expects to receive JSON-encoded data.


## The endpoints are as follows:
- GET `/users` [http://spa.tglrw.com:4000/users](http://spa.tglrw.com:4000/users)
- GET `/users/:id` [http://spa.tglrw.com:4000/users/:id](http://spa.tglrw.com:4000/users/:id)
- GET `/widgets` [http://spa.tglrw.com:4000/widgets](http://spa.tglrw.com:4000/widgets)
- GET `/widgets/:id` [http://spa.tglrw.com:4000/widgets/:id](http://spa.tglrw.com:4000/widgets/:id)
- POST `/widgets` for creating new widgets [http://spa.tglrw.com:4000/widgets](http://spa.tglrw.com:4000/widgets)
- PUT `/widgets/:id` for updating existing widgets [http://spa.tglrw.com:4000/widgets/:id](http://spa.tglrw.com:4000/widgets/:id)

