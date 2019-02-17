const colors = require('colors');

exports.option = text => colors.bold.blue(text);
exports.result = text => colors.green(text);
exports.title = text => colors.green(text);
exports.information = text => colors.bold.red(text);
exports.prompt = text => colors.bold.cyan(text);
exports.graceless = text => colors.bold.grey(text);

