const sqlite3 = require('sqlite3').verbose();
const dbPath = 'path/to/your/database.sqlite';

// Kết nối đến cơ sở dữ liệu
const db = new sqlite3.Database(dbPath);

// Thực hiện truy vấn SELECT
db.all('SELECT * FROM your_table', (err, rows) => {
    if (err) {
        throw err;
    }

    // Xử lý dữ liệu rows ở đây

    // Đóng kết nối sau khi hoàn thành công việc
    db.close();
});
