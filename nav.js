(function(){
  var btn = document.getElementById('menuBtn');
  var hdr = document.getElementById('hdr');
  if(!btn || !hdr) return;
  btn.addEventListener('click', function(){
    var open = hdr.classList.toggle('nav-open');
    btn.setAttribute('aria-expanded', open);
  });
  hdr.querySelectorAll('nav.links a').forEach(function(a){
    a.addEventListener('click', function(){
      hdr.classList.remove('nav-open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
})();
