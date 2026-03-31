import { useBlockProps } from '@wordpress/block-editor';


export default function save( { attributes } ) {
	const {
		members,
		displayMode,
		layout,
		columns,
		columnsTablet,
		columnsMobile,
		gap,
		imageShape,
		textColor,
		backgroundColor,
		accentColor,
		hoverColor,
		showBio,
		showSocial,
		showContact,
		enableAnimation,
		slidesToShow,
		autoplay,
		autoplaySpeed,
		showFilter,
		filterFontSize,
		filterTextColor,
		filterBgColor,
		filterBorderColor,
		filterBorderRadius,
		filterHoverBgColor,
		filterHoverTextColor,
		filterActiveBgColor,
		filterActiveTextColor,
	} = attributes;

	if ( ! members || members.length === 0 ) {
		return null;
	}

	const isSlider = displayMode === 'slider';

	const blockProps = useBlockProps.save( {
		className: `wbd-tm wbd-tm--${ layout } wbd-tm--mode-${ displayMode }`,
		style: {
			'--wbd-tm-columns': isSlider ? slidesToShow : columns,
			'--wbd-tm-columns-tablet': columnsTablet || 2,
			'--wbd-tm-columns-mobile': columnsMobile || 1,
			'--wbd-tm-gap': gap + 'px',
			'--wbd-tm-text': textColor,
			'--wbd-tm-bg': backgroundColor,
			'--wbd-tm-accent': accentColor,
			'--wbd-tm-hover': hoverColor,
		},
		'data-animation': enableAnimation ? 'fade-stagger' : 'none',
		'data-columns-tablet': columnsTablet || 2,
		'data-columns-mobile': columnsMobile || 1,
		'data-display-mode': displayMode,
		'data-layout': layout,
		'data-slides-to-show': isSlider ? slidesToShow : undefined,
		'data-autoplay': isSlider && autoplay ? 'true' : undefined,
		'data-autoplay-speed': isSlider && autoplay ? autoplaySpeed : undefined,
		'data-show-filter': showFilter ? 'true' : undefined,
	} );

	const imageShapeClass = 'wbd-tm-image--' + imageShape;

	/* Collect unique categories */
	const categories = [];
	members.forEach( function ( m ) {
		if ( m.category && m.category.trim() && categories.indexOf( m.category.trim() ) === -1 ) {
			categories.push( m.category.trim() );
		}
	} );

	const renderCard = ( member, index ) => {
		const hasSocials = member.facebook || member.linkedin || member.twitter || member.website;
		const hasContact = member.email || member.phone || member.whatsapp;
		const socialBlank = member.socialTargetBlank !== false;
		const contactBlank = member.contactTargetBlank !== false;
		const socialTarget = socialBlank ? '_blank' : '_self';
		const socialRel = socialBlank ? 'noopener noreferrer' : undefined;
		const contactTarget = contactBlank ? '_blank' : '_self';
		const contactRel = contactBlank ? 'noopener noreferrer' : undefined;
		const initials = member.name
			? member.name.split( ' ' ).map( ( w ) => w[ 0 ] ).join( '' ).toUpperCase().substring( 0, 2 )
			: 'TM';

		const isOverlayLayout = layout === 'creative' || layout === 'image-overlay';

		return (
			<div
				key={ member.id }
				className={ `wbd-tm-card wbd-tm-card--${ layout }${ member.isHighlighted ? ' wbd-tm-card--highlighted' : '' }` }
				data-index={ index }
				data-category={ member.category ? member.category.trim() : '' }
			>
				{ member.isHighlighted && (
					<span className="wbd-tm-badge">{ member.badgeText || 'Featured' }</span>
				) }
				<div className={ `wbd-tm-image-wrap ${ imageShapeClass }` }>
					{ member.imageUrl ? (
						<img src={ member.imageUrl } alt={ member.name || '' } className="wbd-tm-image" loading="lazy" />
					) : (
						<div className="wbd-tm-placeholder-avatar">
							<span>{ initials }</span>
						</div>
					) }
					{ isOverlayLayout && showSocial && hasSocials && (
						<div className="wbd-tm-social-overlay">
							{ member.facebook && <a href={ member.facebook } className="wbd-tm-social-link" target={ socialTarget } rel={ socialRel } aria-label="Facebook"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg></a> }
							{ member.twitter && <a href={ member.twitter } className="wbd-tm-social-link" target={ socialTarget } rel={ socialRel } aria-label="Twitter"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a> }
							{ member.linkedin && <a href={ member.linkedin } className="wbd-tm-social-link" target={ socialTarget } rel={ socialRel } aria-label="LinkedIn"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a> }
							{ member.website && <a href={ member.website } className="wbd-tm-social-link" target={ socialTarget } rel={ socialRel } aria-label="Website"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg></a> }
						</div>
					) }
				</div>
				<div className="wbd-tm-content">
					<h3 className="wbd-tm-name">{ member.name }</h3>
					{ member.designation && (
						<p className="wbd-tm-designation">{ member.designation }</p>
					) }
					{ showBio && member.bio && (
						<p className="wbd-tm-bio">{ member.bio }</p>
					) }
					{ ! isOverlayLayout && showSocial && hasSocials && (
						<div className="wbd-tm-socials">
							{ member.facebook && <a href={ member.facebook } className="wbd-tm-social-link" target={ socialTarget } rel={ socialRel } aria-label="Facebook"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg></a> }
							{ member.twitter && <a href={ member.twitter } className="wbd-tm-social-link" target={ socialTarget } rel={ socialRel } aria-label="Twitter"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a> }
							{ member.linkedin && <a href={ member.linkedin } className="wbd-tm-social-link" target={ socialTarget } rel={ socialRel } aria-label="LinkedIn"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a> }
							{ member.website && <a href={ member.website } className="wbd-tm-social-link" target={ socialTarget } rel={ socialRel } aria-label="Website"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg></a> }
						</div>
					) }
					{ showContact && hasContact && (
						<div className="wbd-tm-contact">
							{ member.email && (
								<a href={ `mailto:${ member.email }` } className="wbd-tm-cta wbd-tm-cta--email" target={ contactTarget } rel={ contactRel }>
									<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
									Email
								</a>
							) }
							{ member.phone && (
								<a href={ `tel:${ member.phone }` } className="wbd-tm-cta wbd-tm-cta--phone" target={ contactTarget } rel={ contactRel }>
									<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
									Call
								</a>
							) }
							{ member.whatsapp && (
								<a href={ `https://wa.me/${ member.whatsapp.replace( /[^0-9]/g, '' ) }` } className="wbd-tm-cta wbd-tm-cta--whatsapp" target={ contactTarget } rel={ contactRel }>
									<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
									WhatsApp
								</a>
							) }
						</div>
					) }
				</div>
			</div>
		);
	};

	const filterStyle = {
		'--wbd-filter-font-size': ( filterFontSize || 13 ) + 'px',
		'--wbd-filter-text-color': filterTextColor || '#475569',
		'--wbd-filter-bg-color': filterBgColor || '#ffffff',
		'--wbd-filter-border-color': filterBorderColor || '#e2e8f0',
		'--wbd-filter-border-radius': ( filterBorderRadius !== undefined ? filterBorderRadius : 24 ) + 'px',
		'--wbd-filter-hover-bg': filterHoverBgColor || '#f1f5f9',
		'--wbd-filter-hover-text': filterHoverTextColor || '#3b82f6',
		'--wbd-filter-active-bg': filterActiveBgColor || '#3b82f6',
		'--wbd-filter-active-text': filterActiveTextColor || '#ffffff',
	};

	const filterMarkup = showFilter && categories.length > 0 ? (
		<div className="wbd-tm-filter" style={ filterStyle }>
			<button className="wbd-tm-filter__btn wbd-tm-filter__btn--active" data-filter="all">All</button>
			{ categories.map( ( cat ) => (
				<button key={ cat } className="wbd-tm-filter__btn" data-filter={ cat }>{ cat }</button>
			) ) }
		</div>
	) : null;

	if ( isSlider ) {
		return (
			<div { ...blockProps }>
				{ filterMarkup }
				<div className="wbd-tm-slider">
					<div className="wbd-tm-slider__track">
						{ members.map( ( member, index ) => (
							<div key={ member.id } className="wbd-tm-slider__slide" data-category={ member.category ? member.category.trim() : '' }>
								{ renderCard( member, index ) }
							</div>
						) ) }
					</div>
					<button className="wbd-tm-slider__arrow wbd-tm-slider__arrow--prev" aria-label="Previous slide">
						<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
					</button>
					<button className="wbd-tm-slider__arrow wbd-tm-slider__arrow--next" aria-label="Next slide">
						<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
					</button>
					<div className="wbd-tm-slider__dots"></div>
				</div>
			</div>
		);
	}

	return (
		<div { ...blockProps }>
			{ filterMarkup }
			<div className="wbd-tm-grid">
				{ members.map( ( member, index ) => renderCard( member, index ) ) }
			</div>
		</div>
	);
}
