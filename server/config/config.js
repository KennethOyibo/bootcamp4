//This file holds any configuration variables we may need 
//'config.js' is typically ignored by git to protect sensitive information, such as your database's username and password

module.exports = {
  db: {
    uri: 'mongodb://KennethOyibo:ken1234@ds125481.mlab.com:25481/kenneth_database', //place the URI of your mongo database here.
  }, 
  port: (8080 || process.env.PORT)
};
