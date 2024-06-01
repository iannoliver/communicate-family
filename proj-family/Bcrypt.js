const bcrypt = require('bcrypt');
const saltRounds = 10;

bcrypt.hash(password, saltRounds, function(err, hash) {
  // Save the hashed password in the database
});
