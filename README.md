This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Before you start

- [Docker](https://www.docker.com/get-started/) (needed for Dev container)

### If you develop inside the Dev container
- [VSCode](https://code.visualstudio.com/)
- [Dev Containers Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

### If you develop without Dev containers

- [Node.js](https://nodejs.org/en) (we used version 20.18.0, but older version should also work. Ideally, install them with `nvm` to easily switch between Node.js versions if needed)
- [VSCode](https://code.visualstudio.com/) (it is optional, you can use any IDE, but VSCode has predefined formatting on save according to the project's linting rules)

## Getting Started

First, run the development server:

```bash
npm ci 

npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Running Playwright tests (in Dev Container only)
 
It is recommended to run the tests in Dev Container only because in this case there will no discrepancy between screenshots generated on different OS.
To run the dev server, you can run the following script with test data and **without** interacting with the API. In this mode, Next.js image optimization is enabled, and it is recommended to use it when you want to see how the site works with optimizations close to production:

```bash
npm run dev:static
```

Once you have successfully started the dev server (you can open it at http://localhost:3000), leaving the first terminal active in a separate terminal tab, you can run tests in headless mode (without the browser user interface) by running the following script:

```bash
npm run playwright:run
```

If you want to work exclusively inside the Dev container, you need to connect to the Dev container's VNC server (remote desktop) here http://localhost:6080/. Password: `vscode`. After running the following command, you should see the Playwright interface:

```bash
npm run playwright:open
```

## Updating base screenshots

When you need to update screenshots that are no longer relevant, you can do it with the following command:

```bash
npm run update-snapshots
```

Only those screenshots that have discrepancies will be replaced.

## Viewing test report locally 

After executing `npm run playwright:run` you will be able to see the tests run report. For example, whether there were retries when running one or more tests. If the test failed, the report will be generated automatically. If the test passed, the report can be generated with the command:

```bash
npx playwright show-report
```

If you develop in a Dev container, you can view the generated report via VNC:

```bash
npx playwright open localhost:9323
```

## Husky


We use husky so that all developers follow the standards of conventional commits during the development

To learn more about conventional commits check the following resource:

- [Conventional Commits Documentation](https://www.conventionalcommits.org/ru/v1.0.0-beta.4/)

The rules for conventional commits validation are configured in the file `.commitlintrc`

If you want to change the validation rules, you must:

- check commitlint [rules settings](https://commitlint.js.org/#/reference-rules) 
- change `rules` section in the `.commitlintrc` file based on your needs
## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Dev Environment

After merging your changes into the **develop** branch, they will be available here: https://dev.tourmalinecore.com/ 

