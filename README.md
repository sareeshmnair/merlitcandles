# MyCandle Website

A clean, static website for your candle business — ready to deploy on Cloudflare Pages.

---

## 📁 Folder Structure

```
mycandle/
│
├── index.html              ← Homepage (hero + featured products)
│
├── pages/
│   └── shop.html           ← Full shop (search, filter, pagination)
│
├── css/
│   └── style.css           ← All styles (edit to change colours/fonts)
│
├── js/
│   ├── products.js         ← ⭐ YOUR PRODUCT DATABASE — edit this file
│   └── ui.js               ← Shared components (nav, modal, footer)
│
├── images/                 ← Put ALL your candle photos here
│   ├── vanilla-dusk.jpg
│   ├── lavender-mist.jpg
│   └── ...
│
└── README.md               ← This file
```

---

## ⭐ How to Add / Edit Products

Open **`js/products.js`** — this is your product database.

To add a new product, copy this block and paste it at the end of the `PRODUCTS` array:

```js
{
  id: 9,                              // Use the next unique number
  name: "Your Candle Name",
  category: "Warm & Cozy",           // Must match one of the CATEGORIES list
  scent: "Short scent summary",
  price: "$24.00",
  burnTime: "45–50 hrs",
  size: "8 oz / 227g",
  wax: "100% Natural Soy",
  wick: "Lead-free Cotton",
  notes: "Note 1 · Note 2 · Note 3",
  description: "Longer description shown in the detail popup.",
  image: "images/your-photo.jpg",    // Put the photo in /images/ folder
  badge: "New",                      // "Best Seller" | "New" | "Premium" | "" for none
  featured: false,                   // true = appears on homepage
  inStock: true,                     // false = shows "Out of Stock"
},
```

---

## 🖼️ Adding Product Images

1. Place your `.jpg` or `.webp` photos inside the **`images/`** folder
2. In `products.js`, set `image: "images/your-filename.jpg"`
3. Recommended image size: **800 × 1067px** (portrait 3:4 ratio)
4. Keep file sizes under **300KB** for fast loading (use [squoosh.app](https://squoosh.app) to compress)

If you leave `image: ""`, a candle placeholder animation shows instead.

---

## 🔗 Update Your Social Links

Open **`js/ui.js`** and update these at the top:

```js
const WHATSAPP_NUMBER = "601234567890"; // Your number, no + or spaces

// Then in injectNav() and injectFooter(), update:
href="https://instagram.com/YOUR_USERNAME"
href="https://facebook.com/YOUR_PAGE"
```

---

## 🏷️ Adding Categories

Open `js/products.js` and add your new category to the `CATEGORIES` array:

```js
const CATEGORIES = [
  "All",
  "Warm & Cozy",
  "Your New Category",   // ← add here
  ...
];
```

Then use that exact category name in your products.

---

## 🚀 Deploying to Cloudflare Pages

1. Push this entire folder to a **GitHub repository**
2. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
3. Click **"Create a project"** → Connect to GitHub → Select your repo
4. Build settings: leave blank (it's a static site, no build needed)
5. Click **Deploy**
6. Once live, go to **Custom Domains** → add `mycandle.com`
7. Cloudflare will guide you to update your DNS records

Your site will be live at `mycandle.com` within minutes. 🎉

---

## 💡 Tips

- The shop page shows **12 products per page** — change `ITEMS_PER_PAGE` in `shop.html`
- Products marked `featured: true` appear on the homepage
- The shop has **live search** (by name, scent, or category) + **category filters**
- All product changes only require editing `products.js` — no need to touch HTML
