/* ===========================================================
   MUKANDA TEC — APP.JS
   Scripts gerais do site (ES6)
   =========================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ===========================
     INICIALIZAR AOS (animações)
     =========================== */
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60
    });
  }

  /* ===========================
     NAVBAR: sombra ao rolar
     =========================== */
  const navbar = document.querySelector('.mk-navbar');
  const handleScroll = () => {
    if (window.scrollY > 20) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll);
  handleScroll();

  /* ===========================
     FECHAR MENU MOBILE AO CLICAR EM LINK
     =========================== */
  const navLinks = document.querySelectorAll('.mk-navbar .nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse?.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
        bsCollapse.hide();
      }
    });
  });

  /* ===========================
     BOTÃO VOLTAR AO TOPO
     =========================== */
  const backToTop = document.querySelector('.mk-back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    });

    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ===========================
     CONTADORES ANIMADOS (Estatísticas)
     =========================== */
  const counters = document.querySelectorAll('[data-counter]');

  const animateCounter = (el) => {
    const target = parseInt(el.dataset.counter, 10);
    const duration = 1500;
    const startTime = performance.now();

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * target);
      el.textContent = value + (el.dataset.suffix || '');

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target + (el.dataset.suffix || '');
      }
    };

    requestAnimationFrame(step);
  };

  if ('IntersectionObserver' in window && counters.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    counters.forEach(counter => observer.observe(counter));
  }

  /* ===========================
     FORMULÁRIO DE NEWSLETTER (footer)
     =========================== */
  const newsletterForm = document.querySelector('.mk-footer-newsletter');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input[type="email"]');
      if (input && input.value) {
        alert('Obrigado por se inscrever! Em breve receberá novidades da Mukanda.');
        input.value = '';
      }
    });
  }

  /* ===========================
     ANO ATUAL NO COPYRIGHT
     =========================== */
  const yearEl = document.querySelector('#current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});
