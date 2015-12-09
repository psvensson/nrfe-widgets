define("section",	function()
	{
		return function(def, parent)
		{
			var node = document.createElement('div');
			node.className = "mdl-cell mdl-cell--4-col mdl-cell--stretch";
			node.setAttribute('style',def.style);
			console.log('section style = '+def.style)
			return node;
		}
	}
);