# radians
In JavaScript, methods like `Math.sin`, `Math.atan2`, and `CanvasRenderingContext2D.arc` use [radians](https://en.wikipedia.org/wiki/Radian) instead of degrees. It may be helpful to have functions to convert between the two to reduce instances of `Math.PI / 180` in your code, as they may appear misleading.

The API for this module is based off of [Elm](http://elm-lang.org)'s [built-in angle conversion functions](http://package.elm-lang.org/packages/elm-lang/core/5.1.1/Basics#angle-conversions).

## usage
[![NPM](https://nodei.co/npm/radians.png?mini)](https://www.npmjs.com/package/radians)
```js
> const { degrees, radians } = require('radians')
> var angle = 45
> radians(degrees(angle)) === angle
true
```

Keep in mind that `radians(degrees(angle))` won't always be exactly equal to `angle` because of float precision errors.

### `degrees(degrees)`
Converts `degrees` into its corresponding value in radians.
```js
> degrees(30)
0.5235987755982988
```

### `radians(radians)`
Converts `radians` into its corresponding value in degrees.
```js
> radians(0.5235987755982988)
29.999999999999996

> radians(0.5235987755982989)
30.000000000000004
```

## license
[MIT](https://opensource.org/licenses/MIT) © [Brandon Semilla](https://git.io/semibran)
