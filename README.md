# Node JS GraphQL TypeScript Stater

## Steps to setup

### Init `package.json` file

```sh
npm init -y
```

### Add `typescript` as a dev dependency

```sh
npm install --save-dev typescript
```

### Create `tsconfig.json` file

```sh
npx tsc --init
```

### Create `development` and `production` directories

```sh
mkdir server src
```

### Define `outDir` in `tsconfig.json` file

```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "outDir": "./server",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

### For development purposes install `ts-node` package as a dev dependency

```sh
npm install --save-dev ts-node
```

### Add dev script to `package.json` file

```json
{
  "scripts": {
    "dev": "nodemon --exec ts-node src/index.ts"
  }
}
```

### Install `express`

```sh
npm i express
```

### Install types for `express`

```sh
npm i @types/express --save-dev
```

### Install `express-graphql` & `graphql`

```sh
npm i express-graphql graphql
```

### Install types for `express-graphql` & `graphql`

```sh
npm i @types/express-graphql @types/graphql --save-dev
```

### Install `dotenv`

```sh
npm i dotenv
```

### Create following directories

```sh
mkdir ./graphql # for holding graphql schema
mkdir ./src/types # for holding types for project
mkdir ./src/utils # for holding utility functions for graphql
mkdir ./src/schemas # for holding buildSchema for graphql
mkdir ./src/resolvers # for holding resolvers for graphql
```
