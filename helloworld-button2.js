
module.exports = function(RED) {
	function HelloWorldButton2(config) {
		RED.nodes.createNode(this,config);
		var node = this;
		this.timer = null;
		this.interval = parseInt(config.interval) ? parseInt(config.interval) : 1000;
		this.active = config.active;
		this.timer = setInterval(function() {
			if(node.active){
				node.send({payload:"hello world2"});
			}
		}.bind(this),this.interval);
	}
	RED.nodes.registerType("helloworld-button2",HelloWorldButton2);

	RED.httpAdmin.post("/helloworld-button2/:id/:state", RED.auth.needsPermission("helloworld-button2.write"), function(req,res) {
		var node = RED.nodes.getNode(req.params.id);
		var state = req.params.state;
		if (node !== null && typeof node !== "undefined" ) {
			if (state === "enable") {
				node.active = true;
				res.sendStatus(200);
			} else if (state === "disable") {
				node.active = false;
				res.sendStatus(201);
			} else {
				res.sendStatus(404);
			}
		} else {
			res.sendStatus(404);
		}
	});
}
