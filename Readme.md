metalsmith-autoprefixer
===============


An [Autoprefixer](https://github.com/ai/autoprefixer) plugin for Metalsmith.

## Installation

```sh
npm install --save metalsmith-autoprefixer
```

## Getting Started

If you haven't checked out [Metalsmith](http://metalsmith.io/) before, head over to their website and check out the
documentation.

## CLI Usage

If you are using the command-line version of Metalsmith, you can install via npm, and then add the
`metalsmith-autoprefixer` key to your `metalsmith.json` file:

```json
{
  "plugins": {
    "metalsmith-autoprefixer": {}
  }
}
```

## JavaScript API

If you are using the JS Api for Metalsmith, then you can require the module and add it to your
`.use()` directives:

```js
var autoprefixer = require('metalsmith-autoprefixer');

metalsmith.use(autoprefixer());
```

## Options

None yet
