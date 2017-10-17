//导入所需模块
var mysql = require("mysql");

var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123123',
    database: 'slf',
    port: '3306',
});
//导出查询相关
var query = function (sql, callback) {
    pool.getConnection(function (err, conn) {
        if (err) {
            callback(err, null, null);
        } else {
            conn.query(sql, function (qerr, vals, fields) {
                //释放连接
                conn.release();
                //事件驱动回调
                callback(qerr, vals, fields);
            });
        }
    });
};

module.exports = query;