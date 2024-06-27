const jwt = require('jsonwebtoken');

const getJWT = (idUser = '') => {
    return new Promise((resolve, reject) => {
        const payload = { idUser };
        jwt.sign(payload, process.env.SECRETKEY, {
            expiresIn: '1d'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('Token no generado');
            } else {
                resolve(token);
            }
        })
    })
}

module.exports = {
    getJWT
}