var http=require("http");
var url=require("url");
function start(route,handle){
	console.log("Request received");
	function onRequest(request,response){
		var pathname=url.parse(request.url).pathname;
		console.log("URL pathname:"+pathname);
		var content=route(pathname,handle);
		response.writeHead(200,{"content-Type":"text/plain"});
		response.write(content);
		response.end();
		}
	http.createServer(onRequest).listen(8888);
	console.log("server has started");
}
exports.start=start;