# A react solution

## Start it dockerized

```bash
 docker-compose build dev
 docker-compose up --build
 # OR
 docker-compose up --build dev
```

## Start it normally

```bash
npm i
npm run start
# OR
yarn start
```

## Notes

- For development it's better to use Yarn or NPM as in docker the hot reload webpack feature is not working.
- Versions are fixed and solution is working in Docker as well:

### Environment used during development

```text
Node: v14.17.0 LTS
NPM: 7.13.0
Yarn: 1.22.10
Docker: 20.10.8

Manjaro Linux: 21.1.1
Kernel: 5.13.12-1
```