export const COMPANY_NAME = "GlowRentals";
export const COMPANY_CITY = "Chicago";

export const NAV_LINKS = [
  { href: "#games", label: "Games" },
  { href: "#events", label: "Events" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#testimonials", label: "Reviews" },
];

export type Game = {
  id: string;
  name: string;
  description: string;
  capacity: string;
  image: string;
  tag: string;
};

export const GAMES: Game[] = [
  {
    id: "led-ping-pong",
    name: "LED Ping Pong",
    description:
      "A full-size ping pong table wrapped in glowing LED strips. Tournament-ready and guaranteed to be the center of attention.",
    capacity: "2–4 players",
    image: "https://picsum.photos/seed/pingpong/600/400",
    tag: "Fan Favorite",
  },
  {
    id: "led-mini-golf",
    name: "LED Mini-Golf",
    description:
      "Modular neon mini-golf holes we configure to fit any venue. Glowing balls, neon rails, and lit-up cups included.",
    capacity: "Up to 10 players",
    image: "https://picsum.photos/seed/minigolf/600/400",
    tag: "Best for Weddings",
  },
  {
    id: "led-cornhole",
    name: "LED Cornhole",
    description:
      "Illuminated cornhole boards with glowing bags — perfect on patios, lawns, and indoor venues with the lights turned down.",
    capacity: "2–4 players",
    image: "https://picsum.photos/seed/cornhole/600/400",
    tag: "Outdoor Ready",
  },
  {
    id: "led-beer-pong",
    name: "LED Beer Pong",
    description:
      "A glowing, professional-grade beer pong table with LED cups and racks. The instant icebreaker at any adult event.",
    capacity: "2–8 players",
    image: "https://picsum.photos/seed/beerpong/600/400",
    tag: "Party Must-Have",
  },
  {
    id: "glow-bocce",
    name: "Glow Bocce Ball",
    description:
      "Oversized, glow-in-the-dark bocce balls that look spectacular after dark. Easy to play, impossible not to love.",
    capacity: "2–8 players",
    image: "https://picsum.photos/seed/bocce/600/400",
    tag: "Unique Experience",
  },
  {
    id: "led-shuffleboard",
    name: "LED Shuffleboard",
    description:
      "A lit-up shuffleboard table that brings classic lounge energy with a modern glow twist. Great for corporate events.",
    capacity: "2–4 players",
    image: "https://picsum.photos/seed/shuffleboard/600/400",
    tag: "Corporate Pick",
  },
];

export type Feature = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

export const FEATURES: Feature[] = [
  {
    id: "delivery",
    icon: "🚚",
    title: "Delivery & Setup Included",
    description:
      "We deliver, assemble, and test every game before your event starts. No lifting, no assembly required from you.",
  },
  {
    id: "any-venue",
    icon: "📍",
    title: "Perfect for Any Venue",
    description:
      "Indoors or outdoors, ballrooms or backyards — our LED games are designed to work beautifully in any setting.",
  },
  {
    id: "experience",
    icon: "✨",
    title: "Unforgettable Guest Experience",
    description:
      "Guests talk about these games for years. The glow factor turns a standard event into something extraordinary.",
  },
  {
    id: "booking",
    icon: "📆",
    title: "Easy Booking Process",
    description:
      "Tell us your date, venue, and guest count. We handle the rest — no complicated contracts or confusing forms.",
  },
];

export type EventType = {
  id: string;
  icon: string;
  label: string;
  description: string;
};

export const EVENT_TYPES: EventType[] = [
  {
    id: "weddings",
    icon: "💍",
    label: "Weddings",
    description: "Cocktail hours, receptions, and rehearsal dinners",
  },
  {
    id: "corporate",
    icon: "🏢",
    label: "Corporate Events",
    description: "Team building, holiday parties, and brand activations",
  },
  {
    id: "birthdays",
    icon: "🎂",
    label: "Birthday Parties",
    description: "Milestone birthdays and private celebrations",
  },
  {
    id: "nightlife",
    icon: "🌃",
    label: "Nightlife & Clubs",
    description: "Club nights, rooftop events, and pop-up experiences",
  },
  {
    id: "holidays",
    icon: "🎉",
    label: "Holiday Parties",
    description: "Company holiday events and seasonal celebrations",
  },
  {
    id: "activations",
    icon: "📣",
    label: "Brand Activations",
    description: "Product launches, trade shows, and experiential marketing",
  },
];

export type Step = {
  id: number;
  title: string;
  description: string;
};

export const STEPS: Step[] = [
  {
    id: 1,
    title: "Browse & Choose Your Games",
    description:
      "Explore our full lineup of LED games and pick the ones that match your vibe, guest count, and venue size.",
  },
  {
    id: 2,
    title: "Book & Lock In Your Date",
    description:
      "Share your event details and we'll send a custom quote. A simple deposit holds your date and games.",
  },
  {
    id: 3,
    title: "We Handle Everything Else",
    description:
      "Our team arrives early, sets everything up, confirms it all looks perfect, and returns to break it down after.",
  },
];

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "wedding",
    quote:
      "The LED mini-golf was the highlight of our wedding reception. Every single guest played at least three rounds and kept coming back. Worth every penny.",
    name: "Ashley & Marcus T.",
    role: "Wedding Reception, June 2024",
  },
  {
    id: "corporate",
    quote:
      "We've done a lot of corporate holiday parties and nothing has ever gotten people off their phones and interacting like the LED ping pong table did.",
    name: "Rachel K.",
    role: "Events Director, Northline Group",
  },
  {
    id: "birthday",
    quote:
      "I planned my husband's 40th and wanted it to feel like a real event, not just a dinner. The glow games made it electric. Our guests are still talking about it.",
    name: "Priya M.",
    role: "Private Birthday Party",
  },
];
