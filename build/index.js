/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js"
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const LAYOUTS = [{
  value: 'corporate',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Corporate Clean', 'wbd-team-member')
}, {
  value: 'agency',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Agency Modern', 'wbd-team-member')
}, {
  value: 'creative',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Creative Hover', 'wbd-team-member')
}, {
  value: 'minimal',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Minimal Card', 'wbd-team-member')
}, {
  value: 'centered',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Centered Profile', 'wbd-team-member')
}, {
  value: 'left-aligned',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Left Aligned', 'wbd-team-member')
}, {
  value: 'dark-mode',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Dark Mode', 'wbd-team-member')
}, {
  value: 'gradient',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Gradient Modern', 'wbd-team-member')
}, {
  value: 'border-hover',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border Hover', 'wbd-team-member')
}, {
  value: 'image-overlay',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image Overlay', 'wbd-team-member')
}, {
  value: 'split',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Split Layout', 'wbd-team-member')
}, {
  value: 'compact',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Compact Grid', 'wbd-team-member')
}];
const IMAGE_SHAPES = [{
  value: 'circle',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Circle', 'wbd-team-member')
}, {
  value: 'square',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Square', 'wbd-team-member')
}, {
  value: 'rounded',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Rounded', 'wbd-team-member')
}];
function generateId() {
  return 'member-' + Date.now() + '-' + Math.random().toString(36).substring(2, 9);
}
const DEFAULT_MEMBER_TEMPLATES = [{
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
  category: 'Marketing'
}, {
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
  category: 'Designer'
}, {
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
  category: 'Management'
}, {
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
  category: 'Marketing'
}, {
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
  category: 'Developer'
}];
let defaultTemplateIndex = 0;
function getDefaultMember() {
  const template = DEFAULT_MEMBER_TEMPLATES[defaultTemplateIndex % DEFAULT_MEMBER_TEMPLATES.length];
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
    category: template.category || ''
  };
}
function SocialIcon({
  type,
  size
}) {
  const s = size || 16;
  switch (type) {
    case 'facebook':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
        viewBox: "0 0 24 24",
        width: s,
        height: s,
        fill: "currentColor",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
          d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
        })
      });
    case 'twitter':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
        viewBox: "0 0 24 24",
        width: s,
        height: s,
        fill: "currentColor",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
          d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        })
      });
    case 'linkedin':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
        viewBox: "0 0 24 24",
        width: s,
        height: s,
        fill: "currentColor",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
          d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        })
      });
    case 'website':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
        viewBox: "0 0 24 24",
        width: s,
        height: s,
        fill: "currentColor",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
          d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
        })
      });
    case 'email':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
        viewBox: "0 0 24 24",
        width: s,
        height: s,
        fill: "currentColor",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
          d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
        })
      });
    case 'phone':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
        viewBox: "0 0 24 24",
        width: s,
        height: s,
        fill: "currentColor",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
          d: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
        })
      });
    case 'whatsapp':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
        viewBox: "0 0 24 24",
        width: s,
        height: s,
        fill: "currentColor",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
          d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
        })
      });
    default:
      return null;
  }
}
function MemberCard({
  member,
  layout,
  imageShape,
  textColor,
  backgroundColor,
  accentColor,
  showBio,
  showSocial,
  showContact
}) {
  const imageShapeClass = 'wbd-tm-image--' + imageShape;
  const hasImage = !!member.imageUrl;
  const hasSocials = member.facebook || member.linkedin || member.twitter || member.website;
  const hasContact = member.email || member.phone || member.whatsapp;
  const initials = member.name ? member.name.split(' ').map(w => w[0]).join('').toUpperCase().substring(0, 2) : 'TM';
  const isOverlayLayout = layout === 'creative' || layout === 'image-overlay';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: `wbd-tm-card wbd-tm-card--${layout}${member.isHighlighted ? ' wbd-tm-card--highlighted' : ''}`,
    style: {
      '--wbd-tm-text': textColor,
      '--wbd-tm-bg': backgroundColor,
      '--wbd-tm-accent': accentColor
    },
    children: [member.isHighlighted && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
      className: "wbd-tm-badge",
      children: member.badgeText || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Featured', 'wbd-team-member')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: `wbd-tm-image-wrap ${imageShapeClass}`,
      children: [hasImage ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
        src: member.imageUrl,
        alt: member.name,
        className: "wbd-tm-image",
        loading: "lazy"
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "wbd-tm-placeholder-avatar",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          children: initials
        })
      }), isOverlayLayout && showSocial && hasSocials && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "wbd-tm-social-overlay",
        children: [member.facebook && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wbd-tm-social-link",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SocialIcon, {
            type: "facebook",
            size: 18
          })
        }), member.twitter && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wbd-tm-social-link",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SocialIcon, {
            type: "twitter",
            size: 18
          })
        }), member.linkedin && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wbd-tm-social-link",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SocialIcon, {
            type: "linkedin",
            size: 18
          })
        }), member.website && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wbd-tm-social-link",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SocialIcon, {
            type: "website",
            size: 18
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "wbd-tm-content",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
        className: "wbd-tm-name",
        children: member.name || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Team Member', 'wbd-team-member')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        className: "wbd-tm-designation",
        children: member.designation || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Designation', 'wbd-team-member')
      }), showBio && member.bio && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        className: "wbd-tm-bio",
        children: member.bio
      }), !isOverlayLayout && showSocial && hasSocials && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "wbd-tm-socials",
        children: [member.facebook && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wbd-tm-social-link",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SocialIcon, {
            type: "facebook"
          })
        }), member.twitter && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wbd-tm-social-link",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SocialIcon, {
            type: "twitter"
          })
        }), member.linkedin && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wbd-tm-social-link",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SocialIcon, {
            type: "linkedin"
          })
        }), member.website && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wbd-tm-social-link",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SocialIcon, {
            type: "website"
          })
        })]
      }), showContact && hasContact && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "wbd-tm-contact",
        children: [member.email && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
          className: "wbd-tm-cta wbd-tm-cta--email",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SocialIcon, {
            type: "email",
            size: 14
          }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Email', 'wbd-team-member')]
        }), member.phone && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
          className: "wbd-tm-cta wbd-tm-cta--phone",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SocialIcon, {
            type: "phone",
            size: 14
          }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Call', 'wbd-team-member')]
        }), member.whatsapp && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
          className: "wbd-tm-cta wbd-tm-cta--whatsapp",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SocialIcon, {
            type: "whatsapp",
            size: 14
          }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('WhatsApp', 'wbd-team-member')]
        })]
      })]
    })]
  });
}
function MemberEditor({
  member,
  index,
  onChange,
  onRemove
}) {
  const [isOpen, setIsOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(index === 0);
  const updateField = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)((field, value) => {
    onChange(index, {
      ...member,
      [field]: value
    });
  }, [index, member, onChange]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: `wbd-tm-member-editor${member.isHighlighted ? ' wbd-tm-member-editor--highlighted' : ''}`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHStack, {
      alignment: "center",
      className: "wbd-tm-member-editor__header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "link",
        onClick: () => setIsOpen(!isOpen),
        className: "wbd-tm-member-editor__toggle",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wbd-tm-member-editor__number",
          children: index + 1
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "wbd-tm-member-editor__title",
          children: member.name || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('New Member', 'wbd-team-member')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
          icon: isOpen ? 'arrow-up-alt2' : 'arrow-down-alt2',
          size: 16
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHStack, {
        spacing: 2,
        className: "wbd-tm-member-editor__actions",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
          text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Edit', 'wbd-team-member'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            icon: isOpen ? 'arrow-up-alt2' : 'edit',
            size: "small",
            onClick: () => setIsOpen(!isOpen),
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Edit member', 'wbd-team-member')
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
          text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove', 'wbd-team-member'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            icon: "trash",
            size: "small",
            isDestructive: true,
            onClick: () => onRemove(index),
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove member', 'wbd-team-member')
          })
        })]
      })]
    }), isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalVStack, {
      spacing: 3,
      className: "wbd-tm-member-editor__body",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
          onSelect: media => {
            updateField('imageUrl', media.url);
            updateField('imageId', media.id);
          },
          allowedTypes: ['image'],
          value: member.imageId,
          render: ({
            open
          }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "wbd-tm-member-editor__image-control",
            children: member.imageUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "wbd-tm-member-editor__image-preview",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                src: member.imageUrl,
                alt: ""
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHStack, {
                spacing: 2,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                  variant: "secondary",
                  size: "small",
                  onClick: open,
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Replace', 'wbd-team-member')
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                  variant: "tertiary",
                  size: "small",
                  isDestructive: true,
                  onClick: () => {
                    updateField('imageUrl', '');
                    updateField('imageId', 0);
                  },
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove', 'wbd-team-member')
                })]
              })]
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
              variant: "secondary",
              onClick: open,
              className: "wbd-tm-member-editor__upload-btn",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Upload Photo', 'wbd-team-member')
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Name', 'wbd-team-member'),
        value: member.name,
        onChange: v => updateField('name', v),
        __nextHasNoMarginBottom: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Designation', 'wbd-team-member'),
        value: member.designation,
        onChange: v => updateField('designation', v),
        __nextHasNoMarginBottom: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextareaControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Short Bio', 'wbd-team-member'),
        value: member.bio,
        onChange: v => updateField('bio', v),
        rows: 2,
        __nextHasNoMarginBottom: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Category', 'wbd-team-member'),
        value: member.category || '',
        onChange: v => updateField('category', v),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Used for filter buttons (e.g. Developer, Designer, Manager)', 'wbd-team-member'),
        __nextHasNoMarginBottom: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Highlight (Featured Badge)', 'wbd-team-member'),
        checked: member.isHighlighted,
        onChange: v => updateField('isHighlighted', v),
        __nextHasNoMarginBottom: true
      }), member.isHighlighted && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Badge Text', 'wbd-team-member'),
        value: member.badgeText || 'Featured',
        onChange: v => updateField('badgeText', v),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Customize the badge label, e.g. "Lead", "Star", "New"', 'wbd-team-member'),
        __nextHasNoMarginBottom: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Social Links', 'wbd-team-member'),
        initialOpen: false,
        className: "wbd-tm-inner-panel",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Facebook URL', 'wbd-team-member'),
          value: member.facebook,
          onChange: v => updateField('facebook', v),
          __nextHasNoMarginBottom: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('LinkedIn URL', 'wbd-team-member'),
          value: member.linkedin,
          onChange: v => updateField('linkedin', v),
          __nextHasNoMarginBottom: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Twitter / X URL', 'wbd-team-member'),
          value: member.twitter,
          onChange: v => updateField('twitter', v),
          __nextHasNoMarginBottom: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Website URL', 'wbd-team-member'),
          value: member.website,
          onChange: v => updateField('website', v),
          __nextHasNoMarginBottom: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Open in New Tab', 'wbd-team-member'),
          checked: member.socialTargetBlank !== false,
          onChange: v => updateField('socialTargetBlank', v),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Open social links in a new browser tab.', 'wbd-team-member'),
          __nextHasNoMarginBottom: true
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Contact Info', 'wbd-team-member'),
        initialOpen: false,
        className: "wbd-tm-inner-panel",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Email', 'wbd-team-member'),
          value: member.email,
          onChange: v => updateField('email', v),
          type: "email",
          __nextHasNoMarginBottom: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Phone', 'wbd-team-member'),
          value: member.phone,
          onChange: v => updateField('phone', v),
          type: "tel",
          __nextHasNoMarginBottom: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('WhatsApp Number', 'wbd-team-member'),
          value: member.whatsapp,
          onChange: v => updateField('whatsapp', v),
          type: "tel",
          __nextHasNoMarginBottom: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Open in New Tab', 'wbd-team-member'),
          checked: member.contactTargetBlank !== false,
          onChange: v => updateField('contactTargetBlank', v),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Open contact links in a new browser tab.', 'wbd-team-member'),
          __nextHasNoMarginBottom: true
        })]
      })]
    })]
  });
}
function ColorControl({
  label,
  value,
  onChange
}) {
  const [isOpen, setIsOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: () => setIsOpen(!isOpen),
      className: "wbd-tm-color-button",
      style: {
        backgroundColor: value
      },
      "aria-label": label
    }), isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Popover, {
      placement: "left-start",
      onClose: () => setIsOpen(false),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        style: {
          padding: '8px'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
          color: value,
          onChange: onChange,
          enableAlpha: false
        })
      })
    })]
  });
}
function Edit({
  attributes,
  setAttributes
}) {
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
    filterActiveTextColor
  } = attributes;
  const [responsiveDevice, setResponsiveDevice] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('desktop');
  const [activeFilter, setActiveFilter] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('all');
  const isSlider = displayMode === 'slider';
  const previewColumns = isSlider ? slidesToShow : responsiveDevice === 'tablet' ? columnsTablet : responsiveDevice === 'mobile' ? columnsMobile : columns;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: `wbd-tm wbd-tm--${layout} wbd-tm--mode-${displayMode}`,
    style: {
      '--wbd-tm-columns': previewColumns,
      '--wbd-tm-gap': gap + 'px',
      '--wbd-tm-text': textColor,
      '--wbd-tm-bg': backgroundColor,
      '--wbd-tm-accent': accentColor,
      '--wbd-tm-hover': hoverColor
    }
  });
  const categories = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    const cats = [];
    members.forEach(m => {
      if (m.category && m.category.trim() && cats.indexOf(m.category.trim()) === -1) {
        cats.push(m.category.trim());
      }
    });
    return cats;
  }, [members]);
  const filteredMembers = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    if (!showFilter || activeFilter === 'all') {
      return members;
    }
    return members.filter(m => m.category && m.category.trim() === activeFilter);
  }, [members, showFilter, activeFilter]);
  const addMember = () => {
    setAttributes({
      members: [...members, getDefaultMember()]
    });
  };
  const updateMember = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)((index, updatedMember) => {
    const updated = [...members];
    updated[index] = updatedMember;
    setAttributes({
      members: updated
    });
  }, [members, setAttributes]);
  const removeMember = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(index => {
    setAttributes({
      members: members.filter((_, i) => i !== index)
    });
  }, [members, setAttributes]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Display Mode', 'wbd-team-member'),
        initialOpen: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "wbd-tm-display-mode",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
            className: "wbd-tm-display-mode__buttons",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
              className: `wbd-tm-display-mode__btn${displayMode === 'card' ? ' is-active' : ''}`,
              onClick: () => setAttributes({
                displayMode: 'card'
              }),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "dashicons dashicons-grid-view"
              }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Card', 'wbd-team-member')]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
              className: `wbd-tm-display-mode__btn${displayMode === 'slider' ? ' is-active' : ''}`,
              onClick: () => setAttributes({
                displayMode: 'slider'
              }),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "dashicons dashicons-slides"
              }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Slider', 'wbd-team-member')]
            })]
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Layout Style', 'wbd-team-member'),
        initialOpen: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "wbd-tm-layout-grid",
          children: LAYOUTS.map(l => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            className: `wbd-tm-layout-btn${layout === l.value ? ' is-active' : ''}`,
            onClick: () => setAttributes({
              layout: l.value
            }),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "wbd-tm-layout-btn__label",
              children: l.label
            })
          }, l.value))
        })
      }), isSlider && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Slider Settings', 'wbd-team-member'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Slides to Show', 'wbd-team-member'),
          value: slidesToShow,
          onChange: v => setAttributes({
            slidesToShow: v
          }),
          min: 1,
          max: 4,
          __nextHasNoMarginBottom: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Autoplay', 'wbd-team-member'),
          checked: autoplay,
          onChange: v => setAttributes({
            autoplay: v
          }),
          help: autoplay ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Slides advance automatically. Pauses on hover.', 'wbd-team-member') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enable to auto-advance slides.', 'wbd-team-member'),
          __nextHasNoMarginBottom: true
        }), autoplay && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Speed (ms)', 'wbd-team-member'),
          value: autoplaySpeed,
          onChange: v => setAttributes({
            autoplaySpeed: v
          }),
          min: 1000,
          max: 10000,
          step: 500,
          help: autoplaySpeed / 1000 + 's ' + (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('between slides', 'wbd-team-member'),
          __nextHasNoMarginBottom: true
        })]
      }), !isSlider && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Grid Settings', 'wbd-team-member'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "wbd-tm-responsive-columns",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "wbd-tm-responsive-columns__header",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "wbd-tm-responsive-columns__label",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Columns', 'wbd-team-member')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
              className: "wbd-tm-responsive-columns__tabs",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                size: "small",
                variant: responsiveDevice === 'desktop' ? 'primary' : 'secondary',
                onClick: () => setResponsiveDevice('desktop'),
                icon: "desktop",
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Desktop', 'wbd-team-member')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                size: "small",
                variant: responsiveDevice === 'tablet' ? 'primary' : 'secondary',
                onClick: () => setResponsiveDevice('tablet'),
                icon: "tablet",
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Tablet', 'wbd-team-member')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                size: "small",
                variant: responsiveDevice === 'mobile' ? 'primary' : 'secondary',
                onClick: () => setResponsiveDevice('mobile'),
                icon: "smartphone",
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Mobile', 'wbd-team-member')
              })]
            })]
          }), responsiveDevice === 'desktop' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Desktop Columns', 'wbd-team-member'),
            value: columns,
            onChange: v => setAttributes({
              columns: v
            }),
            min: 1,
            max: 4,
            __nextHasNoMarginBottom: true
          }), responsiveDevice === 'tablet' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Tablet Columns', 'wbd-team-member'),
            value: columnsTablet,
            onChange: v => setAttributes({
              columnsTablet: v
            }),
            min: 1,
            max: 4,
            __nextHasNoMarginBottom: true
          }), responsiveDevice === 'mobile' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Mobile Columns', 'wbd-team-member'),
            value: columnsMobile,
            onChange: v => setAttributes({
              columnsMobile: v
            }),
            min: 1,
            max: 4,
            __nextHasNoMarginBottom: true
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Gap (px)', 'wbd-team-member'),
          value: gap,
          onChange: v => setAttributes({
            gap: v
          }),
          min: 0,
          max: 60,
          __nextHasNoMarginBottom: true
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Filter & Categories', 'wbd-team-member'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Filter Buttons', 'wbd-team-member'),
          checked: showFilter,
          onChange: v => setAttributes({
            showFilter: v
          }),
          help: showFilter ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Filter buttons are shown. Assign categories to members below.', 'wbd-team-member') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enable to show category filter buttons above the team grid.', 'wbd-team-member'),
          __nextHasNoMarginBottom: true
        }), showFilter && categories.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "wbd-tm-categories-preview",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "wbd-tm-categories-preview__label",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Detected categories:', 'wbd-team-member')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "wbd-tm-categories-preview__tags",
            children: categories.map(cat => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "wbd-tm-categories-preview__tag",
              children: cat
            }, cat))
          })]
        }), showFilter && categories.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          style: {
            fontSize: '12px',
            color: '#94a3b8',
            fontStyle: 'italic'
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('No categories found. Add a category to each team member in the Team Members panel below.', 'wbd-team-member')
        }), showFilter && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button Style', 'wbd-team-member'),
          initialOpen: false,
          className: "wbd-tm-inner-panel",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Font Size (px)', 'wbd-team-member'),
            value: filterFontSize,
            onChange: v => setAttributes({
              filterFontSize: v
            }),
            min: 10,
            max: 24,
            __nextHasNoMarginBottom: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border Radius (px)', 'wbd-team-member'),
            value: filterBorderRadius,
            onChange: v => setAttributes({
              filterBorderRadius: v
            }),
            min: 0,
            max: 50,
            __nextHasNoMarginBottom: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ColorControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text Color', 'wbd-team-member'),
            value: filterTextColor,
            onChange: v => setAttributes({
              filterTextColor: v
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ColorControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Background', 'wbd-team-member'),
            value: filterBgColor,
            onChange: v => setAttributes({
              filterBgColor: v
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ColorControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border Color', 'wbd-team-member'),
            value: filterBorderColor,
            onChange: v => setAttributes({
              filterBorderColor: v
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ColorControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hover Background', 'wbd-team-member'),
            value: filterHoverBgColor,
            onChange: v => setAttributes({
              filterHoverBgColor: v
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ColorControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hover Text Color', 'wbd-team-member'),
            value: filterHoverTextColor,
            onChange: v => setAttributes({
              filterHoverTextColor: v
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ColorControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Active Background', 'wbd-team-member'),
            value: filterActiveBgColor,
            onChange: v => setAttributes({
              filterActiveBgColor: v
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ColorControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Active Text Color', 'wbd-team-member'),
            value: filterActiveTextColor,
            onChange: v => setAttributes({
              filterActiveTextColor: v
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Card Settings', 'wbd-team-member'),
        initialOpen: false,
        children: [isSlider && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Gap (px)', 'wbd-team-member'),
          value: gap,
          onChange: v => setAttributes({
            gap: v
          }),
          min: 0,
          max: 60,
          __nextHasNoMarginBottom: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image Shape', 'wbd-team-member'),
          value: imageShape,
          options: IMAGE_SHAPES,
          onChange: v => setAttributes({
            imageShape: v
          }),
          __nextHasNoMarginBottom: true
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Colors', 'wbd-team-member'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ColorControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text', 'wbd-team-member'),
          value: textColor,
          onChange: v => setAttributes({
            textColor: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ColorControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Background', 'wbd-team-member'),
          value: backgroundColor,
          onChange: v => setAttributes({
            backgroundColor: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ColorControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Accent', 'wbd-team-member'),
          value: accentColor,
          onChange: v => setAttributes({
            accentColor: v
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ColorControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hover', 'wbd-team-member'),
          value: hoverColor,
          onChange: v => setAttributes({
            hoverColor: v
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Visibility', 'wbd-team-member'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Bio', 'wbd-team-member'),
          checked: showBio,
          onChange: v => setAttributes({
            showBio: v
          }),
          __nextHasNoMarginBottom: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Social Links', 'wbd-team-member'),
          checked: showSocial,
          onChange: v => setAttributes({
            showSocial: v
          }),
          __nextHasNoMarginBottom: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Contact Buttons', 'wbd-team-member'),
          checked: showContact,
          onChange: v => setAttributes({
            showContact: v
          }),
          __nextHasNoMarginBottom: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enable Animations', 'wbd-team-member'),
          checked: enableAnimation,
          onChange: v => setAttributes({
            enableAnimation: v
          }),
          __nextHasNoMarginBottom: true
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Team Members', 'wbd-team-member'),
        initialOpen: true,
        children: [members.map((member, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(MemberEditor, {
          member: member,
          index: index,
          onChange: updateMember,
          onRemove: removeMember
        }, member.id)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "primary",
          onClick: addMember,
          className: "wbd-tm-add-member-btn",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('+ Add Team Member', 'wbd-team-member')
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      ...blockProps,
      children: members.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "wbd-tm-empty",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "wbd-tm-empty__icon",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("svg", {
            viewBox: "0 0 24 24",
            width: "48",
            height: "48",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("circle", {
              cx: "12",
              cy: "8",
              r: "4"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
              d: "M20 21a8 8 0 10-16 0"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
              d: "M16 3.13a4 4 0 010 7.75M21 21v-1a4 4 0 00-3-3.87"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          className: "wbd-tm-empty__text",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add team members using the sidebar panel to get started.', 'wbd-team-member')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "primary",
          onClick: addMember,
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('+ Add First Member', 'wbd-team-member')
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [showFilter && categories.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "wbd-tm-filter",
          style: {
            '--wbd-filter-font-size': (filterFontSize || 13) + 'px',
            '--wbd-filter-text-color': filterTextColor || '#475569',
            '--wbd-filter-bg-color': filterBgColor || '#ffffff',
            '--wbd-filter-border-color': filterBorderColor || '#e2e8f0',
            '--wbd-filter-border-radius': (filterBorderRadius !== undefined ? filterBorderRadius : 24) + 'px',
            '--wbd-filter-hover-bg': filterHoverBgColor || '#f1f5f9',
            '--wbd-filter-hover-text': filterHoverTextColor || '#3b82f6',
            '--wbd-filter-active-bg': filterActiveBgColor || '#3b82f6',
            '--wbd-filter-active-text': filterActiveTextColor || '#ffffff'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
            className: `wbd-tm-filter__btn${activeFilter === 'all' ? ' wbd-tm-filter__btn--active' : ''}`,
            onClick: () => setActiveFilter('all'),
            type: "button",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('All', 'wbd-team-member')
          }), categories.map(cat => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
            className: `wbd-tm-filter__btn${activeFilter === cat ? ' wbd-tm-filter__btn--active' : ''}`,
            onClick: () => setActiveFilter(cat),
            type: "button",
            children: cat
          }, cat))]
        }), isSlider ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "wbd-tm-slider-editor-preview",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "wbd-tm-slider-editor-preview__info",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "dashicons dashicons-slides"
            }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Slider Preview', 'wbd-team-member'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
              className: "wbd-tm-slider-editor-preview__count",
              children: [filteredMembers.length, " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('slides', 'wbd-team-member'), ' / ', slidesToShow, " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('visible', 'wbd-team-member'), autoplay && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                className: "wbd-tm-slider-editor-preview__autoplay",
                children: [' \u00b7 ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  className: "dashicons dashicons-controls-play"
                }), autoplaySpeed / 1000 + 's']
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "wbd-tm-grid",
            children: filteredMembers.map(member => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(MemberCard, {
              member: member,
              layout: layout,
              imageShape: imageShape,
              textColor: textColor,
              backgroundColor: backgroundColor,
              accentColor: accentColor,
              showBio: showBio,
              showSocial: showSocial,
              showContact: showContact
            }, member.id))
          })]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "wbd-tm-grid",
          children: filteredMembers.map(member => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(MemberCard, {
            member: member,
            layout: layout,
            imageShape: imageShape,
            textColor: textColor,
            backgroundColor: backgroundColor,
            accentColor: accentColor,
            showBio: showBio,
            showSocial: showSocial,
            showContact: showContact
          }, member.id))
        })]
      })
    })]
  });
}

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block.json");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ },

/***/ "./src/save.js"
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function save({
  attributes
}) {
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
    filterActiveTextColor
  } = attributes;
  if (!members || members.length === 0) {
    return null;
  }
  const isSlider = displayMode === 'slider';
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
    className: `wbd-tm wbd-tm--${layout} wbd-tm--mode-${displayMode}`,
    style: {
      '--wbd-tm-columns': isSlider ? slidesToShow : columns,
      '--wbd-tm-columns-tablet': columnsTablet || 2,
      '--wbd-tm-columns-mobile': columnsMobile || 1,
      '--wbd-tm-gap': gap + 'px',
      '--wbd-tm-text': textColor,
      '--wbd-tm-bg': backgroundColor,
      '--wbd-tm-accent': accentColor,
      '--wbd-tm-hover': hoverColor
    },
    'data-animation': enableAnimation ? 'fade-stagger' : 'none',
    'data-columns-tablet': columnsTablet || 2,
    'data-columns-mobile': columnsMobile || 1,
    'data-display-mode': displayMode,
    'data-layout': layout,
    'data-slides-to-show': isSlider ? slidesToShow : undefined,
    'data-autoplay': isSlider && autoplay ? 'true' : undefined,
    'data-autoplay-speed': isSlider && autoplay ? autoplaySpeed : undefined,
    'data-show-filter': showFilter ? 'true' : undefined
  });
  const imageShapeClass = 'wbd-tm-image--' + imageShape;

  /* Collect unique categories */
  const categories = [];
  members.forEach(function (m) {
    if (m.category && m.category.trim() && categories.indexOf(m.category.trim()) === -1) {
      categories.push(m.category.trim());
    }
  });
  const renderCard = (member, index) => {
    const hasSocials = member.facebook || member.linkedin || member.twitter || member.website;
    const hasContact = member.email || member.phone || member.whatsapp;
    const socialBlank = member.socialTargetBlank !== false;
    const contactBlank = member.contactTargetBlank !== false;
    const socialTarget = socialBlank ? '_blank' : '_self';
    const socialRel = socialBlank ? 'noopener noreferrer' : undefined;
    const contactTarget = contactBlank ? '_blank' : '_self';
    const contactRel = contactBlank ? 'noopener noreferrer' : undefined;
    const initials = member.name ? member.name.split(' ').map(w => w[0]).join('').toUpperCase().substring(0, 2) : 'TM';
    const isOverlayLayout = layout === 'creative' || layout === 'image-overlay';
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: `wbd-tm-card wbd-tm-card--${layout}${member.isHighlighted ? ' wbd-tm-card--highlighted' : ''}`,
      "data-index": index,
      "data-category": member.category ? member.category.trim() : '',
      children: [member.isHighlighted && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        className: "wbd-tm-badge",
        children: member.badgeText || 'Featured'
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: `wbd-tm-image-wrap ${imageShapeClass}`,
        children: [member.imageUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
          src: member.imageUrl,
          alt: member.name || '',
          className: "wbd-tm-image",
          loading: "lazy"
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "wbd-tm-placeholder-avatar",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            children: initials
          })
        }), isOverlayLayout && showSocial && hasSocials && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "wbd-tm-social-overlay",
          children: [member.facebook && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: member.facebook,
            className: "wbd-tm-social-link",
            target: socialTarget,
            rel: socialRel,
            "aria-label": "Facebook",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
              viewBox: "0 0 24 24",
              width: "18",
              height: "18",
              fill: "currentColor",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              })
            })
          }), member.twitter && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: member.twitter,
            className: "wbd-tm-social-link",
            target: socialTarget,
            rel: socialRel,
            "aria-label": "Twitter",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
              viewBox: "0 0 24 24",
              width: "18",
              height: "18",
              fill: "currentColor",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
              })
            })
          }), member.linkedin && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: member.linkedin,
            className: "wbd-tm-social-link",
            target: socialTarget,
            rel: socialRel,
            "aria-label": "LinkedIn",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
              viewBox: "0 0 24 24",
              width: "18",
              height: "18",
              fill: "currentColor",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              })
            })
          }), member.website && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: member.website,
            className: "wbd-tm-social-link",
            target: socialTarget,
            rel: socialRel,
            "aria-label": "Website",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
              viewBox: "0 0 24 24",
              width: "18",
              height: "18",
              fill: "currentColor",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
              })
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "wbd-tm-content",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
          className: "wbd-tm-name",
          children: member.name
        }), member.designation && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          className: "wbd-tm-designation",
          children: member.designation
        }), showBio && member.bio && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          className: "wbd-tm-bio",
          children: member.bio
        }), !isOverlayLayout && showSocial && hasSocials && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "wbd-tm-socials",
          children: [member.facebook && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: member.facebook,
            className: "wbd-tm-social-link",
            target: socialTarget,
            rel: socialRel,
            "aria-label": "Facebook",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
              viewBox: "0 0 24 24",
              width: "16",
              height: "16",
              fill: "currentColor",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              })
            })
          }), member.twitter && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: member.twitter,
            className: "wbd-tm-social-link",
            target: socialTarget,
            rel: socialRel,
            "aria-label": "Twitter",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
              viewBox: "0 0 24 24",
              width: "16",
              height: "16",
              fill: "currentColor",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
              })
            })
          }), member.linkedin && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: member.linkedin,
            className: "wbd-tm-social-link",
            target: socialTarget,
            rel: socialRel,
            "aria-label": "LinkedIn",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
              viewBox: "0 0 24 24",
              width: "16",
              height: "16",
              fill: "currentColor",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              })
            })
          }), member.website && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: member.website,
            className: "wbd-tm-social-link",
            target: socialTarget,
            rel: socialRel,
            "aria-label": "Website",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
              viewBox: "0 0 24 24",
              width: "16",
              height: "16",
              fill: "currentColor",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
              })
            })
          })]
        }), showContact && hasContact && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "wbd-tm-contact",
          children: [member.email && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
            href: `mailto:${member.email}`,
            className: "wbd-tm-cta wbd-tm-cta--email",
            target: contactTarget,
            rel: contactRel,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
              viewBox: "0 0 24 24",
              width: "14",
              height: "14",
              fill: "currentColor",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
              })
            }), "Email"]
          }), member.phone && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
            href: `tel:${member.phone}`,
            className: "wbd-tm-cta wbd-tm-cta--phone",
            target: contactTarget,
            rel: contactRel,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
              viewBox: "0 0 24 24",
              width: "14",
              height: "14",
              fill: "currentColor",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                d: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
              })
            }), "Call"]
          }), member.whatsapp && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
            href: `https://wa.me/${member.whatsapp.replace(/[^0-9]/g, '')}`,
            className: "wbd-tm-cta wbd-tm-cta--whatsapp",
            target: contactTarget,
            rel: contactRel,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
              viewBox: "0 0 24 24",
              width: "14",
              height: "14",
              fill: "currentColor",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
              })
            }), "WhatsApp"]
          })]
        })]
      })]
    }, member.id);
  };
  const filterStyle = {
    '--wbd-filter-font-size': (filterFontSize || 13) + 'px',
    '--wbd-filter-text-color': filterTextColor || '#475569',
    '--wbd-filter-bg-color': filterBgColor || '#ffffff',
    '--wbd-filter-border-color': filterBorderColor || '#e2e8f0',
    '--wbd-filter-border-radius': (filterBorderRadius !== undefined ? filterBorderRadius : 24) + 'px',
    '--wbd-filter-hover-bg': filterHoverBgColor || '#f1f5f9',
    '--wbd-filter-hover-text': filterHoverTextColor || '#3b82f6',
    '--wbd-filter-active-bg': filterActiveBgColor || '#3b82f6',
    '--wbd-filter-active-text': filterActiveTextColor || '#ffffff'
  };
  const filterMarkup = showFilter && categories.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "wbd-tm-filter",
    style: filterStyle,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
      className: "wbd-tm-filter__btn wbd-tm-filter__btn--active",
      "data-filter": "all",
      children: "All"
    }), categories.map(cat => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
      className: "wbd-tm-filter__btn",
      "data-filter": cat,
      children: cat
    }, cat))]
  }) : null;
  if (isSlider) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      ...blockProps,
      children: [filterMarkup, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "wbd-tm-slider",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "wbd-tm-slider__track",
          children: members.map((member, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "wbd-tm-slider__slide",
            "data-category": member.category ? member.category.trim() : '',
            children: renderCard(member, index)
          }, member.id))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          className: "wbd-tm-slider__arrow wbd-tm-slider__arrow--prev",
          "aria-label": "Previous slide",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
            viewBox: "0 0 24 24",
            width: "24",
            height: "24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline", {
              points: "15 18 9 12 15 6"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          className: "wbd-tm-slider__arrow wbd-tm-slider__arrow--next",
          "aria-label": "Next slide",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
            viewBox: "0 0 24 24",
            width: "24",
            height: "24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline", {
              points: "9 18 15 12 9 6"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "wbd-tm-slider__dots"
        })]
      })]
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    ...blockProps,
    children: [filterMarkup, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "wbd-tm-grid",
      children: members.map((member, index) => renderCard(member, index))
    })]
  });
}

