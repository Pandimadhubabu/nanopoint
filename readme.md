# NanoPoint
[![MIT license](https://img.shields.io/badge/license-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

Ultra-light and highly customizable slider for web presentations. Designed for modern browsers only.

<a href="http://noclat.github.io/nanopoint">View demo.</a>

## 1. Usage
You only need a single file to get started: `starter.html`. Download it and open it with your editor.
CSS & JS are loaded from Github so you don't have to worry about having them.

Comments are available to guide you in your first steps.

## 2. Customization
The default style takes care of two things: the slider transitions and centering the text in the screen.
Centering the text involves `.slide` to have a child element `.slide-wrap`. To so so, `.slide` takes those two properties:

```css
.slide {
    /* … */
    text-align: center; /* center children horizontally */
    line-height: 100vh; /* center children vetically */
}
```

And to cancel the inheriting effect, we add:

```css
.slide > * { /* reset text-align & line-height inside children */
    /* … */
    text-align: left; 
    line-height: 1.5;
}
.slide-wrap {
    display: inline-block; /* parent's text-align & line-height properties have effect on it */
    /* … */
}
```

There are other default style applying to `.slide-wrap` making their transition different from the `.slide` container, improving the effect of the whole movement. Anyway, your slides don't need `.slide-wrap` to work, so feel free to design your own container.

Besides those properties that were worth noting, conflicts may not happen. You can easily customize what's inside the slides.

**So basically it's just HTML & CSS, do what you want.**

## 3. Working offline
Simply download `nanopoint.css` and `nanopoint.js`, and make sure the URLs in your html file are pointing to them. Make sure your web-fonts are installed on your computer.
