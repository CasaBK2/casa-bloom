# Casa Bloom website

Static site built with [Astro](https://astro.build), hosted on Netlify.

## Change text, prices, workshops
Everything you see on the homepage lives in `src/data/content.ts`.
Photos go in `public/img/` (large, ~1400px) and `public/img/sm/` (small, ~720px).

## Workshop sign-ups
The form uses Netlify Forms (form name `workshop-signup`). Entries show up in
Netlify → Site → Forms. Turn on email notifications there to get each sign-up
in your inbox. Fields: name, email, workshop, people.

## Run it locally
    npm install
    npm run dev      # http://localhost:4321

## Deploy
Netlify builds with `npm run build` and publishes `dist/` (see `netlify.toml`).

## Still to fill in
- Pick-up info (`src/data/content.ts`)
- Real bouquet names/prices, workshop dates, shop products
