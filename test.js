// to use:
// babel test.js --out-file test-compiled.js
// node test-compiled.js
var Baobab = require('baobab');
var assign = require('object-assign');
const tree = new Baobab({
  data: {
    messages: [
      {from: 'John', text: 'Hey'},
      {from: 'Jack', text: 'Ho'}
    ],
    $fromJohn: {
      cursors: {
        messages: ['data', 'messages'],
      },
      get: function({messages}) {
        return messages.filter(m => m.from === 'John');
      }
    },
    $fromJohnWithLove: {
      cursors: {
        messages: ['data', '$fromJohn'],
      },
      get: function({messages}) {
        return messages.map(m => assign({},m,{text: m.text+', Love John'}));
      }
    }
  }
});
console.log('Print the two facets :');
console.log('$fromJohn: ',tree.select('data', '$fromJohn', 0, 'text').get());
console.log('$fromJohnWithLove: ', tree.select('data', '$fromJohnWithLove', 0, 'text').get());

console.log('update the message[0].text');
tree.select('data', 'messages', 0, 'text').set('Hi there');
console.log('Print the two facets again: ');
console.log('$fromJohn: ',tree.select('data', '$fromJohn', 0, 'text').get());
console.log('$fromJohnWithLove: ', tree.select('data', '$fromJohnWithLove', 0, 'text').get());
