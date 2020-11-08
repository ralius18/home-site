function checkDarkCookie(){
  if (getCookie('darkmode') === 'false') {
    toggleDark(false)
  }
}

function toggleDark(changeCookie = true) {
  var element = document.body
  var setDark = getCookie('darkmode') === 'true' ? 'false' : 'true'
  element.classList.toggle("dark-mode")

  if (changeCookie) {
    setCookie('darkmode', setDark, 30)
  }
}

function mouseOverSVG(id) {
  id = id + '-fill'
  $('#' + id).attr('fill', 'rgb(170, 0, 0)')
}

function mouseOutSVG(id) {
  id = id + '-fill'
  $('#' + id).attr('fill', 'rgb(189, 189, 189)')
}

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
function eraseCookie(name) {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}