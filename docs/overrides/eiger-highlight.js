var script1 = document.createElement('script');
script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js';
script1.defer = true;
script1.onload = function() {
  var script2 = document.createElement('script');
  script2.src = 'eiger.js';
  script2.defer = true;
  script2.onload = function() {
    hljs.highlightAll();
  };
  document.head.appendChild(script2);
};
document.head.appendChild(script1);
