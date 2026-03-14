/* ============================================================
   MyCandle — Shared UI
   Nav scroll effect, modal, social SVGs, scroll animations
   ============================================================ */

const WHATSAPP_NUMBER = "601234567890"; // ← Replace with your WhatsApp number (no + or spaces)

/* ── BASE PATH ──
   Automatically detects whether we are in /pages/ subfolder
   and builds correct relative paths for links and images.      */
const IS_SUBPAGE = window.location.pathname.includes('/pages/');
const BASE = IS_SUBPAGE ? '../' : './';

/* ── SOCIAL SVGs ── */
const SVG = {
  instagram: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,
  cart: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>`,
  empty: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 15s1.5-2 4-2 4 2 4 2M9 9h.01M15 9h.01"/></svg>`,
  hamburger: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
  menuClose: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  chevLeft:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>`,
  chevRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>`,
  amazon: `<svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.438-2.186 1.438-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.699-3.182v.685zm3.186 7.705c-.209.189-.512.201-.745.076-1.047-.872-1.234-1.276-1.814-2.106-1.734 1.767-2.962 2.297-5.209 2.297-2.66 0-4.731-1.641-4.731-4.925 0-2.565 1.391-4.309 3.37-5.164 1.715-.754 4.11-.891 5.942-1.099v-.41c0-.753.06-1.642-.384-2.294-.385-.577-1.124-.816-1.776-.816-1.208 0-2.284.62-2.548 1.905-.054.285-.261.567-.549.582l-3.061-.333c-.259-.056-.547-.266-.472-.66C5.348 2.062 8.392 1 11.11 1c1.39 0 3.21.37 4.31 1.424C16.76 3.765 16.62 5.558 16.62 7.5v5.082c0 1.527.633 2.198 1.229 3.023.21.294.255.646-.01.865l-2.695 2.325zm3.612 1.854c-2.148 1.594-5.261 2.44-7.941 2.44-3.757 0-7.138-1.389-9.696-3.697-.201-.182-.021-.43.22-.288 2.762 1.608 6.18 2.576 9.708 2.576 2.38 0 4.997-.493 7.405-1.517.364-.153.669.239.304.486zm.869-1.483c-.273-.351-1.815-.166-2.507-.083-.209.024-.241-.158-.053-.291 1.226-.863 3.241-.614 3.476-.325.234.291-.062 2.314-1.213 3.278-.176.149-.344.069-.266-.125.26-.649.838-2.103.563-2.454z"/></svg>`,
};

/* ── INJECT NAV ── */
function injectNav(activePage) {
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  // Build correct paths depending on whether we are in /pages/ or root
  const homeHref  = `${BASE}index.html`;
  const shopHref  = `${BASE}pages/shop.html`;
  const aboutHref = `${BASE}index.html#about`;

  nav.innerHTML = `
    <a href="${homeHref}" class="nav-logo">Merlit<span>Candle</span></a>
    <ul class="nav-links" id="navLinks">
      <li><a href="${homeHref}"  ${activePage === 'home'  ? 'class="active"' : ''}>Home</a></li>
      <li><a href="${shopHref}"  ${activePage === 'shop'  ? 'class="active"' : ''}>Shop</a></li>
      <li><a href="${aboutHref}" ${activePage === 'about' ? 'class="active"' : ''}>About</a></li>
      <li class="nav-social-mobile">
        <a href="https://instagram.com/YOUR_USERNAME" target="_blank" aria-label="Instagram">${SVG.instagram}</a>
        <a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" aria-label="WhatsApp">${SVG.whatsapp}</a>
        <a href="https://facebook.com/YOUR_PAGE" target="_blank" aria-label="Facebook">${SVG.facebook}</a>
      </li>
    </ul>
    <div class="nav-right">
      <div class="nav-social">
        <a href="https://instagram.com/YOUR_USERNAME" target="_blank" aria-label="Instagram">${SVG.instagram}</a>
        <a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" aria-label="WhatsApp">${SVG.whatsapp}</a>
        <a href="https://facebook.com/YOUR_PAGE" target="_blank" aria-label="Facebook">${SVG.facebook}</a>
      </div>
      <button class="hamburger" id="hamburger" aria-label="Toggle menu" style="position:relative;z-index:300">${SVG.hamburger}</button>
    </div>`;

  // Hamburger toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.innerHTML = open ? SVG.menuClose : SVG.hamburger;
    document.body.style.overflow = open ? 'hidden' : '';
  });
  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.innerHTML = SVG.hamburger;
      document.body.style.overflow = '';
    });
  });

  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 20));
}

