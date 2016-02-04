# NanoPoint
[![MIT license](https://img.shields.io/badge/license-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

Ultra-light and highly customizable slider for web presentations. Designed for modern browsers only.

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
    text-align: center; line-height: 100vh;
}
```

And to cancel the inheriting effect, we add:

```css
.slide > * {
    /* … */
    text-align: left; line-height: 1.5;
}
```

There are other default style applying to `.slide-wrap` making their transition different from the `.slide` container, improving the effect of the whole movement. Anyway, your slides doesn't need `.slide-wrap` to work, so feel free to design your own container.

Besides those properties that were worth noting, conflicts may not happen. You can easily customize what's inside the slides.

**So basically it's just HTML & CSS, do what you want.**


## 3. Working offline
Simply download `nanopoin.css` and `nanopoint.js`, and make sure the URLs in your html file are pointing to them. Make sure your web-fonts are installed in your computer.
