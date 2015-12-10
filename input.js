define(function()
{
	var fn = function (def, parent)
	{
		var node = document.createElement('input');
		node.className = "mdl-textfield__input";

		return node;
	};
	fn._name = "input";
	return fn;
});