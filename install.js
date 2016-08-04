#! /usr/bin/env node
var fs = require('fs');
var request = require('request');
var unzip = require('unzip');
var url = "https://github.com/openshift/origin/releases/download/v1.2.1/openshift-origin-client-tools-v1.2.1-5e723f6-mac.zip";

console.log("1");

if(process.platform!='darwin')
url = "https://github.com/openshift/origin/releases/download/v1.2.1/openshift-origin-client-tools-v1.2.1-5e723f6-windows.zip"

console.log("2");

request(url).pipe(unzip.Extract({ path: '.' }));

console.log("3");

console.log("\n\nThis module only works for mac/windows only.. for linux use yum install openshift-cli")
console.log("Detected "+process.platform+" Downloading client .. please wait...");
