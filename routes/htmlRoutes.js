//dependencies
const path = require('path');


module.exports = (app) => {

  // GET /notes returns notes.html
  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  // GET /notes returns index.html
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  })
};