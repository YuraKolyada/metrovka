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
var btnModal = document.getElementsByClassName('header__btn-replace-ad');
var overlay = document.getElementsByClassName('modal__overlay');
var modalName = document.getElementsByClassName('modal');
var close = document.getElementsByClassName('modal__close');

btnModal[0].onclick = function(e){
	e.preventDefault();
	target = e.target;
	overlay[0].style.display = 'block';
	modalName[0].style.display = 'block';
	
	overlay[0].onclick = function(e){
		this.style.display = 'none';
		modalName[0].style.display = 'none';
	}

	close[0].onclick = function(e){
		modalName[0].style.display = 'none';
		overlay[0].style.display = 'none';
	}

}



var menu = document.getElementById('menu-label'),
	fixedShadow = document.getElementById('fixed-shadow'),
	rightMenu = document.getElementById('right-menu'),
	nav = document.getElementById('header-nav'),
	navItem = document.getElementsByClassName('header_navigation__item'),
	content = document.getElementById('content');

menu.onclick = function(e) {
	rightMenu.classList.toggle('open-start');
	fixedShadow.classList.toggle('open-start');
	content.classList.toggle('blur'); 
	[].forEach.call(navItem, function(elem){
		elem.classList.toggle('open-start'); 
	});

	fixedShadow.onclick = closeMenu;

}

function closeMenu() {
	fixedShadow.classList.remove('open-start'); 
	rightMenu.classList.remove('open-start');
	content.classList.remove('blur');  
	[].forEach.call(navItem, function(elem){
		elem.classList.remove('open-start'); 
	});
} 

