var query = document.querySelector.bind(document);
var queryAll = document.querySelectorAll.bind(document);
var fromId = document.getElementById.bind(document);
var fromClass = document.getElementsByClassName.bind(document);
var fromTag = document.getElementsByTagName.bind(document);

query('.open-search').addEventListener('click').function(e){
   e.preventDefault();
   console.log('fuck')
}
