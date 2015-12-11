define(function()
{
	var fn = function (def, parent)
	{
		var node = document.createElement('div');
		node.className = "mdl-cell mdl-cell--4-col mdl-cell--stretch";
		var img = document.createElement('img');
		node.setAttribute('style', def.style);
		node.appendChild(img);
		//node.style = "container: 'flex', flexDirection: "+def.direction;
		console.log('settings img.src to '+def.image);
		img.src = def.image;
		console.log(JSON.stringify(def));
		return node;
	}
	fn._name = "image";
	return fn;
});