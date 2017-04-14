var selectSearch = document.getElementsByClassName('dropdown__option-selected');

function open(){
	this.parentElement.classList.add('open');
	this.nextElementSibling.classList.add('open');
}

function close(){
	this.parentElement.classList.remove('open');
	this.nextElementSibling.classList.remove('open');	
} 

[].forEach.call(selectSearch, function(elem){
	elem.onfocus = open;
	elem.onblur = close;
});