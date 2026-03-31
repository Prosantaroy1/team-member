
( function () {
	'use strict';

	function initTeamMemberBlocks() {
		var blocks = document.querySelectorAll( '.wbd-tm' );

		if ( ! blocks.length ) {
			return;
		}

		blocks.forEach( function ( block ) {
			var isSlider = block.getAttribute( 'data-display-mode' ) === 'slider';
			var showFilter = block.getAttribute( 'data-show-filter' ) === 'true';

			if ( showFilter ) {
				initFilter( block, isSlider );
			}

			if ( isSlider ) {
				initSlider( block );
			}

			if ( block.getAttribute( 'data-animation' ) === 'fade-stagger' && ! isSlider ) {
				initAnimation( block );
			}
		} );
	}

	function initFilter( block, isSlider ) {
		var filterContainer = block.querySelector( '.wbd-tm-filter' );
		if ( ! filterContainer ) {
			return;
		}

		var buttons = filterContainer.querySelectorAll( '.wbd-tm-filter__btn' );

		buttons.forEach( function ( btn ) {
			btn.addEventListener( 'click', function () {
				var filter = this.getAttribute( 'data-filter' );

				/* Update active button */
				buttons.forEach( function ( b ) {
					b.classList.remove( 'wbd-tm-filter__btn--active' );
				} );
				this.classList.add( 'wbd-tm-filter__btn--active' );

				if ( isSlider ) {
					filterSlider( block, filter );
				} else {
					filterGrid( block, filter );
				}
			} );
		} );
	}

	function filterGrid( block, filter ) {
		var cards = block.querySelectorAll( '.wbd-tm-grid > .wbd-tm-card' );

		cards.forEach( function ( card ) {
			var category = card.getAttribute( 'data-category' ) || '';
			if ( filter === 'all' || category === filter ) {
				card.style.display = '';
				card.style.opacity = '0';
				card.style.transform = 'scale(0.95)';
				setTimeout( function () {
					card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
					card.style.opacity = '1';
					card.style.transform = 'scale(1)';
				}, 20 );
			} else {
				card.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
				card.style.opacity = '0';
				card.style.transform = 'scale(0.95)';
				setTimeout( function () {
					card.style.display = 'none';
				}, 200 );
			}
		} );
	}

	function filterSlider( block, filter ) {
		var slides = block.querySelectorAll( '.wbd-tm-slider__slide' );
		var visibleCount = 0;

		slides.forEach( function ( slide ) {
			var category = slide.getAttribute( 'data-category' ) || '';
			if ( filter === 'all' || category === filter ) {
				slide.style.display = '';
				visibleCount++;
			} else {
				slide.style.display = 'none';
			}
		} );

		/* Re-initialize slider with filtered slides */
		var slider = block.querySelector( '.wbd-tm-slider' );
		if ( slider && slider._wbdSliderUpdate ) {
			slider._wbdSliderUpdate();
		}
	}

	function initAnimation( block ) {
		var cards = block.querySelectorAll( '.wbd-tm-card' );

		cards.forEach( function ( card ) {
			card.setAttribute( 'data-animated', 'false' );
		} );

		if ( 'IntersectionObserver' in window ) {
			var observer = new IntersectionObserver(
				function ( entries ) {
					entries.forEach( function ( entry ) {
						if ( entry.isIntersecting ) {
							var cardElements = entry.target.querySelectorAll( '.wbd-tm-card[data-animated="false"]' );
							cardElements.forEach( function ( card, index ) {
								setTimeout( function () {
									card.setAttribute( 'data-animated', 'true' );
								}, index * 100 );
							} );
							observer.unobserve( entry.target );
						}
					} );
				},
				{
					threshold: 0.15,
				}
			);

			observer.observe( block );
		} else {
			cards.forEach( function ( card ) {
				card.setAttribute( 'data-animated', 'true' );
			} );
		}
	}

	function initSlider( block ) {
		var slider = block.querySelector( '.wbd-tm-slider' );
		if ( ! slider ) {
			return;
		}

		var track = slider.querySelector( '.wbd-tm-slider__track' );
		var prevBtn = slider.querySelector( '.wbd-tm-slider__arrow--prev' );
		var nextBtn = slider.querySelector( '.wbd-tm-slider__arrow--next' );
		var dotsContainer = slider.querySelector( '.wbd-tm-slider__dots' );

		if ( ! track ) {
			return;
		}

		var slidesToShow = parseInt( block.getAttribute( 'data-slides-to-show' ), 10 ) || 3;
		var autoplay = block.getAttribute( 'data-autoplay' ) === 'true';
		var autoplaySpeed = parseInt( block.getAttribute( 'data-autoplay-speed' ), 10 ) || 3000;
		var gap = parseInt( block.style.getPropertyValue( '--wbd-tm-gap' ), 10 ) || 24;

		var currentIndex = 0;
		var autoplayTimer = null;
		var isPaused = false;

		function getVisibleSlides() {
			var allSlides = track.querySelectorAll( '.wbd-tm-slider__slide' );
			var visible = [];
			for ( var i = 0; i < allSlides.length; i++ ) {
				if ( allSlides[ i ].style.display !== 'none' ) {
					visible.push( allSlides[ i ] );
				}
			}
			return visible;
		}

		function getSlidesToShowCount() {
			var width = block.offsetWidth;
			if ( width <= 640 ) {
				return 1;
			}
			if ( width <= 1024 ) {
				return Math.min( 2, slidesToShow );
			}
			return slidesToShow;
		}

		function updateSlider() {
			var visibleSlides = getVisibleSlides();
			var totalSlides = visibleSlides.length;
			var visible = getSlidesToShowCount();
			var actualMax = Math.max( 0, totalSlides - visible );

			if ( currentIndex > actualMax ) {
				currentIndex = actualMax;
			}
			if ( currentIndex < 0 ) {
				currentIndex = 0;
			}

			var slideWidth = ( track.offsetWidth - gap * ( visible - 1 ) ) / visible;

			/* Hide all slides first, then show visible ones */
			var allSlides = track.querySelectorAll( '.wbd-tm-slider__slide' );
			allSlides.forEach( function ( slide ) {
				if ( slide.style.display !== 'none' ) {
					slide.style.minWidth = slideWidth + 'px';
					slide.style.maxWidth = slideWidth + 'px';
				}
			} );

			var offset = currentIndex * ( slideWidth + gap );
			track.style.transform = 'translateX(-' + offset + 'px)';

			if ( prevBtn ) {
				prevBtn.disabled = currentIndex <= 0;
				prevBtn.style.opacity = currentIndex <= 0 ? '0.4' : '1';
			}
			if ( nextBtn ) {
				nextBtn.disabled = currentIndex >= actualMax;
				nextBtn.style.opacity = currentIndex >= actualMax ? '0.4' : '1';
			}

			updateDots( visible, totalSlides, actualMax );
		}

		function updateDots( visible, totalSlides, actualMax ) {
			if ( ! dotsContainer ) {
				return;
			}
			var dotCount = actualMax + 1;

			dotsContainer.innerHTML = '';
			for ( var i = 0; i < dotCount; i++ ) {
				var dot = document.createElement( 'button' );
				dot.className = 'wbd-tm-slider__dot' + ( i === currentIndex ? ' wbd-tm-slider__dot--active' : '' );
				dot.setAttribute( 'aria-label', 'Go to slide ' + ( i + 1 ) );
				dot.setAttribute( 'data-index', i );
				dot.addEventListener( 'click', function () {
					currentIndex = parseInt( this.getAttribute( 'data-index' ), 10 );
					updateSlider();
					resetAutoplay();
				} );
				dotsContainer.appendChild( dot );
			}
		}

		function goNext() {
			var visibleSlides = getVisibleSlides();
			var visible = getSlidesToShowCount();
			var actualMax = Math.max( 0, visibleSlides.length - visible );
			if ( currentIndex < actualMax ) {
				currentIndex++;
			} else if ( autoplay ) {
				currentIndex = 0;
			}
			updateSlider();
		}

		function goPrev() {
			if ( currentIndex > 0 ) {
				currentIndex--;
			}
			updateSlider();
		}

		function startAutoplay() {
			if ( autoplayTimer ) {
				clearInterval( autoplayTimer );
			}
			if ( autoplay && ! isPaused ) {
				autoplayTimer = setInterval( goNext, autoplaySpeed );
			}
		}

		function stopAutoplay() {
			if ( autoplayTimer ) {
				clearInterval( autoplayTimer );
				autoplayTimer = null;
			}
		}

		function resetAutoplay() {
			stopAutoplay();
			startAutoplay();
		}

		/* Expose update method for filter re-init */
		slider._wbdSliderUpdate = function () {
			currentIndex = 0;
			updateSlider();
			resetAutoplay();
		};

		if ( prevBtn ) {
			prevBtn.addEventListener( 'click', function () {
				goPrev();
				resetAutoplay();
			} );
		}

		if ( nextBtn ) {
			nextBtn.addEventListener( 'click', function () {
				goNext();
				resetAutoplay();
			} );
		}

		/* Pause autoplay on hover */
		if ( autoplay ) {
			slider.addEventListener( 'mouseenter', function () {
				isPaused = true;
				stopAutoplay();
			} );

			slider.addEventListener( 'mouseleave', function () {
				isPaused = false;
				startAutoplay();
			} );

			slider.addEventListener( 'focusin', function () {
				isPaused = true;
				stopAutoplay();
			} );

			slider.addEventListener( 'focusout', function () {
				isPaused = false;
				startAutoplay();
			} );
		}

		/* Touch/swipe support */
		var touchStartX = 0;
		var touchEndX = 0;
		var touchThreshold = 50;

		track.addEventListener( 'touchstart', function ( e ) {
			touchStartX = e.changedTouches[ 0 ].screenX;
			stopAutoplay();
		}, { passive: true } );

		track.addEventListener( 'touchend', function ( e ) {
			touchEndX = e.changedTouches[ 0 ].screenX;
			var diff = touchStartX - touchEndX;
			if ( Math.abs( diff ) > touchThreshold ) {
				if ( diff > 0 ) {
					goNext();
				} else {
					goPrev();
				}
			}
			isPaused = false;
			resetAutoplay();
		}, { passive: true } );

		updateSlider();
		startAutoplay();

		var resizeTimeout;
		window.addEventListener( 'resize', function () {
			clearTimeout( resizeTimeout );
			resizeTimeout = setTimeout( updateSlider, 150 );
		} );
	}

	if ( document.readyState === 'loading' ) {
		document.addEventListener( 'DOMContentLoaded', initTeamMemberBlocks );
	} else {
		initTeamMemberBlocks();
	}
} )();