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
  lead: '<span class="pop">Casa Bloom</span> is my city garden in the heart of Zürich, where I grow strictly seasonal flowers: cut in the morning, on your table by the afternoon.',
  photo: { src: 'about-fall.jpg', alt: 'Dahlias in full bloom in the garden beds' },
};

// "Fresh from the garden". tag is optional (e.g. '2 left'). Prices are placeholders.
export const flowers = {
  eyebrow: 'Flowers',
  title: 'Fresh from the garden',
  text: 'Strictly seasonal cut flowers and whatever grows in the garden. Pick up at [location to come] or bespoke delivery in Zürich.',
  items: [
    { name: 'Seasonal bouquet', price: 'CHF 35', note: 'What the garden gives this week', img: 'img_2212.jpg', alt: 'An armful of zinnias, cosmos and marigolds' },
    { name: 'Garden jar', price: 'CHF 45', note: 'A fuller bunch, ready in its vase', img: 'img_5893_2.jpg', alt: 'Dahlias and cosmos in a zinc bucket on a garden table' },
    { name: 'Bespoke', price: 'On request', note: 'Events, gifts and long tables', img: 'img_3665.jpg', alt: 'A big bouquet of dahlias and sunflowers on the garden table' },
    { name: 'Weekly flowers', price: 'CHF 120 / mo', note: 'A bunch every week, in season', img: 'img_4770.jpg', alt: 'A bouquet of dahlias and zinnias laid on the ground', tag: 'Subscription' },
  ],
};

// Bloom Bar workshops. spots: places left. Under 3 shows in red. Dates and prices are placeholders.
export const workshops = {
  eyebrow: 'Workshops',
  title: 'Bloom Bar',
  text: 'Small groups in the garden, with flowers cut that morning. You go home with what you made.',
  photo: { src: 'img_3661.jpg', alt: 'A zinc bucket of late-summer flowers on the workshop table' },
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
  ['img_4245.jpg', 'A peach cactus dahlia'],
  ['img_3977.jpg', 'A pink ball dahlia held up in the garden'],
  ['img_2215.jpg', 'Zinnias, cosmos and marigolds from above'],
  ['img_5690.jpg', 'Magenta cosmos'],
  ['img_3632.jpg', 'Orange lilies and yellow roses'],
  ['img_2965.jpg', 'A handful of zinnias and cosmos'],
  ['img_3869.jpg', 'A dark dahlia bush in the lawn'],
  ['img_4543.jpg', 'Cutting a fresh bunch in the beds'],
  ['img_3129.jpg', 'Dahlias and cosmos on a white table'],
  ['img_2213.jpg', 'The morning cut, laid out on the ground'],
  ['img_3984.jpg', 'Dahlias among the tall beds'],
  ['img_2391_2.jpg', 'The garden in late summer'],
];
