---
title: APK Tracker
image: apk-desktop.png
featured: true
sort: 98
url: https://apk.axel.froborg.com
github: https://github.com/afroborg/apk-front
---

## Track the best alcohol per swedish krona at [Systembolaget](https://systembolaget.se).

### Features

- Search for products
- Filter by product type
- Pagination

### Tech

The project is split up into two parts; a frontend and a backend.

#### [Frontend](https://github.com/afroborg/apk-front)

- [React](https://reactjs.org/)
- [Next.JS](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Docker](https://www.docker.com/)

#### [Backend](https://github.com/afroborg/apk-rear)

- [Go](https://golang.org/)
- [Gorilla Mux](https://github.com/gorilla/mux)
- [Postgres](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)

<br/>

The backend runs CRON jobs that fetches data from Systembolaget and populate a Postgres database. The frontend then fetches data from the backend and displays it.
