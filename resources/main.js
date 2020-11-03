
function toggleDark() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function mouseOverSVG(id) {
  id = id + '-fill'
  $('#' + id).attr('fill', 'rgb(170, 0, 0)')
}

function mouseOutSVG(id) {
  id = id + '-fill'
  $('#' + id).attr('fill', 'rgb(189, 189, 189)')
}