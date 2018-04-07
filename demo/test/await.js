// 异步测试
const fs = require('mz/fs');

it('test async function', function (done) {
    fs.readFile('./await.js', function (err, data) {
        if (err) {
            done(err);
        } else {
            done();
        }
    });
});