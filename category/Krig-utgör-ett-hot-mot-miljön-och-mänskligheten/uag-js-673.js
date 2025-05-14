document.addEventListener("DOMContentLoaded", function(){ 	window.addEventListener( 'DOMContentLoaded', function() {
		const blockScope = document.querySelector( '.uagb-block-37a18766' );
		if ( ! blockScope ) {
			return;
		}
		const deviceWidth = ( window.innerWidth > 0 ) ? window.innerWidth : screen.width;
		if ( blockScope.classList.contains( 'uag-hide-desktop' ) && deviceWidth > 1024 ) {
			blockScope.remove();
			return;
		} else if ( blockScope.classList.contains( 'uag-hide-tab' ) && ( deviceWidth <= 1024 && deviceWidth > 768 ) ) {
			blockScope.remove();
			return;
		} else if ( blockScope.classList.contains( 'uag-hide-mob' ) && deviceWidth <= 768 ) {
			blockScope.remove();
			return;
		}

				let popupSesh = JSON.parse( localStorage.getItem( 'spectraPopup673' ) );
		const repetition = 1;
		if ( null === popupSesh || repetition !== popupSesh[1] ) {
					
			const repetitionArray = [
				repetition,
				repetition,
			];
			localStorage.setItem( 'spectraPopup673', JSON.stringify( repetitionArray ) );
			popupSesh = JSON.parse( localStorage.getItem( 'spectraPopup673' ) );
		}

		if ( 0 === popupSesh[0] ) {
			blockScope.remove();
			return;
		}

		const theBody = document.querySelector( 'body' );
		blockScope.style.display = 'flex';
		setTimeout( () => {
								blockScope.style.maxHeight = '100vh';
						}, 100 );

					setTimeout( () => {
				blockScope.style.transition = 'max-height 0.5s cubic-bezier(0, 1, 0, 1)';
			}, 600 );
		
		const closePopup = ( event = null ) => {
			if ( event && blockScope !== event?.target ) {
				return;
			}
			if ( popupSesh[0] > 0 ) {
				popupSesh[0] -= 1;
				localStorage.setItem( 'spectraPopup673', JSON.stringify( popupSesh ) );
			}
							blockScope.style.maxHeight = '';
						setTimeout( () => {
									blockScope.style.transition = '';
								blockScope.remove();
				const allActivePopups = document.querySelectorAll( '.uagb-popup-builder.spectra-popup--open' );
				if ( 0 === allActivePopups.length ) {
					theBody.classList.remove( 'uagb-popup-builder__body--overflow-hidden' );
				}
			}, 500 );
		};

						const closeButton = blockScope.querySelector( '.uagb-popup-builder__close' );
				closeButton.style.cursor = 'pointer';
				closeButton.addEventListener( 'click', () => closePopup() );
				
		const closingElements = blockScope.querySelectorAll( '.spectra-popup-close-673' );
		for ( let i = 0; i < closingElements.length; i++ ) {
			closingElements[ i ].style.cursor = 'pointer';
			closingElements[ i ].addEventListener( 'click', () => closePopup() );
		}
	} );
window.addEventListener( 'load', function() {
	UAGBCountdown.init( '.uagb-block-32545efa', {"block_id":"32545efa","endDateTime":"2025-05-20T00:02:54.703Z","showDays":true,"showHours":true,"showMinutes":true,"isFrontend":true,"timerEndAction":"zero","redirectURL":""} );
});
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-21d3f75b' );
});
 });