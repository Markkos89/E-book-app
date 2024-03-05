# E-book Uploader / Downloader

This project is a technical challenge

## Table of content

- [E-book Uploader / Downloader](#e-book-uploader--downloader)
  - [Table of content](#table-of-content)
    - [Run locally](#run-locally)
    - [Backend service](#backend-service)
    - [Client](#client)

### Run locally

Clone the repository project via `git clone https://github.com/markkos89/e-book-app`, add your environment variables needed and run the dev command for each service.

### Backend service

Runs on http://localhost:4000

Environment variables:

```
NODE_PORT=4000
NODE_MONGO_URI=your_mongodb_uri
NODE_CLOUDINARY_NAME=your_cloudinary_name
NODE_CLOUDINARY_API_KEY=your_cloudinary_apikey
NODE_CLOUDINARY_API_SECRET=your_cloudinary_apisecret
```

Live hosting URL: https://e-book-app.onrender.com

### Client

Runs on http://localhost:3000 by default

Envinronment variables:

```
REACT_APP_BACKEND_URL=http://localhost:4000
```




