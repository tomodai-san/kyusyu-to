export interface Destination {
  slug: string;
  name: string;
  prefecture: string;
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
  bestTime: string;
  travelTime: string;
  featured: boolean;
}

export const destinations: Destination[] = [
  {
    slug: "fukuoka",
    name: "Fukuoka",
    prefecture: "Fukuoka Prefecture",
    tagline: "Kyushu's Vibrant Gateway City",
    description:
      "Fukuoka is Kyushu's largest city, blending ultramodern architecture with ancient shrines. Famous for its ramen, fresh seafood, and the UNESCO-listed Hakata culture, it's the perfect entry point to explore the island.",
    image:
      "https://images.unsplash.com/photo-1605088298038-2876387a80c1?w=1200&q=80",
    highlights: [
      "Hakata Ramen",
      "Canal City Hakata",
      "Ohori Park",
      "Fukuoka Castle ruins",
      "Yatai street food stalls",
    ],
    bestTime: "March–May, October–November",
    travelTime: "1.5h from Tokyo by plane",
    featured: true,
  },
  {
    slug: "nagasaki",
    name: "Nagasaki",
    prefecture: "Nagasaki Prefecture",
    tagline: "Where East Meets West",
    description:
      "A city shaped by centuries of foreign trade, Nagasaki's charming hillside streets, historic churches, and emotional peace memorials create an experience unlike anywhere else in Japan.",
    image:
      "https://images.unsplash.com/photo-1624517608488-05c8419ec931?w=1200&q=80",
    highlights: [
      "Peace Memorial Park",
      "Glover Garden",
      "Dejima historic island",
      "Nagasaki Lantern Festival",
      "Champon noodles",
    ],
    bestTime: "October–April",
    travelTime: "2h from Fukuoka by Shinkansen",
    featured: true,
  },
  {
    slug: "beppu",
    name: "Beppu",
    prefecture: "Oita Prefecture",
    tagline: "The Hot Spring Capital of Japan",
    description:
      "Beppu is famous for its otherworldly 'hells' — boiling, colourful hot spring pools — and an almost limitless variety of onsen experiences, from sand baths to steam baths to mud pools.",
    image:
      "https://images.unsplash.com/photo-1752917870379-ed88be3c2050?w=1200&q=80",
    highlights: [
      "Beppu Hells (Jigoku Meguri)",
      "Sand bath onsen",
      "Kannawa steam baths",
      "Monkey Mountain",
      "Beppu Kitahama Beach",
    ],
    bestTime: "Year-round (winter especially atmospheric)",
    travelTime: "2.5h from Fukuoka by limited express",
    featured: true,
  },
  {
    slug: "kumamoto",
    name: "Kumamoto",
    prefecture: "Kumamoto Prefecture",
    tagline: "Castles, Ramen & Sacred Volcanoes",
    description:
      "Home to one of Japan's finest castle keeps and the gateway to the massive Aso caldera, Kumamoto blends samurai history with jaw-dropping natural landscapes.",
    image:
      "https://images.unsplash.com/photo-1705695464723-56195396666b?w=1200&q=80",
    highlights: [
      "Kumamoto Castle",
      "Mt. Aso caldera",
      "Suizenji Jojuen garden",
      "Kumamoto ramen",
      "Amakusa islands",
    ],
    bestTime: "April (cherry blossom), October–November",
    travelTime: "1.5h from Fukuoka by Shinkansen",
    featured: true,
  },
  {
    slug: "kagoshima",
    name: "Kagoshima",
    prefecture: "Kagoshima Prefecture",
    tagline: "The Naples of the East",
    description:
      "Overlooked by the perpetually smoking Sakurajima volcano, Kagoshima is a spirited city with excellent black pork cuisine, the gateway to subtropical Yakushima Island, and the proud Satsuma samurai legacy.",
    image:
      "https://images.unsplash.com/photo-1704686508379-8ee92cad45f6?w=1200&q=80",
    highlights: [
      "Sakurajima volcano",
      "Sengan-en garden",
      "Yakushima Island",
      "Black Berkshire pork",
      "Satsuma shochu",
    ],
    bestTime: "October–May (avoid typhoon season)",
    travelTime: "1.5h from Fukuoka by Shinkansen",
    featured: true,
  },
  {
    slug: "yufuin",
    name: "Yufuin",
    prefecture: "Oita Prefecture",
    tagline: "Romantic Onsen Village in the Mountains",
    description:
      "Nestled in a misty highland basin beneath twin peaks, Yufuin is Japan's most beloved onsen resort village — think boutique ryokan, morning lake mist, artisan galleries, and unparalleled tranquillity.",
    image:
      "https://images.unsplash.com/photo-1624517608599-7ee67458a3da?w=1200&q=80",
    highlights: [
      "Kinrinko Lake morning mist",
      "Yufuin Floral Village",
      "Boutique ryokan onsen",
      "Local craft shops",
      "Yunotsubo Kaido street",
    ],
    bestTime: "November (autumn foliage), March (spring)",
    travelTime: "1.5h from Fukuoka by Yufuin no Mori train",
    featured: false,
  },
];
