(function($){

	let SliderShow = function(element, settings){
		let $element = $(element).addClass('j-slider'),
			sliderItems = $element.find('.j-slider__items'),
			lengthSlide = sliderItems.children().length,
			sliderItem = sliderItems.find('.j-slider__item'),
			{	index,
			 	autoplaySpeed, 
			 	slidesVisible, 
			 	pagination, 
			 	classNameDot, 
			 	slidesToScroll,
			 	classNameArrowLeft,
			 	classNameArrowRight 
			}	= settings,
			defaultClassNameByArrowLeft = 'j-slider__left',
			defaultClassNameByArrowRight = 'j-slider__right',
			defaultClassNameByDot = (pagination) ? '.j-slider__dot' : '.' + classNameDot,
			$dot,
			len = Math.ceil((lengthSlide - slidesVisible) / slidesToScroll),
			allWidthProc = 100 * (lengthSlide / slidesVisible),
			itemWidth,
			totalLeft,
			allWidth;

		if(classNameDot){
			$dot = $element.parent().find(defaultClassNameByDot);}

		sliderItems.css({
			'width': allWidthProc + '%'
		})

		class SliderShow {

			paginationTransitionIndex(ind, duration = 1000){
				index = ind;
				this.paginationSlide(index);

				if(!itemWidth){
					itemWidth = sliderItem.outerWidth(true);
				}

				let positionLeft = -index * slidesToScroll * itemWidth;
				sliderItems.animate({'left': positionLeft + 'px'}, duration);
			}

			paginationSlide(ind){
				$dot.removeClass('active')
								.eq(ind)
								.addClass('active');

			}

			clickByDot() {
				$dot.each(function(index){
					$(this).attr('data-slide', index);
				});

				this.paginationClickDot();

			}

			slideAutoplay() {
				let _this = this,
					idTimer = setTimer();

				function setTimer() {
					let timer = setInterval(_this.nextSlide.bind(_this), autoplaySpeed);
					return timer;
				}

				function clearTimer() {
					clearInterval(idTimer);
				}

				$element.append($('<div></div>')
					.addClass('j-slider__autoplay')
					.on('click', function(){
						$(this).toggleClass('stop');
						
						if($(this).hasClass('stop')){
							clearTimer();
						} else {
							idTimer = setTimer();
						}
				}));
			}


			prevSlide() {
				let position = sliderItems.position().left,
					signLeft = Math.sign(position),
					duration = 1000,
					prev = Math.min(0, position + slidesToScroll * itemWidth);
				index = (index > 0) ? index - 1 : 0;

				if(settings.infinite && prev === 0 && signLeft !== -1){
					prev = -totalLeft;
					index = len;
					duration = (lengthSlide - slidesVisible)*500;
				}

				sliderItems.animate({'left': prev + 'px'}, duration);

				this.paginationSlide(index);
			}

			nextSlide() {
				let position = sliderItems.position().left,
					duration = 1000,
					next = Math.max(-totalLeft, position - (slidesToScroll * itemWidth));
				index = (index <= len) ? index + 1 : len;

				if(settings.infinite && index === len + 1){
					next = index = 0;
					duration = (lengthSlide - slidesVisible) * 500;
				}
				console.log('hi');
				sliderItems.animate({'left': next + 'px'}, duration);

				this.paginationSlide(index);
			};


			paginationCreate() {
				let dots = $('<div></div>').addClass('j-slider__dots'),
					ind = 0,
					len = (lengthSlide - slidesVisible) / slidesToScroll;
				
			    for(ind; ind <= Math.ceil(len); ind++){
			    	let dot = $('<span></span>')
			    				.attr('data-slide', ind)
			    				.addClass('j-slider__dot');

			    	if (index === ind){
			    		dot.addClass('active');
			    	}
			    	dots.append(dot);
			 
			    };

			    $element.append(dots);

			}

			paginationClickDot() {
				let self = this;
				if(!classNameDot){
					$dot = $element.find(defaultClassNameByDot)};

				$dot.on('click', function(){
					index = $(this).data().slide;
					self.paginationSlide(index);
					let positionLeft = -index * slidesToScroll * itemWidth;
					positionLeft = (positionLeft < -totalLeft) ? -totalLeft : positionLeft;
					sliderItems.animate({'left': positionLeft + 'px'}, 1000);
				});
			}

			arrowsCreate() {
				let arrowLeft = $('<div></div>')
								    .addClass('j-slider__arrow-left')
									.append($('<i></i>')
										.addClass(defaultClassNameByArrowLeft));
		   	
				let arrowRight = $('<div></div>')
									.addClass('j-slider__arrow-right')
									.append($('<i></i>')
										.addClass(defaultClassNameByArrowRight));
			   
			  	$element.append(arrowLeft).append(arrowRight);
			  	$element.find('.' + defaultClassNameByArrowLeft).on('click', this.prevSlide.bind(this));
			  	$element.find('.' + defaultClassNameByArrowRight).on('click', this.nextSlide.bind(this));
			}

			findArrowsClick(){
				$element.find('.' + classNameArrowLeft).on('click', this.prevSlide.bind(this));
			  	$element.find('.' + classNameArrowRight).on('click', this.nextSlide.bind(this));
			}

			slidesVisible(){
				$element.width('100%');
				this.paginationTransitionIndex(index, 0);

			}

			resize() {
				let $height = sliderItem.outerHeight(true);
				$element.css('min-height', $height + 'px');
				itemWidth = sliderItem.outerWidth(true);
			}

			swipe() {
				sliderItems.on('swipe', this.nextSlide.bind(this));
			}

		}

		window.onload = function(){
			let $height = sliderItem.outerHeight(true);
			itemWidth = sliderItem.outerWidth(true);
			totalLeft = (lengthSlide - slidesVisible) * itemWidth;
			allWidth = lengthSlide * itemWidth;
			$element.css('min-height', $height + 'px');
		};

		return new SliderShow();

	}

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

	$.fn.slider = function(options){

		return this.each(function(){
			this.newSettings = {}
			$.extend(this.newSettings, settings, options);

			var sliderShow = new SliderShow($(this), this.newSettings);

			sliderShow.slidesVisible();

			if(this.newSettings.pagination){
				sliderShow.paginationCreate();
				sliderShow.paginationClickDot();
			} else if(this.newSettings.classNameDot){
				sliderShow.clickByDot();
			};

			if(this.newSettings.arrows){
				sliderShow.arrowsCreate();
			} else if(this.newSettings.classNameArrowLeft && 
						this.newSettings.classNameArrowRight) {
				sliderShow.findArrowsClick();
			};


			if(this.newSettings.swipeAble){
				sliderShow.swipe();
			};

			
			if(this.newSettings.autoplay){
				sliderShow.slideAutoplay();

			};

			$(window).on('resize', sliderShow.resize);



		});
	} 

})(jQuery);

$('.social__slider').slider({
	arrows: false,
	index: 1,
	pagination: false,
	classNameDot: 'social__slide',
	autoplaySpeed: 15000
});

$('.last-ads__slider').slider({
	slidesVisible: 4,
	autoplay: false,
	pagination: true,
	classNameDot: '',
	slidesToScroll: 2
});


let x = $('.filter__result-slider').slider({
	index: 0,
	pagination: false,
	classNameDot: 'filter__result-slide',
	arrows: false,
	classNameArrowLeft: 'filter__results-other',
	classNameArrowRight: 'filter__results-other-right',
	autoplay: false
});

console.log(x);