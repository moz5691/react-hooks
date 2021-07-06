# Usage

## Dev environment

$ docker-compose up -d --build

$ docker-compose stop

## Prod environment

$ docker build -f Dockerfile.prod -t react:prod .d
$ docker run -it --rm -p 1337:80 react:prod

$ docker-compose -f docker-compose.prod.yml up -d --build


reference

https://mherman.org/blog/dockerizing-a-react-app/