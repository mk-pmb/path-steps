/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var EX = exports,
  pathLib = require('path'),
  assert = require('assert');


EX.nodeModulesDir = pathLib.normalize(pathLib.join(module.filename,
  '..', '..', '..'));


EX.hrPath = function humanReadablePath(p) {
  var preEllip = '';
  if ((typeof p) === 'string') {
    if (p.substr(0, EX.nodeModulesDir.length) === EX.nodeModulesDir) {
      p = p.substr(EX.nodeModulesDir.length);
      preEllip = '/…';
    }
  }
  return preEllip + JSON.stringify(p);
};


EX.veq = function veq(descr, apple, orange) {
  console.log(descr + ': ' + EX.hrPath(apple));
  if (apple !== orange) {
    console.log(descr.substr(1).replace(/\S/g, ' '
      ) + '!= ' + EX.hrPath(orange));
  }
  assert.equal(apple, orange);
};


EX.ok = function (mod, msg) {
  if (((typeof mod) === 'string') && msg) {
    msg = mod;
    mod = '??';
  }
  if (mod && mod.filename) {
    mod = pathLib.basename(String(mod.filename), '.js');
  }
  console.log('+OK all ' + mod + ' tests passed.');
};
















/*scroll*/