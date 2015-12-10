define("page",	function()
	{
		var fn = function(def, parent)
		{
			var node = document.createElement('div');
			node.className="mdl-grid";
			node.setAttribute('style', def.style);
			console.log('page style = '+def.style)
			node.style.height = "100%";
			node.style.flexDirection = def.direction || 'col';
			return node;
		};
		fn._name = "page";
		return fn;
	}
);