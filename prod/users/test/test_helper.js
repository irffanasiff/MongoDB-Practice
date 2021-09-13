const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before((done) => {
  mongoose.connect('mongodb://localhost/users_test');
  mongoose.connection
    .once('open', () => {
      done();
    })
    .on('error', (error) => console.warn('Warning 🤬', error));
});

beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    //reacdy to run the next test!
    done(); //after collection of users is done go a
  });
});
