const pool = require("./config");

const select = async (query) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) throw err;
            connection.query("set_charset('utf8')");
            connection.query(query, (err, rows) => {
                connection.release();
                if (err) throw err;
                resolve(rows);
            });
        });
    });
};

const insert = async (tabla, campos, valores) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) throw err;
            
            connection.query(
                `insert into ${tabla} (${campos}) values (${valores});`,
                (err, rows) => {
                    connection.release();
                    if (err) throw err;
                    resolve("ok");
                }
            );
        });
    });
};

const update = async (tabla, campos, restricciones) => {
    if (tabla.length > 0 && campos.length > 0 && restricciones.length > 0) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) throw err;
                connection.query(
                    `update ${tabla} set ${campos} where ${restricciones};`,
                    (err, rows) => {
                        connection.release();
                        if (err) throw err;
                        resolve("ok");
                    }
                );
            });
        });
    } else {
        return "valores incompletos";
    }
};

const callsp = async (nombre, campos, ) => {
    if (nombre.length > 0 && campos.length > 0) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) throw err;
                connection.query(
                    `CALL ${nombre}(${campos});`,
                    (err, rows) => {
                        connection.release();
                        if (err) throw err;
                        resolve("ok");
                    }
                );
            });
        });
    } else {
        return "valores incompletos";
    }
};

module.exports = {
    select,
    insert,
    update,
    callsp
};
