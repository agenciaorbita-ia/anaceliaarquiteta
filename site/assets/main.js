/* ===================================================================
   Ana Célia — Arquitetura Sacra · JS compartilhado (vanilla, sem libs)
   =================================================================== */
(function(){
  'use strict';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var WHATS = '5533988086468';

  /* ---- Menu mobile ---- */
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('navMenu');
  if(toggle && menu){
    var closeMenu = function(){
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded','false');
      toggle.setAttribute('aria-label','Abrir menu de navegação');
    };
    toggle.addEventListener('click', function(){
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
    });
    menu.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', closeMenu); });
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape' && menu.classList.contains('open')){ closeMenu(); toggle.focus(); }
    });
  }

  /* ---- Header reativo + parallax ---- */
  var header = document.querySelector('.site-header');
  var parallaxEls = [];
  Array.prototype.forEach.call(document.querySelectorAll('[data-parallax]'), function(el){
    parallaxEls.push({ el: el, amp: parseFloat(el.getAttribute('data-parallax')) || 40 });
  });
  var ticking = false;
  function onScroll(){ if(!ticking){ ticking = true; requestAnimationFrame(update); } }
  function update(){
    ticking = false;
    var y = window.pageYOffset || document.documentElement.scrollTop;
    if(header){ header.classList.toggle('scrolled', y > 24); }
    if(!reduce){
      var vh = window.innerHeight;
      for(var i=0;i<parallaxEls.length;i++){
        var o = parallaxEls[i];
        var r = o.el.getBoundingClientRect();
        var prog = ((r.top + r.height/2) - vh/2) / vh;
        o.el.style.transform = 'translate3d(0,' + (prog * o.amp * -1).toFixed(1) + 'px,0)';
      }
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();

  /* ---- Contador animado ---- */
  function runCounter(el){
    var target = parseFloat(el.getAttribute('data-count'));
    var prefix = el.getAttribute('data-prefix') || '';
    var dur = 1400, start = null;
    function tick(ts){
      if(start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + Math.round(eased * target);
      if(p < 1){ requestAnimationFrame(tick); } else { el.textContent = prefix + target; }
    }
    requestAnimationFrame(tick);
  }

  /* ---- Reveal on scroll + stagger ---- */
  var animated = Array.prototype.slice.call(document.querySelectorAll('[data-animate]'));
  animated.forEach(function(el){
    if(el.hasAttribute('data-delay')){ el.style.setProperty('--d', el.getAttribute('data-delay') + 'ms'); return; }
    var parent = el.closest('[data-stagger]');
    if(parent){
      var sibs = Array.prototype.slice.call(parent.querySelectorAll('[data-animate]'))
        .filter(function(n){ return n.closest('[data-stagger]') === parent; });
      el.style.setProperty('--d', (Math.max(0, sibs.indexOf(el)) * 140) + 'ms');
    }
  });
  function revealNow(el){
    el.classList.add('is-visible');
    var counter = el.matches('[data-count]') ? el : el.querySelector('[data-count]');
    if(counter && !counter.dataset.done){ counter.dataset.done = '1'; if(!reduce){ runCounter(counter); } }
  }
  if(reduce || !('IntersectionObserver' in window)){
    animated.forEach(revealNow);
  } else {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){ if(e.isIntersecting){ revealNow(e.target); io.unobserve(e.target); } });
    }, { threshold: 0.15, rootMargin: '0px 0px -14% 0px' });
    animated.forEach(function(el){ io.observe(el); });
  }

  /* ---- Text reveal: divide títulos em palavras (preserva <em>) ---- */
  function splitWords(root){
    var counter = { i: 0 };
    (function walk(node){
      Array.prototype.slice.call(node.childNodes).forEach(function(child){
        if(child.nodeType === 3){
          var parts = child.textContent.split(/(\s+)/);
          var frag = document.createDocumentFragment();
          parts.forEach(function(part){
            if(!part) return;
            if(/^\s+$/.test(part)){ frag.appendChild(document.createTextNode(part)); }
            else { var w = document.createElement('span'); w.className = 'rv-word'; w.style.setProperty('--wi', counter.i++); w.textContent = part; frag.appendChild(w); }
          });
          node.replaceChild(frag, child);
        } else if(child.nodeType === 1){ walk(child); }
      });
    })(root);
  }
  var splits = Array.prototype.slice.call(document.querySelectorAll('.rv-split'));
  if(reduce || !('IntersectionObserver' in window)){
    splits.forEach(function(el){ el.classList.add('rv-armed','rv-in'); });
  } else {
    splits.forEach(function(el){ splitWords(el); el.classList.add('rv-armed'); });
    var ioText = new IntersectionObserver(function(entries){
      entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('rv-in'); ioText.unobserve(e.target); } });
    }, { threshold: 0.2 });
    splits.forEach(function(el){ ioText.observe(el); });
  }

  /* ---- FAQ acordeão ---- */
  var questions = document.querySelectorAll('.faq-q');
  if(questions.length){
    var setAnswer = function(btn, expanded){
      var panel = document.getElementById(btn.getAttribute('aria-controls'));
      btn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
      panel.style.maxHeight = expanded ? (panel.scrollHeight + 'px') : '0px';
    };
    questions.forEach(function(btn){
      setAnswer(btn, btn.getAttribute('aria-expanded') === 'true');
      btn.addEventListener('click', function(){ setAnswer(btn, btn.getAttribute('aria-expanded') !== 'true'); });
    });
    window.addEventListener('resize', function(){
      questions.forEach(function(btn){
        if(btn.getAttribute('aria-expanded') === 'true'){
          var panel = document.getElementById(btn.getAttribute('aria-controls'));
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      });
    });
  }

  /* ---- Filtro de projetos ---- */
  var filterBar = document.querySelector('.filter-bar');
  if(filterBar){
    var cards = Array.prototype.slice.call(document.querySelectorAll('.project-card'));
    filterBar.addEventListener('click', function(e){
      var btn = e.target.closest('.filter-btn'); if(!btn) return;
      filterBar.querySelectorAll('.filter-btn').forEach(function(b){ b.classList.remove('active'); b.setAttribute('aria-pressed','false'); });
      btn.classList.add('active'); btn.setAttribute('aria-pressed','true');
      var f = btn.getAttribute('data-filter');
      cards.forEach(function(c){
        var show = (f === 'all' || c.getAttribute('data-cat') === f);
        c.classList.toggle('is-hidden', !show);
      });
    });
  }

  /* ---- Chips de assunto (contato) ---- */
  var chipBox = document.querySelector('.chips');
  var assuntoInput = document.getElementById('assunto');
  if(chipBox){
    chipBox.addEventListener('click', function(e){
      var chip = e.target.closest('.chip'); if(!chip) return;
      chipBox.querySelectorAll('.chip').forEach(function(c){ c.classList.remove('active'); c.setAttribute('aria-pressed','false'); });
      chip.classList.add('active'); chip.setAttribute('aria-pressed','true');
      if(assuntoInput){ assuntoInput.value = chip.textContent.trim(); }
    });
  }

  /* ---- Formulário de contato → WhatsApp ---- */
  Array.prototype.forEach.call(document.querySelectorAll('form.contact-form'), function(form){
    var status = form.querySelector('.form-status');
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var email = form.querySelector('[name="email"]');
      var msg = form.querySelector('[name="mensagem"]');
      var assunto = form.querySelector('[name="assunto"]');
      if(email && (!email.value.trim() || !email.checkValidity())){ if(status) status.textContent = 'Por favor, informe um e-mail válido.'; email.focus(); return; }
      if(msg && !msg.value.trim()){ if(status) status.textContent = 'Por favor, escreva uma mensagem.'; msg.focus(); return; }
      var texto = 'Olá, Ana Célia! Gostaria de conversar sobre um projeto de arquitetura sacra.\n\n';
      if(assunto && assunto.value.trim()){ texto += 'Assunto: ' + assunto.value.trim() + '\n'; }
      if(email){ texto += 'E-mail para contato: ' + email.value.trim() + '\n'; }
      if(msg){ texto += 'Mensagem: ' + msg.value.trim(); }
      window.open('https://wa.me/' + WHATS + '?text=' + encodeURIComponent(texto), '_blank', 'noopener');
      if(status) status.textContent = 'Abrindo o WhatsApp para concluir o seu contato…';
      form.reset();
      if(chipBox){ chipBox.querySelectorAll('.chip').forEach(function(c){ c.classList.remove('active'); }); }
    });
  });

  /* ---- Ano dinâmico no rodapé ---- */
  Array.prototype.forEach.call(document.querySelectorAll('[data-year]'), function(el){ el.textContent = new Date().getFullYear(); });
})();
