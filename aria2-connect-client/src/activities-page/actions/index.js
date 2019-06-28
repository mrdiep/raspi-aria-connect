import path from 'path';
import fs from 'fs';
for(var file of fs.readdirSync(__dirname).filter(x => x.endsWith('.action.js'))) {
    module.exports[path.basename(file, '.js')] = require(path.join(__dirname, file));
}
