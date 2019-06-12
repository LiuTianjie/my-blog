var sqlMap = {
	getValue: 'SELECT * FROM 会员 WHERE 姓名=? or 卡号=?',
	setValue: 'INSERT INTO 会员 VALUES(?,?,?,?,?,?,?)',
	disPlay: 'SELECT * FROM 会员',
	update: 'UPDATE 会员 SET 姓名 = ?, 性别 = ?, 年龄=?, 余额=?, 类型=?,折扣=? WHERE 卡号 = ?',
	spend: 'INSERT INTO 消费表 VALUES(?,?,?,?,?)',
	charge: 'INSERT INTO 消费表 VALUES(?,?,?,?,?)',
	rdisplay:'SELECT * FROM 消费表',
	checknum:'SELECT * FROM 消费表 WHERE 卡号=?',
}

module.exports = sqlMap;
