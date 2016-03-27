
path-steps
==========
Proxy for your `path` module, with some functions enhanced to
accept arrays as paths.

Usage
-----
In the comments, `/…` in front of the string denotes that the string
returned actually starts with your `node_modules` directory's path.

```javascript
var paSt = require('path-steps'), modFn = module.filename,
  pkgDefAbs = require.resolve('path-steps/package.json'), // …
  testName = pathLib.basename(modFn);

paSt.join(['a', 'b'], [], 'c', '', ['d']); // -> "a/b/c/d"
paSt.fromCwd(testName);                    // -> /…"/path-steps/test/usage.js"
paSt.fromCwd(['..', 'package.json']);      // -> /…"/path-steps/package.json"
paSt.fromCwd('', pkgDefAbs);               // -> "../package.json"
paSt.fromCwd('', modFn);                   // -> "usage.js"
paSt.fromCwd(['..', '..'], modFn);         // -> "path-steps/test/usage.js"
paSt.fromCwd(['..', 'doc'], modFn);        // -> "../test/usage.js"
paSt.resolve(testName);                    // -> /…"/path-steps/test/usage.js"
paSt.resolve(['..', 'package.json']);      // -> /…"/path-steps/package.json"
```

(Generated with `./doc/usage.sed test/usage.js` – if you can,
please keep this working in your pull requests and update the readme.)



License
-------
ISC
