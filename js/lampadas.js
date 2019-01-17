this.Lampada = (function () {
  function Lampada() {
    this.switch = function (lampada) {
      fetch(`http://192.168.0.2/${lampada}`);
    }
    this.load = function () {
      fetch('http://192.168.0.2')
      .then(function(result){
        result.json()
        .then(function(json){
          var elemento;
          for(var k in json) {
            elemento = document.getElementById(k);
            if (elemento) {
              elemento.checked = json[k];
            }
          }
        })
      })
    }
    this.load();
  }
  var exports = new Lampada();
  return exports;
}());
