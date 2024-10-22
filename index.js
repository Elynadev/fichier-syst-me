let fs = require('fs');
fs.appendFile('esther.html', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('lady !');
  });
  fs.appendFile('reggiga.html', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('lady red !');
  });

  fs.writeFile('esther.html', 'This is my text', function (err) {
    if (err) throw err;
    console.log('Replaced!');
  });

  fs.open('reggiga.html', 'w', function (err, file) {
    if (err) throw err;
    console.log('OPEN!');
  });

  fs.unlink('reggiga.html', function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });

  fs.rename('esther.html', 'elyna.html', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
  });