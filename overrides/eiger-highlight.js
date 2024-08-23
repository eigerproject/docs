var script1 = document.createElement('script');
script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js';
script1.defer = true;
script1.onload = function() {

  hljs.registerLanguage('eiger', function(hljs) {
    return {
      contains: [
        {
          className: 'keyword',
          begin: '\\b(include|for|class|func|end|dataclass|if|while|then|to|do|else|elif|let|ret)\\b'
        },
        {
          className: 'string',
          begin: '"', end: '"',
          contains: [
            {
              className: 'escape',
              begin: '\\\\.', end: hljs.IMMEDIATE_RE
            }
          ]
        },
        {
          className: 'number',
          begin: '\\b\\d+\\b'
        },
        {
          className: 'comment',
          begin: '~',
          end: '\\n'
        },
        {
          className: 'function',
          begin: '(\\w+)(?=\\([a-zA-Z,]+\\))'
        },
        {
          className: 'identifier',
          begin: '(\\w+)'
        },
        {
          className: 'operator',
          begin: '(\\+|-|\\*|/|=|not|\\?\\=|\\!\\=|\\%|\\^)'
        }
      ]
    };
  });
  

  hljs.highlightAll();
};
document.head.appendChild(script1);