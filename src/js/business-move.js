var w = window.innerWidth;
var parent = document.getElementById('references');
var el = document.getElementById('business-description');
if (w < 1024){
   parent.appendAfter(el, parent.firstChild);
}