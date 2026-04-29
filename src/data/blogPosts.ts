export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "best-time-to-visit-kyushu",
    title: "Best Time to Visit Kyushu: A Month-by-Month Guide",
    excerpt:
      "Cherry blossoms in April, fireflies in June, autumn foliage in November — Kyushu has something spectacular every season. Here's exactly when to go based on what you want to experience.",
    image:
      "https://images.unsplash.com/photo-1614016957547-ceba73462f37?w=800&q=80",
    author: "Sarah Mitchell",
    date: "2026-03-15",
    readTime: "8 min read",
    category: "Travel Planning",
    tags: ["seasons", "planning", "cherry blossom", "autumn"],
    featured: true,
  },
  {
    slug: "guide-to-beppu-hells",
    title: "Beppu's 8 Hells: The Complete Visitor Guide",
    excerpt:
      "From a blood-red boiling pool to a pond where crocodiles bathe in geothermal water — Beppu's famous 'Jigoku Meguri' hell circuit is one of Japan's most unique attractions. Here's everything you need to know.",
    image:
      "https://images.unsplash.com/photo-1601823984263-b87b59798b70?w=800&q=80",
    author: "James Okafor",
    date: "2026-02-28",
    readTime: "10 min read",
    category: "Attractions",
    tags: ["beppu", "onsen", "hells", "oita"],
    featured: true,
  },
  {
    slug: "riding-yufuin-no-mori-train",
    title: "Riding the Yufuin no Mori: Japan's Most Scenic Train Journey",
    excerpt:
      "The emerald-green Yufuin no Mori limited express is one of Japan's most beloved scenic trains. Here's why this 90-minute ride through forested mountains is worth booking months in advance.",
    image:
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
    author: "Emily Chen",
    date: "2026-01-20",
    readTime: "6 min read",
    category: "Transport",
    tags: ["trains", "yufuin", "scenic", "japan rail pass"],
    featured: true,
  },
  {
    slug: "how-to-experience-ryokan",
    title: "How to Stay in a Ryokan: Etiquette, Tips & What to Expect",
    excerpt:
      "First-time ryokan guests often feel unsure about etiquette: when to wear yukata, how to behave in communal baths, what a kaiseki meal involves. This guide covers everything so you can relax and enjoy.",
    image:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
    author: "Sarah Mitchell",
    date: "2025-12-10",
    readTime: "12 min read",
    category: "Culture",
    tags: ["ryokan", "etiquette", "onsen", "culture"],
    featured: false,
  },
  {
    slug: "fukuoka-food-guide",
    title: "Fukuoka Food Guide: 15 Must-Try Dishes and Where to Find Them",
    excerpt:
      "Fukuoka is arguably Japan's best food city. From the original tonkotsu ramen at midnight yatai stalls to fresh oysters at Yanagibashi Market, here are 15 dishes you absolutely must eat.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    author: "Kenji Nakamura",
    date: "2025-11-05",
    readTime: "9 min read",
    category: "Food & Drink",
    tags: ["fukuoka", "food", "ramen", "hakata"],
    featured: false,
  },
  {
    slug: "yakushima-hiking-guide",
    title: "Yakushima Island: A Hiker's Complete Guide",
    excerpt:
      "Ancient cedar trees thousands of years old, cloud-shrouded mountain peaks, and crystal rivers — Yakushima is a UNESCO World Heritage wilderness unlike anywhere else. Here's how to plan your visit.",
    image:
      "https://images.unsplash.com/photo-1607619662634-3ac55ec0e216?w=800&q=80",
    author: "James Okafor",
    date: "2025-10-18",
    readTime: "14 min read",
    category: "Hiking",
    tags: ["yakushima", "hiking", "kagoshima", "UNESCO"],
    featured: false,
  },
];
