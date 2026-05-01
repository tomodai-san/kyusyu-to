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
  {
    slug: "saga",
    name: "Saga",
    prefecture: "Saga Prefecture",
    tagline: "Ceramics, Castles & the World's Largest Balloon Fiesta",
    description:
      "Saga is Kyushu's quiet achiever — birthplace of Japanese porcelain (Arita and Imari ware), home to the fairytale Karatsu Castle perched above the sea, and host to the Saga International Balloon Fiesta, one of the world's largest hot-air balloon events held each November.",
    image:
      "https://images.unsplash.com/photo-1577202282409-ce39d1304996?w=1200&q=80",
    highlights: [
      "Saga International Balloon Fiesta",
      "Karatsu Castle",
      "Arita & Imari pottery villages",
      "Yoshinogari Historical Park",
      "Ariake Sea mud flat tours",
    ],
    bestTime: "November (Balloon Fiesta), March–April",
    travelTime: "1h from Fukuoka by train",
    featured: false,
  },
  {
    slug: "oita",
    name: "Oita",
    prefecture: "Oita Prefecture",
    tagline: "Stone Buddhas, Castle Towns & Hidden Highland Gems",
    description:
      "Beyond Beppu's steaming hells and Yufuin's misty valleys, Oita Prefecture hides remarkable treasures: 59 National Treasure stone Buddha carvings at Usuki, the beautifully preserved castle town of Kitsuki, and ancient Buddhist temples scattered across the mystical Kunisaki Peninsula.",
    image:
      "https://images.unsplash.com/photo-1627669487757-907486fc1222?w=1200&q=80",
    highlights: [
      "Usuki Stone Buddhas (National Treasure)",
      "Kitsuki castle town",
      "Kunisaki Peninsula temples",
      "Nakatsu Castle",
      "Highland hiking and waterfalls",
    ],
    bestTime: "Spring and autumn",
    travelTime: "2.5h from Fukuoka by limited express",
    featured: false,
  },
  {
    slug: "miyazaki",
    name: "Miyazaki",
    prefecture: "Miyazaki Prefecture",
    tagline: "Subtropical Coast, Ancient Myths & Wild Nature",
    description:
      "Where Japan's gods are said to have descended from heaven, Miyazaki dazzles with the jungle gorge of Takachiho, Aoshima's ocean torii gate surrounded by wave-carved rocks, and the wild Nichinan coastline. It is Kyushu's sunniest and most subtropical destination.",
    image:
      "https://images.unsplash.com/photo-1698794638761-81d07e76de60?w=1200&q=80",
    highlights: [
      "Takachiho Gorge & rowing boats",
      "Aoshima Island torii gate",
      "Nichinan Coastline",
      "Kirishima-Kinkowan National Park",
      "Udo Shrine (sea-cliff cave)",
    ],
    bestTime: "April–June, October–November",
    travelTime: "1.5h from Fukuoka by plane, 3h by train",
    featured: false,
  },
  {
    slug: "aso",
    name: "Mount Aso",
    prefecture: "Kumamoto Prefecture",
    tagline: "Japan's Largest Active Volcano & Infinite Caldera",
    description:
      "Mt. Aso's outer caldera is so vast it contains an entire inhabited town of 50,000 people. Hike the smouldering Nakadake crater rim, gallop across Kusasenri's grassy plains, and end the day soaking in Kurokawa Onsen — Japan's most atmospheric hot spring village.",
    image:
      "https://images.unsplash.com/photo-1698879434759-0a54b36a3233?w=1200&q=80",
    highlights: [
      "Nakadake active crater rim",
      "Kusasenri grassland plateau",
      "Daikanbo panoramic lookout",
      "Aso Volcano Museum",
      "Kurokawa Onsen village",
    ],
    bestTime: "May–June, October–November",
    travelTime: "1.5h from Kumamoto by bus",
    featured: false,
  },
];
