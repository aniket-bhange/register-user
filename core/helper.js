md5 = require('md5')


class Helpers{
    createHash(pwd){
        return md5(pwd)
    }
}

module.exports = new Helpers()