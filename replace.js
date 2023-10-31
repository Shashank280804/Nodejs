var fs = require('fs');

fs.writeFile('a.txt', 'This is my text', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});