#!/bin/sed -nurf
# -*- coding: UTF-8, tab-width: 2 -*-
# ./doc/usage.sed test/usage.js

1s~.*~```javascript~p
$s~.*~```~p
/^\s*testName =/{s~$~\n~;p}

/paSt/{
  N
  /^var /s~$~ // …~
  s~^\s+~~
  s~\)\);\n\s*(//)~);\t \1~
  s~$~\t~   # ensure it's printed soon
}



/\t/{
  s~\s+$~~
  s~\t~                                               &~
  s~^(.{42}) *\t~\1~
  s~^(.{45}) *\t~\1~
  s~^(.{50}) *\t~\1~
  s~^(.{55}) *\t~\1~
  s~^(.{60}) *\t~\1~
  p
}