/***/ },

/***/ "./src/editor.scss"
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/style.scss"
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ },

/***/ "@wordpress/block-editor"
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
(module) {

module.exports = window["wp"]["blockEditor"];

/***/ },

/***/ "@wordpress/blocks"
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
(module) {

module.exports = window["wp"]["blocks"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["components"];

/***/ },

/***/ "@wordpress/element"
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["element"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ },

/***/ "./src/block.json"
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wbd/team-member","version":"1.0.0","title":"WBD Team Member","category":"design","icon":"groups","description":"Showcase your team with beautiful layouts, social links, and business CTA buttons.","example":{"attributes":{"members":[{"id":"example-1","name":"Jane Cooper","designation":"CEO & Founder","bio":"Visionary leader with 15 years of experience in technology and innovation.","imageUrl":"","facebook":"https://facebook.com","linkedin":"https://linkedin.com","twitter":"https://twitter.com","website":"https://example.com","email":"jane@example.com","phone":"+1234567890","whatsapp":"+1234567890","isHighlighted":true,"badgeText":"Featured","category":"Management"},{"id":"example-2","name":"Robert Fox","designation":"Lead Developer","bio":"Full-stack developer passionate about clean code and scalable architecture.","imageUrl":"","facebook":"","linkedin":"https://linkedin.com","twitter":"","website":"","email":"robert@example.com","phone":"","whatsapp":"","isHighlighted":false,"category":"Developer"}],"layout":"corporate","columns":2}},"supports":{"html":false,"align":["wide","full"],"spacing":{"margin":true,"padding":true}},"attributes":{"members":{"type":"array","default":[{"id":"default-1","name":"Jane Cooper","designation":"CEO & Founder","bio":"Visionary leader with 15 years of experience in technology and innovation.","imageUrl":"","imageId":0,"facebook":"https://facebook.com","linkedin":"https://linkedin.com","twitter":"https://twitter.com","website":"https://example.com","email":"jane@example.com","phone":"+1234567890","whatsapp":"","isHighlighted":true,"badgeText":"Featured","socialTargetBlank":true,"contactTargetBlank":true,"category":"Management"},{"id":"default-2","name":"Robert Fox","designation":"Lead Developer","bio":"Full-stack developer passionate about clean code and scalable architecture.","imageUrl":"","imageId":0,"facebook":"","linkedin":"https://linkedin.com","twitter":"https://twitter.com","website":"","email":"robert@example.com","phone":"","whatsapp":"","isHighlighted":false,"socialTargetBlank":true,"contactTargetBlank":true,"category":"Developer"},{"id":"default-3","name":"Sarah Johnson","designation":"Design Director","bio":"Creative designer specializing in user experience and brand identity.","imageUrl":"","imageId":0,"facebook":"https://facebook.com","linkedin":"https://linkedin.com","twitter":"","website":"https://example.com","email":"sarah@example.com","phone":"","whatsapp":"+1234567890","isHighlighted":false,"socialTargetBlank":true,"contactTargetBlank":true,"category":"Designer"}]},"displayMode":{"type":"string","default":"card"},"layout":{"type":"string","default":"corporate"},"columns":{"type":"number","default":3},"columnsTablet":{"type":"number","default":2},"columnsMobile":{"type":"number","default":1},"gap":{"type":"number","default":24},"imageShape":{"type":"string","default":"circle"},"textColor":{"type":"string","default":"#1e293b"},"backgroundColor":{"type":"string","default":"#ffffff"},"accentColor":{"type":"string","default":"#3b82f6"},"hoverColor":{"type":"string","default":"#2563eb"},"showBio":{"type":"boolean","default":true},"showSocial":{"type":"boolean","default":true},"showContact":{"type":"boolean","default":true},"enableAnimation":{"type":"boolean","default":true},"slidesToShow":{"type":"number","default":3},"autoplay":{"type":"boolean","default":false},"autoplaySpeed":{"type":"number","default":3000},"showFilter":{"type":"boolean","default":false},"filterFontSize":{"type":"number","default":13},"filterTextColor":{"type":"string","default":"#475569"},"filterBgColor":{"type":"string","default":"#ffffff"},"filterBorderColor":{"type":"string","default":"#e2e8f0"},"filterBorderRadius":{"type":"number","default":24},"filterHoverBgColor":{"type":"string","default":"#f1f5f9"},"filterHoverTextColor":{"type":"string","default":"#3b82f6"},"filterActiveBgColor":{"type":"string","default":"#3b82f6"},"filterActiveTextColor":{"type":"string","default":"#ffffff"}},"textdomain":"wbd-team-member","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkwbd_team_member"] = globalThis["webpackChunkwbd_team_member"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map