

embed(code);
run();

function embed(code) {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.setAttribute('defer', 'defer');

  script.text = code;
  document.body.appendChild(script);
}

function run() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.setAttribute('defer', 'defer');

  script.text = 'setTimeout(window.CoinbaseAutoTrader?.start(),1000);';
  document.body.appendChild(script);
}
