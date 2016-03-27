/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var paSt = require('path-steps'), modFn = module.filename,
  pkgDefAbs = require.resolve('path-steps/package.json'),
  pathLib = require('path'),
  D = require('./lib_demo.js'),
  testDir = pathLib.dirname(modFn),
  testName = pathLib.basename(modFn);

process.chdir(testDir);

D.veq('join([a b] [] c "" [d])', pathLib.join('a', 'b', 'c', '', 'd'),
  paSt.join(['a', 'b'], [], 'c', '', ['d']));
  // -> "a/b/c/d"

D.veq('fromCwd(sub)', modFn,
  paSt.fromCwd(testName));
  // -> /…"/path-steps/test/usage.js"
D.veq('fromCwd(../sub)', pkgDefAbs,
  paSt.fromCwd(['..', 'package.json']));
  // -> /…"/path-steps/package.json"
D.veq('fromCwd("", parentAbs)', pathLib.join('..', 'package.json'),
  paSt.fromCwd('', pkgDefAbs));
  // -> "../package.json"
D.veq('fromCwd("", selfAbs)', testName,
  paSt.fromCwd('', modFn));
  // -> "usage.js"
D.veq('fromCwd(../.., selfAbs)', pathLib.join('path-steps', 'test', testName),
  paSt.fromCwd(['..', '..'], modFn));
  // -> "path-steps/test/usage.js"
D.veq('fromCwd(../doc, selfAbs)', pathLib.join('..', 'test', testName),
  paSt.fromCwd(['..', 'doc'], modFn));
  // -> "../test/usage.js"

D.veq('resolve(selfRel)', modFn,
  paSt.resolve(testName));
  // -> /…"/path-steps/test/usage.js"
D.veq('resolve([.. sub])', pkgDefAbs,
  paSt.resolve(['..', 'package.json']));
  // -> /…"/path-steps/package.json"

D.ok(module);
