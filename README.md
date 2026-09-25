# Simple Docker Web App

A simple Node.js application running in Docker.

## Build

Build the Docker image:

```bash
docker build -t simple-web-app .
```

## Run

Run the container:

```bash
docker run --rm -p 8080:3000 -e APP_MESSAGE="Hello!" simple-web-app
```

Open in browser:

http://localhost:8080

The application uses port `3000` inside the container and the `APP_MESSAGE` environment variable.