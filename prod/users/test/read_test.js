const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of the database', () => {
  let joe;
  beforeEach((done) => {
    joe = new User({ name: 'joe' });
    joe.save().then(() => {
      done();
    });
  });
  it('find all users with name joe', () => {
    User.find({ name: 'joe' }).then((users) => {
      assert(users[0]._id === joe._id);
      done();
    });
  });
});
