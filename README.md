This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm ci 

npm run dev
# or
yarn dev

# see the i18nexus section below  
i18nexus pull -k <Project API Key>
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.


## I18nexus

We use i18nexus for localization on our website.
To get the actual localization files run the command: i18nexus pull -k <Project API Key>
Follow instructions in our [tutorial](https://docs.google.com/document/d/1EIMdcz-rZFM6vXks7xgAXl6FVM3OxIBEu7aJ6fdKq6A/edit?usp=sharing) to get `Project API Key` . Also there is described how to use i18nexus in the project.

If you want to learn more about i18nexus, check the following resource:
- [i18nexus](https://i18nexus.com/nextjs-tutorial/)

### Loading translations

To download translations from I18nexus there is a translations script in package.json.  
Before running the script, you need to define the values ​​of the variables-keys to the translations.  
To do this, run the command in the terminal:  

**MacOS:**  
```
export <variable_name>=<variable_key>
```  

**Windows: (In Command prompt)** 
``` 
set <variable_name>=<variable_key>
```  

Once all the variables are defined, run the translations script.  

**MacOS:**  
```
npm run translations
```   

**Windows: (In Command prompt)**  
```
npm run translations:win
```   

> NOTE: It must be executed in the terminal where the variables were defined.


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