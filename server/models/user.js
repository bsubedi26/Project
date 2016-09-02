import db from '../db/bookshelf';

var User_table = db.Model.extend({
  tableName: 'users'
});

module.exports = User_table;

