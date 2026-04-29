export interface Itinerary {
  slug: string;
  title: string;
  duration: string;
  days: number;
  difficulty: "Easy" | "Moderate" | "Active";
  theme: string;
  tagline: string;
  description: string;
  image: string;
  route: string[];
  highlights: string[];
  estimatedCost: string;
  bestFor: string[];
  featured: boolean;
}

export const itineraries: Itinerary[] = [
  {
    slug: "kyushu-grand-loop-7-days",
    title: "Kyushu Grand Loop",
    duration: "7 Days",
    days: 7,
    difficulty: "Easy",
    theme: "Classic",
    tagline: "The definitive first-timer's Kyushu circuit",
    description:
      "Cover Kyushu's greatest hits in a week: Fukuoka's street food, Nagasaki's history, Kumamoto's castle, and the steaming onsen of Beppu and Yufuin. Travels entirely by Shinkansen and limited express — no car required.",
    image:
      "https://images.unsplash.com/photo-1614016957547-ceba73462f37?w=1200&q=80",
    route: ["Fukuoka", "Nagasaki", "Kumamoto", "Aso", "Beppu", "Yufuin", "Fukuoka"],
    highlights: [
      "Hakata street food yatai",
      "Nagasaki Peace Park",
      "Kumamoto Castle",
      "Mt. Aso caldera walk",
      "Beppu Hells",
      "Yufuin morning mist",
    ],
    estimatedCost: "$1,200–$1,800 per person",
    bestFor: ["First-time visitors", "Couples", "Solo travellers"],
    featured: true,
  },
  {
    slug: "onsen-ryokan-bliss-5-days",
    title: "Onsen & Ryokan Bliss",
    duration: "5 Days",
    days: 5,
    difficulty: "Easy",
    theme: "Relaxation",
    tagline: "Japan's finest hot spring experiences back-to-back",
    description:
      "The ultimate spa itinerary: soak in Yufuin's forested baths, explore Beppu's volcanic 'hells', and end in the sublime village of Kurokawa Onsen with a multi-ryokan onsen pass.",
    image:
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80",
    route: ["Fukuoka", "Yufuin", "Beppu", "Kurokawa Onsen", "Fukuoka"],
    highlights: [
      "Yufuin boutique ryokan",
      "Beppu sand bath",
      "Jigoku Meguri hells tour",
      "Kurokawa multi-inn onsen pass",
      "Ryokan kaiseki dinners",
    ],
    estimatedCost: "$900–$2,500 per person",
    bestFor: ["Honeymoons", "Couples", "Wellness seekers"],
    featured: true,
  },
  {
    slug: "nature-and-volcanoes-6-days",
    title: "Nature & Volcanoes",
    duration: "6 Days",
    days: 6,
    difficulty: "Active",
    theme: "Adventure",
    tagline: "Kyushu's raw natural power up close",
    description:
      "Hike the rim of the world's largest caldera, explore ancient cedar forests in Yakushima (UNESCO), and watch Sakurajima belch ash over Kagoshima Bay. Kyushu's geological drama at its finest.",
    image:
      "https://images.unsplash.com/photo-1607619662634-3ac55ec0e216?w=1200&q=80",
    route: ["Kumamoto", "Mt. Aso", "Kagoshima", "Sakurajima", "Yakushima Island"],
    highlights: [
      "Mt. Aso crater rim hike",
      "Sakurajima lava fields",
      "Senganen garden",
      "Yakushima ancient cedar forest",
      "Ibusuki sand bath",
    ],
    estimatedCost: "$1,400–$2,200 per person",
    bestFor: ["Hikers", "Nature lovers", "Adventure seekers"],
    featured: true,
  },
  {
    slug: "history-culture-trail-4-days",
    title: "History & Culture Trail",
    duration: "4 Days",
    days: 4,
    difficulty: "Easy",
    theme: "Culture",
    tagline: "Samurai, trade routes, and atomic memory",
    description:
      "Kyushu was Japan's window to the world for centuries. Walk Nagasaki's Dutch and Chinese quarters, explore Kumamoto's legendary samurai castle, and trace the Satsuma clan's legacy in Kagoshima.",
    image:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200&q=80",
    route: ["Fukuoka", "Nagasaki", "Kumamoto", "Kagoshima"],
    highlights: [
      "Nagasaki Atomic Bomb Museum",
      "Glover Garden Western mansions",
      "Kumamoto Castle",
      "Suizenji landscape garden",
      "Sengan-en Satsuma garden",
    ],
    estimatedCost: "$800–$1,400 per person",
    bestFor: ["History buffs", "Cultural travellers", "Families"],
    featured: true,
  },
  {
    slug: "foodie-kyushu-3-days",
    title: "Kyushu Food Safari",
    duration: "3 Days",
    days: 3,
    difficulty: "Easy",
    theme: "Food & Drink",
    tagline: "Ramen, tonkotsu, shochu and so much more",
    description:
      "Three days dedicated entirely to Kyushu's legendary food scene: the birthplace of tonkotsu ramen, home of Hakata mentaiko (spicy fish roe), aged Satsuma shochu, and the freshest seafood in Japan.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    route: ["Fukuoka", "Yanagawa", "Kagoshima"],
    highlights: [
      "Hakata yatai food stalls",
      "Tonkotsu ramen tour",
      "Yanagawa river boat & eel rice",
      "Kagoshima black pork shabu-shabu",
      "Shochu distillery tour",
    ],
    estimatedCost: "$500–$900 per person",
    bestFor: ["Foodies", "Short trips", "Groups"],
    featured: false,
  },
];
