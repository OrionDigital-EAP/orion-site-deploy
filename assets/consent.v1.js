/* Orion Digital · aviso de cookies. A medição (Google Analytics 4) só grava cookies depois do aceite. */
(function () {
  'use strict';
  var KEY = 'orion_consent', d = document;
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  function read() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function save(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }
  function apply(v) {
    gtag('consent', 'update', { analytics_storage: v === 'granted' ? 'granted' : 'denied' });
  }
  var css = '.ck{position:fixed;left:max(16px,env(safe-area-inset-left,0px));bottom:max(16px,env(safe-area-inset-bottom,0px));z-index:9999;max-width:min(440px,calc(100vw - 32px));padding:18px 20px;background:#0B0B0B;color:#F8F8F8;border:1px solid rgba(212,175,55,.55);border-radius:6px;box-shadow:0 12px 40px rgba(0,0,0,.45);font:14px/1.5 Inter,system-ui,sans-serif}' +
    '.ck p{margin:0 0 14px}.ck a{color:#E1C16E;text-decoration:underline}.ck-b{display:flex;gap:10px;flex-wrap:wrap}' +
    '.ck button{cursor:pointer;font:600 14px Inter,system-ui,sans-serif;padding:10px 16px;border-radius:4px;border:1px solid #D4AF37;min-height:44px}' +
    '.ck-y{background:#D4AF37;color:#0B0B0B}.ck-n{background:transparent;color:#F8F8F8}.ck button:focus-visible{outline:2px solid #E1C16E;outline-offset:2px}';
  function show() {
    if (d.getElementById('ck')) return;
    var st = d.createElement('style'); st.textContent = css; d.head.appendChild(st);
    var b = d.createElement('div'); b.id = 'ck'; b.className = 'ck'; b.setAttribute('role', 'dialog'); b.setAttribute('aria-label', 'Aviso de cookies');
    var en = /^en/i.test(d.documentElement.lang || '');
    b.setAttribute('aria-label', en ? 'Cookie notice' : 'Aviso de cookies');
    b.innerHTML = en
      ? '<p>We use Google Analytics to measure site visits, which sets cookies in your browser. Measurement only runs if you accept. See the <a href="privacidade.html#cookies">Privacy Policy</a> (in Portuguese).</p><div class="ck-b"><button type="button" class="ck-y">Accept measurement</button><button type="button" class="ck-n">Decline</button></div>'
      : '<p>Usamos o Google Analytics para medir visitas ao site, o que grava cookies no seu navegador. Só ligamos a medição se você aceitar. Veja a <a href="privacidade.html#cookies">Política de Privacidade</a>.</p><div class="ck-b"><button type="button" class="ck-y">Aceitar medição</button><button type="button" class="ck-n">Recusar</button></div>';
    d.body.appendChild(b);
    b.querySelector('.ck-y').addEventListener('click', function () { save('granted'); apply('granted'); b.remove(); });
    b.querySelector('.ck-n').addEventListener('click', function () { save('denied'); apply('denied'); b.remove(); });
  }
  var v = read();
  if (v === 'granted' || v === 'denied') apply(v); else show();
  d.addEventListener('click', function (e) {
    var t = e.target && e.target.closest && e.target.closest('[data-cookie-prefs]');
    if (t) { e.preventDefault(); show(); }
  });
})();
