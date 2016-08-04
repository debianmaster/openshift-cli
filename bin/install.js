#! /usr/bin/env node
var download = function(filename, url) {
	var tmpFilePath = "assets/tmp/" + filename + ".zip"
	http.get(url, function(response) {
 		response.on('data', function (data) {
 			fs.appendFileSync(tmpFilePath, data)
		});
 		response.on('end', function() {
 			 var zip = new AdmZip(tmpFilePath)
 			 zip.extractAllTo("assets/extracted/" + filename)
 			 fs.unlink(tmpFilePath)
	 	})
 	});
}

download("https://github.com/openshift/origin/releases/download/v1.2.1/openshift-origin-client-tools-v1.2.1-5e723f6-mac.zip")