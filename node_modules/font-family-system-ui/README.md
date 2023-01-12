# font-family-system-ui

The upcoming CSS 4 specification promises us a new generic font family,
[`system-ui`](https://drafts.csswg.org/css-fonts-4/#valdef-font-family-system-ui),
representing the default UI font on a given platform. This is a poor man's
(but future-proof) `font-family: system-ui` implementation.

Note that because the `@font-face` rule doesn't give us a syntax for defining
a new font family alias based on a predefined generic family such as `-apple-system`,
implementing this as a polyfill is [possible](https://github.com/jonathantneal/system-font-css)
but would [sacrifice the quality of implementation](https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/), thus a CSS utility class.

##Installation

* [npm](http://npmjs.org/): `npm install font-family-system-ui`
* Download: [zip](https://github.com/agurtovoy/font-family-system-ui/archive/master.zip)

##Usage

HTML:
```html
<p class="u-font-family-system-ui">Sic transit gloria mundi</p>
```

CSS et al.:
```Sass
p {
    .u-font-family-system-ui; /* Less */
    @extend .u-font-family-system-ui; /* Sass */
    composes: .u-font-family-system-ui; /* CSS Modules */
    font-size: 1rem;
}
```

##References

* https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/
* https://www.chromestatus.com/feature/5640395337760768
