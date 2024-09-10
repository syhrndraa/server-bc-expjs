
# API's Spec

Client page

```bash
  https://github.com/syhrndraa/client-bc-reactjs
```

Landing page

```bash
  https://github.com/syhrndraa/landing-bc-nextjs
```





|   Name     | HTTP   | Routes                | Description | Middleware Auth |
| :--------  |:-------| :--------------------- | :--------- | :-------------- |
| Categories | POST   | /api/v1/cms/categories | create category | YES |
|            | GET    | /api/v1/cms/categories | get all categories | YES |
|            | GET    | /api/v1/cms/categories/:id | get category by id | YES |
|            | PUT    | /api/v1/cms/categories/:id | update category | YES |
|            | DELETE | /api/v1/cms/categories/:id | delete category | YES |
| Talents    | POST   | /api/v1/cms/talents     | create talent | YES |
|            | GET    | /api/v1/cms/talents     | get all talents | YES |
|            | GET    | /api/v1/cms/talents/:id | get talent by id | YES |
|            | PUT    | /api/v1/cms/talents/:id | update talent | YES |
|            | DELETE | /api/v1/cms/talents/:id | delete talent | YES |
| Images     | POST   | /api/v1/cms/images      | upload image | YES |
| Events     | POST   | /api/v1/cms/events      | create event | YES |
|            | GET    | /api/v1/cms/events      | get all events | YES |
|            | GET    | /api/v1/cms/events/:id  | get event by id | YES |
|            | PUT    | /api/v1/cms/events/:id  | update event  | YES |
|            | DELETE | /api/v1/cms/events/:id  | delete event | YES |
|            | PUT    | /api/v1/cms/events/:id/status | change status event |YES|
|            | GET    | /api/v1/cms/eventsbyowner | get all events (owner)| YES |
| Payments   | POST   | /api/v1/cms/payments    | create payment | YES |
|            | GET    | /api/v1/cms/payments    | get all payments | YES |
|            | GET    | /api/v1/cms/payments/:id| get payment by id | YES |
|            | PUT    | /api/v1/cms/payments/:id| update payment | YES |
|            | DELETE | /api/v1/cms/payments/:id| delete payment | YES |
| Users      | POST   | /api/v1/cms/organizers  | create organizer by owner |YES|
|            | POST   | /api/v1/cms/admins      | create admin by organizer |YES|
|            | GET    | /api/v1/cms/users       | get all users | YES |
|            | GET    | /api/v1/cms/users/:id   | get one user by id| YES |
|            | GET    | /api/v1/cms/admins      | get all admins | YES |
|            | PUT    | /api/v1/cms/users/:id   | update users | YES |
|            | DELETE | /api/v1/cms/users/:id   | delete users | YES |
| Auth       | GET    | /api/v1/cms/refresh-token/:refreshToken/:email | get user refresh token | YES |
|            | GET    | /api/v1/participant-refresh-token/:refreshToken/:email | get participant refresh token | YES |
|            | POST   | /api/v1/cms/auth/signin | user signin | NO |
|            | POST   | /api/v1/auth/signin | participant signin | NO |
|            | POST   | /api/v1/auth/signup | participant signup | NO |
| Participants | PUT  | /api/v1/active      | participant email activation | NO |
|              | GET  | /api/v1/events      | get all events | NO |
|              | GET  | /api/v1/events/:id  | get one event by id | NO |
|              | GET  | /api/v1/payments/:organizer | get payment method | NO |
|              | GET  | /api/v1/orders      | get all of order histories | YES |
|              | POST | /api/v1/checkout    | checkout event | YES |





## Run Locally

Clone the project

```bash
  git clone https://github.com/syhrndraa/server-bc-expjs
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

