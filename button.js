define(function()
	{
		var fn = function(def, parent)
		{
			var node = document.createElement('button');
			def.node = node;

			node.className = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent";
			node.innerHTML = def.name;

			def.in = function(msg)
			{
				console.log('ohayoo - button got input message');
				console.dir(msg);
				node.innerHTML = msg.payload;
			};

			return node;
		};
		fn._name = "button";
		return fn;
	}
);