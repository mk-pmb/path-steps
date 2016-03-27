#!/bin/sed -nurf
# -*- coding: UTF-8, tab-width: 2 -*-
# ./doc/usage.sed test/usage.js

1s~.*~```javascript~p
$s~.*~```~p
/^\s*testName =/{s~$~\n~;p}

/pathSteps/{
  N
  /^var /s~$~ // …~
  s~^\s+~~
  s~\)\);\n\s*(//)~);                                            \t\1~
  s~^(.{45}) *\t~\1~
  s~^(.{50}) *\t~\1~
  p
}
