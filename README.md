
path-steps
==========
Proxy for your `path` module, with some functions enhanced to
accept arrays as paths.

Usage
-----
(`./doc/usage.sed test/usage.js`)

```javascript
var pathSteps = require('path-steps'),
  pkgDefAbs = require.resolve('path-steps/package.json'), // …
  testName = pathLib.basename(module.filename);

pathSteps.join(['a', 'b'], [], 'c', '', ['d']);   // -> "a/b/c/d"
pathSteps.fromCwd(testName);                 // -> /…"/path-steps/test/usage.js"
pathSteps.fromCwd(['..', 'package.json']);   // -> /…"/path-steps/package.json"
pathSteps.fromCwd('', pkgDefAbs);            // -> "../package.json"
pathSteps.fromCwd('', module.filename);      // -> "usage.js"
pathSteps.resolve(testName);                 // -> /…"/path-steps/test/usage.js"
pathSteps.resolve(['..', 'package.json']);   // -> /…"/path-steps/package.json"
```



License
-------
ISC
