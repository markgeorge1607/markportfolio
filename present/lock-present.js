(function(){
  var KEY='mg_present_unlocked';
  var PWD='B0dhicaro';
  if(sessionStorage.getItem(KEY)==='1')return;

  // Load Google Font
  var link=document.createElement('link');
  link.rel='stylesheet';
  link.href='https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600&display=swap';
  document.head.appendChild(link);

  var overlay=document.createElement('div');
  overlay.id='lock-overlay';
  overlay.style.cssText=[
    'position:fixed','inset:0','z-index:99999',
    'background:#F6F3EC',
    'display:flex','align-items:center','justify-content:center',
    'font-family:"Hanken Grotesk",system-ui,sans-serif',
    'transition:opacity 0.4s ease'
  ].join(';');

  overlay.innerHTML=[
    '<div style="width:100%;max-width:380px;padding:0 24px;display:flex;flex-direction:column;align-items:center;gap:0">',
      '<div style="font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#7E3A2E;margin-bottom:28px">Presentation Portal</div>',
      '<input id="lock-pwd" type="password" placeholder="Password" autocomplete="current-password" style="',
        'width:100%;padding:14px 16px;background:#fff;border:1px solid #D8D3C6;',
        'border-radius:6px;color:#15140F;font-family:inherit;font-size:15px;outline:none;',
        'letter-spacing:.04em;margin-bottom:12px',
      '">',
      '<button id="lock-btn" style="',
        'width:100%;padding:14px;background:#7E3A2E;border:none;border-radius:6px;',
        'color:#F6F3EC;font-family:inherit;font-size:14px;font-weight:600;cursor:pointer;',
        'letter-spacing:.04em;transition:opacity .2s',
      '">Enter</button>',
      '<div id="lock-err" style="color:#e53935;font-size:12px;margin-top:12px;min-height:18px;opacity:0;transition:opacity .2s">Incorrect password</div>',
      '<a href="../index.html" style="font-size:12px;color:#8C887B;text-decoration:none;margin-top:32px;letter-spacing:.05em;transition:color .2s" onmouseover="this.style.color=\'#15140F\'" onmouseout="this.style.color=\'#8C887B\'">← Back to portfolio</a>',
    '</div>'
  ].join('');

  document.body.appendChild(overlay);

  function attempt(){
    var val=document.getElementById('lock-pwd').value;
    if(val===PWD){
      sessionStorage.setItem(KEY,'1');
      overlay.style.opacity='0';
      setTimeout(function(){ overlay.remove(); },400);
    } else {
      var err=document.getElementById('lock-err');
      err.style.opacity='1';
      setTimeout(function(){ err.style.opacity='0'; },2500);
      document.getElementById('lock-pwd').value='';
    }
  }

  document.getElementById('lock-btn').addEventListener('click',attempt);
  document.getElementById('lock-pwd').addEventListener('keydown',function(e){
    if(e.key==='Enter') attempt();
  });
})();
