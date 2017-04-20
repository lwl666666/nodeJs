function route(pathname,handle){
	console.log("router a request "+pathname);
	if(typeof handle[pathname] === "function"){
		return handle[pathname]();
	}else{
		console.log("No Request Found");
		return "404 not found"
	}
}
exports.route=route;