// ─────────────────────────────────────────────────────────────
// Casa Bloom: all the words, prices and dates on the site.
// Edit this file to change what the homepage shows.
// Photos live in /public/img (large) and /public/img/sm (small).
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Casa Bloom',
  seal: 'CASA BLOOM · CITY GARDEN · 8002 ZÜRICH · ',
  email: 'hello@casabloom.ch', // TODO: real address
  instagram: 'https://www.instagram.com/casab_citygarden/',
  instagramHandle: '@casab_citygarden',
  place: 'City garden, 8002 Zürich',
  pickup: 'Pick-up Saturdays 9 to 12', // TODO
  description:
    'Seasonal cut flowers from a city garden in 8002 Zürich. Bouquets, workshops in the garden and small things from the beds.',
};

export const intro = {
  eyebrow: "Hoi, I'm Bini",
  lead: 'Casa Bloom is my little city garden in Zürich, where I grow <em>flowers that don\'t travel</em>: cut in the morning, on your table by the afternoon.',
  body: 'What started as a few beds of cosmos and dahlias is now a small cut-flower patch in the middle of the city. I sell what the season gives, run hands-on workshops in the garden, and make small things from what grows here.',
  photo: { src: 'img_0321_2.jpg', alt: 'A garden bouquet in a green glass vase on a sunny windowsill' },
  note: 'grown, not flown',
};

// "This week's drop". tag is optional (e.g. '2 left').
export const flowers = {
  eyebrow: "This week's drop",
  title: 'Fresh from <em>the beds</em>',
  text: "Limited, dated, gone when they're gone. Order by Thursday, pick up in the garden on Saturday.",
  items: [
    { name: 'Es Sträussli', price: 'CHF 35', note: 'Dahlia, snapdragon, campanula', img: 'img_1459.jpg', alt: 'Dahlias, snapdragons and campanula in a white footed vase', tag: '2 left', tagPink: true },
    { name: 'Pastel bunch', price: 'CHF 45', note: 'Dahlia, cosmos, sweet pea', img: 'img_2167.jpg', alt: 'A pastel bouquet in a pink patterned vase' },
    { name: 'Big bucket', price: 'CHF 65', note: 'For events and long tables', img: 'img_1156.jpg', alt: 'A soft pink bouquet in a silver bucket' },
    { name: 'Every Friday', price: 'CHF 120 / mo', note: 'A weekly bunch, May to October', img: 'img_3397.jpg', alt: 'A loose bouquet in a glass jar on wooden stairs', tag: 'Subscription' },
  ],
};

// Workshops. spots: how many places are left. Under 3 shows in red.
export const workshops = {
  eyebrow: 'Workshops',
  title: 'Come <em>pick &amp; arrange</em> with me',
  text: 'Small groups of up to 8, in the garden. We cut together, then you take your bouquet home. Coffee and Zopf included.',
  photo: { src: 'img_3087.jpg', alt: 'Buckets of fresh cut flowers on a garden table with red chairs' },
  items: [
    { day: '14', month: 'Jun', weekday: 'Sa', date: 'Sa 14 June', title: 'Peony season bouquet', time: '10:00 to 12:30', price: 'CHF 95', spots: 2 },
    { day: '12', month: 'Jul', weekday: 'Sa', date: 'Sa 12 July', title: 'Summer meadow jar', time: '10:00 to 12:30', price: 'CHF 85', spots: 6 },
    { day: '23', month: 'Aug', weekday: 'Sa', date: 'Sa 23 August', title: 'Dahlia & cosmos crown', time: '14:00 to 16:30', price: 'CHF 95', spots: 8 },
  ],
};

// Shop. Leave img empty to show the patterned "photo coming soon" tile.
export const shop = {
  eyebrow: 'Shop · coming soon',
  title: 'Little things <em>from the garden</em>',
  text: 'Made in small batches and sealed with the Casa Bloom wax seal. Send me a message to order for now.',
  items: [
    { name: 'Flower bag', price: 'CHF 39', note: 'A printed cotton bag shaped to carry a big bunch home, then use again.', img: '', pattern: 'pink' },
    { name: 'Seed packets', price: 'CHF 6', note: 'Seeds saved from the beds: cosmos, zinnia, snapdragon. Grow your own Sträussli.', img: '', pattern: 'corn' },
    { name: 'Garden candle', price: 'CHF 28', note: 'A small candle that smells like the garden in June.', img: '', pattern: 'tomato' },
  ],
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

export const ticker = [
  'Seasonal flowers',
  'Es Sträussli for your table',
  'Workshops in the garden',
  'City garden · 8002 Zürich',
  'No greenhouse, no airmiles',
];
