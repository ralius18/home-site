function artPageLoad() {
  var imgArr = document.getElementsByClassName('art-img')
  var closeSpan = document.getElementById('span-close')
  var modal = document.getElementById('modal')

  checkDarkCookie()

  for (let img of imgArr) {
    img.onclick = function () {
      expandPicture(img.id)
    }
  };
  closeSpan.onclick = modal.onclick = function () {
    modal.style.display = 'none'
  }
}

function checkDarkCookie(){
  if (getCookie('darkmode') === 'false') {
    toggleDark(false)
  }
}

function toggleDark(changeCookie = true) {
  var element = document.body
  var setDark = getCookie('darkmode') === 'true' ? 'false' : 'true'
  element.style.setProperty('transition', 'none')
  element.style.setProperty('-webkit-transition', 'none')
  element.classList.toggle("dark-mode")

  if (changeCookie) {
    setCookie('darkmode', setDark, 30)
  }
  element.style.setProperty('transition', 'all 0.5s ease-in-out')
  element.style.setProperty('-webkit-transition', 'all 0.5s ease-in-out')
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

function expandPicture(id) {
  var img = $('#' + id)
  var modal = document.getElementById('modal')
  var modalImg = document.getElementById('modal-img')
  var captionEl = document.getElementById('caption-text')
  var captionText = img.parent('td').text()

  captionText.replaceAll(/\\n/g, '<br>')
  modal.style.display = 'block'
  modalImg.src = img.attr('src')
  captionEl.innerHTML = captionText
}