/* ── INJECT FOOTER ── */
function injectFooter() {
  const footer = document.getElementById('main-footer');
  if (!footer) return;
  footer.innerHTML = `
    <div>
      <div class="footer-logo">Merlit<span>Candle</span></div>
      <p style="font-size:0.75rem;margin-top:0.4rem;">mycandle.com — Handcrafted with love</p>
    </div>
    <p class="footer-copy">© ${new Date().getFullYear()} Merlit Candle. All rights reserved.</p>
    <div class="footer-social">
      <a href="https://instagram.com/YOUR_USERNAME" target="_blank" aria-label="Instagram">${SVG.instagram}</a>
      <a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" aria-label="WhatsApp">${SVG.whatsapp}</a>
      <a href="https://facebook.com/YOUR_PAGE" target="_blank" aria-label="Facebook">${SVG.facebook}</a>
    </div>`;
}

/* ── PRODUCT CARD HTML ── */
function productCardHTML(p) {
  const imgSrc = p.image ? BASE + p.image : '';
  const imgContent = imgSrc
    ? `<img src="${imgSrc}" alt="${p.name}" loading="lazy">`
    : `<div class="product-img-placeholder"><div class="placeholder-candle"></div></div>`;
  const badgeHTML = !p.inStock
    ? `<span class="product-badge badge-out">Out of Stock</span>`
    : p.badge ? `<span class="product-badge">${p.badge}</span>` : '';
  return `
    <div class="product-img-wrap">${imgContent}${badgeHTML}</div>
    <div class="product-info">
      <p class="product-category">${p.category}</p>
      <h3 class="product-name">${p.name}</h3>
      <p class="product-scent">${p.scent}</p>
      <div class="product-footer">
        <span class="product-price">${p.price}</span>
        <button class="product-view-btn">View ${SVG.arrow}</button>
      </div>
    </div>`;
}

/* ── GALLERY HELPERS ── */

// Build array of all image paths for a product
function getProductImages(p) {
  if (!p.image) return [];
  const count = p.imageCount || 1;
  if (count <= 1) return [BASE + p.image];

  // Derive base name: "images/vanilla-dusk.jpg" → "images/vanilla-dusk" + ".jpg"
  const lastDot = p.image.lastIndexOf('.');
  const base = p.image.substring(0, lastDot);
  const ext  = p.image.substring(lastDot);  // e.g. ".jpg"

  const imgs = [BASE + p.image];
  for (let i = 1; i < count; i++) {
    imgs.push(BASE + base + '-' + i + ext);
  }
  return imgs;
}

/* ── MODAL ── */
let modalOverlay, modalEl;
let galleryImages = [], galleryIndex = 0;
let touchStartX = 0, touchStartY = 0;

function initModal() {
  modalOverlay = document.getElementById('modal');
  modalEl = modalOverlay?.querySelector('.modal');
  document.getElementById('modalClose')?.addEventListener('click', closeModal);
  modalOverlay?.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });

  // Keyboard: Escape closes, arrows navigate gallery
  document.addEventListener('keydown', e => {
    if (!modalOverlay?.classList.contains('open')) return;
    if (e.key === 'Escape')      closeModal();
    if (e.key === 'ArrowLeft')   galleryGo(-1);
    if (e.key === 'ArrowRight')  galleryGo(1);
  });

  // Touch swipe support on the image area
  const imgArea = document.getElementById('modalImgArea');
  imgArea?.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });
  imgArea?.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      galleryGo(dx < 0 ? 1 : -1);
    }
  }, { passive: true });
}

function galleryGo(dir) {
  if (galleryImages.length <= 1) return;
  galleryIndex = (galleryIndex + dir + galleryImages.length) % galleryImages.length;
  renderGalleryFrame();
}

function renderGalleryFrame() {
  const img = document.getElementById('modalMainImg');
  const dots = document.querySelectorAll('.gallery-dot');
  const counter = document.getElementById('galleryCounter');
  const prevBtn = document.getElementById('galleryPrev');
  const nextBtn = document.getElementById('galleryNext');

  if (!img) return;

  // Fade transition
  img.style.opacity = '0';
  setTimeout(() => {
    img.src = galleryImages[galleryIndex];
    img.style.opacity = '1';
  }, 150);

  // Dots
  dots.forEach((d, i) => d.classList.toggle('active', i === galleryIndex));

  // Counter
  if (counter) counter.textContent = `${galleryIndex + 1} / ${galleryImages.length}`;

  // Arrow visibility
  if (prevBtn) prevBtn.style.opacity = galleryImages.length > 1 ? '1' : '0';
  if (nextBtn) nextBtn.style.opacity = galleryImages.length > 1 ? '1' : '0';
}

