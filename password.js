const { randomBytes, pbkdf2Sync } = require('crypto');

function generateHashSalt() {
    let password = "drey";
    let salt = randomBytes(32).toString('hex');
    let hash = pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    console.log('Salt:', salt);
    console.log('Hash:', hash);
    return { salt, hash };
}

generateHashSalt();
