(() => {
  'use strict';

  const profile = window.PROFILE;
  if (!profile) return;
  const $ = (selector) => document.querySelector(selector);
  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  };
  // Icons are local SVG paths. Profile text is always rendered as text, never HTML.
  const icons = {
    email: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/>',
    github: '<path d="M9 19c-4 1-4-2-6-2m12 5v-4a3.5 3.5 0 0 0-1-2.7c3.3-.4 6.8-1.6 6.8-7.3a5.7 5.7 0 0 0-1.5-3.9 5.2 5.2 0 0 0-.1-3.9S18 0 15 2a13.4 13.4 0 0 0-6 0C6 0 4.8 1.2 4.8 1.2a5.2 5.2 0 0 0-.1 3.9A5.7 5.7 0 0 0 3.2 9c0 5.7 3.5 6.9 6.8 7.3A3.5 3.5 0 0 0 9 19v3"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 10v7m0-10v.1M11 17v-7m0 3a3 3 0 0 1 6 0v4"/>',
    scholar: '<path d="m2 9 10-6 10 6-10 6L2 9Zm4 3v6c3 3 9 3 12 0v-6M22 9v8"/>',
    education: '<path d="m2 9 10-6 10 6-10 6L2 9Zm4 3v6c3 3 9 3 12 0v-6"/>',
    experience: '<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12c6 4 12 4 18 0m-9 1v3"/>',
    file: '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Zm0 0v6h6M8 13h8m-8 4h6"/>',
    location: '<path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    arrow: '<path d="M7 17 17 7M7 7h10v10"/>',
    zoom: '<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.4-4.4M11 8.5v5M8.5 11h5"/>',
    copy: '<rect x="8.5" y="8.5" width="12" height="12" rx="2.5"/><path d="M15.5 8.5V6a2.5 2.5 0 0 0-2.5-2.5H6A2.5 2.5 0 0 0 3.5 6v7A2.5 2.5 0 0 0 6 15.5h2.5"/>',
    check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
    youtube: '<rect x="2" y="5" width="20" height="14" rx="4"/><path d="m10 9.2 4.8 2.8-4.8 2.8z"/>',
    article: '<path d="M4 4h13v16H6a2 2 0 0 1-2-2V4Z"/><path d="M17 8h3v10a2 2 0 0 1-2 2M8 8h5M8 12h5M8 16h3"/>',
  };
  // Filled brand marks (GitHub Octicon mark, LinkedIn "in" badge).
  const brandMarks = {
    github: ['0 0 16 16', '<path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/>'],
    linkedin: ['0 0 24 24', '<rect width="24" height="24" rx="5" fill="#0A66C2"/><circle cx="7.1" cy="7.2" r="1.7" fill="#fff"/><rect x="5.65" y="9.9" width="2.9" height="8.6" rx=".3" fill="#fff"/><path fill="#fff" d="M10.6 9.9h2.75v1.2c.42-.75 1.38-1.45 2.8-1.45 2.9 0 3.45 1.9 3.45 4.35v4.5h-2.85v-4c0-.95-.02-2.18-1.33-2.18-1.33 0-1.53 1.04-1.53 2.11v4.07H10.6Z"/>'],
  };
  brandMarks.youtube = ['54.08 5.28 313.23 216.02', '<path fill="#ff0033" d="m210.53 221.3s98.13 0 122.46-6.48c13.7-3.67 24.01-14.26 27.63-27.33 6.69-23.98 6.69-74.42 6.69-74.42s0-50.12-6.69-73.88c-3.62-13.39-13.93-23.76-27.63-27.33-24.34-6.59-122.46-6.59-122.46-6.59s-97.91 0-122.14 6.59c-13.49 3.56-24.01 13.93-27.85 27.33-6.47 23.76-6.47 73.88-6.47 73.88s0 50.44 6.47 74.42c3.84 13.07 14.36 23.65 27.85 27.33 24.23 6.48 122.14 6.48 122.14 6.48z"/><path fill="#fff" d="m259.3 113.29-81.01-45.91v91.81z"/>'];
  brandMarks.cv = ['0 0 512 512', '<path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z" fill="currentColor"/><path d="M296 382A60 60 0 1 0 296 482" fill="none" stroke="currentColor" stroke-width="34" stroke-linecap="round"/><path d="M346 374L407 490L468 374" fill="none" stroke="currentColor" stroke-width="34" stroke-linecap="round" stroke-linejoin="round"/>'];
  const brandIcon = (name) => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', brandMarks[name][0]);
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('class', `brand-mark-icon ${name}`);
    svg.innerHTML = brandMarks[name][1];
    return svg;
  };
  const icon = (name) => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('aria-hidden', 'true');
    svg.innerHTML = icons[name] || icons.arrow;
    return svg;
  };
  const safeUrl = (value) => {
    if (typeof value !== 'string' || !value.trim()) return null;
    try {
      const url = new URL(value.trim(), 'https://profile.invalid/');
      return ['http:', 'https:'].includes(url.protocol) ? value.trim() : null;
    } catch (_) { return null; }
  };
  const link = (label, url, className) => {
    const href = safeUrl(url);
    if (!href) return null;
    const node = el('a', className, label);
    node.href = href;
    if (/^(https?:)?\/\//i.test(href)) {
      node.target = '_blank';
      node.rel = 'noopener noreferrer';
    }
    return node;
  };
  const addResources = (parent, resources) => {
    const links = el('div', 'resource-links');
    (resources || []).forEach((item) => {
      const node = link(item.label, item.url, `resource${item.type === 'code' ? ' code' : ''}`);
      if (node) { node.append(icon('arrow')); links.append(node); }
    });
    if (links.childElementCount) parent.append(links);
  };

  // Appends text to parent, turning any profile.inlineLinks name into a link.
  const inlineLinks = profile.inlineLinks || {};
  const linkNames = Object.keys(inlineLinks).sort((a, b) => b.length - a.length);
  const highlights = profile.highlights || [];
  const appendRich = (parent, text) => {
    let rest = text;
    const keys = [...linkNames, ...highlights];
    while (rest) {
      let hit = null;
      keys.forEach((key) => {
        const at = rest.indexOf(key);
        if (at >= 0 && (!hit || at < hit.at || (at === hit.at && key.length > hit.key.length))) hit = { at, key };
      });
      if (!hit) { parent.append(document.createTextNode(rest)); break; }
      if (hit.at) parent.append(document.createTextNode(rest.slice(0, hit.at)));
      if (inlineLinks[hit.key]) parent.append(link(hit.key, inlineLinks[hit.key], 'inline-link') || document.createTextNode(hit.key));
      else parent.append(el('span', 'highlight', hit.key));
      rest = rest.slice(hit.at + hit.key.length);
    }
    return parent;
  };
  const richEl = (tag, className, text) => appendRich(el(tag, className), text);

  document.querySelectorAll('[data-profile-name]').forEach((node) => { node.textContent = profile.name; });
  document.title = `${profile.name} — Profile`;
  $('meta[name="description"]').content = profile.description || '';
  $('#local-name').textContent = profile.localName || '';
  $('#local-name').hidden = !profile.localName;
  const role = $('#profile-role');
  [profile.role, profile.department].filter(Boolean).forEach((text) => role.append(el('span', '', text)));
  if (profile.affiliation) role.append(el('strong', '', profile.affiliation));
  if (profile.lab) role.append(link(profile.lab, profile.labUrl) || el('span', '', profile.lab));

  const portrait = $('#portrait');
  const placeholder = portrait.getAttribute('src');
  const photo = safeUrl(profile.photo);
  if (photo) {
    portrait.addEventListener('error', () => {
      portrait.src = placeholder;
      portrait.alt = 'Profile photo placeholder';
    }, { once: true });
    portrait.src = photo;
    const srcset = (list) => (list || []).map(safeUrl).filter(Boolean).map((url, i) => `${url} ${i + 1}x`).join(', ');
    if (srcset(profile.photoSet)) portrait.srcset = srcset(profile.photoSet);
    portrait.alt = `Photo of ${profile.name}`;
  }
  const photoDark = safeUrl(profile.photoDark);
  if (photo && photoDark) {
    // Second portrait shown only in dark mode; CSS swaps the two by data-theme.
    const dark = el('img', 'portrait portrait-dark');
    dark.src = photoDark; dark.alt = portrait.alt; dark.width = 480; dark.height = 560; dark.decoding = 'async';
    const darkSet = (profile.photoDarkSet || []).map(safeUrl).filter(Boolean).map((url, i) => `${url} ${i + 1}x`).join(', ');
    if (darkSet) dark.srcset = darkSet;
    portrait.classList.add('has-dark');
    portrait.after(dark);
  }
  $('#portrait-caption').textContent = profile.photoCaption || '';
  $('#portrait-caption').hidden = !profile.photoCaption;

  const socials = $('#social-links');
  // Email: click to copy, with a short "Copied!" bubble (falls back to execCommand where the Clipboard API is blocked).
  if (profile.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email)) {
    const button = el('button', 'copy-email');
    button.type = 'button';
    button.title = 'Copy email address';
    button.setAttribute('aria-label', `Copy email address ${profile.email}`);
    const box = el('span', 'copy-box');
    box.append(icon('copy'));
    button.append(box, el('span', 'copy-text', profile.email));
    const bubble = el('span', 'copied-bubble', 'Copied!');
    bubble.setAttribute('role', 'status');
    button.append(bubble);
    let timer;
    button.addEventListener('click', async () => {
      let ok = false;
      try { await navigator.clipboard.writeText(profile.email); ok = true; } catch (_) {
        const area = el('textarea'); area.value = profile.email; area.setAttribute('readonly', '');
        area.style.position = 'fixed'; area.style.opacity = '0'; document.body.append(area); area.select();
        try { ok = document.execCommand('copy'); } catch (__) {}
        area.remove();
      }
      bubble.textContent = ok ? 'Copied!' : profile.email;
      button.classList.add('copied');
      box.replaceChildren(icon(ok ? 'check' : 'copy'));
      clearTimeout(timer); timer = setTimeout(() => { button.classList.remove('copied'); box.replaceChildren(icon('copy')); }, 1500);
    });
    $('#email-slot').append(button);
  }
  // Profile links as an icon row (GitHub, LinkedIn, Scholar).
  [['github', 'GitHub'], ['linkedin', 'LinkedIn'], ['scholar', 'Google Scholar']].forEach(([key, label]) => {
    const node = link('', profile[key]);
    if (!node) return;
    node.setAttribute('aria-label', label); node.title = label;
    node.append(brandMarks[key] ? brandIcon(key) : icon(key));
    const row = el('li'); row.append(node); socials.append(row);
  });
  {
    const href = safeUrl(profile.cv);
    const node = href ? link('', profile.cv) : el('span', 'cv-mark-soon');
    const label = href ? 'Curriculum Vitae' : 'CV (coming soon)';
    node.setAttribute('aria-label', label); node.title = label;
    node.append(brandIcon('cv'));
    const row = el('li'); row.append(node); socials.append(row);
  }
  socials.hidden = !socials.childElementCount;
  $('#location').hidden = !profile.location;
  if (profile.location) $('#location').append(icon('location'), document.createTextNode(profile.location));

  $('#greeting').textContent = profile.greeting || '';
  (profile.bio || []).forEach((paragraph) => $('#bio').append(richEl('p', '', paragraph)));
  (profile.interests || []).forEach((interest) => $('#interests').append(el('span', 'chip', interest)));
  $('#interests').hidden = !$('#interests').childElementCount;


  const rowEntry = (item, type) => {
    const row = el('article', 'entry');
    const badge = el('div', 'entry-icon');
    badge.append(icon(type));
    if (safeUrl(item.logo)) {
      const image = el('img');
      image.alt = ''; image.src = safeUrl(item.logo);
      image.addEventListener('error', () => badge.replaceChildren(icon(type)), { once: true });
      badge.replaceChildren(image);
      if (item.logoFill) badge.classList.add('logo-fill');
    }
    const content = el('div');
    const heading = el('div', 'entry-top');
    heading.append(el('h3', '', item.title));
    if (item.period) heading.append(el('span', 'dates', item.period));
    content.append(heading);
    if (item.subtitle) content.append(el('p', 'subtitle', item.subtitle));
    // Only education entries turn names into links (e.g. the advisor).
    if (item.description) content.append(type === 'education' ? richEl('p', 'description', item.description) : el('p', 'description', item.description));
    if (item.details?.length) {
      const details = el('details');
      details.append(el('summary', '', 'Details'));
      const list = el('ul');
      item.details.forEach((detail) => list.append(el('li', '', detail)));
      details.append(list); content.append(details);
    }
    if (item.stack?.length) {
      const stack = el('div', 'stack');
      item.stack.forEach((skill) => stack.append(el('span', 'stack-chip', skill)));
      content.append(stack);
    }
    if (item.note) content.append(el('p', 'entry-note', item.note));
    addResources(content, item.links);
    row.append(badge, content);
    return row;
  };

  let lightbox;
  let lightboxTrigger = null;
  const openLightbox = (src, alt, caption) => {
    lightboxTrigger = document.activeElement;
    if (!lightbox) {
      lightbox = el('dialog', 'lightbox');
      lightbox.setAttribute('aria-label', 'Figure');
      const close = el('button', 'lightbox-close', '×');
      close.type = 'button'; close.setAttribute('aria-label', 'Close');
      lightbox.append(close, el('img'), el('p', 'lightbox-caption'));
      // Any click (backdrop, image, or close button) dismisses the dialog.
      lightbox.addEventListener('click', () => lightbox.close());
      // Closing returns focus to the thumbnail; drop it so no focus ring lingers on the figure.
      lightbox.addEventListener('close', () => { if (lightboxTrigger && lightboxTrigger.blur) lightboxTrigger.blur(); });
      document.body.append(lightbox);
    }
    const img = lightbox.querySelector('img');
    img.src = src; img.alt = alt;
    lightbox.querySelector('.lightbox-caption').textContent = caption;
    if (typeof lightbox.showModal === 'function') lightbox.showModal();
    else window.open(src, '_blank', 'noopener');
  };

  // Pin the zoom badge to the top-right corner of the figure itself (the image is letterboxed inside the thumbnail).
  // Pin the zoom badge to the top-right corner of the figure, which is centred inside a square thumbnail.
  const placeBadge = (thumb, img, badge) => {
    const place = () => {
      if (!img.offsetWidth) return;
      const t = thumb.getBoundingClientRect(), r = img.getBoundingClientRect();
      badge.style.top = `${r.top - t.top - thumb.clientTop + 4}px`;
      badge.style.right = `${t.right - r.right - thumb.clientLeft + 4}px`;
    };
    if (img.complete) place(); else img.addEventListener('load', place, { once: true });
    if ('ResizeObserver' in window) { const ro = new ResizeObserver(place); ro.observe(thumb); ro.observe(img); }
  };

  const renderers = {
    education: (item) => rowEntry(item, 'education'),
    experience: (item) => rowEntry(item, 'experience'),
    publications: (item) => {
      const article = el('article', 'publication');
      const image = safeUrl(item.image);
      let body = article;
      if (image) {
        // Teaser thumbnail on the left; clicking opens the shared lightbox.
        const thumb = el('button', 'pub-thumb');
        thumb.type = 'button';
        thumb.setAttribute('aria-label', `Enlarge figure: ${item.title}`);
        const img = el('img');
        img.src = image; img.alt = item.imageAlt || ''; img.loading = 'lazy'; img.decoding = 'async';
        const badge = el('span', 'zoom-badge');
        badge.append(icon('zoom'));
        thumb.append(img, badge);
        placeBadge(thumb, img, badge);
        thumb.addEventListener('click', () => openLightbox(image, item.imageAlt || item.title, item.imageAlt || item.title));
        body = el('div', 'pub-body');
        article.classList.add('has-thumb');
        const figure = el('figure', 'pub-figure');
        figure.append(thumb);
        article.append(figure, body);
      }
      body.append(el('h3', '', item.title));
      if (item.authors) {
        // Each author is plain text; trailing † / * marks are rendered as superscripts.
        const authors = el('p', 'authors');
        item.authors.split(',').map((name) => name.trim()).filter(Boolean).forEach((entry, index) => {
          if (index) authors.append(document.createTextNode(', '));
          const [, name, marks] = entry.match(/^(.*?)([†*∗]*)$/);
          authors.append(name === profile.name ? el('span', 'me', name) : document.createTextNode(name));
          // One element per mark so the dagger and the asterisk can each be sized to sit right.
          [...marks.replace(/∗/g, '*')].forEach((mk) => authors.append(el('span', `author-mark ${mk === '*' ? 'mark-ast' : 'mark-dag'}${name === profile.name ? ' me-mark' : ''}`, mk)));
        });
        body.append(authors);
      }
      body.append(el('p', 'venue', item.venue || ''));
      if (item.tldr) {
        const details = el('details', 'abstract');
        details.append(el('summary', '', 'TL;DR'), el('p', '', item.tldr));
        body.append(details);
      }
      addResources(body, item.links);
      return article;
    },
    projects: (item) => {
      const article = el('article', 'project');
      const image = safeUrl(item.image);
      if (image) {
        // Same layout as publications: thumbnail on the left, opens the lightbox.
        const thumb = el('button', 'pub-thumb');
        thumb.type = 'button';
        thumb.setAttribute('aria-label', `Enlarge figure: ${item.title}`);
        const img = el('img');
        img.src = image; img.alt = item.imageAlt || ''; img.loading = 'lazy'; img.decoding = 'async';
        const badge = el('span', 'zoom-badge');
        badge.append(icon('zoom'));
        thumb.append(img, badge);
        thumb.addEventListener('click', () => openLightbox(image, item.imageAlt || item.title, item.title));
        article.classList.add('has-thumb');
        article.append(thumb);
      }
      const body = el('div', 'project-body');
      const meta = el('div', 'project-meta');
      const company = el('p', 'project-company');
      const logo = safeUrl(item.logo);
      if (logo) {
        const mark = el('img', 'company-logo');
        mark.src = logo; mark.alt = ''; mark.decoding = 'async';
        mark.addEventListener('error', () => mark.remove(), { once: true });
        company.append(mark);
      }
      if (item.company) company.append(el('span', 'company-name', item.company));
      meta.append(company);
      const when = el('div', 'project-when');
      if (item.status) when.append(el('span', 'status-pill', item.status));
      if (item.period) when.append(el('span', 'dates', item.period));
      meta.append(when);
      body.append(meta, el('h3', '', item.title));
      if (item.description) body.append(el('p', 'description', item.description));
      if (item.tags?.length) {
        const tags = el('div', 'project-tags');
        item.tags.forEach((tag) => tags.append(el('span', '', tag)));
        body.append(tags);
      }
      const sections = [['problem', 'Problem'], ['role', 'My role'], ['results', 'Results']]
        .filter(([key]) => item.details?.[key]?.length);
      if (sections.length) {
        const details = el('details', 'project-details');
        details.append(el('summary', '', sections.map(([, label]) => label).join(' · ')));
        const grid = el('div', 'detail-grid');
        sections.forEach(([key, label]) => {
          const block = el('div', `detail-block ${key}`);
          block.append(el('h4', '', label));
          const list = el(key === 'problem' ? 'ol' : 'ul');
          item.details[key].forEach((line) => list.append(el('li', '', line)));
          block.append(list); grid.append(block);
        });
        // The panel lives outside the body so it can span the whole card, under the thumbnail too.
        const panel = el('div', 'detail-panel');
        panel.append(grid);
        panel.hidden = true;
        details.addEventListener('toggle', () => { panel.hidden = !details.open; });
        body.append(details);
        article.append(body, panel);
      }
      addResources(body, item.links);
      if (!body.parentNode) article.append(body);
      return article;
    },
    activities: (item) => {
      const article = el('article', 'activity');
      const logo = safeUrl(item.logo);
      if (logo) {
        const tile = el('div', 'entry-icon activity-logo');
        const image = el('img');
        image.alt = ''; image.src = logo; image.decoding = 'async';
        tile.append(image);
        if (item.logoFill) tile.classList.add('logo-fill');
        article.append(tile);
        article.classList.add('has-logo');
      }
      const body = el('div', 'activity-body');
      article.append(body);
      if (item.title || item.period) {
        const top = el('div', 'activity-top');
        if (item.title) top.append(el('h3', '', item.title));
        if (item.period) top.append(el('span', 'dates', item.period));
        body.append(top);
      }
      if (item.description) body.append(el('p', 'description', item.description));
      const chips = el('div', 'activity-chips');
      if (item.location) {
        const place = el('span', 'chip-place', item.location);
        place.prepend(icon('location'));
        chips.append(place);
      }
      (item.links || []).forEach((resource) => {
        const node = link(resource.label, resource.url, 'link-chip');
        if (!node) return;
        node.prepend(brandMarks[resource.type] ? brandIcon(resource.type) : icon(resource.type || 'arrow'));
        chips.append(node);
      });
      if (chips.childElementCount) body.append(chips);
      return article;
    },
  };
  Object.entries(renderers).forEach(([id, render]) => {
    const items = profile[id] || [];
    if (!items.length) {
      $(`#${id}`).hidden = true;
      $(`nav a[href="#${id}"]`).hidden = true;
      return;
    }
    if (id === 'publications' && items.some((item) => /[†*∗]/.test(item.authors || ''))) {
      const legend = el('p', 'author-legend');
      const item = (mark, label) => { const span = el('span', 'legend-item'); span.append(el('span', `author-mark ${mark === '*' ? 'mark-ast' : 'mark-dag'}`, mark), document.createTextNode(` ${label}`)); return span; };
      legend.append(item('†', 'Co-first author'), item('*', 'Corresponding author'));
      // Legend sits next to the section title: Publications († Co-first author  * Corresponding author)
      legend.className = 'author-legend in-head';
      $('#publications .card-head').append(legend);
    }
    let lastYear = null;
    items.forEach((item) => {
      // Publications are grouped under year labels, like an academic publication list.
      if (id === 'publications' && item.year && item.year !== lastYear) {
        $(`#${id}-list`).append(el('p', 'pub-year', item.year));
        lastYear = item.year;
      }
      $(`#${id}-list`).append(render(item));
    });
  });
  $('#copyright').textContent = `© ${new Date().getFullYear()} ${profile.name}`;

  const toggle = $('.theme-toggle');
  const syncTheme = () => {
    const dark = document.documentElement.dataset.theme === 'dark';
    toggle.setAttribute('aria-pressed', String(dark));
    toggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    $('meta[name="theme-color"]').content = dark ? '#1c1d21' : '#ffffff';
  };
  syncTheme();
  toggle.addEventListener('click', () => {
    const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('profile-theme', theme); } catch (_) {}
    syncTheme();
  });

  const sections = [...document.querySelectorAll('main section[id]:not([hidden])')];
  const navLinks = [...document.querySelectorAll('nav a:not([hidden])')];
  let scheduled = false;
  const updateNavigation = () => {
    // Use the same offsets as native anchor scrolling so a clicked tab is active.
    const scrollPadding = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
    const scrollMargin = parseFloat(getComputedStyle(sections[0]).scrollMarginTop) || 0;
    const offset = scrollPadding + scrollMargin + 2;
    let current = sections[0];
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= offset) current = section;
    });
    if (window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 3) current = sections.at(-1);
    navLinks.forEach((node) => {
      if (node.hash === `#${current.id}`) node.setAttribute('aria-current', 'location');
      else node.removeAttribute('aria-current');
    });
    scheduled = false;
  };
  const scheduleNavigation = () => {
    if (!scheduled) { scheduled = true; requestAnimationFrame(updateNavigation); }
  };
  window.addEventListener('scroll', scheduleNavigation, { passive: true });
  window.addEventListener('resize', scheduleNavigation);
  window.addEventListener('load', scheduleNavigation);
  updateNavigation();
})();
