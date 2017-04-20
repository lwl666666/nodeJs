function start(){
	console.log("start request is called");
	return "Hello start";
}
function upload(){
	console.log("upload request is called");
	return "Hello upload";
}
exports.start=start;
exports.upload=upload;