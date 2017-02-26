var configValues = require('./config');

module.exports = {
    getDbConnectionString: function() {
        return 'mongodb://'+ configValues.uname + ':' + configValues.pwd + '@ds131878.mlab.com:31878/port-mph';
    }
}