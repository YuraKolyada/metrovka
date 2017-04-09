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