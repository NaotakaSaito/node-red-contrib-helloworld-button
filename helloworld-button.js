
module.exports = function(RED) {
	var node;
	function HelloWorldButton(config) {
		RED.nodes.createNode(this,config);
		node = this;

	}
	RED.nodes.registerType("helloworld-button",HelloWorldButton);

	RED.httpAdmin.post("/helloworld-button/:id", RED.auth.needsPermission("helloworld-button.write"), function(req,res) {
		var addminNode = RED.nodes.getNode(req.params.id);
		if (addminNode != null) {
			try {
				addminNode.receive();
				node.send({payload:"hello world"});
				res.sendStatus(200);
			} catch(err) {
				res.sendStatus(500);
				addminNode.error(RED._("helloworld-button.failed",{error:err.toString()}));
			}
		} else {
			res.sendStatus(404);
		}
	});
}
