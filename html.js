define(function()
{
	var fn = function (def, parent)
	{
		var node = document.createElement('div');
		node.className = "mdl-cell mdl-cell--4-col mdl-cell--stretch";
		//node.style = "container: 'flex', flexDirection: "+def.direction;
		console.log(JSON.stringify(def));
		node.innerHTML = def.text;
		return node;

	};
	fn.name = "html";
	return fn;
});