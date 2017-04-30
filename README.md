# metrovka
second project
https://yurakolyada.github.io/metrovka/prod/html/listing.html
https://yurakolyada.github.io/metrovka/prod/html/homepage.html


Також до даного слайдера написаний свій власний набір стилів.
Налаштування слайдера по default 
var settings = {
	infinite: true,    
	index: 0,          
	slidesVisible: 1,  
	slidesToScroll: 1, 
	arrows: true,      
	swipeAble: true,   
	pagination: true,  
	autoplay: true,    
	autoplaySpeed: 5000,
	classNameDot: '',
	classNameArrowRight: '',
	classNameArrowLeft: ''
};

arrows and pagination буде створено автоматично, якщо дані опції будуть true.
также єсть опції,{ classNameDot, classNameArrowRight, classNameArrowLeft }, якщо в вас вже створені унікальні pagination і arrows, то ви можете відповідно назначить їм свої класи і застосувати до свого слайдера.

приклад застосування сладера:

$('.last-ads__slider').slider({
	slidesVisible: 4,
	autoplay: false,
	pagination: true,
	classNameDot: '',
	slidesToScroll: 2
});


$('.filter__result-slider').slider({
	index: 0,
	pagination: false,
	classNameDot: 'filter__result-slide',
	arrows: false,
	classNameArrowLeft: 'filter__results-other',
	classNameArrowRight: 'filter__results-other-right',
	autoplay: false
});
