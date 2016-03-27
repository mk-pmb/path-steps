/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var pathSteps = require('path-steps'),
  pkgDefAbs = require.resolve('path-steps/package.json'),
  pathLib = require('path'),
  D = require('./lib_demo.js'),
  testDir = pathLib.dirname(module.filename),
  testName = pathLib.basename(module.filename);

process.chdir(testDir);

D.veq('join([a b] [] c "" [d])', pathLib.join('a', 'b', 'c', '', 'd'),
  pathSteps.join(['a', 'b'], [], 'c', '', ['d']));
  // -> "a/b/c/d"

D.veq('fromCwd(sub)', module.filename,
  pathSteps.fromCwd(testName));
  // -> /…"/path-steps/test/usage.js"
D.veq('fromCwd(../sub)', pkgDefAbs,
  pathSteps.fromCwd(['..', 'package.json']));
  // -> /…"/path-steps/package.json"
D.veq('fromCwd("", parentAbs)', pathLib.join('..', 'package.json'),
  pathSteps.fromCwd('', pkgDefAbs));
  // -> "../package.json"
D.veq('fromCwd("", selfAbs)', testName,
  pathSteps.fromCwd('', module.filename));
  // -> "usage.js"

D.veq('resolve(selfRel)', module.filename,
  pathSteps.resolve(testName));
  // -> /…"/path-steps/test/usage.js"
D.veq('resolve([.. sub])', pkgDefAbs,
  pathSteps.resolve(['..', 'package.json']));
  // -> /…"/path-steps/package.json"

D.ok(module);
