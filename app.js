// app.js — rendering logic. Edit data.js to change content.

(function () {
  'use strict';

  // ── State ─────────────────────────────────────
  let currentTab = 'schedule';
  let currentDayIndex = 0;
  let pubFilter = 'all';

  // ── Helpers ───────────────────────────────────
  function el(tag, className, html) {
    const e = document.createElement(tag);
    if (className) e.className = className;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  function addressLink(address, mapsUrl, cls) {
    if (!mapsUrl) return address || '';
    const c = cls || 'maps-link';
    return `<a href="${mapsUrl}" class="${c}" target="_blank" rel="noopener">📍 ${address}</a>`;
  }

  function websiteLink(url) {
    if (!url) return '';
    const display = url.replace(/^https?:\/\//, '');
    const href = url.startsWith('http') ? url : 'https://' + url;
    return `<a href="${href}" class="website-link" target="_blank" rel="noopener">${display}</a>`;
  }

  function todayDayIndex() {
    const today = new Date();
    const todayStr = today.toISOString().slice(0, 10);
    const idx = TRIP.days.findIndex(d => d.date === todayStr);
    return idx >= 0 ? idx : 0;
  }

  // ── Day nav ───────────────────────────────────
  function renderDayNav() {
    const nav = document.getElementById('day-nav');
    nav.innerHTML = '';
    const todayStr = new Date().toISOString().slice(0, 10);

    TRIP.days.forEach((day, i) => {
      const d = new Date(day.date + 'T12:00:00');
      const dayName = d.toLocaleDateString('en-US', { weekday: 'short' });
      const dateNum = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

      const pill = el('button', 'day-pill');
      if (i === currentDayIndex) pill.classList.add('active');
      if (day.date === todayStr) pill.classList.add('today-pill');
      pill.innerHTML = `<span class="pill-day">${dayName}</span><span class="pill-date">${dateNum}</span>`;
      pill.addEventListener('click', () => {
        currentDayIndex = i;
        renderDayNav();
        renderMain();
        // Scroll pill into view
        pill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      });
      nav.appendChild(pill);
    });
  }

  // ── Event card ────────────────────────────────
  function renderEventCard(event) {
    const card = el('div', 'event-card');

    const timeEl = el('div', 'event-time', event.time || '');
    card.appendChild(timeEl);

    const body = el('div', 'event-body');

    const nameEl = el('div', 'event-name' + (event.warning ? ' has-warning' : ''), event.name);
    body.appendChild(nameEl);

    if (event.subtitle) {
      body.appendChild(el('div', 'event-subtitle', event.subtitle));
    }

    const meta = el('div', 'event-meta');

    if (event.address && event.mapsUrl) {
      const row = el('div', 'meta-row');
      row.innerHTML = `<span class="meta-text">${addressLink(event.address, event.mapsUrl)}</span>`;
      meta.appendChild(row);
    }

    if (event.tube) {
      const row = el('div', 'meta-row');
      row.innerHTML = `<span class="meta-icon">🚇</span><span class="tube-text">${event.tube}</span>`;
      meta.appendChild(row);
    }

    if (event.admission) {
      const row = el('div', 'meta-row');
      row.innerHTML = `<span class="meta-icon">🎫</span><span class="admission-badge">${event.admission}</span>`;
      meta.appendChild(row);
    }

    if (event.notes) {
      const row = el('div', 'meta-row');
      row.innerHTML = `<span class="notes-text">${event.notes}</span>`;
      meta.appendChild(row);
    }

    if (event.website) {
      const row = el('div', 'meta-row');
      row.innerHTML = `<span class="meta-icon">🌐</span>${websiteLink(event.website)}`;
      meta.appendChild(row);
    }

    if (meta.children.length) body.appendChild(meta);
    card.appendChild(body);
    return card;
  }

  // ── Nearby card (pub or restaurant) ──────────
  function renderNearbyCard(item) {
    const card = el('div', 'nearby-card');
    card.innerHTML = `
      <div class="nearby-name">${item.name}</div>
      ${item.note ? `<div class="nearby-note">${item.note}</div>` : ''}
      ${item.address ? `<div class="nearby-address">${addressLink(item.address, item.mapsUrl)}</div>` : ''}
    `;
    return card;
  }

  // ── Schedule tab ──────────────────────────────
  function renderSchedule() {
    const frag = document.createDocumentFragment();
    const day = TRIP.days[currentDayIndex];
    if (!day) return frag;

    // Warning banner
    if (day.warning) {
      const banner = el('div', 'warning-banner');
      banner.innerHTML = `<strong>⚠️ Logistics Note</strong>${day.warning}`;
      frag.appendChild(banner);
    }

    // Day header
    const hdr = el('div', 'day-header');
    hdr.innerHTML = `
      <div class="day-title">${day.label}</div>
      ${day.subtitle ? `<div class="day-subtitle">${day.subtitle}</div>` : ''}
    `;
    frag.appendChild(hdr);

    // Events
    if (day.events && day.events.length) {
      frag.appendChild(el('div', 'section-label', 'Today\'s Plan'));
      const list = el('div', 'event-list');
      day.events.forEach(ev => list.appendChild(renderEventCard(ev)));
      frag.appendChild(list);
    }

    // Nearby pubs
    if (day.pubs && day.pubs.length) {
      frag.appendChild(el('div', 'section-label', '🍺 Nearby Pubs'));
      const list = el('div', 'nearby-list');
      day.pubs.forEach(p => list.appendChild(renderNearbyCard(p)));
      frag.appendChild(list);
    }

    // Nearby restaurants
    if (day.restaurants && day.restaurants.length) {
      frag.appendChild(el('div', 'section-label', '🍽 Nearby Restaurants'));
      const list = el('div', 'nearby-list');
      day.restaurants.forEach(r => list.appendChild(renderNearbyCard(r)));
      frag.appendChild(list);
    }

    // Unscheduled (only on last day as a reminder)
    if (currentDayIndex === TRIP.days.length - 1 && TRIP.unscheduled && TRIP.unscheduled.length) {
      frag.appendChild(el('div', 'section-label', 'Other Options — Not Yet Scheduled'));
      const list = el('div', 'nearby-list');
      TRIP.unscheduled.forEach(u => {
        const card = el('div', 'unsched-card');
        card.innerHTML = `
          <div class="unsched-cat">${u.category || ''}</div>
          <div class="unsched-name">${u.name}</div>
          ${u.address ? `<div style="margin-top:4px">${addressLink(u.address, u.mapsUrl)}</div>` : ''}
          ${u.notes ? `<div class="nearby-note" style="margin-top:4px">${u.notes}</div>` : ''}
          ${u.website ? `<div style="margin-top:4px">${websiteLink(u.website)}</div>` : ''}
        `;
        list.appendChild(card);
      });
      frag.appendChild(list);
    }

    return frag;
  }

  // ── Pubs reference tab ────────────────────────
  function renderPubs() {
    const frag = document.createDocumentFragment();
    const pubs = REFERENCE.pubs;

    // Filter bar
    const filterBar = el('div', 'ref-filter-bar');
    [['all', 'All'], ['taproom', 'Taprooms'], ['pub', 'Historic Pubs']].forEach(([val, label]) => {
      const chip = el('button', 'filter-chip' + (pubFilter === val ? ' active' : ''), label);
      chip.addEventListener('click', () => {
        pubFilter = val;
        renderMain();
      });
      filterBar.appendChild(chip);
    });
    frag.appendChild(filterBar);

    const filtered = pubFilter === 'all' ? pubs : pubs.filter(p => p.type === pubFilter);

    if (!filtered.length) {
      frag.appendChild(el('div', 'empty-state', 'No results.'));
      return frag;
    }

    filtered.forEach(pub => {
      const card = el('div', 'ref-card');
      card.innerHTML = `
        <div class="tag-row">
          <span class="tag tag-pub">${pub.type === 'taproom' ? 'Taproom' : 'Pub'}</span>
          ${pub.open ? `<span class="tag tag-open">${pub.open}</span>` : ''}
        </div>
        <div class="ref-card-name">${pub.name}</div>
        <div class="ref-card-hood">${pub.neighborhood}</div>
        <div class="ref-card-body">
          ${pub.address ? `<div>${addressLink(pub.address, pub.mapsUrl)}</div>` : ''}
          ${pub.tube ? `<div class="meta-row"><span class="meta-icon">🚇</span><span class="tube-text">${pub.tube}</span></div>` : ''}
          ${pub.notes ? `<div class="notes-text">${pub.notes}</div>` : ''}
        </div>
      `;
      frag.appendChild(card);
    });

    // Bermondsey note
    const note = el('div', 'warning-banner', '');
    note.style.margin = '16px 16px 0';
    note.innerHTML = '<strong>🍺 Beer Mile Tip</strong>The Kernel → Fourpure → Cloudwater are all on Dockley Road, Bermondsey. Saturdays are best — most open from ~11am–5pm. Plan a dedicated half-day.';
    frag.appendChild(note);

    return frag;
  }

  // ── Eats reference tab ────────────────────────
  function renderEats() {
    const frag = document.createDocumentFragment();
    frag.appendChild(el('div', 'section-label', 'Restaurant Guide'));

    REFERENCE.restaurants.forEach(r => {
      const card = el('div', 'ref-card');
      card.innerHTML = `
        <div class="ref-card-name">${r.name}</div>
        <div class="ref-card-hood">${r.neighborhood || ''}</div>
        <div class="ref-card-body">
          ${r.address ? `<div>${addressLink(r.address, r.mapsUrl)}</div>` : ''}
          ${r.notes ? `<div class="notes-text">${r.notes}</div>` : ''}
        </div>
      `;
      frag.appendChild(card);
    });

    return frag;
  }

  // ── Info tab ──────────────────────────────────
  function renderInfo() {
    const frag = document.createDocumentFragment();

    // Home base card
    const hb = TRIP.homeBase;
    const homeCard = el('div', 'home-card');
    homeCard.innerHTML = `
      <div class="home-card-name">🏠 ${hb.name}</div>
      <div class="home-card-body">
        <div>${addressLink(hb.address, hb.mapsUrl)}</div>
        <div class="meta-row"><span class="meta-icon">🚇</span><span class="tube-text">${hb.tube}</span></div>
        ${hb.notes ? `<div class="notes-text">${hb.notes}</div>` : ''}
      </div>
    `;
    frag.appendChild(homeCard);

    // Neighborhoods
    frag.appendChild(el('div', 'section-label', 'Neighborhoods'));
    REFERENCE.neighborhoods.forEach(n => {
      const card = el('div', 'neighborhood-card');
      card.innerHTML = `
        <div class="neighborhood-name">${n.name}</div>
        <div class="neighborhood-vibe">${n.vibe}</div>
        <div class="neighborhood-body">
          <div class="meta-row"><span class="meta-icon">🚇</span><span class="tube-text">${n.tube}</span></div>
          ${n.notes ? `<div class="notes-text">${n.notes}</div>` : ''}
        </div>
      `;
      frag.appendChild(card);
    });

    // Unscheduled extras
    if (TRIP.unscheduled && TRIP.unscheduled.length) {
      frag.appendChild(el('div', 'section-label', 'Other Options — No Date Assigned'));
      TRIP.unscheduled.forEach(u => {
        const card = el('div', 'unsched-card');
        card.innerHTML = `
          <div class="unsched-cat">${u.category || ''}</div>
          <div class="unsched-name">${u.name}</div>
          ${u.address ? `<div style="margin-top:4px">${addressLink(u.address, u.mapsUrl)}</div>` : ''}
          ${u.notes ? `<div class="nearby-note" style="margin-top:4px">${u.notes}</div>` : ''}
          ${u.website ? `<div style="margin-top:4px">${websiteLink(u.website)}</div>` : ''}
        `;
        frag.appendChild(card);
      });
    }

    return frag;
  }

  // ── Main render ───────────────────────────────
  function renderMain() {
    const main = document.getElementById('main');
    main.innerHTML = '';

    const dayNav = document.getElementById('day-nav');
    dayNav.classList.toggle('hidden', currentTab !== 'schedule');

    let content;
    switch (currentTab) {
      case 'schedule': content = renderSchedule(); break;
      case 'pubs':     content = renderPubs();     break;
      case 'eats':     content = renderEats();      break;
      case 'info':     content = renderInfo();      break;
      default:         content = renderSchedule();
    }

    main.appendChild(content);
    main.scrollTop = 0;
    window.scrollTo(0, 0);
  }

  // ── Tab switching ─────────────────────────────
  window.showTab = function (tab) {
    currentTab = tab;
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tab);
    });
    renderMain();
  };

  // ── Init ──────────────────────────────────────
  function init() {
    currentDayIndex = todayDayIndex();
    renderDayNav();
    renderMain();

    // Scroll active pill into view after render
    requestAnimationFrame(() => {
      const activePill = document.querySelector('.day-pill.active');
      if (activePill) {
        activePill.scrollIntoView({ behavior: 'auto', block: 'nearest', inline: 'center' });
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
