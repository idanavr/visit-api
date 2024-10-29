## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Local Env Setup 

### Install Postgres Docker

```
docker run -d --name postgres -e POSTGRES_PASSWORD=123456 -p 5432:5432 postgres
```

### Update To Current Schema

```
npx mikro-orm schema:update --run
```

### Create Schema Migration

```
npx mikro-orm migration:create
```