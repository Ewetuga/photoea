
    (function() {
      // LOADER
      window.addEventListener('load', function() {
        document.getElementById('loader').classList.add('hide');
      });

      // HERO SLIDESHOW
      let slides = document.querySelectorAll('.hero-slide');
      let currentSlide = 0;
      setInterval(function() {
        slides.forEach(function(s) { s.classList.remove('active'); });
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
      }, 5000);

      // NAVBAR SCROLL
      let navbar = document.getElementById('navbar');
      window.addEventListener('scroll', function() {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
      });

      // HAMBURGER
      let hamburger = document.getElementById('hamburger');
      let navLinks = document.getElementById('navLinks');
      hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('open');
      });

      // CLOSE MENU ON LINK CLICK
      window.closeMenu = function() {
        navLinks.classList.remove('open');
      };

      // PORTFOLIO DATA & RENDER
      let galleryData = [
        { category: 'wedding', label: 'Wedding', img: 'https://images.unsplash.com/photo-1661332306744-70f9ed1a7f40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGZhbWlseSUyMHNob290cyUyMG5pZ2VyaWElMjBjb25jZXB0fGVufDB8fDB8fHww' },
        { category: 'wedding', label: 'Wedding', img: 'https://plus.unsplash.com/premium_photo-1778850712567-46cabbbef041?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGJyaWRhbCUyMHNob3dlciUyMG5pZ2VyaWElMjBjb25jZXB0fGVufDB8fDB8fHww' },
        { category: 'portrait', label: 'Portrait', img: 'https://images.unsplash.com/photo-1782527062518-72dd7d598c25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0JTIwbmlnZXJpYSUyMGNvbmNlcHR8ZW58MHx8MHx8fDA%3D' },
        { category: 'portrait', label: 'Portrait', img: 'https://plus.unsplash.com/premium_photo-1771416584521-ae8a65087f01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZ1bGwlMjBmYW1pbHklMjBzdHVkaW8lMjBzaG9vdCUyMG5pZ2VyaWElMjBjb25jZXB0fGVufDB8fDB8fHww' },
        { category: 'fashion', label: 'Fashion', img: 'https://images.unsplash.com/photo-1738363436173-0b49cd20dea8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU5fHxzdHVkaW8lMjBzaG9vdCUyMG5pZ2VyaWElMjBjb25jZXB0fGVufDB8fDB8fHww' },
        { category: 'wedding', label: 'Wedding', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80' },
        { category: 'portrait', label: 'Portrait', img: 'https://images.unsplash.com/photo-1783379794529-361c9225b3d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHN0dWRpbyUyMHNob290JTIwbmlnZXJpYSUyMGNvbmNlcHR8ZW58MHx8MHx8fDA%3D' },
        { category: 'fashion', label: 'Fashion', img: 'https://images.unsplash.com/photo-1770777355087-f18707049b54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3R1ZGlvJTIwc2hvb3QlMjBuaWdlcmlhJTIwY29uY2VwdHxlbnwwfHwwfHx8MA%3D%3D' }
      ];

      let galleryGrid = document.getElementById('galleryGrid');

      function renderGallery(filter) {
        filter = filter || 'all';
        let filtered = filter === 'all' ? galleryData : galleryData.filter(function(item) { return item.category === filter; });
        let html = '';
        filtered.forEach(function(item) {
          html += '<div class="gallery-item" data-category="' + item.category + '">' +
            '<img src="' + item.img + '" alt="' + item.label + '" loading="lazy" />' +
            '<div class="gallery-overlay"><i class="fas fa-search-plus"></i></div>' +
            '</div>';
        });
        galleryGrid.innerHTML = html;
      }
      renderGallery('all');

      // FILTER BUTTONS
      let filterBtns = document.querySelectorAll('.filter-btn');
      filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
          filterBtns.forEach(function(b) { b.classList.remove('active'); });
          this.classList.add('active');
          renderGallery(this.dataset.filter);
        });
      });

      // TESTIMONIAL SLIDER AUTO
      let slideIndex = 0;
      let track = document.getElementById('testimonialTrack');
      let cards = track.querySelectorAll('.testimonial-card');

      function slideTestimonial() {
        slideIndex = (slideIndex + 1) % cards.length;
        track.style.transform = 'translateX(-' + (slideIndex * 100) + '%)';
      }
      setInterval(slideTestimonial, 4500);

      // BACK TO TOP
      let backTop = document.getElementById('backTop');
      window.addEventListener('scroll', function() {
        backTop.classList.toggle('visible', window.scrollY > 500);
      });
      backTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

      // INTERSECTION OBSERVER FOR FADE-UP
      let faders = document.querySelectorAll('.fade-up');
      let observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.2 });
      faders.forEach(function(el) { observer.observe(el); });

      // STAT COUNTER
      function animateCounter(el, target, suffix) {
        suffix = suffix || '';
        let current = 0;
        let step = Math.ceil(target / 60);
        let interval = setInterval(function() {
          current += step;
          if (current >= target) { current = target; clearInterval(interval); }
          el.textContent = current + suffix;
        }, 25);
      }
      setTimeout(function() {
        animateCounter(document.getElementById('stat1'), 500, '+');
        animateCounter(document.getElementById('stat2'), 1200, '+');
        animateCounter(document.getElementById('stat3'), 8, '+');
        animateCounter(document.getElementById('stat4'), 35, '+');
      }, 600);

    })();

      // Auto-update copyright year
  document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  });
  