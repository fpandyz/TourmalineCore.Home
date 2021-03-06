# TourmalineCore.Home
Company web site \

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## In this project following styling strategy used
.scss files grouped by components, but imports to `/styles/main.scss` file. \
And this main file imports to `/pages/_app.js`


## Import images tip
import svg from `/icons` folder inlines it to markup\
for other assets options check the next.js docs

```
import Logo from '../icons/logo.svg'
```


## Linting
```bash
npm run lint
npm run lint:fix
```

## Localization
all i18n strings placed in `public/locales`\
they are used in components with hooks\

to update localizations simply change json data and rebuild / restart dev server

to add another locale go to `next-i18next.config.js`\
and create another folder with similar data in `public/locales`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
