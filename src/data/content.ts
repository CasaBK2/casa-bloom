// ─────────────────────────────────────────────────────────────
// Casa Bloom: all the words, prices and dates on the site.
// Edit this file to change what the homepage shows.
// Photos live in /public/img (large) and /public/img/sm (small).
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Casa Bloom',
  seal: 'CASA BLOOM · CITY GARDEN · 8002 ZÜRICH · ',
  email: 'hoi@casabloom.ch',
  instagram: 'https://www.instagram.com/casab_citygarden/',
  instagramHandle: '@casab_citygarden',
  place: 'City garden, 8002 Zürich',
  pickup: 'Pick-up in Enge',
  description:
    'Strictly seasonal cut flowers from a city garden in the heart of Zürich. Bouquets, bespoke delivery and Bloom Bar workshops.',
};

export const intro = {
  lead: '<span class="pop">Casa Bloom</span> is my city garden in the heart of Zürich, where I grow strictly seasonal flowers: cut in the morning, on your table by the afternoon.',
  photo: { src: 'about.jpg', alt: 'A garden bouquet in a green glass vase on a sunny windowsill' },
};

// "Fresh from the garden". tag is optional (e.g. '2 left'). Prices are placeholders.
export const flowers = {
  eyebrow: 'Flowers',
  title: 'Fresh from the garden',
  text: 'Strictly seasonal cut flowers combined with whatever grows in the garden. Follow on Instagram for weekly drops and pick up in Enge, or contact me for bespoke velo delivery in Zürich.',
  items: [
    { name: 'Seasonal Strüssli', price: 'CHF 20–30', note: 'What the garden gives this week', img: 'img_4335.jpg', alt: 'A hand-tied bouquet of peach dahlias and cosmos held over the lawn' },
    { name: 'Garden jar', price: 'CHF 45', note: 'A fuller bunch, ready in its vase', img: 'img_2167.jpg', alt: 'A pastel bouquet in a pink patterned vase' },
    { name: 'Bespoke', price: 'On request', note: 'Events, gifts and long tables', img: 'img_1156.jpg', alt: 'A soft pink bouquet in a silver bucket' },
    { name: 'Cut your own', price: 'By appointment', note: 'Come by, cut and arrange in the garden', img: 'img_4543.jpg', alt: 'Cutting a fresh bunch among the garden beds' },
  ],
};

// Bloom Bar workshops. spots: places left. Under 3 shows in red. Dates and prices are placeholders.
export const workshops = {
  eyebrow: 'Workshops',
  title: 'Bloom Bar',
  text: 'In small groups, we find inspiration in the seasonal garden, cut flowers together and make a bouquet or Kenzan arrangement to take home.',
  photo: { src: 'img_3087.jpg', alt: 'Buckets of fresh cut flowers on a garden table with red chairs' },
  items: [
    { day: '14', month: 'Jun', weekday: 'Sa', date: 'Sa 14 June', title: 'Kenzan arrangement', time: '10:00 to 12:30', price: 'CHF 95', spots: 2 },
    { day: '12', month: 'Jul', weekday: 'Sa', date: 'Sa 12 July', title: 'Seasonal bouquet', time: '10:00 to 12:30', price: 'CHF 85', spots: 6 },
    { day: '23', month: 'Aug', weekday: 'Sa', date: 'Sa 23 August', title: 'Kenzan arrangement', time: '14:00 to 16:30', price: 'CHF 95', spots: 8 },
  ],
};

export const shop = {
  eyebrow: 'Coming soon',
  title: 'Garden goods',
  text: 'Made in small batches from what grows in the garden.',
};

// The square photo grid above the footer.
export const garden = [
  ['img_2430.jpg', 'White and pink cosmos'],
  ['img_0925.jpg', 'Peach snapdragons in evening light'],
  ['img_2980.jpg', 'An armful of magenta cosmos'],
  ['img_0450.jpg', 'Irises in a garden border'],
  ['img_3007.jpg', 'Cream dahlias in the beds'],
  ['img_9821.jpg', 'Pink peonies by the garden table'],
  ['img_2788.jpg', 'An island flower bed in the lawn'],
  ['img_3083.jpg', 'A white cosmos against the sun'],
  ['img_2304.jpg', 'Dark dahlias and wild carrot in a bucket'],
  ['img_0862.jpg', 'The garden path under an arch'],
  ['img_2728.jpg', 'Raised beds with nasturtiums'],
  ['img_0331.jpg', 'The wax seal on a bouquet'],
];
