(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,3];
exports.modules = {

/***/ 2792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LV": () => (/* binding */ pageview),
/* harmony export */   "vt": () => (/* binding */ GA_TRACKING_ID)
/* harmony export */ });
/* unused harmony export event */
const GA_TRACKING_ID = ""; // took out tracking id
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages

const pageview = url => {
  if (false) {}
}; // https://developers.google.com/analytics/devguides/collection/gtagjs/events

const event = ({
  action,
  category,
  label,
  value
}) => {
  if (false) {}
};

/***/ }),

/***/ 4729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/gtag.js
var gtag = __webpack_require__(2792);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: external "react-icons/hi"
const hi_namespaceObject = require("react-icons/hi");
;// CONCATENATED MODULE: external "react-icons/fa"
const fa_namespaceObject = require("react-icons/fa");
// EXTERNAL MODULE: ./components/Navbar/Navbar.module.css
var Navbar_module = __webpack_require__(4453);
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);
;// CONCATENATED MODULE: external "react-icons/fi"
const fi_namespaceObject = require("react-icons/fi");
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Navbar/Navbar-script.js


const links = [{
  id: 1,
  icon: '',
  text: "Projects",
  url: "/project"
}, {
  id: 2,
  icon: '',
  text: "Ranking",
  url: "/ranking"
}, {
  id: 3,
  icon: '',
  text: "Articles",
  url: "/articles"
}, {
  id: 4,
  icon: /*#__PURE__*/jsx_runtime_.jsx(fi_namespaceObject.FiTwitter, {
    size: 20,
    style: {
      marginRight: '.3rem'
    }
  }),
  text: 'Twitter',
  url: 'https://twitter.com/awesome_near'
}, {
  id: 5,
  icon: '',
  text: '+Submit',
  url: '/plusSubmit'
}];
/* harmony default export */ const Navbar_script = (links);
// EXTERNAL MODULE: ./components/Link/index.js
var Link = __webpack_require__(8662);
;// CONCATENATED MODULE: ./public/assets/awesomenear-logo.svg
/* harmony default export */ const awesomenear_logo = ({"src":"/_next/static/media/awesomenear-logo.06d4c225.svg","height":60,"width":380});
;// CONCATENATED MODULE: ./components/Navbar/Navbar.js











const Navbar = () => {
  const {
    0: showLinks,
    1: setShowLinks
  } = (0,external_react_.useState)(false);
  const linksContainerRef = (0,external_react_.useRef)(null);
  const linksRef = (0,external_react_.useRef)(null);

  const handleToggleLinks = () => {
    setShowLinks(!showLinks);
  };

  (0,external_react_.useEffect)(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return /*#__PURE__*/jsx_runtime_.jsx("nav", {
    className: (Navbar_module_default()).navContainer,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Navbar_module_default()).navCenter,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Navbar_module_default()).navHeader,
        children: [/*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
            width: 200,
            height: 50,
            src: awesomenear_logo,
            alt: "Awesome Near logo"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: (Navbar_module_default()).navToggle,
          onClick: handleToggleLinks,
          children: /*#__PURE__*/jsx_runtime_.jsx(hi_namespaceObject.HiMenuAlt2, {
            size: 30
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Navbar_module_default()).linksContainer,
        ref: linksContainerRef,
        children: [/*#__PURE__*/jsx_runtime_.jsx("ul", {
          className: (Navbar_module_default()).links,
          ref: linksRef,
          children: Navbar_script.map(link => {
            const {
              id,
              icon,
              url,
              text
            } = link;
            return /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Link/* default */.Z, {
                href: url,
                children: [icon, text]
              })
            }, id);
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Navbar_module_default()).searchContainer,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (Navbar_module_default()).searchInput,
            children: [/*#__PURE__*/jsx_runtime_.jsx(fa_namespaceObject.FaSearch, {
              size: 18,
              style: {
                margin: "0 5px 0 0"
              },
              color: "#2f2f2f"
            }), /*#__PURE__*/jsx_runtime_.jsx("input", {
              type: "search",
              placeholder: "Search projects or tokens"
            })]
          })
        })]
      })]
    })
  });
};

/* harmony default export */ const Navbar_Navbar = (Navbar);
// EXTERNAL MODULE: ./components/Footer/Footer.module.css
var Footer_module = __webpack_require__(1877);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./components/Footer/Footer-script.js
const footerLinks = [{
  id: 1,
  title: 'Submit a project',
  url: ''
}, {
  id: 2,
  title: 'Twitter',
  url: 'https://twitter.com/awesome_near'
}, {
  id: 3,
  title: 'Email',
  url: 'mailto:hello@awesomenear.com'
}];
/* harmony default export */ const Footer_script = (footerLinks);
;// CONCATENATED MODULE: ./components/Footer/Footer.js







const Footer = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
    className: (Footer_module_default()).footerContainer,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Footer_module_default()).footerContainerDisclaimer,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "DISCLAIMER"
        }), " The information presented herein has been provided by third parties and is made available solely for general information purposes. AwesomeNEAR does not warrant the accuracy of this information. The information should not be construed as professional or financial advice of any kind."]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Footer_module_default()).footerContainerNearMenu,
      children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
        children: Footer_script.map(link => {
          return /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
              href: link.url,
              target: "_blank",
              rel: "noreferrer",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                children: [link.title, "\u2197"]
              })
            })
          }, link.id);
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Footer_module_default()).footerContainerMade,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: ["Made with \u2665 by", " ", /*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
          href: "https://nearfans.com/",
          target: "_blank",
          rel: "noreferrer",
          children: "NEARFANS"
        })]
      })
    })]
  });
};

/* harmony default export */ const Footer_Footer = (Footer);
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function MyApp({
  Component,
  pageProps
}) {
  const router = (0,router_.useRouter)();
  (0,external_react_.useEffect)(() => {
    const handleRouteChange = url => {
      gtag/* pageview */.LV(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Navbar_Navbar, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps)), /*#__PURE__*/jsx_runtime_.jsx(Footer_Footer, {})]
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 1877:
/***/ ((module) => {

// Exports
module.exports = {
	"footerContainer": "Footer_footerContainer__J8Mug",
	"footerContainerDisclaimer": "Footer_footerContainerDisclaimer__vgTdn",
	"footerContainerNearMenu": "Footer_footerContainerNearMenu__RE_Nx",
	"footerContainerMade": "Footer_footerContainerMade__eNoju"
};


/***/ }),

/***/ 514:
/***/ ((module) => {

"use strict";
module.exports = require("next/Link");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 580:
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,675,662], () => (__webpack_exec__(4729)));
module.exports = __webpack_exports__;

})();