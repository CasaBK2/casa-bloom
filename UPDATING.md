# Updating casabloom.ch

Live: https://casabloom.ch (Netlify app "casa-bloom", deploys automatically on every push to `main`, ~1 min).

## Where things live
- All text, prices, offers, photo lists: `src/data/content.ts`
- Photos: `public/img/` (large, 1400px) and `public/img/sm/` (cards and mosaic, 720px)
- Pages: `src/pages/` (index, impressum, danke = thank-you after sign-up, 404)
- Styles: `src/styles/global.css` (seasonal pop colour via `--pop`, summer pink is main)

## Branches
- `main`: live site (workshops "coming 2027", email-only "Notify me" form)
- `with-workshops`: full Bloom Bar version with dates, spots and booking form. Fill in real dates/prices in `content.ts`, then merge into `main`.
- `spring`, `fall`: seasonal colour variants (yellow, tomato)

## Forms and email
- Netlify Forms, form detection on. Form `workshop-notify` (and `workshop-signup` on with-workshops) notify hoi@casabloom.ch. When switching to with-workshops, add a Netlify email notification for `workshop-signup` too.
- hoi@casabloom.ch is ImprovMX forwarding to Gmail.

## DNS (GoDaddy)
- A @ 75.2.60.5, CNAME www casa-bloom.netlify.app
- Keep MX (mx1/mx2.improvmx.com), SPF TXT and _dmarc untouched, or email breaks.

## Don't
- Don't use Netlify's built-in agent for changes; edit here and push.
