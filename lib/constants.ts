export const COMPANY_NAME = "WOW GLOW RENTALS";
export const COMPANY_CITY = "Chicago";
export const COMPANY_STATE = "IL";
export const COMPANY_PHONE = "(312) 555-0000";
export const COMPANY_EMAIL = "hello@glowrentals.com";

export const SERVICE_AREAS = [
  "Chicago",
  "Naperville",
  "Evanston",
  "Oak Park",
  "Schaumburg",
  "Aurora",
  "Downers Grove",
  "Arlington Heights",
  "Highland Park",
  "Glenview",
  "Northbrook",
  "Palatine",
  "Wilmette",
  "Joliet",
  "Elgin",
];

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
      "A full-size ping pong table blazing with RGB rainbow colors. Instantly becomes the centerpiece of any event — guests line up to play all night.",
    capacity: "2–4 players",
    image: "/games/pingpong.png",
    tag: "Fan Favorite",
  },
  {
    id: "led-dance-floor",
    name: "LED Dance Floor",
    description:
      "An infinity-mirror LED dance floor with programmable color zones. Creates an electric nightclub atmosphere at any venue, indoors or out.",
    capacity: "Up to 30 guests",
    image: "/games/dancefloor.png",
    tag: "Showstopper",
  },
  {
    id: "led-mini-golf",
    name: "LED Mini Golf",
    description:
      "Multi-hole LED putting course with glowing greens, neon rails, and lit-up flags. We configure the layout to fit your venue perfectly.",
    capacity: "Up to 12 players",
    image: "/games/minigolf.png",
    tag: "Best for Weddings",
  },
  {
    id: "led-cornhole",
    name: "LED Cornhole",
    description:
      "Pro-grade illuminated cornhole boards with glowing bags in cyan and pink. Equally stunning indoors or on a patio after dark.",
    capacity: "2–4 players",
    image: "/games/cornhole.png",
    tag: "Outdoor Ready",
  },
  {
    id: "led-furniture",
    name: "LED Lounge Furniture",
    description:
      "Premium RGB LED sofas, chairs, and tables that glow in any color. Transforms a plain space into a glowing VIP lounge in minutes.",
    capacity: "Any group size",
    image: "/games/furniture.png",
    tag: "VIP Upgrade",
  },
  {
    id: "led-four-in-a-row",
    name: "Giant LED 4 in a Row",
    description:
      "A towering illuminated Connect Four with glowing LED discs in red and blue. Brings serious competitive energy and major wow factor.",
    capacity: "2–10 players",
    image: "/games/fourinarow.png",
    tag: "Crowd Pleaser",
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
