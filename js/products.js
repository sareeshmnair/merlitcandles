/**
 * ============================================================
 *  MyCandle — Product Database
 *  Edit this file to add, remove, or update products.
 *  The website will automatically reflect your changes.
 * ============================================================
 *
 *  HOW TO ADD A PRODUCT:
 *  Copy one block below, paste it at the end of the array,
 *  fill in the details, and save the file.
 *
 *  FIELDS:
 *  id         — unique number, never repeat
 *  name       — product name shown on site
 *  category   — used for filtering (must match CATEGORIES list)
 *  scent      — short scent summary shown on card
 *  price      — display price e.g. "$24.00"
 *  burnTime   — e.g. "45–50 hrs"
 *  size       — e.g. "8 oz / 227g"
 *  wax        — wax type
 *  wick       — wick type
 *  notes      — scent notes e.g. "Vanilla · Sandalwood · Amber"
 *  description— longer paragraph shown in detail modal
 *  image      — path of the MAIN image e.g. "images/vanilla-dusk.jpg"
 *               use "" to show the default candle placeholder
 *  imageCount — number of images for this product (including the main one).
 *               Extra images must be named: vanilla-dusk-1.jpg, vanilla-dusk-2.jpg, etc.
 *               Set to 1 (or omit) if there is only one image.
 *               Example: image="images/vanilla-dusk.jpg", imageCount=3
 *                        → loads vanilla-dusk.jpg, vanilla-dusk-1.jpg, vanilla-dusk-2.jpg
 *  badge      — optional label: "Best Seller" | "New" | "Premium" | "" for none
 *  amazonLink — optional Amazon product URL. If set, a "View on Amazon" button
 *               appears in the popup. Leave as "" to hide the button.
 *               e.g. "https://amazon.com/dp/XXXXXXXXXX"
 *  featured   — true = appears on homepage featured section
 *  inStock    — true/false
 * ============================================================
 */

const CATEGORIES = [
  "All",
  "Warm & Cozy",
  "Floral & Fresh",
  "Fresh & Zesty",
  "Dark & Luxurious",
  "Earthy & Fresh",
  "Floral & Romantic",
  "Seasonal",
  "Gift Sets",
];

