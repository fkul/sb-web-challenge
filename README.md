# SB Web Challenge

The objective was to display two tables with data fetched from an HTTP API. The first table displays Transactions and the second aggregates data into Deposits and Withdrawals per given currency.

## Getting Started

```sh
# Install all dependencies
yarn install

# Run the development server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Structure

- `components` - all available React components
- `entities` - reusable class entities
- `hooks` - custom hooks
- `pages` - all pages of the website (see: [Pages](https://nextjs.org/docs/basic-features/pages))
- `types` - shared TypeScript types
- `utils` - utilities and helper functions

## Choices

### [Next.js](https://nextjs.org/)

Next.js is a React framework which I value mostly for its ease of setup with close zero config needed. It provides build-in TypeScript support, file based routing and all other features that were required for this project. Next.js gives a very good developer experience while staying lightweight.

### [axios](https://github.com/axios/axios)

Axios is a promise based HTTP client with a few advantages over the Fetch API. These include good defaults to work with JSON data, better error handling, easier request canceling and overall less code required.

### [styled-components](https://styled-components.com/)

The styled-components React library allows to use component-level CSS styles utilizing the CSS-in-JS approach. I like it for its readability and features like props usage, theming and added Sass support. Even though the project didn't require much styling, I think styled-components is a good addition for the possible future development of it.

## Caveats

- The amount of transactions is not limited, meaning if the API returned even several thousand of records, all of them would be loaded into the DOM, which would negatively influence the performance of the website
- Adding or removing of currencies to/from the eur-rates API endpoint would require updating the useEurRates hook
- The tables don't support sorting, which could be handy
- Tests should be implemented
