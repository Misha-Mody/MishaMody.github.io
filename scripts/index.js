/* eslint-disable indent */

// eslint-disable-next-line no-unused-vars
function hexHover(hexId, hexPosition) {
  var hex = document.getElementById(hexId);

  if (!hex.classList.contains("activeHex_" + hexPosition)) {
    setTimeout(function () {
      hex.classList.add("activeHex_" + hexPosition);
    }, 100);
    setTimeout(function () {
      hex.classList.remove("activeHex_" + hexPosition);
    }, 1000);
  }
}

window.onload = function () {
  hexHover("hex38", "ur");
  hexHover("hex56", "ll");
  hexHover("hex49", "r");
  hexHover("hex45", "l");
};
