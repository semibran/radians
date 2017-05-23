# radians
> Convert between degrees and radians

In JavaScript, methods like `Math.sin`, `Math.atan2`, and `CanvasRenderingContext2D.arc` use radians instead of degrees. It may be helpful to have functions to convert between the two to reduce instances of `Math.PI / 180` in your code, as they may appear misleading.

## usage
```js
const { degrees, radians } = require('radians')

var angle = 45
radians(degrees(angle)) === angle
```

Keep in mind that `radians(degrees(angle))` won't always be exactly equal to `angle` because of float precision errors.

### `degrees`
Converts `degrees` into its corresponding value in radians.
```js
> degrees(30)
0.5235987755982988
```

### `radians`
Converts `radians` into its corresponding value in degrees.
```js
> radians(0.5235987755982988)
29.999999999999996

> radians(0.5235987755982989)
30.000000000000004
```

## install
```sh
npm install radians
```

## license
MIT
