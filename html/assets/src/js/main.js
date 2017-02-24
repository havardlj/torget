var query = document.querySelector.bind(document);
var queryAll = document.querySelectorAll.bind(document);
var fromId = document.getElementById.bind(document);
var fromClass = document.getElementsByClassName.bind(document);
var fromTag = document.getElementsByTagName.bind(document);

query('.open-menu').addEventListener('click', function(e){
   e.preventDefault();
   query('.header').classList.add('active');
});
query('.close-menu').addEventListener('click', function(e){
   e.preventDefault();
   query('.header').classList.remove('active');
});
query('.open-search').addEventListener('click', function(e){
   e.preventDefault();
   query('.header--nav-right-section').classList.add('active');
});
query('.close-search').addEventListener('click', function(e){
   e.preventDefault();
   query('.header--nav-right-section').classList.remove('active');
});
query('.open-menu').addEventListener('click', function(e){
   e.preventDefault();
   query('.article--nav').classList.add('active');
});
query('.close-menu').addEventListener('click', function(e){
   e.preventDefault();
   query('.article--nav').classList.remove('active');
});
