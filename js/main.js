/* ============================================================
   HIMANSHU KUMAR — Portfolio JavaScript
   ============================================================ */

'use strict';

/* ── SCROLL REVEAL ─────────────────────────────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

/* ── ACTIVE NAV LINK ──────────────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((sec) => {
    if (window.scrollY >= sec.offsetTop - 160) current = sec.id;
  });
  navLinks.forEach((a) => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}, { passive: true });

/* ── MOBILE DRAWER ────────────────────────────────────────── */
const hamburger     = document.getElementById('hamburger');
const mobileDrawer  = document.getElementById('mobileDrawer');
const drawerOverlay = document.getElementById('drawerOverlay');

function openDrawer() {
  hamburger.classList.add('open');
  mobileDrawer.classList.add('open');
  drawerOverlay.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  hamburger.classList.remove('open');
  mobileDrawer.classList.remove('open');
  drawerOverlay.classList.remove('show');
  document.body.style.overflow = '';
}

hamburger?.addEventListener('click', () => {
  hamburger.classList.contains('open') ? closeDrawer() : openDrawer();
});

drawerOverlay?.addEventListener('click', closeDrawer);

document.querySelectorAll('.drawer-link').forEach((link) => {
  link.addEventListener('click', closeDrawer);
});

/* ── RESUME ACTIONS ───────────────────────────────────────── */
// Replace the alert with your actual resume PDF URL:
// e.g. window.open('https://drive.google.com/your-resume.pdf', '_blank');

function downloadResume(e) {
  e.preventDefault();
  // TODO: Replace with your actual PDF download link
  alert(
    '📄 Resume Download\n\n' +
    'Replace this function in js/main.js:\n\n' +
    'window.open("YOUR_RESUME_URL.pdf", "_blank");'
  );
}

function viewResume(e) {
  e.preventDefault();
  // TODO: Replace with your Google Docs / PDF viewer URL
  alert(
    '👁 View Resume\n\n' +
    'Replace this function in js/main.js:\n\n' +
    'window.open("YOUR_RESUME_VIEW_URL", "_blank");'
  );
}

document.querySelectorAll('[data-resume="download"]').forEach((el) =>
  el.addEventListener('click', downloadResume)
);

document.querySelectorAll('[data-resume="view"]').forEach((el) =>
  el.addEventListener('click', viewResume)
);

/* ── CONTACT FORM ─────────────────────────────────────────── */
const contactForm = document.getElementById('contactForm');

contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();

  const name    = document.getElementById('cName').value.trim();
  const email   = document.getElementById('cEmail').value.trim();
  const message = document.getElementById('cMessage').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.'); return;
  }

  // Opens the user's email client with pre-filled content
  const mailtoLink =
    `mailto:himanshukumar@gmail.com` +
    `?subject=${encodeURIComponent('Portfolio Inquiry from ' + name)}` +
    `&body=${encodeURIComponent(message + '\n\n— ' + name + ' <' + email + '>')}`;

  window.location.href = mailtoLink;

  // Reset form with feedback
  const btn = contactForm.querySelector('.btn-send');
  const orig = btn.textContent;
  btn.textContent = 'Message Sent ✓';
  btn.style.background = 'var(--teal)';
  setTimeout(() => {
    btn.textContent = orig;
    btn.style.background = '';
    contactForm.reset();
  }, 3000);
});

/* ── SMOOTH SCROLL for anchor buttons ────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ── NAV HIDE ON SCROLL DOWN ──────────────────────────────── */
let lastScrollY = window.scrollY;
const navEl = document.querySelector('nav');

window.addEventListener('scroll', () => {
  const currentY = window.scrollY;
  if (currentY > lastScrollY && currentY > 120) {
    navEl.style.transform = 'translateY(-100%)';
  } else {
    navEl.style.transform = 'translateY(0)';
  }
  lastScrollY = currentY;
}, { passive: true });

navEl.style.transition = 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)';

/* ── CUSTOM CURSOR ────────────────────────────────────────── */
const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');

if (cursorDot && cursorOutline) {
  let targetX = window.innerWidth / 2;
  let targetY = window.innerHeight / 2;
  let outlineX = targetX;
  let outlineY = targetY;
  let lastSparkTime = 0;

  const createSpark = (x, y) => {
    const spark = document.createElement('div');
    spark.className = 'cursor-spark';
    const size = Math.random() * 4 + 3;
    spark.style.width = `${size}px`;
    spark.style.height = `${size}px`;
    spark.style.left = `${x}px`;
    spark.style.top = `${y}px`;
    const colors = ['#c8b97a', '#ffd700', '#7ab5c8', '#a8d8e8'];
    spark.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    const tx = (Math.random() - 0.5) * 60;
    const ty = (Math.random() - 0.5) * 60;
    spark.style.setProperty('--tx', `${tx}px`);
    spark.style.setProperty('--ty', `${ty}px`);
    spark.style.boxShadow = `0 0 8px ${spark.style.backgroundColor}`;
    document.body.appendChild(spark);
    setTimeout(() => { if (spark.parentNode) spark.remove(); }, 600);
  };

  window.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
    cursorDot.style.left = `${targetX}px`;
    cursorDot.style.top = `${targetY}px`;

    const now = Date.now();
    if (now - lastSparkTime > 25) {
      createSpark(targetX, targetY);
      if (Math.random() > 0.5) createSpark(targetX, targetY);
      lastSparkTime = now;
    }
  }, { passive: true });

  const animateCursor = () => {
    let distX = targetX - outlineX;
    let distY = targetY - outlineY;
    outlineX += distX * 0.15;
    outlineY += distY * 0.15;
    cursorOutline.style.left = `${outlineX}px`;
    cursorOutline.style.top = `${outlineY}px`;
    requestAnimationFrame(animateCursor);
  };
  requestAnimationFrame(animateCursor);

  document.querySelectorAll('a, button, input, .nav__link, .projects__button, .contact__button, .scrollup, .qualification__button').forEach((el) => {
    el.addEventListener('mouseenter', () => cursorOutline.classList.add('hovered'));
    el.addEventListener('mouseleave', () => cursorOutline.classList.remove('hovered'));
  });
}
