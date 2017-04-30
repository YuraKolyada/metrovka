# metrovka
second project
https://yurakolyada.github.io/metrovka/prod/html/listing.html
https://yurakolyada.github.io/metrovka/prod/html/homepage.html



readme slider:
структура html:
```html
<div class="classNameSlider j-slider">
	<div class="j-slider__items">
		<div class="j-slider__item">1</div>
		<div class="j-slider__item">2</div>
		<div class="j-slider__item">3</div>
	</div>
</div>
```
Також до даного слайдера написаний свій власний набір стилів(файл `_js-slider.scss`).
link scss: https://github.com/YuraKolyada/metrovka/blob/master/src/sass/homepage/modules/_js-slider.scss
Класу `j-slider__item` бажано задавати ширину.
`Сам слайдер буде визначати ширину по контейнеру` в якому він буде поміщений(наприклад по html в нього ширина буде на весь браузер)


Налаштування слайдера по default

```javascript
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
```

arrows and pagination буде створено автоматично, якщо дані опції будуть true.
также єсть опції,{ classNameDot, classNameArrowRight, classNameArrowLeft }, якщо в вас вже створені унікальні pagination і arrows, то ви можете відповідно назначить їм свої класи і застосувати до свого слайдера.

приклад застосування сладера:
+ потрібно підключити jquery
cdn: https://code.jquery.com/jquery-3.2.1.min.js
```javascript

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
```
