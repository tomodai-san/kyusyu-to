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
  body: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "best-time-to-visit-kyushu",
    title: "Best Time to Visit Kyushu: A Month-by-Month Guide",
    excerpt:
      "Cherry blossoms in April, fireflies in June, autumn foliage in November — Kyushu has something spectacular every season. Here's exactly when to go based on what you want to experience.",
    image:
      "https://images.unsplash.com/photo-1698879434759-0a54b36a3233?w=800&q=80",
    author: "Sarah Mitchell",
    date: "2026-03-15",
    readTime: "8 min read",
    category: "Travel Planning",
    tags: ["seasons", "planning", "cherry blossom", "autumn"],
    featured: true,
    body: `
<h2>Spring: March to May</h2>
<p>Spring is widely considered the finest time to visit Kyushu. Cherry blossoms (sakura) arrive earlier here than anywhere else in Japan — typically late March in Fukuoka and Kumamoto, a full week or two before Tokyo. Hanami (flower-viewing) picnics fill Ohori Park and the grounds of Kumamoto Castle, and the crowds, while enthusiastic, are a fraction of what you'd find at Kyoto's famous spots.</p>
<p>April brings ideal hiking conditions on Mt. Aso and in the Kirishima highlands — mild temperatures, long daylight hours, and wildflowers carpeting the caldera rim. May is perhaps the most balanced month of the year: warm enough for light clothing, cool enough for long walks, and free from the summer humidity that descends in June.</p>

<h2>Summer: June to August</h2>
<p>Summer in Kyushu is hot, humid, and spectacular in equal measure. June brings the tsuyu rainy season — a week or two of persistent drizzle that transforms Yakushima's ancient cedar forests into a cathedral of mist and moss. If you're visiting Yakushima, this is actually a great time: the waterfalls are thundering, the greenery is impossibly vivid, and the island's character feels most alive.</p>
<p>July and August are genuinely hot — expect 33–36°C in coastal cities with high humidity. That said, the festivals are extraordinary. Hakata Gion Yamakasa in Fukuoka (July) is one of Japan's most exhilarating summer festivals, with teams of men racing through the city carrying ornate floats weighing up to a tonne. The mountain resorts of Yufuin and Kurokawa Onsen offer cooler retreats. Be aware that late August to September is typhoon season — check forecasts carefully.</p>

<h2>Autumn: September to November</h2>
<p>Autumn rivals spring as Kyushu's best season. The humidity breaks in mid-September and temperatures settle into a perfect 18–25°C range. November's autumn foliage (koyo) transforms the mountain landscapes: Yufuin's basin fills with golden and crimson maples, Kurokawa Onsen's narrow lanes are framed by blazing persimmon trees, and the hiking trails on Kuju and Aso are ablaze with colour.</p>
<p>November also hosts the Saga International Balloon Fiesta — one of the world's largest hot-air balloon events. Hundreds of balloons rise over the Saga plain at dawn in conditions of breathtaking beauty. Book accommodation in Saga months in advance if you plan to attend.</p>

<h2>Winter: December to February</h2>
<p>Kyushu winters are mild by Japanese standards — Fukuoka rarely sees snow, and coastal towns like Beppu and Nagasaki stay above 5°C even in January. This is prime onsen season: soaking in an outdoor rotenburo while steam rises into cold air is one of Japan's great sensory experiences, and the ryokan of Kurokawa and Yufuin are at their most atmospheric.</p>
<p>Nagasaki's Lantern Festival in late January to February is a dazzling spectacle — the city's Chinese heritage comes alive with thousands of red lanterns, traditional performances, and street food stalls. Winter is also the cheapest time to travel, with accommodation rates significantly lower than spring or autumn peak periods.</p>

<h2>Practical Tips for Timing Your Visit</h2>
<ul>
  <li><strong>Cherry blossoms:</strong> Typically last-week March to first-week April in lowland cities; mid-April at mountain elevations. Check the Japan Meteorological Corporation's annual forecasts.</li>
  <li><strong>Autumn foliage:</strong> Usually peaks in Kyushu between late October and mid-November, starting at higher elevations and moving down.</li>
  <li><strong>Typhoon season:</strong> August–September. Most pass without direct impact, but have a contingency plan.</li>
  <li><strong>Golden Week (late April to early May):</strong> Japan's busiest domestic travel period. Book trains and accommodation far in advance, or consider travelling the week before.</li>
  <li><strong>Obon (mid-August):</strong> Another peak domestic travel period — Shinkansen can be fully booked weeks ahead.</li>
</ul>
    `,
  },
  {
    slug: "guide-to-beppu-hells",
    title: "Beppu's 8 Hells: The Complete Visitor Guide",
    excerpt:
      "From a blood-red boiling pool to a pond where crocodiles bathe in geothermal water — Beppu's famous 'Jigoku Meguri' hell circuit is one of Japan's most unique attractions. Here's everything you need to know.",
    image:
      "https://images.unsplash.com/photo-1752917870379-ed88be3c2050?w=800&q=80",
    author: "James Okafor",
    date: "2026-02-28",
    readTime: "10 min read",
    category: "Attractions",
    tags: ["beppu", "onsen", "hells", "oita"],
    featured: true,
    body: `
<h2>What Are the Beppu Hells?</h2>
<p>Beppu produces more geothermal hot spring water than anywhere else in Japan — roughly 130,000 kilolitres per day from over 2,000 individual vents. Most of this water is channelled into the city's legendary network of bathhouses, but eight springs are so extreme in temperature, colour, or behaviour that they were designated as tourist attractions rather than baths. These are the Jigoku, or "Hells".</p>
<p>The Hells are spread across two clusters: six in the Kannawa district (a 15-minute bus ride from Beppu station) and two in the quieter Shibaseki area about 2km further north. A combined entry ticket covers all eight and is far better value than paying individually.</p>

<h2>The Eight Hells, Explained</h2>
<p><strong>Umi Jigoku (Sea Hell)</strong> is the most iconic — a cobalt blue pool that looks impossibly tropical despite bubbling at 98°C. The vivid colour comes from dissolved iron sulphate. Lotus flowers bloom on the surface in summer in defiance of the heat. This is usually everyone's favourite.</p>
<p><strong>Oniishibozu Jigoku (Shaven Head Hell)</strong> features large grey mud bubbles rising and popping with a satisfying glop, said to resemble the shaved heads of Buddhist monks. <strong>Shiraike Jigoku (White Pond Hell)</strong> is an eerily beautiful milky-white pool with a collection of tropical fish in the warm adjacent tanks. <strong>Kamado Jigoku (Cooking Pot Hell)</strong> has multiple pools at different temperatures and a theatrical demon mask at the entrance — children love it.</p>
<p><strong>Oniyama Jigoku (Crocodile Hell)</strong> is home to over 100 crocodiles kept in pens warmed by geothermal water — bizarre, slightly unsettling, and utterly memorable. <strong>Yama Jigoku (Mountain Hell)</strong> is the smallest and least impressive, with hippos and flamingos in geothermally heated enclosures. <strong>Chinoike Jigoku (Blood Pond Hell)</strong> is perhaps the most dramatic — a vivid red pool caused by iron oxide and magnesium chloride, with a hellish landscape of red-stained rocks. Finally, <strong>Tatsumaki Jigoku (Waterspout Hell)</strong> features a geyser that erupts every 30–40 minutes, shooting boiling water 50 metres into the air before a stone arch caps it.</p>

<h2>Practical Information</h2>
<ul>
  <li><strong>Combined ticket:</strong> ¥2,200 for adults, ¥1,000 for children. Covers all 8 hells. Worth it if you plan to see more than 3.</li>
  <li><strong>Opening hours:</strong> Most Hells open 8am–5pm daily. Tatsumaki Jigoku sometimes has extended evening hours.</li>
  <li><strong>Time needed:</strong> Allow 3–4 hours for all eight at a leisurely pace, including the taxi or bus between Kannawa and Shibaseki clusters.</li>
  <li><strong>Getting there:</strong> Take the Kamewa Bus from Beppu station (about 20 minutes, ¥380). Taxis between the two clusters cost around ¥800.</li>
</ul>

<h2>After the Hells: Kannawa's Steam District</h2>
<p>The Kannawa district surrounding the northern Hells is one of the most atmospheric neighbourhoods in all of Japan. Geothermal steam vents from beneath the streets, drifting through the lanes at dusk in a scene that feels genuinely otherworldly. The area has excellent onsen (the public Hyotan Onsen is the best in Beppu), a handful of steam-cooked food stalls, and some of the city's most characterful ryokan.</p>
<p>Jigoku-mushi — "hell steaming" — is Beppu's unique cooking tradition. Restaurants use the natural geothermal steam to cook vegetables, seafood, puddings, and even eggs. Several spots around Kannawa offer hell-steaming workshops or set meals. The results are extraordinary: the steam cooking method preserves flavour and creates textures unlike anything achieved by conventional methods.</p>
    `,
  },
  {
    slug: "riding-yufuin-no-mori-train",
    title: "Riding the Yufuin no Mori: Japan's Most Scenic Train Journey",
    excerpt:
      "The emerald-green Yufuin no Mori limited express is one of Japan's most beloved scenic trains. Here's why this 90-minute ride through forested mountains is worth booking months in advance.",
    image:
      "https://images.unsplash.com/photo-1774156702321-85b8073ddce8?w=800&q=80",
    author: "Emily Chen",
    date: "2026-01-20",
    readTime: "6 min read",
    category: "Transport",
    tags: ["trains", "yufuin", "scenic", "japan rail pass"],
    featured: true,
    body: `
<h2>About the Train</h2>
<p>The Yufuin no Mori (Forest of Yufuin) is a limited express service operated by JR Kyushu between Hakata station in Fukuoka and Yufuin, continuing to Beppu. Introduced in 1989, it was designed by acclaimed industrial designer Eiji Mitooka and has since become an icon of Japanese rail travel — frequently appearing in tourism campaigns and consistently ranked among the country's most beautiful trains.</p>
<p>The train's distinctive emerald green body with a wood-panelled interior draws its aesthetic from the forested highland basin it serves. Step on board and you're surrounded by warm timber fittings, high-backed seats with headrest covers, and large panoramic windows designed to frame the landscape rather than simply let it pass. The saloon car at the front — all curved glass and armchairs — is worth visiting even if you're seated elsewhere.</p>

<h2>The Route</h2>
<p>The Hakata–Yufuin segment takes approximately 2 hours 10 minutes. The first half runs through Fukuoka's suburban sprawl and the rolling hills of central Fukuoka Prefecture, pleasant but unremarkable. The journey transforms as the train climbs into Oita Prefecture through the Hita valley — the line passes alongside the Chikugo River, curves through tunnel after tunnel, and emerges into a landscape of forested gorges and rice terraces that feels entirely separate from urban Japan.</p>
<p>The approach to Yufuin is the most dramatic section. The train descends through mountain passes with sweeping views of the Yufuin basin below — on clear mornings, the valley is filled with a sea of mist from which the twin peaks of Yufu-dake rise like islands. The arrival into Yufuin station, a beautifully crafted wooden building designed by Mitooka, feels like a proper arrival moment.</p>

<h2>What to Expect On Board</h2>
<p>The Yufuin no Mori has a small café counter serving Kyushu-themed snacks, bento boxes, and the train's signature soft-serve ice cream — a seasonal flavour inspired by the region. The bento boxes sell out quickly; the station kiosks at Hakata often have Yufuin-specific options worth picking up before boarding.</p>
<p>The train staff typically perform a brief narration in Japanese pointing out scenic highlights. An English leaflet with key points is available on request. Photography is actively encouraged, and the saloon car fills up quickly at departure — if you want a good shot from the front windows, head there in the first 20 minutes before seats fill.</p>

<h2>Booking and Tickets</h2>
<p>The Yufuin no Mori runs three or four times daily in each direction. Seats are reserved-only — walk-on is not possible. Book through the JR Kyushu app, at any JR ticket window, or via the JR Pass exchange counters on arrival in Japan. The service is covered by the JR Kyushu Rail Pass and the national JR Pass, with only the limited express supplement required for pass holders.</p>
<ul>
  <li><strong>Book as early as possible:</strong> Seats sell out weeks ahead during Golden Week, autumn foliage season, and weekends year-round.</li>
  <li><strong>Best seats:</strong> Odd-numbered seats on the left side of the train face the most dramatic mountain views on the Hakata–Yufuin direction.</li>
  <li><strong>Return journey:</strong> The Yufuin no Mori continues to Beppu — consider a one-way ticket to Yufuin and continuing by bus or the local train to Beppu for onward Kyushu exploration.</li>
</ul>
    `,
  },
  {
    slug: "how-to-experience-ryokan",
    title: "How to Stay in a Ryokan: Etiquette, Tips & What to Expect",
    excerpt:
      "First-time ryokan guests often feel unsure about etiquette: when to wear yukata, how to behave in communal baths, what a kaiseki meal involves. This guide covers everything so you can relax and enjoy.",
    image:
      "https://images.unsplash.com/photo-1759310708340-90eba93e94e4?w=800&q=80",
    author: "Sarah Mitchell",
    date: "2025-12-10",
    readTime: "12 min read",
    category: "Culture",
    tags: ["ryokan", "etiquette", "onsen", "culture"],
    featured: false,
    body: `
<h2>What Is a Ryokan?</h2>
<p>A ryokan is a traditional Japanese inn, a hospitality form that has been refined over many centuries. At their core, ryokan offer tatami-floored rooms, futon bedding laid out by staff in the evening, communal hot spring baths (onsen), and a multi-course kaiseki dinner and breakfast, both typically served in your room. The experience is as much cultural immersion as accommodation — staying in a fine ryokan is often cited by travellers as one of the most memorable nights of their lives in Japan.</p>
<p>Kyushu, with its extraordinary concentration of hot spring towns — Beppu, Yufuin, Kurokawa, Ibusuki — has some of Japan's finest ryokan. Prices range from ¥15,000 to ¥80,000+ per person per night including dinner and breakfast, with quality generally reflecting the price.</p>

<h2>Check-In Etiquette</h2>
<p>Arrive at the time stated in your booking — ryokan kitchens work to precise schedules and dinner time is often pre-arranged. Remove your shoes at the entrance (genkan) and step up into the inn in socks or slippers provided. You'll be greeted and escorted to your room, often with a cup of matcha and a seasonal sweet while a staff member explains the facilities and meal times.</p>
<p>The yukata (light cotton robe) folded in your room is worn for the duration of your stay — to the baths, to dinner, around the corridors, and to bed. For men: wrap left side over right. A thicker tanzen (jacket) may be provided for cooler evenings. Wearing the yukata correctly signals you're relaxed and settled in; it's a small courtesy that ryokan staff appreciate.</p>

<h2>Using the Onsen</h2>
<p>Most ryokan have sex-segregated communal baths (daiyoku) and some offer private baths (kashikiri-buro) bookable by the hour — useful for couples or those with tattoos, which are still prohibited in many public areas. The protocol is consistent across all: shower and wash thoroughly at the individual stations before entering the bath, bring nothing into the water (no towels, swimsuits, or soap), and keep your voice low. A small hand towel can be folded and rested on your head or left on the bath's edge.</p>
<p>Outdoor baths (rotenburo) are the most sought-after experience — soaking in mineral-rich water under open sky, often surrounded by forest or mountain views. The best time is early morning, when mist hangs over the water and the light is extraordinary. Most ryokan open their baths from late evening until mid-morning, with a brief cleaning closure around 10am–3pm.</p>

<h2>Kaiseki Dinner</h2>
<p>Kaiseki is Japan's haute cuisine tradition — a multi-course progression of small, exquisitely prepared dishes that unfolds over 90 minutes to two hours. A typical ryokan kaiseki might run to 8–12 courses, moving through seasonal appetisers, sashimi, a grilled course, a simmered dish, a steamed course, rice, pickles, and dessert. Each component reflects the season, the local region, and the chef's philosophy.</p>
<p>Dinner is typically served in your room by a dedicated attendant, though some ryokan have moved to private dining rooms. Expect food you can't identify at first — ask your attendant if curious, they're invariably pleased to explain. Sake or shochu pairs beautifully; both can usually be ordered by the glass. Eat at whatever pace feels comfortable: there's no rush, and this is the centerpiece of the ryokan experience.</p>

<h2>Practical Tips</h2>
<ul>
  <li><strong>Tattoos:</strong> Bring a tattoo cover-up sleeve if you have visible tattoos — many ryokan's communal baths remain prohibited. Private baths are usually unrestricted; ask when booking.</li>
  <li><strong>Dietary requirements:</strong> Inform the ryokan of any allergies or restrictions at least 48 hours before arrival. Most can accommodate with notice.</li>
  <li><strong>Tipping:</strong> Not expected in Japan. Outstanding service is acknowledged by writing a short note of thanks, which staff genuinely treasure.</li>
  <li><strong>Futon:</strong> Staff will lay it out while you're at dinner. Leave it folded to one side in the morning — it will be put away while you're at breakfast.</li>
  <li><strong>Checkout:</strong> Usually 10am–11am. Settle any additional charges (drinks, private bath fees) at the front desk. Shoes will be waiting at the entrance, often polished.</li>
</ul>
    `,
  },
  {
    slug: "fukuoka-food-guide",
    title: "Fukuoka Food Guide: 15 Must-Try Dishes and Where to Find Them",
    excerpt:
      "Fukuoka is arguably Japan's best food city. From the original tonkotsu ramen at midnight yatai stalls to fresh oysters at Yanagibashi Market, here are 15 dishes you absolutely must eat.",
    image:
      "https://images.unsplash.com/photo-1605088298038-2876387a80c1?w=800&q=80",
    author: "Kenji Nakamura",
    date: "2025-11-05",
    readTime: "9 min read",
    category: "Food & Drink",
    tags: ["fukuoka", "food", "ramen", "hakata"],
    featured: false,
    body: `
<h2>Hakata Ramen — The Original Tonkotsu</h2>
<p>Tonkotsu ramen was born in Fukuoka and the city's version remains the benchmark. The broth is made by boiling pork bones at high heat for many hours until it turns creamy white and intensely rich — an emulsified porky depth that bowls from other regions rarely match. Hakata-style is served with thin, straight noodles, chashu pork, a soft-boiled egg, green onions, and pickled ginger. The key distinguishing feature is kaedama: when your noodles are almost finished, you call out and a fresh portion arrives in your remaining broth for a fraction of the original price.</p>
<p>The best bowl in the city is a matter of fierce local debate. Ichiran and Ippudo are the internationally famous chains — both began in Fukuoka — but the city's most characterful ramen comes from small independents: Shin-Shin near Tenjin, Shin Miyabi in Hakata, or any of the late-night yatai stalls along the Naka River.</p>

<h2>Yatai: Fukuoka's Street Food Stalls</h2>
<p>The yatai are Fukuoka's most distinctive eating institution — open-air wooden stalls that appear along the Naka River and Tenjin streets from dusk until the early hours, serving ramen, yakitori, oden, and gyoza under glowing lanterns. There are around 150 licensed yatai remaining in the city, down from several thousand in the postwar decades but still the largest concentration in Japan.</p>
<p>The etiquette is simple: take a seat at the counter (most fit only 8–10 people), order whatever the stall specialises in, and stay for as long as you like. Conversation between strangers is normal and actively encouraged. The experience is quintessentially Fukuoka — convivial, unpretentious, and only possible here.</p>

<h2>Mentaiko: The City's Signature Ingredient</h2>
<p>Mentaiko — spicy marinated pollock roe — was developed in Fukuoka in the 1940s by a Korean-Japanese entrepreneur and has become one of Japan's most beloved condiments. The original shop, Fukuya, still operates and remains one of the best places to buy it as a souvenir. Mentaiko appears everywhere in Fukuoka: tossed into pasta, spread on onigiri, mixed into potato salad, stuffed into tamagoyaki (rolled omelette), and served as a standalone side dish with rice. The mild pink variety (tarako) is available if you find the spiced version too intense.</p>

<h2>More Essential Fukuoka Dishes</h2>
<ul>
  <li><strong>Mizutaki:</strong> Fukuoka's signature hot pot — a delicate chicken broth collagen-rich and clean, served with chicken pieces, tofu, and vegetables. Dip in ponzu and sesame sauce.</li>
  <li><strong>Motsu nabe:</strong> Offal hot pot with a rich soy or miso-based broth, garlic, and chives. A local winter staple and far more approachable than it sounds.</li>
  <li><strong>Hakata gyoza:</strong> Pan-fried dumplings with thin, crispy skins — smaller and crispier than their Kyoto or Osaka counterparts.</li>
  <li><strong>Kawara soba:</strong> Unique to the Kitakyushu area — thin buckwheat noodles served on a hot roof tile, topped with chashu and egg.</li>
  <li><strong>Fresh oysters:</strong> Hakata Bay oysters, available October through March, are among Japan's finest — especially from the stands at Yanagibashi Rengo Market.</li>
  <li><strong>Kasutera:</strong> The Nagasaki-origin sponge cake sold throughout Kyushu, but Fukuoka's Bunmeido shop near Hakata station is the best place to buy it as an edible souvenir.</li>
</ul>

<h2>Where to Eat: Neighbourhoods to Know</h2>
<p>The <strong>Nakasu</strong> island district, surrounded by the Naka and Hakata rivers, is the yatai heartland — stalls line the western bank from around 6pm. <strong>Tenjin</strong> is Fukuoka's upscale dining and shopping hub, with everything from Michelin-starred kaiseki to excellent ramen and standing sushi bars. <strong>Yanagibashi Rengo Market</strong>, often called "Hakata's Kitchen," is a covered produce market worth visiting in the morning for fresh seafood, pickles, and prepared foods. The <strong>Hakata station</strong> basement food halls are formidably good and worth at least an hour of exploration even if you're simply transiting.</p>
    `,
  },
  {
    slug: "yakushima-hiking-guide",
    title: "Yakushima Island: A Hiker's Complete Guide",
    excerpt:
      "Ancient cedar trees thousands of years old, cloud-shrouded mountain peaks, and crystal rivers — Yakushima is a UNESCO World Heritage wilderness unlike anywhere else. Here's how to plan your visit.",
    image:
      "https://images.unsplash.com/photo-1704686508379-8ee92cad45f6?w=800&q=80",
    author: "James Okafor",
    date: "2025-10-18",
    readTime: "14 min read",
    category: "Hiking",
    tags: ["yakushima", "hiking", "kagoshima", "UNESCO"],
    featured: false,
    body: `
<h2>About Yakushima</h2>
<p>Yakushima is a roughly circular island 60km in circumference, located 60km south of Kagoshima. Its interior rises dramatically to Miyanoura-dake (1,936m), the highest peak in Kyushu, and the island receives up to 10,000mm of annual rainfall in its mountain core — making it one of the wettest places on Earth and producing a forest of extraordinary density and antiquity. The UNESCO World Heritage designation in 1993 protects the island's interior, where Yakusugi cedars (Cryptomeria japonica) of over 1,000 years grow in groves that feel genuinely prehistoric.</p>
<p>Yakushima is the island believed to have inspired the setting of Studio Ghibli's Princess Mononoke. Walking through the Shiratani Unsuikyo ravine — its mossy boulders and twisted ancient trees exactly matching Miyazaki's hand-painted backgrounds — the comparison becomes immediately obvious. The island also has a permanent population of Yakushima macaques and sika deer habituated to humans, often seen grazing roadside with complete indifference to observers.</p>

<h2>Top Trails</h2>
<p><strong>Jomon Sugi Trail</strong> is the island's most famous hike — a 22km return journey to the Jomon Cedar, a tree estimated to be between 2,170 and 7,200 years old. The trail begins at Arakawa trailhead (accessed by shuttle bus from Yakusugi Land, 4am–5am departures in high season) and takes 8–10 hours return. The path passes through dense sugi forest, crosses wooden boardwalks over ravines, and climbs steadily before revealing the enormous, gnarled trunk of Jomon Cedar — larger and more otherworldly than photographs suggest. Start early, carry rain gear, and bring sufficient food and water; there are no facilities on the trail.</p>
<p><strong>Shiratani Unsuikyo Ravine</strong> is more accessible — a 3–4 hour loop through the island's most cinematic moss-forest landscape. Multiple trail options cater to different fitness levels, from an easy 40-minute valley walk to a full traverse connecting to the Jomon Sugi trail. The moss glows electric green in rain and morning light; visiting during light drizzle is actively recommended.</p>
<p><strong>Miyanoura-dake Summit</strong> is the island's ultimate challenge — a 12-hour return hike to the highest peak in Kyushu, requiring one night at the mountain hut (Ishizuka Hut, book in advance). The views from the summit across the Pacific, with the island's other peaks below, are extraordinary on clear days.</p>

<h2>When to Visit</h2>
<p>Yakushima can be visited year-round, but each season has distinct character. <strong>March to May</strong> brings mild temperatures, spring wildflowers on the upper peaks, and acceptable rain levels. <strong>June and July</strong> (tsuyu) see the highest rainfall — the moss forest is at its most intense and otherworldly, but be prepared for wet conditions. <strong>August to October</strong> is the peak visitor season — clearer skies, higher temperatures, and busy trails. <strong>November to February</strong> offers quieter trails and the possibility of snow on the upper peaks, but some mountain huts close and ferry schedules reduce.</p>

<h2>Getting to Yakushima</h2>
<ul>
  <li><strong>Ferry from Kagoshima:</strong> The Toppy high-speed ferry takes approximately 2 hours (¥8,100 one way) and is the most common access route. Book ahead in high season — it sells out.</li>
  <li><strong>Slow ferry:</strong> The cargo-passenger ferry Anei takes 4 hours but is significantly cheaper (¥3,000) and has reclining seats. A good option if you're not in a hurry.</li>
  <li><strong>Flight from Kagoshima:</strong> 35 minutes (¥14,000–18,000). Useful if ferries are booked out, but baggage limits are strict on the small propeller aircraft.</li>
</ul>

<h2>Practical Tips</h2>
<ul>
  <li><strong>Rain gear:</strong> Non-negotiable. Pack a quality waterproof jacket and trousers regardless of the forecast. The weather changes within minutes.</li>
  <li><strong>Trailhead shuttles:</strong> Private cars cannot access Arakawa trailhead during peak season (March–November). Shuttle buses run from Yakusugi Land from around 4am. Get there early or you'll miss the first buses.</li>
  <li><strong>Yakusugi Museum and Yakusugi Land:</strong> Both worth a half-day visit to understand the island's ecology and see ancient cedar specimens without the full-day commitment of the Jomon Sugi hike.</li>
  <li><strong>Accommodation:</strong> Book accommodation in Miyanoura (the main port town) or Anbo well in advance. Options are limited and demand is high from April through October.</li>
  <li><strong>Access fee:</strong> A ¥1,000 voluntary conservation fee (Yakushima Kankyou Bunka Mura) is requested on arrival — pay it. The island's preservation depends on visitor contributions.</li>
</ul>
    `,
  },
];
