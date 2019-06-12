const mysql = require('mysql');
const dbConfig = require('./db');
const sqlMap = require('./sqlMap');

const pool = mysql.createPool({
	host: dbConfig.mysql.host,
	user: dbConfig.mysql.user,
	password: dbConfig.mysql.password,
	database: dbConfig.mysql.database,
	port: dbConfig.mysql.port,
	multipleStatements: true // 多语句查询
});

module.exports = {
	getValue(req, res, next) {
		console.log(req.body);
		var number = req.query.number;
		var name = req.query.name;
		pool.getConnection((err, connection) => {
			var sql = sqlMap.getValue;
			connection.query(sql, [name, name], (err, result) => {
				res.json(result);
				connection.release();
			})
		})
	},
	setValue(req, res, next) {
		console.log(req.body);

		var name = req.body.name,
			sex = req.body.sex,
			age = req.body.age,
			number = req.body.number,
			money = req.body.money,
			type = req.body.type,
			rate = req.body.rate;
		pool.getConnection((err, connection) => {
			var sql = sqlMap.setValue;
			connection.query(sql, [name, sex, age, number, money, type, rate], (err, result) => {
				res.json(result);
				connection.release();
			})
		})
	},
	//一开始展示所有数据
	disPlay(req, res, next) {
		console.log(req.body);
		pool.getConnection((err, connection) => {
			var sql = sqlMap.disPlay;
			connection.query(sql, (err, result) => {
				res.json(result);
				connection.release();
			})
		})
	},

	update(req, res, next) {
		console.log(req.body);
		var name = req.body.name,
			sex = req.body.sex,
			age = req.body.age,
			number = req.body.number,
			money = req.body.money,
			type = req.body.type,
			rate = req.body.rate;
		pool.getConnection((err, connection) => {
			var sql = sqlMap.update;
			connection.query(sql, [name, sex, age, money, type, rate, number], (err, result) => {
				res.json(result);
				connection.release();
			})
		})
	},
	spend(req, res, next) {
		console.log(req.body);
		var number = req.body.number,
			money = req.body.money,
			amount = req.body.amount,
			time = req.body.time;
		pool.getConnection((err, connection) => {
			var sql = sqlMap.spend;
			connection.query(sql, [number, amount, 0, money, time], (err, result) => {
				res.json(result);
				connection.release();
			})
		})
	},

	charge(req, res, next) {
		console.log(req.body);
		var number = req.body.number,
			money = req.body.money,
			amount = req.body.amount,
			time = req.body.time;
		pool.getConnection((err, connection) => {
			var sql = sqlMap.charge;
			connection.query(sql, [number, 0, amount, money, time], (err, result) => {
				res.json(result);
				connection.release();
			})
		})
	},
	rdisplay(req, res, next) {
		console.log(req.body);
		pool.getConnection((err, connection) => {
			var sql = sqlMap.rdisplay;
			connection.query(sql, (err, result) => {
				res.json(result);
				connection.release();
			})
		})
	},
	checknum(req, res, next) {
		console.log(req.body);
		var number = req.query.number;
		pool.getConnection((err, connection) => {
			var sql = sqlMap.checknum;
			connection.query(sql,[number], (err, result) => {
				res.json(result);
				connection.release();
			})
		})
	},
}
