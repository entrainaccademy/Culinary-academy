export const courseDetails = [
  {
    slug: "bakery-pastry-diploma",
    title: "Advanced Diploma in Bakery, Pastry & Artisan Bread",
    category: "Upcoming Program",
    duration: "12 months",
    durationDetail: "One year",
    image: "/images/tiramisuimg.webp",
    groups: [
      ["Program Structure", ["6 months of advanced bakery, pastry and artisan bread training", "6 months of industrial internship"]],
      ["Eligibility", ["Minimum Education — SSLC / 10th Standard pass or equivalent", "Minimum Age — 16 years", "Language Ability — Basic understanding of English or Malayalam", "Interest — Genuine interest in bakery, pastry, artisan bread or food business", "Physical Fitness — Medically fit to work in a commercial kitchen", "Experience — No previous bakery or culinary experience required"]],
    ],
  },
  {
    slug: "dessert-workshop",
    title: "Dessert One-Day Workshop",
    category: "One-Day Workshop",
    duration: "1 day",
    image: "/images/dessert.webp",
    groups: [
      ["Canned & Jar Desserts", ["Mango Cream Delight", "Chocolate Biscuit Mousse Jar", "Banana Caramel Crunch Cup", "Dulce Kulfi Dessert"]],
      ["Tiramisu Masterclass", ["Coffee Chocolate Tiramisu", "Mango Tiramisu", "Biscoff Tiramisu", "Classic Italian Tiramisu", "Nutella Tiramisu"]],
      ["Middle Eastern Fusion", ["Qashtuta", "Heba Cake", "Salankatia", "Koushri", "Cheese Bomb Dessert"]],
    ],
  },
  {
    slug: "fried-chicken-masterclass",
    title: "Fried Chicken Master Class",
    category: "One-Day Workshop",
    duration: "1 day",
    image: "https://images.pexels.com/photos/33037756/pexels-photo-33037756.jpeg?auto=compress&cs=tinysrgb&w=1600",
    groups: [["Topics Covered", ["Fried Chicken", "Broasted Chicken", "Zinger Burger", "Versatile Sauces", "Loaded Fries", "Crispy Coating Secrets", "Perfect Frying Techniques", "Business Tips & Machinery Awareness"]]],
  },
  {
    slug: "master-one-week-course",
    title: "Master 1-Week Course Training",
    category: "Intensive Program",
    duration: "1 week",
    image: "/images/cooking.webp",
    groups: [["Topics Covered", ["Broast", "Fried Chicken", "Zinger Burger", "Wraps", "Loaded Fries", "Popcorn Chicken", "Types of Sandwich", "Mojitos"]]],
  },
  {
    slug: "shawarma-shawai",
    title: "Professional Shawarma & Shawai",
    category: "Intensive Program",
    duration: "5 days",
    image: "/images/shawarmastand.jpg",
    brochure: "/brochures/shawarma-shawai-brochure.pdf",
    groups: [["Training Includes", ["4 Types of Shawarma", "3 Types of Shawai", "Fully Hands-On Training", "5-Day Intensive Class"]]],
  },
  {
    slug: "arabian-cuisine-masterclass",
    title: "Arabian Cuisine Chicken Masterclass",
    category: "Intensive Program",
    duration: "5 days",
    image: "/images/arabic_cusinie.jpg",
    brochure: "/brochures/5-DAY%20ARABIAN%20CUISINE%20CHICKEN%20MASTERCLASS%20final.pdf",
    groups: [
      [
        "Specialties & Dishes",
        [
          "Al Faham (3 Varieties)",
          "Ifa Chicken",
          "Chicken Pollichath",
          "Seekh Kebab (Chicken, Mutton, Beef)",
          "Kuzhimandi & Madhooth",
          "Tikka (4 Varieties)",
        ],
      ],
      [
        "Techniques & Practical Training",
        [
          "Authentic Arabian Marinades & Masalas",
          "Commercial Grilling & Mandi Oven Methods",
          "Sauces, Dips & Accompaniments",
          "5-Day Intensive Hands-On Class",
        ],
      ],
    ],
  },
  {
    slug: "loaded-fries-mojito-workshop",
    title: "Loaded Fries & Mojito Workshop",
    category: "One-Day Workshop",
    duration: "1 day",
    image: "/images/loadedwithmojito.png",
    description: "Specially designed for café owners, restaurant entrepreneurs, and food business enthusiasts. Learn commercial production techniques, signature flavor combinations, and practical costing from experienced chefs.",
    note: "This is a demonstration-based workshop (not hands-on training). The chef will explain each recipe and preparation method in detail, along with commercial production techniques and practical business insights.",
    groups: [
      [
        "What You'll Learn",
        [
          "5 Varieties of Refreshing Mojitos",
          "10 Varieties of Loaded Fries",
          "Veg & Non-Veg Loaded Fries",
          "Beef Patty Making",
          "Chicken Patty Making",
          "Cheese Sauces & Toppings",
          "Seasonings & Flavor Combinations",
          "Commercial Tips, Costing & Business Guidance",
        ],
      ],
    ],
  },
  {
    slug: "pizza-burger-workshop",
    title: "Pizza & Burger One-Day Workshop",
    category: "One-Day Workshop",
    duration: "1 day",
    image: "/images/pizza_burger.png",
    description: "Designed for beginners with no prior experience needed. Learn end-to-end artisan pizza crafting and gourmet burger preparation with commercial kitchen secrets.",
    note: "This is a demonstration-based workshop, where our chef will explain every step in detail and answer all your questions.",
    groups: [
      [
        "Pizza Training",
        [
          "Pizza dough making from scratch",
          "Dough kneading and proofing",
          "Pizza sauce preparation",
          "Topping preparation and combinations",
          "Cheese selection and baking techniques",
          "10 varieties of pizza",
        ],
      ],
      [
        "Burger Craft & Business",
        [
          "5 varieties of burgers",
          "Burger patty preparation",
          "Burger sauces and assembling",
          "Basic food costing and business tips",
        ],
      ],
    ],
  },
];

export function getCourseBySlug(slug) {
  return courseDetails.find((course) => course.slug === slug);
}
