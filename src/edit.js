import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	RangeControl,
	SelectControl,
	ToggleControl,
	TextControl,
	TextareaControl,
	Button,
	ButtonGroup,
	ColorPicker,
	__experimentalHStack as HStack,
	__experimentalVStack as VStack,
	Popover,
	Icon,
	Tooltip,
} from '@wordpress/components';
import { useState, useCallback, useMemo } from '@wordpress/element';
import './editor.scss'; 

const LAYOUTS = [
	{ value: 'corporate', label: __( 'Corporate Clean', 'wbd-team-member' ) },
	{ value: 'agency', label: __( 'Agency Modern', 'wbd-team-member' ) },
	{ value: 'creative', label: __( 'Creative Hover', 'wbd-team-member' ) },
	{ value: 'minimal', label: __( 'Minimal Card', 'wbd-team-member' ) },
	{ value: 'centered', label: __( 'Centered Profile', 'wbd-team-member' ) },
	{ value: 'left-aligned', label: __( 'Left Aligned', 'wbd-team-member' ) },
	{ value: 'dark-mode', label: __( 'Dark Mode', 'wbd-team-member' ) },
	{ value: 'gradient', label: __( 'Gradient Modern', 'wbd-team-member' ) },
	{ value: 'border-hover', label: __( 'Border Hover', 'wbd-team-member' ) },
	{ value: 'image-overlay', label: __( 'Image Overlay', 'wbd-team-member' ) },
	{ value: 'split', label: __( 'Split Layout', 'wbd-team-member' ) },
	{ value: 'compact', label: __( 'Compact Grid', 'wbd-team-member' ) },
];

const IMAGE_SHAPES = [
	{ value: 'circle', label: __( 'Circle', 'wbd-team-member' ) },
	{ value: 'square', label: __( 'Square', 'wbd-team-member' ) },
	{ value: 'rounded', label: __( 'Rounded', 'wbd-team-member' ) },
];

function generateId() {
	return 'member-' + Date.now() + '-' + Math.random().toString( 36 ).substring( 2, 9 );
}

const DEFAULT_MEMBER_TEMPLATES = [
	{
		name: 'Alex Morgan',
		designation: 'Marketing Manager',
		bio: 'Strategic marketing professional with expertise in digital campaigns and brand growth.',
		facebook: 'https://facebook.com',
		linkedin: 'https://linkedin.com',
		twitter: 'https://twitter.com',
		website: 'https://example.com',
		email: 'alex@example.com',
		phone: '+1234567890',
		whatsapp: '+1234567890',
		category: 'Marketing',
	},
	{
		name: 'Emily Chen',
		designation: 'UX Designer',
		bio: 'Passionate about creating intuitive interfaces that delight users and drive engagement.',
		facebook: 'https://facebook.com',
		linkedin: 'https://linkedin.com',
		twitter: '',
		website: 'https://example.com',
		email: 'emily@example.com',
		phone: '',
		whatsapp: '+1234567890',
		category: 'Designer',
	},
	{
		name: 'Michael Torres',
		designation: 'Project Lead',
		bio: 'Experienced project manager delivering complex initiatives on time and within budget.',
		facebook: '',
		linkedin: 'https://linkedin.com',
		twitter: 'https://twitter.com',
		website: '',
		email: 'michael@example.com',
		phone: '+1234567890',
		whatsapp: '',
		category: 'Management',
	},
	{
		name: 'Sophia Patel',
		designation: 'Content Strategist',
		bio: 'Storyteller and content expert crafting compelling narratives for global brands.',
		facebook: 'https://facebook.com',
		linkedin: 'https://linkedin.com',
		twitter: 'https://twitter.com',
		website: 'https://example.com',
		email: 'sophia@example.com',
		phone: '',
		whatsapp: '+1234567890',
		category: 'Marketing',
	},
	{
		name: 'David Kim',
		designation: 'Full Stack Developer',
		bio: 'Building robust web applications with modern frameworks and clean architecture.',
		facebook: '',
		linkedin: 'https://linkedin.com',
		twitter: 'https://twitter.com',
		website: 'https://example.com',
		email: 'david@example.com',
		phone: '+1234567890',
		whatsapp: '',
		category: 'Developer',
	},
];

let defaultTemplateIndex = 0;

