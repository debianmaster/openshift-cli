#! /usr/bin/env node
var fs = require('fs');
var request = require('request');
var unzip = require('unzip');
var url = "https://github.com/openshift/origin/releases/download/v1.2.1/openshift-origin-client-tools-v1.2.1-5e723f6-mac.zip";

if(process.platform!='darwin')
url = "https://github.com/openshift/origin/releases/download/v1.2.1/openshift-origin-client-tools-v1.2.1-5e723f6-windows.zip"

request(url).pipe(unzip.Extract({ path: 'assets/extracted' }));

console.log("\n\nThis module only works for mac/windows only.. for linux use yum install openshift-cli")
console.log("Detected "+process.platform+" Downloading client .. please wait...");
