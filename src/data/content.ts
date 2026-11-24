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
  place: 'City garden, 8002 Zürich',
  pickup: 'Pick-up at [location to come]', // TODO
  description:
    'Strictly seasonal cut flowers from a city garden in the heart of Zürich. Bouquets, bespoke delivery and Bloom Bar workshops.',
};

export const intro = {
  lead: 'Casa Bloom is my city garden in the heart of Zürich, where I grow strictly seasonal flowers: cut in the morning, on your table by the afternoon.',
  body: [
    "The garden belonged to my grandparents and surrounds a house that is more than a hundred years old. It's my passion, and now I'd like to share it.",
  ],
  photo: { src: 'img_0321_2.jpg', alt: 'A garden bouquet in a green glass vase on a sunny windowsill' },
};

// "Fresh from the garden". tag is optional (e.g. '2 left'). Prices are placeholders.
export const flowers = {
  eyebrow: 'Flowers',
  title: 'Fresh from the garden',
  text: 'Strictly seasonal cut flowers and whatever grows in the garden. Pick up at [location to come] or bespoke delivery in Zürich.',
  items: [
    { name: 'Seasonal bouquet', price: 'CHF 35', note: 'What the garden gives this week', img: 'img_1459.jpg', alt: 'Dahlias, snapdragons and campanula in a white footed vase' },
    { name: 'Garden jar', price: 'CHF 45', note: 'A fuller bunch, ready in its vase', img: 'img_2167.jpg', alt: 'A pastel bouquet in a pink patterned vase' },
    { name: 'Bespoke', price: 'On request', note: 'Events, gifts and long tables', img: 'img_1156.jpg', alt: 'A soft pink bouquet in a silver bucket' },
    { name: 'Weekly flowers', price: 'CHF 120 / mo', note: 'A bunch every week, in season', img: 'img_3397.jpg', alt: 'A loose bouquet in a glass jar on wooden stairs', tag: 'Subscription' },
  ],
};

// Bloom Bar workshops. spots: places left. Under 3 shows in red. Dates and prices are placeholders.
export const workshops = {
  eyebrow: 'Workshops',
  title: 'Bloom Bar',
  text: 'Small groups in the garden, with flowers cut that morning. You go home with what you made.',
  photo: { src: 'img_3087.jpg', alt: 'Buckets of fresh cut flowers on a garden table with red chairs' },
  items: [
    { day: '14', month: 'Jun', weekday: 'Sa', date: 'Sa 14 June', title: 'Kenzan arrangement', time: '10:00 to 12:30', price: 'CHF 95', spots: 2 },
    { day: '12', month: 'Jul', weekday: 'Sa', date: 'Sa 12 July', title: 'Seasonal bouquet', time: '10:00 to 12:30', price: 'CHF 85', spots: 6 },
    { day: '23', month: 'Aug', weekday: 'Sa', date: 'Sa 23 August', title: 'Kenzan arrangement', time: '14:00 to 16:30', price: 'CHF 95', spots: 8 },
  ],
};

export const shop = {
  eyebrow: 'Coming soon',
  title: 'Garden goods, in small batches',
  text: 'Made in small batches from what grows in the garden. Follow along on Instagram to hear first.',
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
