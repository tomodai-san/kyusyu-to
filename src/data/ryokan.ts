export interface Ryokan {
  slug: string;
  name: string;
  location: string;
  prefecture: string;
  priceRange: string;
  rating: number;
  reviewCount: number;
  tagline: string;
  description: string;
  image: string;
  amenities: string[];
  bookingUrl: string;
  category: "luxury" | "boutique" | "traditional" | "budget";
  featured: boolean;
}

export const ryokans: Ryokan[] = [
  {
    slug: "yufuin-no-mori-onyado",
    name: "Onyado Nono Yufuin",
    location: "Yufuin, Oita",
    prefecture: "Oita",
    priceRange: "$$$",
    rating: 4.8,
    reviewCount: 1240,
    tagline: "Private open-air onsen with mountain panoramas",
    description:
      "Set in a cedar forest with direct views of Mt. Yufu, this award-winning ryokan offers private rotenburo baths, multi-course kaiseki dinners, and impeccably attentive omotenashi hospitality.",
    image:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
    amenities: [
      "Private rotenburo",
      "Kaiseki dinner",
      "Yukata rental",
      "Airport transfer",
      "Tea ceremony",
    ],
    bookingUrl: "https://www.booking.com/affiliate/kyushu-explorer",
    category: "luxury",
    featured: true,
  },
  {
    slug: "beppu-kannawa-yoshi",
    name: "Kannawa Yoshi Ryokan",
    location: "Beppu, Oita",
    prefecture: "Oita",
    priceRange: "$$",
    rating: 4.6,
    reviewCount: 876,
    tagline: "Authentic steam-bath inn in the hot spring quarter",
    description:
      "Located in Beppu's atmospheric Kannawa district, this century-old inn uses natural steam vents to heat its rooms and cook its seasonal meals — an experience you can't get anywhere else.",
    image:
      "https://images.unsplash.com/photo-1601823984263-b87b59798b70?w=800&q=80",
    amenities: [
      "Steam cooking",
      "Communal onsen",
      "Yukata included",
      "Breakfast & dinner",
      "Steam-heated rooms",
    ],
    bookingUrl: "https://www.booking.com/affiliate/kyushu-explorer",
    category: "traditional",
    featured: true,
  },
  {
    slug: "nagasaki-kaisou",
    name: "Kaisou Nagasaki",
    location: "Nagasaki City",
    prefecture: "Nagasaki",
    priceRange: "$$$",
    rating: 4.7,
    reviewCount: 542,
    tagline: "Harbour-view luxury with Franco-Japanese fusion",
    description:
      "Perched on Nagasaki's famous Glover Hill, this boutique ryokan marries traditional tatami rooms with Franco-Japanese cuisine reflecting the city's unique history of European influence.",
    image:
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
    amenities: [
      "Harbour views",
      "Rooftop onsen",
      "Franco-Japanese cuisine",
      "Sake sommelier",
      "City walking tour",
    ],
    bookingUrl: "https://www.booking.com/affiliate/kyushu-explorer",
    category: "boutique",
    featured: true,
  },
  {
    slug: "kurokawa-onsen-yama-no-yado",
    name: "Yama no Yado Kurokawa",
    location: "Kurokawa Onsen, Kumamoto",
    prefecture: "Kumamoto",
    priceRange: "$$",
    rating: 4.9,
    reviewCount: 2103,
    tagline: "Japan's most beautiful onsen village hideaway",
    description:
      "Kurokawa Onsen is regularly voted Japan's best hot spring town, and this intimate riverside ryokan sits at its heart — complete with outdoor baths beneath Japanese maples and a celebrated 12-dish kaiseki menu.",
    image:
      "https://images.unsplash.com/photo-1614016957547-ceba73462f37?w=800&q=80",
    amenities: [
      "Riverside rotenburo",
      "12-dish kaiseki",
      "Kurokawa onsen pass",
      "Futon sleeping",
      "Free bicycle hire",
    ],
    bookingUrl: "https://www.booking.com/affiliate/kyushu-explorer",
    category: "traditional",
    featured: true,
  },
  {
    slug: "ibusuki-hakusuikan",
    name: "Hakusuikan",
    location: "Ibusuki, Kagoshima",
    prefecture: "Kagoshima",
    priceRange: "$$$",
    rating: 4.7,
    reviewCount: 965,
    tagline: "Sand-bath onsen overlooking Kagoshima Bay",
    description:
      "Ibusuki's legendary ryokan where guests are buried up to their necks in naturally heated volcanic sand. With Sakurajima perfectly framed from the garden, this is Kagoshima's most iconic stay.",
    image:
      "https://images.unsplash.com/photo-1607619662634-3ac55ec0e216?w=800&q=80",
    amenities: [
      "Sunamushi sand bath",
      "Sakurajima views",
      "Open-air onsen",
      "Kagoshima wagyu dinner",
      "Japanese garden",
    ],
    bookingUrl: "https://www.booking.com/affiliate/kyushu-explorer",
    category: "luxury",
    featured: true,
  },
  {
    slug: "fukuoka-hakata-machiya",
    name: "Hakata Machiya Folk Museum Stay",
    location: "Hakata, Fukuoka",
    prefecture: "Fukuoka",
    priceRange: "$",
    rating: 4.4,
    reviewCount: 318,
    tagline: "Restored Meiji-era merchant townhouse in Hakata",
    description:
      "Stay in a beautifully restored Meiji-era machiya (townhouse) just steps from Kushida Shrine. Communal baths and a shared kitchen make this ideal for solo travellers and couples on a budget.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    amenities: [
      "Restored machiya",
      "Shared Japanese bath",
      "Central Hakata location",
      "Breakfast optional",
      "Bicycle hire",
    ],
    bookingUrl: "https://www.booking.com/affiliate/kyushu-explorer",
    category: "budget",
    featured: false,
  },
];
