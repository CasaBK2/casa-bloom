// ─────────────────────────────────────────────────────────────
// Casa Bloom: all the words, prices and dates on the site.
// Edit this file to change what the homepage shows.
// Photos live in /public/img (large) and /public/img/sm (small).
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Casa Bloom',
  seal: 'CASA BLOOM · CITY GARDEN · 8002 ZÜRICH · ',
  email: 'citygardenzh@gmail.com',
  instagram: 'https://www.instagram.com/casab_citygarden/',
  instagramHandle: '@casab_citygarden',
  place: 'Brandschenkestrasse 172, 8002 Zürich',
  pickup: 'Pick-up in Enge',
  description:
    'Strictly seasonal cut flowers from a city garden in the heart of Zürich. Bouquets, bespoke delivery and Bloom Bar workshops.',
};

export const intro = {
  lead: '<span class="pop">Casa Bloom</span> is my city garden oasis in the heart of Zürich. A 100-year-old family garden where I found my passion for flowers and now grow strictly seasonal cut flowers to share with you: Frisch gschnitte am Morge, am Nami bi dir ufm Tisch.',
  photo: { src: 'about.jpg', alt: 'A garden bouquet in a green glass vase on a sunny windowsill' },
};

// "Fresh from the garden". tag is optional (e.g. '2 left'). Prices are placeholders.
export const flowers = {
  eyebrow: 'Flowers',
  title: 'Fresh from the garden',
  text: 'Strictly seasonal cut flowers combined with whatever grows in the garden. Follow on Instagram for weekly drops and pick up in Enge, or contact me for bespoke velo delivery in Zürich.',
  items: [
    { name: 'Seasonal Strüssli', price: 'CHF 20–30', note: 'What the garden gives this week', img: 'img_4335.jpg', alt: 'A hand-tied bouquet of peach dahlias and cosmos held over the lawn' },
    { name: 'Garden bucket', price: 'On request', note: 'A bucket of seasonal flowers to arrange for your event', img: 'img_1156.jpg', alt: 'Soft pink garden flowers in a silver bucket' },
    { name: 'Cut your own', price: 'By appointment', note: 'Come by, cut and arrange in the garden', img: 'img_4543.jpg', alt: 'Cutting a fresh bunch among the garden beds' },
  ],
};

// Bloom Bar workshops. spots: places left. Under 3 shows in red. Dates and prices are placeholders.
export const workshops = {
  eyebrow: 'Workshops · coming 2027',
  title: 'Bloom Bar',
  text: 'In small groups, we find inspiration in the seasonal garden, cut flowers together and make a bouquet or Kenzan arrangement to take home.',
  photo: { src: 'img_3087.jpg', alt: 'Buckets of fresh cut flowers on a garden table with red chairs' },
  notify: {
    title: 'Be the first to know',
    text: "Leave your email and I'll let you know when the first dates are out.",
  },
};

export const shop = {
  eyebrow: 'Coming soon',
  title: 'Garden goods',
  text: 'Made in small batches from what grows in the garden.',
};

// The "In season" mosaic: the first photo is shown large, the next four small.
export const garden = [
  ['img_2215.jpg', 'Zinnias, cosmos and marigolds from the morning cut'],
  ['img_2725.jpg', 'The garden and the house in summer'],
  ['img_0925.jpg', 'Peach and butter-yellow snapdragons in the evening light'],
  ['img_2431.jpg', 'Yellow and pink zinnias'],
  ['img_1429.jpg', 'A pastel arrangement in a white urn on the garden table'],
];
