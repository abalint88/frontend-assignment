# A react solution

Versions are fixed and solution is working in Docker as well:

## Start it dockerized

```terminal
 docker-compose build dev
 docker-compose up --build // OR // docker-compose up --build dev
```

## Start it normally

```terminal
npm i
npm run start // OR // yarn start
```

## Notes

- For development it's better to use Yarn or NPM as in docker the hot reload webpack feature is not working.