const PRODUCTS = [
  {
    id: 1,
    name: "Vanilla Dusk",
    category: "Warm & Cozy",
    scent: "Warm vanilla, sandalwood & a hint of amber",
    price: "$24.00",
    burnTime: "45–50 hrs",
    size: "8 oz / 227g",
    wax: "100% Natural Soy",
    wick: "Lead-free Cotton",
    notes: "Vanilla · Sandalwood · Amber",
    description: "A comforting blend of creamy Madagascar vanilla and warm sandalwood that wraps you in a cosy, familiar embrace. Perfect for evenings and quiet moments at home.",
    image: "images/vanilla-dusk.jpg",
    imageCount: 3,   // ← has vanilla-dusk.jpg + vanilla-dusk-1.jpg + vanilla-dusk-2.jpg
    badge: "Best Seller",
    featured: true,
    inStock: true,
    amazonLink: "",
  },
  {
    id: 2,
    name: "Lavender Mist",
    category: "Floral & Fresh",
    scent: "French lavender, soft musk & eucalyptus",
    price: "$22.00",
    burnTime: "40–45 hrs",
    size: "8 oz / 227g",
    wax: "100% Natural Soy",
    wick: "Lead-free Cotton",
    notes: "Lavender · Eucalyptus · Musk",
    description: "A serene lavender escape inspired by sun-drenched Provençal fields. Layered with soft musk and a breath of eucalyptus for a clean, calming atmosphere.",
    image: "images/lavender-mist.jpg",
    imageCount: 1,   // ← only one image, no gallery shown
    badge: "",
    featured: true,
    inStock: true,
    amazonLink: "",
  },
  {
    id: 3,
    name: "Citrus Grove",
    category: "Fresh & Zesty",
    scent: "Sicilian lemon, orange blossom & green tea",
    price: "$22.00",
    burnTime: "40–45 hrs",
    size: "8 oz / 227g",
    wax: "100% Natural Soy",
    wick: "Lead-free Cotton",
    notes: "Lemon · Orange Blossom · Green Tea",
    description: "A bright, energising burst of sun-ripened citrus and delicate orange blossom, finished with a green tea freshness. Ideal for kitchens and workspaces.",
    image: "images/citrus-grove.jpg",
    badge: "New",
    featured: true,
    inStock: true,
  },
  {
    id: 4,
    name: "Midnight Oud",
    category: "Dark & Luxurious",
    scent: "Arabian oud, rose petals & dark musk",
    price: "$28.00",
    burnTime: "50–55 hrs",
    size: "10 oz / 283g",
    wax: "100% Natural Soy",
    wick: "Lead-free Cotton",
    notes: "Oud · Rose · Dark Musk",
    description: "An opulent, smoky oud candle with rose petal heart notes and a deep dark musk base. A statement scent for sophisticated spaces and evening rituals.",
    image: "images/midnight-oud.jpg",
    badge: "Premium",
    featured: true,
    inStock: true,
  },
  {
    id: 5,
    name: "Forest Rain",
    category: "Earthy & Fresh",
    scent: "Cedarwood, petrichor & pine needle",
    price: "$24.00",
    burnTime: "45–50 hrs",
    size: "8 oz / 227g",
    wax: "100% Natural Soy",
    wick: "Lead-free Cotton",
    notes: "Cedarwood · Pine · Petrichor",
    description: "The smell of rain on a forest floor — wild cedarwood, fresh pine needle and the unmistakable petrichor of earth after a shower. Grounding and refreshing.",
    image: "images/forest-rain.jpg",
    badge: "",
    featured: false,
    inStock: true,
  },
  {
    id: 6,
    name: "Rose Bloom",
    category: "Floral & Romantic",
    scent: "Damask rose, peony & white jasmine",
    price: "$24.00",
    burnTime: "45–50 hrs",
    size: "8 oz / 227g",
    wax: "100% Natural Soy",
    wick: "Lead-free Cotton",
    notes: "Rose · Peony · Jasmine",
    description: "A romantic bouquet of freshly-cut damask rose and airy peony, softened with the sweet whisper of white jasmine. Elegant and timeless.",
    image: "images/rose-bloom.jpg",
    badge: "",
    featured: false,
    inStock: true,
  },
  {
    id: 7,
    name: "Spiced Ember",
    category: "Warm & Cozy",
    scent: "Cinnamon, clove & toasted oak",
    price: "$24.00",
    burnTime: "45–50 hrs",
    size: "8 oz / 227g",
    wax: "100% Natural Soy",
    wick: "Lead-free Cotton",
    notes: "Cinnamon · Clove · Oak",
    description: "Inspired by a crackling fireplace on a cold night. Warm cinnamon and clove spice swirl over a base of toasted oak for a deeply comforting experience.",
    image: "images/spiced-ember.jpg",
    badge: "Seasonal",
    featured: false,
    inStock: true,
  },
  {
    id: 8,
    name: "Ocean Breeze",
    category: "Fresh & Zesty",
    scent: "Sea salt, driftwood & white cedar",
    price: "$22.00",
    burnTime: "40–45 hrs",
    size: "8 oz / 227g",
    wax: "100% Natural Soy",
    wick: "Lead-free Cotton",
    notes: "Sea Salt · Driftwood · White Cedar",
    description: "Bottle the feeling of a coastal morning — fresh sea salt air, smooth driftwood, and a whisper of white cedar. Clean, open, and endlessly refreshing.",
    image: "images/ocean-breeze.jpg",
    badge: "",
    featured: false,
    inStock: false,
  },
];
