#! /usr/bin/env node
var shell = require("shelljs");
//console.log(process.platform,process.env.hasOwnProperty('ProgramFiles(x86)'));
process.argv.shift();
process.argv.shift();
shell.exec("./bin/oc_mac "+process.argv.join(" "));

