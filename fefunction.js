define("fefunction",	function()
{
	var fn = function (def, parent)
	{
		def.in = function(msg)
		{
			var func = new Function('msg', def.func).bind(def);
			var rv = func(msg);
			def.out(rv);
		};
	};
	fn._name = "fefunction";
	return fn;
});