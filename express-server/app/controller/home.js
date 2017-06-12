var moment = require('moment');
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database(':memory:')
const DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss'
db.serialize(function ()
{
	db.run('CREATE TABLE user_data (name VARCHAR(25),status VARCHAR(25),timestamp DATETIME)')
	var stmt = db.prepare('INSERT INTO user_data VALUES (?,?,?)')

	var day = moment("2017-01-01");

	for (var i = 0; i < 500; i++)
	{
		console.log(moment(day).format(DATE_FORMAT));
		stmt.run("John"+day,'active',moment(day).format(DATE_FORMAT));
		day = moment(day).add(1, 'days');
	}
	stmt.finalize()

});
exports.home = function (req, res)
{
	data = [];
	console.log("inside home controller");
	db.serialize(function ()
	{
		db.all("SELECT rowid AS id, name,status,timestamp FROM user_data", function (err, rows)
		{
			rows.forEach(function (row)
			{
				//console.log(row.id + ': ' + row.status)
				data.push({"id": row.id, "status": row.status,name:row.name,timestamp:row.timestamp})
			});
			res.send(data);
		})
		// db.each('SELECT rowid AS id, info FROM lorem', function (err, row) {
		//     console.log(row.id + ': ' + row.info)
		//     data.push({"id":row.id,"info":row.info})
		// });

	});
	//db.close();
};

exports.dataCheck = function (req, res)
{
	var data = [];
	console.log(req.params.date);
	var day = moment(req.params.date);
	db.serialize(function ()
	{
		db.all("SELECT rowid AS id, name,status,timestamp FROM user_data WHERE timestamp = '"+moment(day).format(DATE_FORMAT)+"'", function (err, rows)
		{
			console.log(err);
			rows.forEach(function (row)
			{
				//console.log(row.id + ': ' + row.status)
				data.push({"id": row.id, "status": row.status,name:row.name,timestamp:row.timestamp})
			});
			res.send(data);
		});
	});
}