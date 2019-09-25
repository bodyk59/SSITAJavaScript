// Task01 
// Using JavaScript and DOM hide first paragraph 
// of target HTML document, all other elements should be visible

function m07task01() {
  //One more way:
  //document.getElementById("test").setAttribute('hidden', '');
  document.getElementById("test").style.visibility = 'hidden';
}