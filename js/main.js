/* ===================================================================
   Carlos Fuentez Portfolio — Shared JavaScript
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Nav scroll effect (frosted glass) --- */
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 40) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* --- Mobile hamburger menu --- */
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  /* --- Scroll reveal animations --- */
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        const children = entry.target.querySelectorAll('.reveal-child');
        children.forEach((child, i) => {
          child.style.transitionDelay = `${i * 0.1}s`;
          child.classList.add('visible');
        });

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  /* --- Smooth scroll for anchor links --- */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* --- Image lightbox --- */
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = '<div class="lightbox-backdrop"></div><img class="lightbox-img" src="" alt="">';
  document.body.appendChild(lightbox);
  const lightboxImg = lightbox.querySelector('.lightbox-img');

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('img').forEach(img => {
    if (img.closest('nav') || img.closest('footer') || img.closest('.mobile-menu')) return;
    if (img.closest('.lightbox')) return;
    const w = img.naturalWidth || img.width;
    const h = img.naturalHeight || img.height;
    if (w < 60 && h < 60) return;

    img.style.cursor = 'zoom-in';

    img.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      openLightbox(img.src, img.alt);
    });
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightboxImg) return;
    closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

});