function getDefaultMember() {
	const template = DEFAULT_MEMBER_TEMPLATES[ defaultTemplateIndex % DEFAULT_MEMBER_TEMPLATES.length ];
	defaultTemplateIndex++;
	return {
		id: generateId(),
		name: template.name,
		designation: template.designation,
		bio: template.bio,
		imageUrl: '',
		imageId: 0,
		facebook: template.facebook,
		linkedin: template.linkedin,
		twitter: template.twitter,
		website: template.website,
		email: template.email,
		phone: template.phone,
		whatsapp: template.whatsapp,
		isHighlighted: false,
		badgeText: 'Featured',
		socialTargetBlank: true,
		contactTargetBlank: true,
		category: template.category || '',
	};
}

function SocialIcon( { type, size } ) {
	const s = size || 16;
	switch ( type ) {
		case 'facebook':
			return <svg viewBox="0 0 24 24" width={ s } height={ s } fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>;
		case 'twitter':
			return <svg viewBox="0 0 24 24" width={ s } height={ s } fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
		case 'linkedin':
			return <svg viewBox="0 0 24 24" width={ s } height={ s } fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
		case 'website':
			return <svg viewBox="0 0 24 24" width={ s } height={ s } fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>;
		case 'email':
			return <svg viewBox="0 0 24 24" width={ s } height={ s } fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>;
		case 'phone':
			return <svg viewBox="0 0 24 24" width={ s } height={ s } fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>;
		case 'whatsapp':
			return <svg viewBox="0 0 24 24" width={ s } height={ s } fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>;
		default:
			return null;
	}
}

function MemberCard( { member, layout, imageShape, textColor, backgroundColor, accentColor, showBio, showSocial, showContact } ) {
	const imageShapeClass = 'wbd-tm-image--' + imageShape;
	const hasImage = !! member.imageUrl;
	const hasSocials = member.facebook || member.linkedin || member.twitter || member.website;
	const hasContact = member.email || member.phone || member.whatsapp;
	const initials = member.name
		? member.name.split( ' ' ).map( ( w ) => w[ 0 ] ).join( '' ).toUpperCase().substring( 0, 2 )
		: 'TM';

	const isOverlayLayout = layout === 'creative' || layout === 'image-overlay';

	return (
		<div
			className={ `wbd-tm-card wbd-tm-card--${ layout }${ member.isHighlighted ? ' wbd-tm-card--highlighted' : '' }` }
			style={ {
				'--wbd-tm-text': textColor,
				'--wbd-tm-bg': backgroundColor,
				'--wbd-tm-accent': accentColor,
			} }
		>
			{ member.isHighlighted && (
				<span className="wbd-tm-badge">{ member.badgeText || __( 'Featured', 'wbd-team-member' ) }</span>
			) }
			<div className={ `wbd-tm-image-wrap ${ imageShapeClass }` }>
				{ hasImage ? (
					<img src={ member.imageUrl } alt={ member.name } className="wbd-tm-image" loading="lazy" />
				) : (
					<div className="wbd-tm-placeholder-avatar">
						<span>{ initials }</span>
					</div>
				) }
				{ isOverlayLayout && showSocial && hasSocials && (
					<div className="wbd-tm-social-overlay">
						{ member.facebook && <span className="wbd-tm-social-link"><SocialIcon type="facebook" size={ 18 } /></span> }
						{ member.twitter && <span className="wbd-tm-social-link"><SocialIcon type="twitter" size={ 18 } /></span> }
						{ member.linkedin && <span className="wbd-tm-social-link"><SocialIcon type="linkedin" size={ 18 } /></span> }
						{ member.website && <span className="wbd-tm-social-link"><SocialIcon type="website" size={ 18 } /></span> }
					</div>
				) }
			</div>
			<div className="wbd-tm-content">
				<h3 className="wbd-tm-name">{ member.name || __( 'Team Member', 'wbd-team-member' ) }</h3>
				<p className="wbd-tm-designation">{ member.designation || __( 'Designation', 'wbd-team-member' ) }</p>
				{ showBio && member.bio && (
					<p className="wbd-tm-bio">{ member.bio }</p>
				) }
				{ ! isOverlayLayout && showSocial && hasSocials && (
					<div className="wbd-tm-socials">
						{ member.facebook && <span className="wbd-tm-social-link"><SocialIcon type="facebook" /></span> }
						{ member.twitter && <span className="wbd-tm-social-link"><SocialIcon type="twitter" /></span> }
						{ member.linkedin && <span className="wbd-tm-social-link"><SocialIcon type="linkedin" /></span> }
						{ member.website && <span className="wbd-tm-social-link"><SocialIcon type="website" /></span> }
					</div>
				) }
				{ showContact && hasContact && (
					<div className="wbd-tm-contact">
						{ member.email && (
							<span className="wbd-tm-cta wbd-tm-cta--email">
								<SocialIcon type="email" size={ 14 } />
								{ __( 'Email', 'wbd-team-member' ) }
							</span>
						) }
						{ member.phone && (
							<span className="wbd-tm-cta wbd-tm-cta--phone">
								<SocialIcon type="phone" size={ 14 } />
								{ __( 'Call', 'wbd-team-member' ) }
							</span>
						) }
						{ member.whatsapp && (
							<span className="wbd-tm-cta wbd-tm-cta--whatsapp">
								<SocialIcon type="whatsapp" size={ 14 } />
								{ __( 'WhatsApp', 'wbd-team-member' ) }
							</span>
						) }
					</div>
				) }
			</div>
		</div>
	);
}

