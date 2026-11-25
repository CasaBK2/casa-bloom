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
  photo: { src: 'about-spring.jpg', alt: 'Pink peonies in the garden beside the table and chairs, the house behind' },
};

// "Fresh from the garden". tag is optional (e.g. '2 left'). Prices are placeholders.
export const flowers = {
  eyebrow: 'Flowers',
  title: 'Fresh from the garden',
  text: 'Strictly seasonal cut flowers and whatever grows in the garden. Pick up at [location to come] or bespoke delivery in Zürich.',
  items: [
    { name: 'Seasonal bouquet', price: 'CHF 35', note: 'What the garden gives this week', img: 'img_9350.jpg', alt: 'A hand holding a bouquet of bleeding hearts, bluebells and roses' },
    { name: 'Garden jar', price: 'CHF 45', note: 'A fuller bunch, ready in its vase', img: 'img_9020.jpg', alt: 'White tulips and bluebells in a silver jar on a garden chair' },
    { name: 'Bespoke', price: 'On request', note: 'Events, gifts and long tables', img: 'img_9899.jpg', alt: 'A full bouquet of pink peonies, burgundy roses and alliums' },
    { name: 'Weekly flowers', price: 'CHF 120 / mo', note: 'A bunch every week, in season', img: 'img_0749.jpg', alt: 'A hand holding two white peonies in the garden', tag: 'Subscription' },
  ],
};

// Bloom Bar workshops. spots: places left. Under 3 shows in red. Dates and prices are placeholders.
export const workshops = {
  eyebrow: 'Workshops',
  title: 'Bloom Bar',
  text: 'Small groups in the garden, with flowers cut that morning. You go home with what you made.',
  photo: { src: 'img_9034.jpg', alt: 'Holding a silver jar of white peonies, lily tulips and bluebells' },
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
  ['img_9261.jpg', 'Pink tulips and forget-me-nots'],
  ['img_9297.jpg', 'White lily tulips'],
  ['img_8855.jpg', 'Snowflakes among forget-me-nots'],
  ['img_9822.jpg', 'Pink peonies by the house'],
  ['img_8022.jpg', 'Hellebores in early spring'],
  ['img_9790.jpg', 'Peonies and alliums in the border'],
  ['img_0301.jpg', 'The house and the garden in morning sun'],
  ['img_9782.jpg', 'The peony bed'],
  ['img_0444.jpg', 'Irises in the garden'],
  ['img_9788.jpg', 'Peonies by the garden path'],
  ['img_0035.jpg', 'Peonies and alliums'],
  ['img_9784.jpg', 'White and pink peonies'],
];
