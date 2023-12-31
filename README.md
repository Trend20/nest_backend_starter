# NestJS Backend Starter

NestJS is a progressive `NodeJS` framework that is used to build efficient, scalable and testable backend applications.

It is built with and fully supports `TypeScript` and combines elements of OOP(Object Oriented Programming), FP(Functional Programming) and FRP(Functional Reactive Programming).

It uses many strong design patterns including, Dependency Injection, MVC, micro-services, CQRS pattern...etc

### Using Environment variables(.env)
In NodeJS, we use the `dotenv` package to manage the `.env` file. NestJS uses `@nest/config` to handle the environment variable.

`npm install -D @nestjs/config` or `yarn add -D @nestjs/config`

The principle of `@nest/config` is the same as that of `dotenv`and hence you can access a variable in the `.env` file using: `process.env.DATABASE_URL`;