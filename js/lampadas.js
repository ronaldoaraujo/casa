this.Lampada = (function () {
  function Lampada() {
    this.load = function () {
      fetch('http://192.168.0.2')
      .then(result => result.json())
      .then(function(json) {
        var elemento;
        for(var k in json) {
          elemento = document.getElementById(k);
          if (elemento) {
            elemento.addEventListener("click", function(){
              fetch(`http://192.168.0.2/${this.id}`);
            }, true);
            elemento.checked = json[k];
          }
        }
      })
    }
    this.load();
  }
  var exports = new Lampada();
  return exports;
}());
