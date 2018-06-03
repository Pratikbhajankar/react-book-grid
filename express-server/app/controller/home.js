var moment = require('moment');
const DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss'
var data = require('../data/book.js');
exports.home = function (req, res)
{
	res.send(data);
};