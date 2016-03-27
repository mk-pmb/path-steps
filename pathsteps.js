/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var EX = module.exports, prx = { /* proxy funcs */ },
  pathLib = require('path');


(function proxyAllOrigFuncs() {
  Object.keys(pathLib).forEach(function (key) {
    if ((typeof pathLib[key]) === 'function') {
      prx[key] = EX[key] = pathLib[key].bind(pathLib);
    }
  });
}());


EX.join = function () {
  var steps = [];
  Array.prototype.slice.call(arguments).forEach(function (step) {
    steps = steps.concat(step);
  });
  return prx.join.apply(null, steps);
};


EX.normalize = function normalizePathSteps(steps) {
  return prx.normalize(EX.join(steps));
};


EX.fromCwd = function pathInCwd(subpath, dest) {
  subpath = EX.normalize([process.cwd()].concat(subpath));
  if (!dest) { return subpath; }
  dest = EX.normalize(dest);
  return prx.relative(subpath, dest);
};


EX.resolve = function resolvePathSteps(steps) {
  return prx.resolve(EX.join(steps));
};



















/*scroll*/