function MemberEditor( { member, index, onChange, onRemove } ) {
	const [ isOpen, setIsOpen ] = useState( index === 0 );

	const updateField = useCallback(
		( field, value ) => {
			onChange( index, { ...member, [ field ]: value } );
		},
		[ index, member, onChange ]
	);

	return (
		<div className={ `wbd-tm-member-editor${ member.isHighlighted ? ' wbd-tm-member-editor--highlighted' : '' }` }>
			<HStack alignment="center" className="wbd-tm-member-editor__header">
				<Button
					variant="link"
					onClick={ () => setIsOpen( ! isOpen ) }
					className="wbd-tm-member-editor__toggle"
				>
					<span className="wbd-tm-member-editor__number">{ index + 1 }</span>
					<span className="wbd-tm-member-editor__title">
						{ member.name || __( 'New Member', 'wbd-team-member' ) }
					</span>
					<Icon icon={ isOpen ? 'arrow-up-alt2' : 'arrow-down-alt2' } size={ 16 } />
				</Button>
				<HStack spacing={ 2 } className="wbd-tm-member-editor__actions">
					<Tooltip text={ __( 'Edit', 'wbd-team-member' ) }>
						<Button
							icon={ isOpen ? 'arrow-up-alt2' : 'edit' }
							size="small"
							onClick={ () => setIsOpen( ! isOpen ) }
							label={ __( 'Edit member', 'wbd-team-member' ) }
						/>
					</Tooltip>
					<Tooltip text={ __( 'Remove', 'wbd-team-member' ) }>
						<Button
							icon="trash"
							size="small"
							isDestructive
							onClick={ () => onRemove( index ) }
							label={ __( 'Remove member', 'wbd-team-member' ) }
						/>
					</Tooltip>
				</HStack>
			</HStack>
			{ isOpen && (
				<VStack spacing={ 3 } className="wbd-tm-member-editor__body">
					<MediaUploadCheck>
						<MediaUpload
							onSelect={ ( media ) => {
								updateField( 'imageUrl', media.url );
								updateField( 'imageId', media.id );
							} }
							allowedTypes={ [ 'image' ] }
							value={ member.imageId }
							render={ ( { open } ) => (
								<div className="wbd-tm-member-editor__image-control">
									{ member.imageUrl ? (
										<div className="wbd-tm-member-editor__image-preview">
											<img src={ member.imageUrl } alt="" />
											<HStack spacing={ 2 }>
												<Button variant="secondary" size="small" onClick={ open }>
													{ __( 'Replace', 'wbd-team-member' ) }
												</Button>
												<Button
													variant="tertiary"
													size="small"
													isDestructive
													onClick={ () => {
														updateField( 'imageUrl', '' );
														updateField( 'imageId', 0 );
													} }
												>
													{ __( 'Remove', 'wbd-team-member' ) }
												</Button>
											</HStack>
										</div>
									) : (
										<Button variant="secondary" onClick={ open } className="wbd-tm-member-editor__upload-btn">
											{ __( 'Upload Photo', 'wbd-team-member' ) }
										</Button>
									) }
								</div>
							) }
						/>
					</MediaUploadCheck>
					<TextControl
						label={ __( 'Name', 'wbd-team-member' ) }
						value={ member.name }
						onChange={ ( v ) => updateField( 'name', v ) }
						__nextHasNoMarginBottom
					/>
					<TextControl
						label={ __( 'Designation', 'wbd-team-member' ) }
						value={ member.designation }
						onChange={ ( v ) => updateField( 'designation', v ) }
						__nextHasNoMarginBottom
					/>
					<TextareaControl
						label={ __( 'Short Bio', 'wbd-team-member' ) }
						value={ member.bio }
						onChange={ ( v ) => updateField( 'bio', v ) }
						rows={ 2 }
						__nextHasNoMarginBottom
					/>
					<TextControl
						label={ __( 'Category', 'wbd-team-member' ) }
						value={ member.category || '' }
						onChange={ ( v ) => updateField( 'category', v ) }
						help={ __( 'Used for filter buttons (e.g. Developer, Designer, Manager)', 'wbd-team-member' ) }
						__nextHasNoMarginBottom
					/>
					<ToggleControl
						label={ __( 'Highlight (Featured Badge)', 'wbd-team-member' ) }
						checked={ member.isHighlighted }
						onChange={ ( v ) => updateField( 'isHighlighted', v ) }
						__nextHasNoMarginBottom
					/>
					{ member.isHighlighted && (
						<TextControl
							label={ __( 'Badge Text', 'wbd-team-member' ) }
							value={ member.badgeText || 'Featured' }
							onChange={ ( v ) => updateField( 'badgeText', v ) }
							help={ __( 'Customize the badge label, e.g. "Lead", "Star", "New"', 'wbd-team-member' ) }
							__nextHasNoMarginBottom
						/>
					) }
					<PanelBody title={ __( 'Social Links', 'wbd-team-member' ) } initialOpen={ false } className="wbd-tm-inner-panel">
						<TextControl label={ __( 'Facebook URL', 'wbd-team-member' ) } value={ member.facebook } onChange={ ( v ) => updateField( 'facebook', v ) } __nextHasNoMarginBottom />
						<TextControl label={ __( 'LinkedIn URL', 'wbd-team-member' ) } value={ member.linkedin } onChange={ ( v ) => updateField( 'linkedin', v ) } __nextHasNoMarginBottom />
						<TextControl label={ __( 'Twitter / X URL', 'wbd-team-member' ) } value={ member.twitter } onChange={ ( v ) => updateField( 'twitter', v ) } __nextHasNoMarginBottom />
						<TextControl label={ __( 'Website URL', 'wbd-team-member' ) } value={ member.website } onChange={ ( v ) => updateField( 'website', v ) } __nextHasNoMarginBottom />
						<ToggleControl
							label={ __( 'Open in New Tab', 'wbd-team-member' ) }
							checked={ member.socialTargetBlank !== false }
							onChange={ ( v ) => updateField( 'socialTargetBlank', v ) }
							help={ __( 'Open social links in a new browser tab.', 'wbd-team-member' ) }
							__nextHasNoMarginBottom
						/>
					</PanelBody>
					<PanelBody title={ __( 'Contact Info', 'wbd-team-member' ) } initialOpen={ false } className="wbd-tm-inner-panel">
						<TextControl label={ __( 'Email', 'wbd-team-member' ) } value={ member.email } onChange={ ( v ) => updateField( 'email', v ) } type="email" __nextHasNoMarginBottom />
						<TextControl label={ __( 'Phone', 'wbd-team-member' ) } value={ member.phone } onChange={ ( v ) => updateField( 'phone', v ) } type="tel" __nextHasNoMarginBottom />
						<TextControl label={ __( 'WhatsApp Number', 'wbd-team-member' ) } value={ member.whatsapp } onChange={ ( v ) => updateField( 'whatsapp', v ) } type="tel" __nextHasNoMarginBottom />
						<ToggleControl
							label={ __( 'Open in New Tab', 'wbd-team-member' ) }
							checked={ member.contactTargetBlank !== false }
							onChange={ ( v ) => updateField( 'contactTargetBlank', v ) }
							help={ __( 'Open contact links in a new browser tab.', 'wbd-team-member' ) }
							__nextHasNoMarginBottom
						/>
					</PanelBody>
				</VStack>
			) }
		</div>
	);
}