function buildGallery(images) {
  const imgArea = document.getElementById('modalImgArea');
  if (!images.length) {
    imgArea.innerHTML = `<div class="modal-candle"></div>`;
    return;
  }

  const multi = images.length > 1;

  imgArea.innerHTML = `
    <div class="gallery-wrap">
      <img id="modalMainImg" src="${images[0]}"
           alt="Product image"
           style="width:100%;height:100%;object-fit:cover;display:block;transition:opacity 0.15s ease">
      ${multi ? `
        <button class="gallery-arrow gallery-prev" id="galleryPrev" aria-label="Previous image">
          ${SVG.chevLeft}
        </button>
        <button class="gallery-arrow gallery-next" id="galleryNextBtn" aria-label="Next image">
          ${SVG.chevRight}
        </button>
        <div class="gallery-dots" id="galleryDots">
          ${images.map((_, i) => `<span class="gallery-dot${i===0?' active':''}"></span>`).join('')}
        </div>
        <div class="gallery-counter" id="galleryCounter">1 / ${images.length}</div>
      ` : ''}
    </div>`;

  if (multi) {
    document.getElementById('galleryPrev')
      ?.addEventListener('click', e => { e.stopPropagation(); galleryGo(-1); });
    document.getElementById('galleryNextBtn')
      ?.addEventListener('click', e => { e.stopPropagation(); galleryGo(1); });

    // Dot clicks
    document.querySelectorAll('.gallery-dot').forEach((dot, i) => {
      dot.addEventListener('click', e => { e.stopPropagation(); galleryIndex = i; renderGalleryFrame(); });
    });

    // Re-attach touch listeners on new content
    const imgAreaEl = document.getElementById('modalImgArea');
    imgAreaEl.addEventListener('touchstart', e => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }, { passive: true });
    imgAreaEl.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      const dy = e.changedTouches[0].clientY - touchStartY;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) galleryGo(dx < 0 ? 1 : -1);
    }, { passive: true });
  }
}

function openModal(p) {
  if (!modalOverlay) return;
  document.getElementById('modalCategory').textContent = p.category;
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalPrice').textContent = p.price;
  document.getElementById('modalBurn').textContent = '· ' + p.burnTime + ' burn time';
  document.getElementById('modalDesc').textContent = p.description;
  document.getElementById('modalDetails').innerHTML = `
    <div class="modal-detail"><strong>Size</strong>${p.size}</div>
    <div class="modal-detail"><strong>Wax</strong>${p.wax}</div>
    <div class="modal-detail"><strong>Wick</strong>${p.wick}</div>
    <div class="modal-detail"><strong>Scent Notes</strong>${p.notes}</div>`;

  // Build gallery
  galleryImages = getProductImages(p);
  galleryIndex  = 0;
  buildGallery(galleryImages);

  // WhatsApp button
  const orderBtn = document.getElementById('modalOrderBtn');
  orderBtn.style.opacity = '';
  orderBtn.style.cursor = '';
  if (p.inStock) {
    orderBtn.disabled = false;
    orderBtn.innerHTML = `${SVG.cart} Order via WhatsApp`;
    orderBtn.onclick = () => {
      const msg = encodeURIComponent(`Hi! I'd like to order "${p.name}" (${p.price}). Can you help me?`);
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
    };
  } else {
    orderBtn.disabled = true;
    orderBtn.innerHTML = `Currently Out of Stock`;
    orderBtn.style.opacity = '0.45';
    orderBtn.style.cursor = 'not-allowed';
    orderBtn.onclick = null;
  }

  // Amazon button
  const amazonBtn = document.getElementById('modalAmazonBtn');
  if (p.amazonLink) {
    amazonBtn.style.display = 'flex';
    amazonBtn.onclick = () => window.open(p.amazonLink, '_blank');
  } else {
    amazonBtn.style.display = 'none';
  }

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay?.classList.remove('open');
  document.body.style.overflow = '';
}

/* ── SCROLL ANIMATIONS ── */
function initScrollAnimations() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08 });
  document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
}

/* ── MODAL TEMPLATE (inject into page body) ── */
function injectModal() {
  const div = document.createElement('div');
  div.innerHTML = `
    <div class="modal-overlay" id="modal" role="dialog" aria-modal="true">
      <div class="modal">
        <button class="modal-close" id="modalClose" aria-label="Close">${SVG.close}</button>
        <div class="modal-img-area" id="modalImgArea"></div>
        <div class="modal-body">
          <p class="modal-category" id="modalCategory"></p>
          <h2 class="modal-name" id="modalName"></h2>
          <div class="modal-price-line">
            <span class="modal-price" id="modalPrice"></span>
            <span class="modal-burn" id="modalBurn"></span>
          </div>
          <p class="modal-desc" id="modalDesc"></p>
          <div class="modal-details" id="modalDetails"></div>
          <div class="modal-actions">
            <button class="modal-order-btn" id="modalOrderBtn"></button>
            <a class="modal-amazon-btn" id="modalAmazonBtn" target="_blank" rel="noopener" style="display:none">
              ${SVG.amazon} View on Amazon
            </a>
          </div>
        </div>
      </div>
    </div>`;
  document.body.appendChild(div.firstElementChild);
}
