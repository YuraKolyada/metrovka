

var selectSearch = document.getElementsByClassName('search-home__city__option-selected');
var selectFilter = document.getElementsByClassName('filter-home__metro__option-selected');
var modal = document.getElementsByClassName('modal__option-selected');

function open(){
	this.parentElement.classList.add('open');
	this.nextElementSibling.classList.add('open');
}

function close(){
	this.parentElement.classList.remove('open');
	this.nextElementSibling.classList.remove('open');	
} 

modal[0].onfocus = open;
modal[0].onblur = close;


selectSearch[0].onfocus = open;
selectFilter[0].onfocus = open;
selectSearch[0].onblur = close; 
selectFilter[0].onblur = close;

