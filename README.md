# NestJS Starter Template

This NestJS starter template scaffolds a NestJS project with the following stuffs:

- PostsgreSQL (through docker)
- PgAdmin (through docker)
- Minio (through docker)
- TypeORM
- Minio SDK (with bucket init on warmup)
- OpenAPI docs (through `@nestjs/swagger`)
- RapiDoc (for viewing API documentation)
- Example .env file

## Notes for developers

- This project uses `yarn` for dependency management. However, to run typeorm related commands use `npm`

#### TypeORM Migrations

- Generate the migration first

```sh
npm run typeorm:generate-migration --name=PartnerCategoryTable
```

> Migrations are stored in the _`./src/migrations`_ directory

- [Optionally] If you want to write your own migration and just generate an empty migration file

```sh
npm run typeorm:create-migration --name=PartnerCategoryTable
```

> `--name=` is followed by the name of the migration

- Run the migration

```sh
npm run typeorm:run-migration
```
