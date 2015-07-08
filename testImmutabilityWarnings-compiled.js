// to use:
// babel testImmutabilityWarnings.js --out-file testImmutabilityWarnings-compiled.js
// node testImmutabilityWarnings-compiled.js
'use strict';

var Baobab = require('baobab');
var assign = require('object-assign');
var tree = new Baobab({
  data: {
    messages: [{ from: 'John', text: 'Hey' }, { from: 'Jack', text: 'Ho' }]
  }
});
var firstMessage = tree.select('data', 'messages', 0).get();
firstMessage.foo = 'bar';
console.log(firstMessage);
firstMessage.text = 'Why hello there!';
console.log(firstMessage);
firstMessage.text += ' there!';
console.log(firstMessage);
