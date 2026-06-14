(function () {
  var KEY = 'mg_unlocked';
  var PWD = 'Klaio81#';

  if (sessionStorage.getItem(KEY) === '1') return;

  // Build overlay
  var overlay = document.createElement('div');
  overlay.id = 'lockOverlay';
  overlay.innerHTML = [
    '<div class="lock-box">',
    '  <p class="lock-label">MARK<span>.</span> GEORGE</p>',
    '  <h2 class="lock-heading">This page is<br><em>password protected</em></h2>',
    '  <form class="lock-form" id="lockForm" autocomplete="off">',
    '    <input class="lock-input" id="lockInput" type="password" placeholder="Enter password" autocomplete="current-password" />',
    '    <button class="lock-btn" type="submit">Unlock ↗</button>',
    '  </form>',
    '  <p class="lock-error" id="lockError"></p>',
    '  <a class="lock-back" href="index.html">← Back to homepage</a>',
    '</div>'
  ].join('');

  var style = document.createElement('style');
  style.textContent = [
    '#lockOverlay{',
    '  position:fixed;inset:0;z-index:9999;',
    '  background:#F6F3EC;',
    '  display:flex;align-items:center;justify-content:center;',
    '  font-family:\'Hanken Grotesk\',system-ui,sans-serif;',
    '}',
    '.lock-box{',
    '  width:100%;max-width:400px;padding:0 28px;',
    '}',
    '.lock-label{',
    '  font-size:12px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:#15140F;margin-bottom:40px;',
    '}',
    '.lock-label span{color:#7E3A2E}',
    '.lock-heading{',
    '  font-family:\'Newsreader\',Georgia,serif;font-weight:300;',
    '  font-size:clamp(2rem,5vw,3rem);line-height:1.1;letter-spacing:-.02em;',
    '  color:#15140F;margin-bottom:36px;',
    '}',
    '.lock-heading em{font-style:italic;color:#7E3A2E}',
    '.lock-form{display:flex;flex-direction:column;gap:12px}',
    '.lock-input{',
    '  width:100%;padding:14px 16px;',
    '  font-family:inherit;font-size:15px;color:#15140F;',
    '  background:#F6F3EC;border:1px solid #D8D3C6;border-radius:0;',
    '  outline:none;transition:border-color .25s;',
    '  -webkit-appearance:none;',
    '}',
    '.lock-input:focus{border-color:#15140F}',
    '.lock-btn{',
    '  padding:14px 16px;',
    '  font-family:inherit;font-size:13px;font-weight:600;letter-spacing:.08em;',
    '  text-transform:uppercase;color:#F6F3EC;background:#15140F;',
    '  border:none;cursor:pointer;transition:background .25s;',
    '}',
    '.lock-btn:hover{background:#7E3A2E}',
    '.lock-error{',
    '  min-height:20px;margin-top:10px;',
    '  font-size:12.5px;color:#7E3A2E;letter-spacing:.04em;',
    '}',
    '.lock-back{',
    '  display:inline-block;margin-top:32px;',
    '  font-size:12.5px;color:#8C887B;letter-spacing:.04em;',
    '  border-bottom:1px solid #D8D3C6;padding-bottom:2px;',
    '  transition:color .25s,border-color .25s;',
    '}',
    '.lock-back:hover{color:#15140F;border-color:#15140F}',
  ].join('');

  document.head.appendChild(style);
  document.body.appendChild(overlay);

  document.getElementById('lockForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var val = document.getElementById('lockInput').value;
    if (val === PWD) {
      sessionStorage.setItem(KEY, '1');
      overlay.style.opacity = '0';
      overlay.style.transition = 'opacity .4s ease';
      setTimeout(function () { overlay.remove(); }, 400);
    } else {
      var err = document.getElementById('lockError');
      err.textContent = 'Incorrect password — try again.';
      document.getElementById('lockInput').value = '';
      document.getElementById('lockInput').focus();
    }
  });
})();