function ColorControl( { label, value, onChange } ) {
	const [ isOpen, setIsOpen ] = useState( false );
	return (
		<PanelRow>
			<span>{ label }</span>
			<Button
				onClick={ () => setIsOpen( ! isOpen ) }
				className="wbd-tm-color-button"
				style={ { backgroundColor: value } }
				aria-label={ label }
			/>
			{ isOpen && (
				<Popover placement="left-start" onClose={ () => setIsOpen( false ) }>
					<div style={ { padding: '8px' } }>
						<ColorPicker color={ value } onChange={ onChange } enableAlpha={ false } />
					</div>
				</Popover>
			) }
		</PanelRow>
	);
}

export default function Edit( { attributes, setAttributes } ) {
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

	const [ responsiveDevice, setResponsiveDevice ] = useState( 'desktop' );
	const [ activeFilter, setActiveFilter ] = useState( 'all' );

	const isSlider = displayMode === 'slider';

	const previewColumns = isSlider
		? slidesToShow
		: responsiveDevice === 'tablet'
		? columnsTablet
		: responsiveDevice === 'mobile'
		? columnsMobile
		: columns;

	const blockProps = useBlockProps( {
		className: `wbd-tm wbd-tm--${ layout } wbd-tm--mode-${ displayMode }`,
		style: {
			'--wbd-tm-columns': previewColumns,
			'--wbd-tm-gap': gap + 'px',
			'--wbd-tm-text': textColor,
			'--wbd-tm-bg': backgroundColor,
			'--wbd-tm-accent': accentColor,
			'--wbd-tm-hover': hoverColor,
		},
	} );

	const categories = useMemo( () => {
		const cats = [];
		members.forEach( ( m ) => {
			if ( m.category && m.category.trim() && cats.indexOf( m.category.trim() ) === -1 ) {
				cats.push( m.category.trim() );
			}
		} );
		return cats;
	}, [ members ] );

	const filteredMembers = useMemo( () => {
		if ( ! showFilter || activeFilter === 'all' ) {
			return members;
		}
		return members.filter( ( m ) => m.category && m.category.trim() === activeFilter );
	}, [ members, showFilter, activeFilter ] );

	const addMember = () => {
		setAttributes( { members: [ ...members, getDefaultMember() ] } );
	};

	const updateMember = useCallback(
		( index, updatedMember ) => {
			const updated = [ ...members ];
			updated[ index ] = updatedMember;
			setAttributes( { members: updated } );
		},
		[ members, setAttributes ]
	);

	const removeMember = useCallback(
		( index ) => {
			setAttributes( { members: members.filter( ( _, i ) => i !== index ) } );
		},
		[ members, setAttributes ]
	);

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Display Mode', 'wbd-team-member' ) } initialOpen={ true }>
					<div className="wbd-tm-display-mode">
						<ButtonGroup className="wbd-tm-display-mode__buttons">
							<Button
								className={ `wbd-tm-display-mode__btn${ displayMode === 'card' ? ' is-active' : '' }` }
								onClick={ () => setAttributes( { displayMode: 'card' } ) }
							>
								<span className="dashicons dashicons-grid-view"></span>
								{ __( 'Card', 'wbd-team-member' ) }
							</Button>
							<Button
								className={ `wbd-tm-display-mode__btn${ displayMode === 'slider' ? ' is-active' : '' }` }
								onClick={ () => setAttributes( { displayMode: 'slider' } ) }
							>
								<span className="dashicons dashicons-slides"></span>
								{ __( 'Slider', 'wbd-team-member' ) }
							</Button>
						</ButtonGroup>
					</div>
				</PanelBody>
				<PanelBody title={ __( 'Layout Style', 'wbd-team-member' ) } initialOpen={ true }>
					<div className="wbd-tm-layout-grid">
						{ LAYOUTS.map( ( l ) => (
							<Button
								key={ l.value }
								className={ `wbd-tm-layout-btn${ layout === l.value ? ' is-active' : '' }` }
								onClick={ () => setAttributes( { layout: l.value } ) }
							>
								<span className="wbd-tm-layout-btn__label">{ l.label }</span>
							</Button>
						) ) }
					</div>
				</PanelBody>
				{ isSlider && (
					<PanelBody title={ __( 'Slider Settings', 'wbd-team-member' ) } initialOpen={ true }>
						<RangeControl
							label={ __( 'Slides to Show', 'wbd-team-member' ) }
							value={ slidesToShow }
							onChange={ ( v ) => setAttributes( { slidesToShow: v } ) }
							min={ 1 }
							max={ 4 }
							__nextHasNoMarginBottom
						/>
						<ToggleControl
							label={ __( 'Autoplay', 'wbd-team-member' ) }
							checked={ autoplay }
							onChange={ ( v ) => setAttributes( { autoplay: v } ) }
							help={ autoplay ? __( 'Slides advance automatically. Pauses on hover.', 'wbd-team-member' ) : __( 'Enable to auto-advance slides.', 'wbd-team-member' ) }
							__nextHasNoMarginBottom
						/>
						{ autoplay && (
							<RangeControl
								label={ __( 'Speed (ms)', 'wbd-team-member' ) }
								value={ autoplaySpeed }
								onChange={ ( v ) => setAttributes( { autoplaySpeed: v } ) }
								min={ 1000 }
								max={ 10000 }
								step={ 500 }
								help={ ( autoplaySpeed / 1000 ) + 's ' + __( 'between slides', 'wbd-team-member' ) }
								__nextHasNoMarginBottom
							/>
						) }
					</PanelBody>
				) }
				{ ! isSlider && (
					<PanelBody title={ __( 'Grid Settings', 'wbd-team-member' ) } initialOpen={ false }>
						<div className="wbd-tm-responsive-columns">
							<div className="wbd-tm-responsive-columns__header">
								<span className="wbd-tm-responsive-columns__label">
									{ __( 'Columns', 'wbd-team-member' ) }
								</span>
								<ButtonGroup className="wbd-tm-responsive-columns__tabs">
									<Button
										size="small"
										variant={ responsiveDevice === 'desktop' ? 'primary' : 'secondary' }
										onClick={ () => setResponsiveDevice( 'desktop' ) }
										icon="desktop"
										label={ __( 'Desktop', 'wbd-team-member' ) }
									/>
									<Button
										size="small"
										variant={ responsiveDevice === 'tablet' ? 'primary' : 'secondary' }
										onClick={ () => setResponsiveDevice( 'tablet' ) }
										icon="tablet"
										label={ __( 'Tablet', 'wbd-team-member' ) }
									/>
									<Button
										size="small"
										variant={ responsiveDevice === 'mobile' ? 'primary' : 'secondary' }
										onClick={ () => setResponsiveDevice( 'mobile' ) }
										icon="smartphone"
										label={ __( 'Mobile', 'wbd-team-member' ) }
									/>
								</ButtonGroup>
							</div>
							{ responsiveDevice === 'desktop' && (
								<RangeControl
									label={ __( 'Desktop Columns', 'wbd-team-member' ) }
									value={ columns }
									onChange={ ( v ) => setAttributes( { columns: v } ) }
									min={ 1 }
									max={ 4 }
									__nextHasNoMarginBottom
								/>
							) }
							{ responsiveDevice === 'tablet' && (
								<RangeControl
									label={ __( 'Tablet Columns', 'wbd-team-member' ) }
									value={ columnsTablet }
									onChange={ ( v ) => setAttributes( { columnsTablet: v } ) }
									min={ 1 }
									max={ 4 }
									__nextHasNoMarginBottom
								/>
							) }
							{ responsiveDevice === 'mobile' && (
								<RangeControl
									label={ __( 'Mobile Columns', 'wbd-team-member' ) }
									value={ columnsMobile }
									onChange={ ( v ) => setAttributes( { columnsMobile: v } ) }
									min={ 1 }
									max={ 4 }
									__nextHasNoMarginBottom
								/>
							) }
						</div>
						<RangeControl
							label={ __( 'Gap (px)', 'wbd-team-member' ) }
							value={ gap }
							onChange={ ( v ) => setAttributes( { gap: v } ) }
							min={ 0 }
							max={ 60 }
							__nextHasNoMarginBottom
						/>
					</PanelBody>
				) }
				<PanelBody title={ __( 'Filter & Categories', 'wbd-team-member' ) } initialOpen={ false }>
					<ToggleControl
						label={ __( 'Show Filter Buttons', 'wbd-team-member' ) }
						checked={ showFilter }
						onChange={ ( v ) => setAttributes( { showFilter: v } ) }
						help={ showFilter
							? __( 'Filter buttons are shown. Assign categories to members below.', 'wbd-team-member' )
							: __( 'Enable to show category filter buttons above the team grid.', 'wbd-team-member' )
						}
						__nextHasNoMarginBottom
					/>
					{ showFilter && categories.length > 0 && (
						<div className="wbd-tm-categories-preview">
							<p className="wbd-tm-categories-preview__label">{ __( 'Detected categories:', 'wbd-team-member' ) }</p>
							<div className="wbd-tm-categories-preview__tags">
								{ categories.map( ( cat ) => (
									<span key={ cat } className="wbd-tm-categories-preview__tag">{ cat }</span>
								) ) }
							</div>
						</div>
					) }
					{ showFilter && categories.length === 0 && (
						<p style={ { fontSize: '12px', color: '#94a3b8', fontStyle: 'italic' } }>
							{ __( 'No categories found. Add a category to each team member in the Team Members panel below.', 'wbd-team-member' ) }
						</p>
					) }
					{ showFilter && (
						<PanelBody title={ __( 'Button Style', 'wbd-team-member' ) } initialOpen={ false } className="wbd-tm-inner-panel">
							<RangeControl
								label={ __( 'Font Size (px)', 'wbd-team-member' ) }
								value={ filterFontSize }
								onChange={ ( v ) => setAttributes( { filterFontSize: v } ) }
								min={ 10 }
								max={ 24 }
								__nextHasNoMarginBottom
							/>
							<RangeControl
								label={ __( 'Border Radius (px)', 'wbd-team-member' ) }
								value={ filterBorderRadius }
								onChange={ ( v ) => setAttributes( { filterBorderRadius: v } ) }
								min={ 0 }
								max={ 50 }
								__nextHasNoMarginBottom
							/>
							<ColorControl label={ __( 'Text Color', 'wbd-team-member' ) } value={ filterTextColor } onChange={ ( v ) => setAttributes( { filterTextColor: v } ) } />
							<ColorControl label={ __( 'Background', 'wbd-team-member' ) } value={ filterBgColor } onChange={ ( v ) => setAttributes( { filterBgColor: v } ) } />
							<ColorControl label={ __( 'Border Color', 'wbd-team-member' ) } value={ filterBorderColor } onChange={ ( v ) => setAttributes( { filterBorderColor: v } ) } />
							<ColorControl label={ __( 'Hover Background', 'wbd-team-member' ) } value={ filterHoverBgColor } onChange={ ( v ) => setAttributes( { filterHoverBgColor: v } ) } />
							<ColorControl label={ __( 'Hover Text Color', 'wbd-team-member' ) } value={ filterHoverTextColor } onChange={ ( v ) => setAttributes( { filterHoverTextColor: v } ) } />
							<ColorControl label={ __( 'Active Background', 'wbd-team-member' ) } value={ filterActiveBgColor } onChange={ ( v ) => setAttributes( { filterActiveBgColor: v } ) } />
							<ColorControl label={ __( 'Active Text Color', 'wbd-team-member' ) } value={ filterActiveTextColor } onChange={ ( v ) => setAttributes( { filterActiveTextColor: v } ) } />
						</PanelBody>
					) }
				</PanelBody>
				<PanelBody title={ __( 'Card Settings', 'wbd-team-member' ) } initialOpen={ false }>
					{ isSlider && (
						<RangeControl
							label={ __( 'Gap (px)', 'wbd-team-member' ) }
							value={ gap }
							onChange={ ( v ) => setAttributes( { gap: v } ) }
							min={ 0 }
							max={ 60 }
							__nextHasNoMarginBottom
						/>
					) }
					<SelectControl
						label={ __( 'Image Shape', 'wbd-team-member' ) }
						value={ imageShape }
						options={ IMAGE_SHAPES }
						onChange={ ( v ) => setAttributes( { imageShape: v } ) }
						__nextHasNoMarginBottom
					/>
				</PanelBody>
				<PanelBody title={ __( 'Colors', 'wbd-team-member' ) } initialOpen={ false }>
					<ColorControl label={ __( 'Text', 'wbd-team-member' ) } value={ textColor } onChange={ ( v ) => setAttributes( { textColor: v } ) } />
					<ColorControl label={ __( 'Background', 'wbd-team-member' ) } value={ backgroundColor } onChange={ ( v ) => setAttributes( { backgroundColor: v } ) } />
					<ColorControl label={ __( 'Accent', 'wbd-team-member' ) } value={ accentColor } onChange={ ( v ) => setAttributes( { accentColor: v } ) } />
					<ColorControl label={ __( 'Hover', 'wbd-team-member' ) } value={ hoverColor } onChange={ ( v ) => setAttributes( { hoverColor: v } ) } />
				</PanelBody>
				<PanelBody title={ __( 'Visibility', 'wbd-team-member' ) } initialOpen={ false }>
					<ToggleControl label={ __( 'Show Bio', 'wbd-team-member' ) } checked={ showBio } onChange={ ( v ) => setAttributes( { showBio: v } ) } __nextHasNoMarginBottom />
					<ToggleControl label={ __( 'Show Social Links', 'wbd-team-member' ) } checked={ showSocial } onChange={ ( v ) => setAttributes( { showSocial: v } ) } __nextHasNoMarginBottom />
					<ToggleControl label={ __( 'Show Contact Buttons', 'wbd-team-member' ) } checked={ showContact } onChange={ ( v ) => setAttributes( { showContact: v } ) } __nextHasNoMarginBottom />
					<ToggleControl label={ __( 'Enable Animations', 'wbd-team-member' ) } checked={ enableAnimation } onChange={ ( v ) => setAttributes( { enableAnimation: v } ) } __nextHasNoMarginBottom />
				</PanelBody>
				<PanelBody title={ __( 'Team Members', 'wbd-team-member' ) } initialOpen={ true }>
					{ members.map( ( member, index ) => (
						<MemberEditor
							key={ member.id }
							member={ member }
							index={ index }
							onChange={ updateMember }
							onRemove={ removeMember }
						/>
					) ) }
					<Button variant="primary" onClick={ addMember } className="wbd-tm-add-member-btn">
						{ __( '+ Add Team Member', 'wbd-team-member' ) }
					</Button>
				</PanelBody>
			</InspectorControls>
			<div { ...blockProps }>
				{ members.length === 0 ? (
					<div className="wbd-tm-empty">
						<div className="wbd-tm-empty__icon">
							<svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 10-16 0"/><path d="M16 3.13a4 4 0 010 7.75M21 21v-1a4 4 0 00-3-3.87"/></svg>
						</div>
						<p className="wbd-tm-empty__text">
							{ __( 'Add team members using the sidebar panel to get started.', 'wbd-team-member' ) }
						</p>
						<Button variant="primary" onClick={ addMember }>
							{ __( '+ Add First Member', 'wbd-team-member' ) }
						</Button>
					</div>
				) : (
					<>
						{ showFilter && categories.length > 0 && (
							<div
								className="wbd-tm-filter"
								style={ {
									'--wbd-filter-font-size': ( filterFontSize || 13 ) + 'px',
									'--wbd-filter-text-color': filterTextColor || '#475569',
									'--wbd-filter-bg-color': filterBgColor || '#ffffff',
									'--wbd-filter-border-color': filterBorderColor || '#e2e8f0',
									'--wbd-filter-border-radius': ( filterBorderRadius !== undefined ? filterBorderRadius : 24 ) + 'px',
									'--wbd-filter-hover-bg': filterHoverBgColor || '#f1f5f9',
									'--wbd-filter-hover-text': filterHoverTextColor || '#3b82f6',
									'--wbd-filter-active-bg': filterActiveBgColor || '#3b82f6',
									'--wbd-filter-active-text': filterActiveTextColor || '#ffffff',
								} }
							>
								<button
									className={ `wbd-tm-filter__btn${ activeFilter === 'all' ? ' wbd-tm-filter__btn--active' : '' }` }
									onClick={ () => setActiveFilter( 'all' ) }
									type="button"
								>
									{ __( 'All', 'wbd-team-member' ) }
								</button>
								{ categories.map( ( cat ) => (
									<button
										key={ cat }
										className={ `wbd-tm-filter__btn${ activeFilter === cat ? ' wbd-tm-filter__btn--active' : '' }` }
										onClick={ () => setActiveFilter( cat ) }
										type="button"
									>
										{ cat }
									</button>
								) ) }
							</div>
						) }
						{ isSlider ? (
							<div className="wbd-tm-slider-editor-preview">
								<div className="wbd-tm-slider-editor-preview__info">
									<span className="dashicons dashicons-slides"></span>
									{ __( 'Slider Preview', 'wbd-team-member' ) }
									<span className="wbd-tm-slider-editor-preview__count">
										{ filteredMembers.length } { __( 'slides', 'wbd-team-member' ) }
										{ ' / ' }
										{ slidesToShow } { __( 'visible', 'wbd-team-member' ) }
										{ autoplay && (
											<span className="wbd-tm-slider-editor-preview__autoplay">
												{ ' \u00b7 ' }
												<span className="dashicons dashicons-controls-play"></span>
												{ ( autoplaySpeed / 1000 ) + 's' }
											</span>
										) }
									</span>
								</div>
								<div className="wbd-tm-grid">
									{ filteredMembers.map( ( member ) => (
										<MemberCard
											key={ member.id }
											member={ member }
											layout={ layout }
											imageShape={ imageShape }
											textColor={ textColor }
											backgroundColor={ backgroundColor }
											accentColor={ accentColor }
											showBio={ showBio }
											showSocial={ showSocial }
											showContact={ showContact }
										/>
									) ) }
								</div>
							</div>
						) : (
							<div className="wbd-tm-grid">
								{ filteredMembers.map( ( member ) => (
									<MemberCard
										key={ member.id }
										member={ member }
										layout={ layout }
										imageShape={ imageShape }
										textColor={ textColor }
										backgroundColor={ backgroundColor }
										accentColor={ accentColor }
										showBio={ showBio }
										showSocial={ showSocial }
										showContact={ showContact }
									/>
								) ) }
							</div>
						) }
					</>
				) }
			</div>
		</>
	);
}
