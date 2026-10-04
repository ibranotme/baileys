#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const C = {
    reset:  '\x1b[0m',
    bright: '\x1b[1m',
    cyan:   '\x1b[36m',
    green:  '\x1b[32m',
    yellow: '\x1b[33m',
    white:  '\x1b[37m',
    gray:   '\x1b[90m'
};

let version = '7.0.1';
try {
    const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8'));
    version = pkg.version;
} catch (_) {}

const now = new Date();
const dd = String(now.getDate()).padStart(2, '0');
const mm = String(now.getMonth() + 1).padStart(2, '0');
const yyyy = now.getFullYear();
const updateDate = dd + '/' + mm + '/' + yyyy;

const line = '='.repeat(60);

console.log('');
console.log(C.cyan + line + C.reset);
console.log(C.cyan + '  +' + line + '+' + C.reset);
console.log(C.cyan + '  |' + ' '.repeat(58) + '|' + C.reset);
console.log(C.cyan + '  |' + C.reset + '        ' + C.yellow + C.bright + 'MONXINJIOFC BAILEYS' + C.reset + '                        ' + C.cyan + '|' + C.reset);
console.log(C.cyan + '  |' + ' '.repeat(58) + '|' + C.reset);
console.log(C.cyan + '  +' + line + '+' + C.reset);
console.log(C.cyan + line + C.reset);
console.log('');
console.log(C.bright + C.white + 'Information:' + C.reset);
console.log('  ' + C.gray + 'Developer' + C.reset + ' : ' + C.cyan + 'Monxinjiofc' + C.reset);
console.log('  ' + C.gray + 'Version' + C.reset + '   : ' + C.green + version + C.reset);
console.log('  ' + C.gray + 'Status' + C.reset + '    : ' + C.green + 'Baileys Berhasil Terinstall' + C.reset);
console.log('  ' + C.gray + 'Update' + C.reset + '    : ' + C.yellow + updateDate + C.reset);
console.log('');
console.log(C.bright + C.white + 'Follow Telegram Channel Untuk Update Information:' + C.reset);
console.log('  ' + C.cyan + 'https://t.me/updatebailmonxinjioffc' + C.reset);
console.log('');
console.log(C.cyan + line + C.reset);
console.log('  ' + C.green + '[OK]' + C.reset + ' ' + C.bright + 'Baileys v' + version + ' berhasil di-load' + C.reset);
console.log(C.cyan + line + C.reset);
console.log('');
