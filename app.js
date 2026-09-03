/* ==========================================================================
   ASOSERSOLDAMAZ - INTERACTIVIDAD CORPORATIVA (app.js)
   - Scroll Spy / Menu Activo por seccion
   - Acordeon desplegable para las 7 Areas de Especialidad
   - Filtro de Matriz de Experiencia (Operadora y Buscador)
   - Lightbox modal para fotografias
   - Atajo de impresion a PDF
   ========================================================================== */

(function () {
  'use strict';

  function initApp() {
    // 1. SCROLL SPY / MENU ACTIVO POR SECCION
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    function onScrollSpy() {
      const scrollPos = window.scrollY + 140; // Offset del navbar sticky
      
      sections.forEach(sec => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }

    window.addEventListener('scroll', onScrollSpy, { passive: true });
    onScrollSpy(); // Ejecutar al inicio

    // 2. ACORDEON DESPLEGABLE DE LAS 7 AREAS DE ESPECIALIDAD
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
      header.addEventListener('click', function () {
        const targetId = this.getAttribute('data-target');
        const body = document.getElementById(targetId);
        const icon = this.querySelector('.accordion-icon');
        const isCurrentlyOpen = this.classList.contains('active');

        if (isCurrentlyOpen) {
          // Si ya esta abierto, se contrae
          this.classList.remove('active');
          if (body) body.classList.remove('open');
          if (icon) icon.textContent = '+';
        } else {
          // Se expande
          this.classList.add('active');
          if (body) body.classList.add('open');
          if (icon) icon.textContent = '−';
        }
      });
    });

    // 3. FILTROS Y BUSCADOR DE LA MATRIZ DE EXPERIENCIA
    const filterBtns = document.querySelectorAll('.filter-btn');
    const tableRows = document.querySelectorAll('#experience-table-body tr');
    const searchInput = document.getElementById('project-search');

    function filterExperience() {
      const activeBtn = document.querySelector('.filter-btn.active');
      const selectedClient = activeBtn ? activeBtn.getAttribute('data-client').toLowerCase().trim() : 'todos';
      const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';

      tableRows.forEach(row => {
        const rowClientAttr = row.getAttribute('data-client') ? row.getAttribute('data-client').toLowerCase() : '';
        const rowText = row.innerText.toLowerCase();

        // Comprobacion de cliente
        let clientMatches = false;
        if (selectedClient === 'todos') {
          clientMatches = true;
        } else {
          clientMatches = rowClientAttr.includes(selectedClient);
        }

        // Comprobacion de termino de busqueda
        let searchMatches = false;
        if (!searchTerm) {
          searchMatches = true;
        } else {
          searchMatches = rowText.includes(searchTerm);
        }

        // Aplicar o remover clase CSS sin estilos inline
        if (clientMatches && searchMatches) {
          row.classList.remove('table-row-hidden');
        } else {
          row.classList.add('table-row-hidden');
        }
      });
    }

    filterBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        filterExperience();
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', filterExperience);
    }

    // 4. MODAL / LIGHTBOX PARA INSPECCION DE FOTOS
    const modal = document.getElementById('photo-lightbox');
    const modalImg = document.getElementById('lightbox-image');
    const modalTitle = document.getElementById('lightbox-caption');
    const modalClose = document.getElementById('lightbox-close');

    // Delegacion de eventos en contenedor de fotos
    document.addEventListener('click', function (e) {
      const thumb = e.target.closest('.preview-photo-thumb, .spec-card-img-wrap');
      if (thumb && modal && modalImg) {
        const imgSrc = thumb.getAttribute('data-full-img');
        const caption = thumb.getAttribute('data-caption');
        modalImg.src = imgSrc;
        if (modalTitle) modalTitle.textContent = caption || 'Registro Tecnico de Operaciones';
        modal.classList.add('active');
      }
    });

    if (modalClose) {
      modalClose.addEventListener('click', () => {
        if (modal) modal.classList.remove('active');
      });
    }

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active');
        }
      });
    }

    // 5. ATAJOS DE IMPRESION / PDF
    const printBtns = document.querySelectorAll('.btn-print-action');
    printBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.print();
      });
    });
  }

  // Ejecucion garantizada sin importar timing
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
