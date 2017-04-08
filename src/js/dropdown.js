

let selectSearch = document.getElementsByClassName('search-home__city__option-selected');
let selectFilter = document.getElementsByClassName('filter-home__metro__option-selected');

function open(){
	this.parentElement.classList.add('open');
	this.nextElementSibling.classList.add('open');
}

function close(){
	this.parentElement.classList.remove('open');
	this.nextElementSibling.classList.remove('open');	
} 


selectSearch[0].onblur = selectFilter[0].onblur = close;
selectSearch[0].onfocus = selectFilter[0].onfocus = open;
	
